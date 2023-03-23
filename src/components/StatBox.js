import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import swordImg from '../assets/images/icon-sword.png';
import shieldImg from '../assets/images/icon-shield.png';
import hpImg from '../assets/images/icon-heart.png';
import agiImg from '../assets/images/icon-agility.png';

const StatBox = ({stat, value}) => {
  const types = {
    atk: {
      label: 'Ataque',
      img: swordImg,
    },
    def: {
      label: 'Defesa',
      img: shieldImg,
    },
    hp: {
      label: 'Vida',
      img: hpImg,
    },
    agi: {
      label: 'Agilidade',
      img: agiImg,
    },
  };
  return (
    <View style={styles.statsBox}>
      <Image
        resizeMode="contain"
        source={types[stat].img}
        style={styles.statIcon}
      />
      <Text style={styles.statValue}>{value}</Text>
    </View>
  );
};

export default StatBox;

const styles = StyleSheet.create({
  statsBox: {
    height: 80,
    width: 58,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statIcon: {
    height: 55,
    width: 55,
    marginBottom: 10,
  },
  statValue: {
    color: 'white',
    fontWeight: '900',
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
  },
});
