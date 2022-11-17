import {StyleSheet, Text, SafeAreaView} from 'react-native';
import React from 'react';
import WelcomeScreen from './src/screens/WelcomeScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WelcomeScreen />
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
