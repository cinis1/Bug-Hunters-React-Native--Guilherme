import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import WelcomeHeader from '../components/WelcomeHeader';
import MainButton from '../components/buttons/MainButton';

const WelcomeScreen = ({navigation}) => {
  const navigateToCreateChar = () => {
    navigation.navigate('Create');
  };
  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
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
            Enfrete os bugs mais assustadores que você conseguir encontrar e
            ganhe as melhores recompensas!
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
    lineHeight: 45,
    fontFamily: 'Poppins-Regular',
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
    fontFamily: 'Poppins-Regular',
  },
});
export default WelcomeScreen;
