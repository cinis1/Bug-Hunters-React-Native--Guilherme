import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import coinIcon from '../assets/images/coin.png';
import goldIcon from '../assets/images/gold.png';

const types = {
  coin: {
    icon: coinIcon,
    style: 'coinIcon',
  },
  gold: {
    icon: goldIcon,
  },
};

const GoldDisplay = ({
  type,
  goldValue,
  height,
  width,
  fontSize,
  alignSelf = 'auto',
  marginBottom = 0,
}) => {
  return (
    <View
      style={[
        styles.goldDisplayBox,
        {alignSelf: alignSelf, marginBottom: marginBottom},
      ]}>
      <Image
        resizeMode="contain"
        style={[{height: height, width: width}]}
        source={types[type].icon}
      />
      <Text
        numberOfLines={1}
        style={[styles.goldDisplay, {fontSize: fontSize}]}>
        {goldValue}
      </Text>
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
    fontFamily: 'Poppins-Regular',
    flexWrap: 'wrap',
  },
});
