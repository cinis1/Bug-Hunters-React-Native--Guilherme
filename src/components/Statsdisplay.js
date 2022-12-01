import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import swordImg from '../assets/images/icon-sword.png';
import shieldImg from '../assets/images/icon-shield.png';
import hpImg from '../assets/images/icon-heart.png';

const StatsDisplay = ({type}) => {
  const types = {
    atk: {
      label: 'Ataque',
      img: swordImg,
      value: 80,
    },
    def: {
      label: 'Defesa',
      img: shieldImg,
      value: 80,
    },
    hp: {
      label: 'Vida',
      img: hpImg,
      value: 80,
    },
    agi: {
      label: 'Agilidade',
      img: swordImg,
      value: 80,
    },
  };
  return (
    <View style={styles.statsBoxContent}>
      <View style={styles.statAndNameBox}>
        <Image
          resizeMode="contain"
          style={styles.statIcon}
          source={types[type].img}
        />
        <Text style={styles.statName}>{types[type].label}</Text>
      </View>
      <Text style={styles.statValue}>{types[type].value}</Text>
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
    justifyContent: 'space-between',
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
  },
  statValue: {
    color: 'white',
    fontSize: 20,
  },
  statAndNameBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
