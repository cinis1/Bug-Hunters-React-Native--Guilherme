import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GoldDisplay from './GoldDisplay';

const NameAndGoldDisplay = ({message, type, goldValue}) => {
  return (
    <View style={styles.infoBoxHeader}>
      <View style={styles.charNameView}>
        <Text style={styles.charNameDisplay}>{message}</Text>
      </View>
      <GoldDisplay type={type} goldValue={goldValue} />
    </View>
  );
};

export default NameAndGoldDisplay;

const styles = StyleSheet.create({
  charNameDisplay: {
    color: 'white',
    fontSize: 32,
    fontWeight: '700',
  },

  infoBoxHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  goldDisplayBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  goldDisplay: {
    fontSize: 24,
    fontWeight: '700',
    color: 'gold',
    marginLeft: 10,
  },
  coinIcon: {
    height: 20,
    width: 20,
  },
});
