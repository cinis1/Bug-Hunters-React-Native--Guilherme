import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import PlayButton from './buttons/PlayButton';
import goldImage from '../assets/images/gold.png';

const QuestBox = ({navigation, name, reward}) => {
  return (
    <View style={styles.questBox}>
      <Text style={styles.questName}>{name}</Text>
      <View style={styles.contentBox}>
        <View style={styles.goldBox}>
          <Image
            resizeMode="contain"
            style={styles.goldIcon}
            source={goldImage}
          />
          <Text style={styles.goldValue}>{reward}</Text>
        </View>
        <PlayButton navigation={navigation} />
      </View>
    </View>
  );
};

export default QuestBox;

const styles = StyleSheet.create({
  questBox: {
    marginTop: 10,
    backgroundColor: '#2E2635',
    width: '100%',
    height: 125,
    borderRadius: 10,
    padding: 15,
    paddingTop: 20,
  },
  questName: {
    fontWeight: '700',
    fontSize: 25,
    color: 'white',
    marginBottom: 10,
  },
  contentBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  goldBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  goldIcon: {
    height: 50,
    width: 70,
  },
  goldValue: {
    fontSize: 25,
    color: 'gold',
    marginLeft: 10,
    fontWeight: '700',
  },
});
