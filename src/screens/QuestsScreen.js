import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import QuestBox from '../components/QuestBox';
import axios from 'axios';

const QuestsScreen = ({navigation}) => {
  const [quests, setQuests] = useState([]);
  useEffect(() => {
    getQuests();
  }, []);

  const getQuests = async () => {
    const response = await axios.get(
      'https://dws-bug-hunters-api.vercel.app/api/tasks',
    );
    setQuests(response.data);
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.titleView}>
        <Text style={styles.title}>Quests</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.questBoard}
        data={quests}
        extraData={quests}
        renderItem={({item}) => (
          <QuestBox
            navigation={navigation}
            name={item.name}
            reward={item.reward}
          />
        )}
      />
    </View>
  );
};

export default QuestsScreen;

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
    paddingBottom: 20,
  },
});
