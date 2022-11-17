import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../assets/images/logo.png')}
        />

        <Text style={styles.logoName}>Bug Hunters</Text>
      </View>

      <View style={styles.middle}>
        <Text style={styles.welcomeMessage}>
          {'Bem-vindo\n'}
          <Text style={styles.welcomeMessageFragment}>Caçador!</Text>
        </Text>
        <Text style={styles.appDescription}>
          Enfrete os bugs mais assustadores que você consegui encontrar e ganhe
          as melhores recompensar!
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flex: 1,
    alignItems: 'center',
  },
  middle: {
    flex: 1,
    alignItems: 'center',
  },
  bottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  image: {
    width: 270,
    height: 135,
  },
  logoName: {
    color: 'white',
    fontSize: 32,
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
  },
  buttonLabel: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    color: 'white',
    alignSelf: 'center',
  },
});
