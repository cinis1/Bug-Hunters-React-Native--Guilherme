import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BattleLogBox = ({item}) => {
  return (
    <View
      style={[
        styles.box,
        {alignItems: item.character === 'player' ? 'baseline' : 'flex-end'},
      ]}>
      <Text
        style={[
          styles.info,
          {
            color: item.character === 'player' ? '#3BDA5E' : '#EC2127',
          },
        ]}>
        {item.character === 'player' ? 'você - ' : 'inimigo - '} {item.time}
      </Text>
      <Text style={styles.log}>{item.log}</Text>
    </View>
  );
};

export default BattleLogBox;

const styles = StyleSheet.create({
  info: {
    fontSize: 10,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
  log: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    fontWeight: '500',
  },
  box: {
    opacity: 1,
    backgroundColor: 'rgba(48, 48, 48, 0.5)',
    height: 50,
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
    justifyContent: 'space-evenly',
  },
});
