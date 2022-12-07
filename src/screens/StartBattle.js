import {StyleSheet, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../components/header';
import EnemyStatsDisplay from '../components/EnemyStatsDisplay';
import EnemyDisplay from './EnemyDisplay';
import MainButton from '../components/buttons/MainButton';
import GoldDisplay from '../components/GoldDisplay';

const StartBattle = () => {
  return (
    <View style={styles.container}>
      <Header />
      <EnemyDisplay />
      <EnemyStatsDisplay />
      <View style={styles.bottomView}>
        <View style={styles.goldBox}>
          <GoldDisplay type={'gold'} />
        </View>
        <MainButton label={'Lutar'} />
      </View>
    </View>
  );
};

export default StartBattle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#11081A',
  },

  bottomView: {
    justifyContent: 'flex-end',
    flex: 1,
  },

  statIcon: {
    height: 50,
    width: 50,
  },

  goldBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  goldValue: {
    color: 'gold',
    fontSize: 24,
    fontWeight: '700',
  },
});
