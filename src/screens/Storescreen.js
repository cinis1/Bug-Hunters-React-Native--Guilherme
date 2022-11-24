import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const StoreScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text>{'<'}</Text>
        </TouchableOpacity>
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require('../assets/images/logo.png')}
        />
      </View>
    </View>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  backButton: {
    position: 'absolute',
    left: 0,
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2E2635',
  },

  logo: {
    height: 100,
    width: 100,
  },
});
