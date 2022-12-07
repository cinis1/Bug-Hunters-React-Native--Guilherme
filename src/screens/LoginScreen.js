import {StyleSheet, View} from 'react-native';
import React from 'react';
import WelcomeHeader from '../components/WelcomeHeader';
import GoBackButton from '../components/buttons/GoBackButton';
import MainButton from '../components/buttons/MainButton';
import Input from '../components/Input';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <GoBackButton navigation={navigation} />
      </View>
      <View>
        <WelcomeHeader />
      </View>
      <View style={styles.inputBox} />
      <Input message={'Entrar'} />

      <View style={styles.loginButtonBox}>
        <MainButton
          type="primary"
          label="Entrar"
          navigation={navigation}
          address="Home"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#11081A',
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

  charInputMessage: {
    color: 'white',
    fontSize: 40,
    fontWeight: '700',
    paddingBottom: 30,
  },
});
export default LoginScreen;
