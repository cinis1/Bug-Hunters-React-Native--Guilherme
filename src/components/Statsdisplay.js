import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import swordImg from '../assets/images/icon-sword.png';
import shieldImg from '../assets/images/icon-shield.png';
import hpImg from '../assets/images/icon-heart.png';
import agiImg from '../assets/images/icon-agility.png';

const StatsDisplay = ({type, value}) => {
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
    <View style={styles.statsBoxContent}>
      <Image
        resizeMode="contain"
        style={styles.statIcon}
        source={types[type].img}
      />
      <Text style={styles.statName}>{types[type].label}</Text>

      <Text style={styles.statValue}>{value}</Text>
    </View>
  );
};

export default StatsDisplay;

const styles = StyleSheet.create({
  statsBoxContent: {
    height: 40,
    borderTopWidth: 1,
    borderColor: '#11081A',
    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 15,
  },
  statIcon: {
    height: 20,
    width: 20,
  },
  statName: {
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
    fontWeight: '600',
    flex: 1,
    fontFamily: 'Poppins-Regular',
  },
  statValue: {
    color: '#3BDA5E',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
  },
});
