import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import PlayButton from './buttons/PlayButton';

const QuestBox = ({navigation, address}) => {
  return (
    <View style={styles.questBox}>
      <Text style={styles.questName}>Gehrman</Text>
      <View style={styles.contentBox}>
        <View style={styles.goldBox}>
          <Image
            resizeMode="contain"
            style={styles.goldIcon}
            source={require('../assets/images/gold.png')}
          />
          <Text style={styles.goldValue}>666</Text>
        </View>
        <PlayButton navigation={navigation} address={address} />
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
