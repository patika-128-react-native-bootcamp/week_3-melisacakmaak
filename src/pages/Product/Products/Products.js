import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import ProductCard from '../../../components/cards/ProductCard/ProductCard';
import mockData from '../../../MOCK_DATA.json';

export default function Products() {
  const navigation = useNavigation();

  function selectProduct(selectedProduct) {
    navigation.navigate('ProductsDetailPage', {product: selectedProduct});
  }

  const renderProduct = ({item}) => (
    <ProductCard item={item} onSelect={() => selectProduct(item)} />
  );

  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={item => item.p_id}
        data={mockData.products}
        renderItem={renderProduct}
      />
    </SafeAreaView>
  );
}
