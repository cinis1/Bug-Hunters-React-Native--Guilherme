import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../contexts/AuthContext';
import StatBox from './StatBox';
import {BattleContext} from '../contexts/BattleContext';

const EnemyStatsDisplay = () => {
  const {currentBug} = useContext(BattleContext);

  return (
    <View style={styles.enemyStatsBox}>
      <StatBox stat={'hp'} value={currentBug?.hp} />
      <StatBox stat={'atk'} value={currentBug?.atk} />
      <StatBox stat={'def'} value={currentBug?.def} />
      <StatBox stat={'agi'} value={currentBug?.agi} />
    </View>
  );
};
export default EnemyStatsDisplay;

const styles = StyleSheet.create({
  enemyStatsBox: {
    width: '100%',
    marginTop: 40,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
