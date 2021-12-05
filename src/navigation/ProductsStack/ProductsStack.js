import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from '../../pages/Product/Products';
import ProductDetail from '../../pages/Product/ProductDetail';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

export default function ProductsStack({navigation}) {
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
        name="ProductsPage"
        component={Products}
        options={{
          headerTitle: 'Products',
        }}
      />
      <Stack.Screen
        name="ProductsDetailPage"
        component={ProductDetail}
        options={{
          headerTitle: 'Product Detail',
        }}
      />
    </Stack.Navigator>
  );
}
