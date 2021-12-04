import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tables from '../../pages/Tables/Tables';
import TableUpdate from '../../pages/Tables/TableUpdate';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

export default function TableStack({navigation}) {
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
        name="TablesPage"
        component={Tables}
        options={{
          headerTitle: 'Table',
        }}
      />
      <Stack.Screen
        name="TableUpdatePage"
        component={TableUpdate}
        options={{
          headerTitle: 'Table Uptade',
        }}
      />
    </Stack.Navigator>
  );
}
