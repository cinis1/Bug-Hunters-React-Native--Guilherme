import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';

import HomeScreen from '../src/screens/HomeScreen';
import StoreScreen from '../src/screens/StoreScreen';
import QuestsScreen from '../src/screens/QuestsScreen';
import StartBattle from '../src/screens/StartBattle';
import Battle from '../src/screens/Battle';
import EquipmentScreen from '../src/screens/EquipmentScreen';

const AppStack = createNativeStackNavigator();

const AppScreens = () => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen name="Home" component={HomeScreen} />
      <AppStack.Screen name="Store" component={StoreScreen} />
      <AppStack.Screen name="Quests" component={QuestsScreen} />
      <AppStack.Screen name="Start" component={StartBattle} />
      <AppStack.Screen name="Battle" component={Battle} />
      <AppStack.Screen name="Equipment" component={EquipmentScreen} />
    </AppStack.Navigator>
  );
};

export default AppScreens;
