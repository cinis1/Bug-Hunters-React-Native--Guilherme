import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const WelcomeHeader = ({marginTop = 0, marginBottom = 0}) => {
  return (
    <View>
      <Image
        style={[
          styles.logo,
          {marginTop: marginTop},
          {marginBottom: marginBottom},
        ]}
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
    alignSelf: 'center',
  },
  logoName: {
    color: 'white',
    fontSize: 32,
    fontWeight: '700',
    alignSelf: 'center',
  },
});
