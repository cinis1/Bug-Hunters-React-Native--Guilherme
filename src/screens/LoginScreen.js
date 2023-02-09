import {StyleSheet, View, SafeAreaView} from 'react-native';
import React, {useContext} from 'react';
import WelcomeHeader from '../components/WelcomeHeader';
import GoBackButton from '../components/buttons/GoBackButton';
import MainButton from '../components/buttons/MainButton';
import Input from '../components/Input';
import axios from 'axios';
import {AuthContext} from '../contexts/AuthContext';

const LoginScreen = ({navigation}) => {
  const {isLoading, authentication, characterName, setCharacterName} =
    useContext(AuthContext);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <GoBackButton navigation={navigation} />
        </View>
        <View>
          <WelcomeHeader />
        </View>
        <View style={styles.inputBox} />
        <Input
          message={'Entrar'}
          name={characterName}
          setName={setCharacterName}
        />

        <View style={styles.loginButtonBox}>
          <MainButton
            label="Entrar"
            navigation={navigation}
            onPress={authentication}
            isLoading={isLoading}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#11081A',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    height: 50,
  },

  inputBox: {
    marginTop: 40,
  },
  loginButtonBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
export default LoginScreen;
