import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {Component} from 'react';

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.goBackButton} />
        </View>
        <View style={styles.logoBox}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={require('../assets/images/logo.png')}
          />
          <Text style={styles.logoName}>Bug Hunters</Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.charInputMessage}>{'Entrar'}</Text>
          <TextInput
            placeholder="Nome do personagem"
            style={styles.charInputBox}
          />
        </View>
        <View style={styles.createCharButtonBox}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginbButtonLabel}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flex: 1,
  },
  logoBox: {
    flex: 10,
    alignItems: 'center',
  },
  inputBox: {
    flex: 20,
  },
  loginButtonBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  goBackButton: {
    borderRadius: 50,
    width: 40,
    height: 40,
    backgroundColor: '#2E2635',
    justifyContent: 'center',
  },
  logo: {
    width: 270,
    height: 135,
  },
  logoName: {
    color: 'white',
    fontSize: 32,
    fontWeight: '700',
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
  loginButton: {
    width: '100%',
    backgroundColor: '#EC2127',
    height: 48,
    borderRadius: 10,

    borderWidth: 1,
    marginTop: 5,
    justifyContent: 'center',
  },
  loginbButtonLabel: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    color: 'white',
    alignSelf: 'center',
  },
});
