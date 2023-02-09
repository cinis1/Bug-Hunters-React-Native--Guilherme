import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useContext} from 'react';
import hpIcon from '../assets/images/icon-heart.png';
import {AuthContext} from '../contexts/AuthContext';

import bug1 from '../assets/images/character-bug-1.png';
import bug2 from '../assets/images/character-bug-2.png';
import bug3 from '../assets/images/character-bug-3.png';
import {BattleContext} from '../contexts/BattleContext';

const EnemyDisplay = () => {
  const {currentBug} = useContext(BattleContext);
  return (
    <View style={styles.container}>
      <View style={styles.hpView}>
        <Image source={hpIcon} resizeMode={'contain'} style={styles.icon} />
        <Text style={styles.hp}>{currentBug.hp}</Text>
      </View>
      <Image style={styles.image} resizeMode={'contain'} source={bug1} />
    </View>
  );
};

export default EnemyDisplay;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  hpView: {
    flexDirection: 'row',
    backgroundColor: 'rgba(72, 72, 72, 0.5)',
    height: 45,
    paddingVertical: 6,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
  },
  icon: {
    height: 25,
    width: 25,
    marginRight: 5,
  },
  hp: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 25,
  },
  image: {
    height: 125,
    width: 125,
  },
});
