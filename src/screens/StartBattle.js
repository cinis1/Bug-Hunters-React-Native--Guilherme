import {StyleSheet, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import EnemyStatsDisplay from '../components/EnemyStatsDisplay';
import EnemyDisplay from '../components/EnemyDisplay';
import MainButton from '../components/buttons/MainButton';
import GoldDisplay from '../components/GoldDisplay';
import axios from 'axios';

const StartBattle = () => {
  const [bugs, setBugs] = useState({});

  useEffect(() => {
    getBugs();
  }, []);

  const getBugs = async () => {
    const response = await axios.get(
      'https://dws-bug-hunters-api.vercel.app/api/tasks',
    );
    setBugs(response.data[1].bugs[0]);
  };

  return (
    <View style={styles.container}>
      <Header />
      <EnemyDisplay name={bugs.name} />
      <EnemyStatsDisplay enemy={bugs} />
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
