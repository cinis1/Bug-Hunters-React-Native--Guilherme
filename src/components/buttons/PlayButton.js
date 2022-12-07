import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const PlayButton = ({navigation, address}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(`${address}`)}
      style={styles.playButton}>
      <Text style={styles.playButtonLabel}>{'>'}</Text>
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
