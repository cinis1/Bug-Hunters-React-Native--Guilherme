import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import frontendImg from '../../assets/images/cross.png';
import mobileImg from '../../assets/images/helmet.png';
import backendImg from '../../assets/images/boat.png';

const types = {
  Frontend: {
    color: '#38116A',
    label: 'Frontend',
    img: frontendImg,
  },
  Mobile: {
    color: '#132109',
    label: 'Mobile',
    img: mobileImg,
  },
  Backend: {
    color: '#402A07',
    label: 'Backend',
    img: backendImg,
  },
};

const FactionButton = ({type, onPress, isSelected}) => {
  const thisColor = types[type].color;
  return (
    <TouchableOpacity
      style={[
        styles.factionButton,
        {
          borderColor: types[type].color,
          backgroundColor: isSelected ? thisColor : 'transparent',
        },
      ]}
      onPress={onPress}>
      <Image style={styles.factionImg} source={types[type].img} />
      <Text style={styles.factionButtonLabel}>{types[type].label}</Text>
    </TouchableOpacity>
  );
};

export default FactionButton;

const styles = StyleSheet.create({
  factionButtonLabel: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center',
  },
  factionButton: {
    borderWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 136,
    width: 110,
    borderRadius: 15,
    padding: 15,
  },
  factionImg: {
    height: 52,
    width: 56,
  },
});
