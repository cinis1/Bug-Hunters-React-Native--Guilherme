import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const WelcomeHeader = () => {
  return (
    <View>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require('../assets/images/logo.png')}
      />

      <Text style={styles.logoName}>Bug Hunters</Text>
    </View>
  );
};

export default WelcomeHeader;

const styles = StyleSheet.create({
  logo: {
    width: 270,
    height: 135,
  },
  logoName: {
    color: 'white',
    fontSize: 32,
    fontWeight: '700',
    alignSelf: 'center',
  },
});
