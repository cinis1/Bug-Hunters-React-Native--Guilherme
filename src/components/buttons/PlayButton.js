import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const PlayButton = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Start')}
      style={styles.playButton}>
      <Icon name="play" size={30} color={'white'} />
    </TouchableOpacity>
  );
};

export default PlayButton;

const styles = StyleSheet.create({
  playButton: {
    backgroundColor: '#EC2127',
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
