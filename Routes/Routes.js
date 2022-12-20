import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';

import AuthScreens from './AuthScreens';
import AppScreens from './AppScreens';

const RoutesStack = createNativeStackNavigator();

const Routes = () => {
  return (
    <RoutesStack.Navigator>
      <RoutesStack.Screen
        name="Auth"
        component={AuthScreens}
        options={{headerShown: false}}
      />
      <RoutesStack.Screen
        name="App"
        component={AppScreens}
        options={{headerShown: false}}
      />
    </RoutesStack.Navigator>
  );
};

export default Routes;
