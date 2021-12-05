import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/core';
import {SafeAreaView, Text, View} from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import styles from './CreateMenu.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CreateMenu() {
  const navigation = useNavigation();
  const route = useRoute();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [ingredients, setIngredients] = useState();
  const [price, setPrice] = useState();

  function handleNavigateDetail() {
    const food = {
      name,
      description,
      ingredients,
      price,
    };

    navigation.navigate('MenuDetailPage', {food});
  }

  function goBack() {
    navigation.goBack();
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Icon
          name="arrow-left-bold-circle"
          size={40}
          color="black"
          onPress={goBack}
        />
        <Text style={styles.menu_name}>{route.params.menu.name}</Text>
      </View>
      <Input label="Name" onChangeText={setName} />
      <Input label="Description" onChangeText={setDescription} />
      <Input label="Ingredients" onChangeText={setIngredients} />
      <Input label="Price" onChangeText={setPrice} />
      <Button title="Apply Food" onPress={handleNavigateDetail} />
    </SafeAreaView>
  );
}
