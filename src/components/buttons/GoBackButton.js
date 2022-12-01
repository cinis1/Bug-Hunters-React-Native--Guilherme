import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const GoBackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.backButton}>
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
