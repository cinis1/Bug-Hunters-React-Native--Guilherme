import {Text, StyleSheet, View, TextInput} from 'react-native';
import React, {Component} from 'react';
import WelcomeHeader from '../components/WelcomeHeader';
import GoBackButton from '../components/buttons/GoBackButton';
import MainButton from '../components/buttons/MainButton';
const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <GoBackButton navigation={navigation} />
      </View>
      <View>
        <WelcomeHeader />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.charInputMessage}>{'Entrar'}</Text>
        <TextInput
          placeholder="Nome do personagem"
          style={styles.charInputBox}
        />
      </View>
      <View style={styles.createCharButtonBox}>
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
  logoBox: {
    flex: 10,
    alignItems: 'center',
  },
  inputBox: {
    flex: 20,
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
  charInputBox: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    height: 40,
    color: '#858585',
    backgroundColor: '#D9D9D9',
    alignContent: 'center',
    paddingHorizontal: 10,
  },
});
export default LoginScreen;
