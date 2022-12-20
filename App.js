import {StyleSheet, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import CharCreateScreen from './src/screens/CharCreateScreen';

import StoreScreen from './src/screens/StoreScreen';
import QuestsScreen from './src/screens/QuestsScreen';
import StartBattle from './src/screens/StartBattle';
import HomeScreen from './src/screens/HomeScreen';
const AuthStack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <AuthStack.Navigator screenOptions={{headerShown: false}}>
          <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
          <AuthStack.Screen name="Create" component={CharCreateScreen} />
          <AuthStack.Screen name="Login" component={LoginScreen} />
          <AuthStack.Screen name="Home" component={HomeScreen} />
          <AuthStack.Screen name="Store" component={StoreScreen} />
          <AuthStack.Screen name="Quests" component={QuestsScreen} />
          <AuthStack.Screen name="Start" component={StartBattle} />
        </AuthStack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#11081A',
  },
});
