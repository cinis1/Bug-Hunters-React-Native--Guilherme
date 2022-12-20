import {StyleSheet, SafeAreaView} from 'react-native';

import AuthProvider from './src/contexts/AuthContext';
import React from 'react';

import Routes from './Routes';

const App = () => {
  return (
    <SafeAreaView styles={styles.container}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
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
