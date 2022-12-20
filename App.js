import AuthProvider from './src/contexts/AuthContext';
import React from 'react';

import Routes from './Routes/Routes';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
