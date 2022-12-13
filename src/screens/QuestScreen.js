import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import QuestBox from '../components/QuestBox';
const QuestScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.titleView}>
        <Text style={styles.title}>Quests</Text>
      </View>
      <View style={styles.questBoard}>
        <QuestBox navigation={navigation} address="Start" />
        <QuestBox navigation={navigation} address="Start" />
        <QuestBox navigation={navigation} address="Start" />
      </View>
    </View>
  );
};

export default QuestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#11081A',
  },

  titleView: {
    marginBottom: 10,
  },

  title: {
    fontWeight: '700',
    fontSize: 32,
    color: 'white',
  },
  questBoard: {
    flex: 1,
  },
});
