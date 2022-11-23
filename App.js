import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import CharCreateScreen from './src/screens/CharCreateScreen';
import CharacterInformation from './src/screens/CharacterInformation';
import Sla from './src/screens/Sla';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CharacterInformation />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#11081A',
  },
});
