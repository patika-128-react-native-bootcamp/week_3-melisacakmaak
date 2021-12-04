import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Menu from '../../pages/Menu/Menu';
import MenuDetail from '../../pages/Menu/MenuDetail';
import CreateMenu from '../../pages/Menu/CreateMenu';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

export default function MenuStack({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: '300',
        },

        headerBackTitleVisible: false,
        headerLeft: () => (
          <Icon
            name="view-headline"
            color="#ab47bc"
            size={24}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}>
      <Stack.Screen
        name="MenuPage"
        component={Menu}
        options={{
          headerTitle: 'Menu',
        }}
      />
      <Stack.Screen
        name="CreateMenuPage"
        component={CreateMenu}
        options={{
          headerTitle: 'Create Menu',
        }}
      />
      <Stack.Screen
        name="MenuDetailPage"
        component={MenuDetail}
        options={{
          headerTitle: 'Menu Detail',
        }}
      />
    </Stack.Navigator>
  );
}
