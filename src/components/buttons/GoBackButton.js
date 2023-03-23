import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const GoBackButton = ({logOut = false}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        logOut ? navigation.navigate('Welcome') : navigation.goBack()
      }
      style={styles.backButton}>
      <Icon name={logOut ? 'login' : 'arrow-left'} size={25} color={'white'} />
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
