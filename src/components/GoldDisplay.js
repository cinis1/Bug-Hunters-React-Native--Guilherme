import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import coinIcon from '../assets/images/coin.png';
import goldIcon from '../assets/images/gold.png';

const types = {
  coin: {
    icon: coinIcon,
    style: 'coinIcon',
    height: 20,
    width: 20,
  },
  gold: {
    icon: goldIcon,
    height: 50,
    width: 50,
  },
};

const GoldDisplay = ({type}) => {
  return (
    <View style={styles.goldDisplayBox}>
      <Image
        resizeMode="contain"
        style={[{height: types[type].height, width: types[type].width}]}
        source={types[type].icon}
      />
      <Text style={styles.goldDisplay}>80</Text>
    </View>
  );
};

export default GoldDisplay;

const styles = StyleSheet.create({
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
});
