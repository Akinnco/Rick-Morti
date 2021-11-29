import React, {useEffect, useState, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import axios from 'react-native-axios';
import {apiUrl} from './src/apis/apiurl';

import ListScreen from './src/screens/ListScreen';
import DetailScreen from './src/screens/DetailScreen';
import Character from './src/screens/Character';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="ListScreen">
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="Character" component={Character} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
