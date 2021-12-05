import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './TableCard.style';

export default function MenuCard({item, onSelect}) {
  const tableColor = item.isActive ? '#519657' : '#c2c2c2';
  const tableLabel = item.isActive ? '#519657' : '#c2c2c2';

  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={[styles.container, {borderColor: tableColor}]}>
        <View style={styles.image}>
          {item.orders.map((order, i) => (
            <Text key={i} style={styles.order}>
              ⏺ {order.name}
            </Text>
          ))}
        </View>
        <View style={[styles.name_container, {backgroundColor: tableLabel}]}>
          <Text style={styles.name_label}>{item.name}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
