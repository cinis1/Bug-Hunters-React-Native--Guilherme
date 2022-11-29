import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const GoBackButton = () => {
  return (
    <TouchableOpacity style={styles.backButton}>
      <Text>{'<'}</Text>
    </TouchableOpacity>
  );
};

export default GoBackButton;

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    left: 0,
    borderRadius: 25,
    width: 50,
    height: 50,
    backgroundColor: '#2E2635',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
