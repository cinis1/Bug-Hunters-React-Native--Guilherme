import {StyleSheet, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import ScreenButton from '../components/buttons/ScreenButton';
import StatsDisplay from '../components/Statsdisplay';
import NameAndGoldDisplay from '../components/NameAndGoldDisplay';

const CharacterInformation = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.charInfoBox}>
        <NameAndGoldDisplay message={'Caneta Azul'} type={'coin'} />
        <View style={styles.statsBox}>
          <StatsDisplay type="hp" />
          <StatsDisplay type="atk" />
          <StatsDisplay type="def" />
          <StatsDisplay type="agi" />
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
export default CharacterInformation;
