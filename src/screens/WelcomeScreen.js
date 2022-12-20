import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import WelcomeHeader from '../components/WelcomeHeader';
import MainButton from '../components/buttons/MainButton';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const WelcomeScreen = ({navigation}) => {
  const navigateToCreateChar = () => {
    navigation.navigate('Create');
  };
  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <WelcomeHeader />
      </View>
      <View style={styles.middle}>
        <Text style={styles.welcomeMessage}>
          {'Bem-vindo\n'}
          <Text style={styles.welcomeMessageFragment}>Caçador!</Text>
        </Text>
        <Text style={styles.appDescription}>
          Enfrete os bugs mais assustadores que você conseguir encontrar e ganhe
          as melhores recompensas!
        </Text>
      </View>
      <View style={styles.bottom}>
        <MainButton
          type="primary"
          label="Nova aventura"
          navigation={navigation}
          onPress={navigateToCreateChar}
        />

        <MainButton
          type="secondary"
          label="Continuar aventura"
          marginTop={10}
          navigation={navigation}
          onPress={navigateToLogin}
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
    alignItems: 'center',
  },
  middle: {
    flex: 1,
    top: '15%',
    alignItems: 'center',
  },
  bottom: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  welcomeMessage: {
    color: 'white',
    fontWeight: '400',
    fontSize: 40,
    textAlign: 'center',
  },
  welcomeMessageFragment: {
    fontWeight: '700',
  },
  appDescription: {
    color: '#858585',
    fontWeight: '400',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
});
export default WelcomeScreen;
