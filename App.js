import AuthProvider from './src/contexts/AuthContext';
import React from 'react';

import Routes from './Routes/Routes';
import {NavigationContainer} from '@react-navigation/native';
import BattleProvider from './src/contexts/BattleContext';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <BattleProvider>
          <Routes />
        </BattleProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
