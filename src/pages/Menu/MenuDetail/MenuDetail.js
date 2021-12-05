import {useRoute} from '@react-navigation/core';
import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import styles from './MenuDetail.styles';

export default function MenuDetail() {
  const route = useRoute();
  const {food} = route.params;

  const renderIngredients = item => {
    return (
      <View style={styles.badge_container} key={item}>
        <Text style={styles.badge_label}>{item}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.label}>Name: {food.name}</Text>
        <Text style={styles.label}>Description: {food.description}</Text>
        <Text style={styles.label}>Price: {food.price}</Text>
        <Text style={styles.label}>Ingredients:</Text>
        <View style={styles.ingredients}>
          {food.ingredients.split(',').map(renderIngredients)}
        </View>
      </View>
    </SafeAreaView>
  );
}
