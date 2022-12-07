import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import GoBackButton from './buttons/GoBackButton';
const Header = () => {
  return (
    <View style={styles.header}>
      <GoBackButton />
      <Image
        resizeMode="contain"
        style={styles.logo}
        source={require('../assets/images/logo.png')}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 100,
    width: 100,
  },
});
