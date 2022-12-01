import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import goldImg from '../assets/images/coin.png';

const NameAndGoldDisplay = () => {
  return (
    <View style={styles.infoBoxHeader}>
      <View style={styles.charNameView}>
        <Text style={styles.charNameDisplay}>Caneta Azul</Text>
      </View>
      <View style={styles.goldDisplayBox}>
        <Image resizeMode="contain" style={styles.goldIcon} source={goldImg} />
        <Text style={styles.goldDisplay}>80</Text>
      </View>
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
  goldIcon: {
    height: 20,
    width: 20,
  },
});
