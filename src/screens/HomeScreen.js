import {StyleSheet, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import ScreenButton from '../components/buttons/ScreenButton';
import StatsDisplay from '../components/Statsdisplay';
import NameAndGoldDisplay from '../components/NameAndGoldDisplay';
import axios from 'axios';

const HomeScreen = ({navigation}) => {
  const [char, setChar] = useState({});
  useEffect(() => {
    getCharacter();
  }, []);
  const getCharacter = async () => {
    const response = await axios.get(
      'https://dws-bug-hunters-api.vercel.app/api/characters',
    );
    const character = response.data.find(item => item.name === 'homelander');
    setChar(character);
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.charInfoBox}>
        <NameAndGoldDisplay
          message={char.name}
          type={'coin'}
          goldValue={char.gold}
        />
        <View style={styles.statsBox}>
          <StatsDisplay type="hp" value={char.hp} />
          <StatsDisplay type="atk" value={char.atk} />
          <StatsDisplay type="def" value={char.def} />
          <StatsDisplay type="agi" value={char.agi} />
        </View>
      </View>
      <View style={styles.navigationBox}>
        <ScreenButton navigation={navigation} marginBottom={30} type="store" />
        <ScreenButton navigation={navigation} type="quests" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#11081A',
  },

  charInfoBox: {
    flex: 1,
    width: '100%',
  },
  navigationBox: {
    flex: 1,

    justifyContent: 'flex-end',
  },
  statsBox: {
    width: '100%',
    backgroundColor: '#2E2635',
    borderRadius: 10,
  },
});
export default HomeScreen;
