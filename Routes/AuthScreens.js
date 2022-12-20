import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';

import WelcomeScreen from '../src/screens/WelcomeScreen';
import CharCreateScreen from '../src/screens/CharCreateScreen';
import LoginScreen from '../src/screens/LoginScreen';

const AuthStack = createNativeStackNavigator();

const AuthScreens = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
      <AuthStack.Screen name="Create" component={CharCreateScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthScreens;
