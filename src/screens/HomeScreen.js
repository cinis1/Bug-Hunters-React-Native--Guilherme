import {StyleSheet, View, SafeAreaView} from 'react-native';
import React, {useContext} from 'react';
import Header from '../components/Header';
import ScreenButton from '../components/buttons/ScreenButton';
import StatsDisplay from '../components/Statsdisplay';
import NameAndGoldDisplay from '../components/NameAndGoldDisplay';

import {AuthContext} from '../contexts/AuthContext';
import HomeCharDisplay from '../components/HomeCharDisplay';

const HomeScreen = ({navigation}) => {
  const {char, charStats, setCharStats} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header logOut={true} />
        <View style={styles.charInfoBox}>
          <HomeCharDisplay />
          <View style={styles.statsBox}>
            <StatsDisplay type="hp" value={charStats.hp} />
            <StatsDisplay type="atk" value={charStats.atk} />
            <StatsDisplay type="def" value={charStats.def} />
            <StatsDisplay type="agi" value={charStats.agi} />
          </View>
        </View>
        <View style={styles.navigationBox}>
          <ScreenButton
            navigation={navigation}
            marginBottom={30}
            type="equipment"
          />
          <ScreenButton
            navigation={navigation}
            marginBottom={30}
            type="store"
          />
          <ScreenButton navigation={navigation} type="quests" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#11081A',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
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
