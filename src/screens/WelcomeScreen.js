import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import WelcomeHeader from '../components/WelcomeHeader';

const WelcomeScreen = () => {
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
        <TouchableOpacity style={styles.newAdventureButton}>
          <Text style={styles.buttonLabel}>Nova aventura</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.continueAdventureButton}>
          <Text style={styles.buttonLabel}>Continuar aventura</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  newAdventureButton: {
    justifyContent: 'center',
    backgroundColor: '#EC2127',
    height: 48,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  continueAdventureButton: {
    width: '100%',
    backgroundColor: '#11081A',
    height: 48,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    color: 'white',
  },
});
export default WelcomeScreen;
