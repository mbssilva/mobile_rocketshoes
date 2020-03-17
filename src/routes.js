import React from 'react';
import { Text, View, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from './assets/logo.png';

import Home from './pages/Home';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

const screenOptions = {
  headerTitle: null,
  headerStyle: {
    backgroundColor: '#191920',
  },
  // headerTintColor: '#fff',
  // headerTitleStyle: {
  //   fontWeight: 'bold',
  // },
  // headerTitleAlign: 'center',
  // // headerBackTitleVisible: false,
};

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="screen">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: () => <Text>Oi</Text>,
          }}
        />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
