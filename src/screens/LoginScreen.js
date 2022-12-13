import {StyleSheet, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import WelcomeHeader from '../components/WelcomeHeader';
import GoBackButton from '../components/buttons/GoBackButton';
import MainButton from '../components/buttons/MainButton';
import Input from '../components/Input';
import axios from 'axios';

const LoginScreen = ({navigation}) => {
  const [characterName, setCharacterName] = useState('');

  const authentication = async () => {
    const response = await axios.get(
      'https://dws-bug-hunters-api.vercel.app/api/characters',
    );
    const character = response.data.find(item => item.name === characterName);

    if (character === null || character === undefined) {
      console.log('Character not found');
    } else {
      navigation.navigate('Home');
    }
  };

  return (
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
