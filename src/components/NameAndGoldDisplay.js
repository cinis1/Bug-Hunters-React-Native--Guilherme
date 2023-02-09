import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GoldDisplay from './GoldDisplay';

const NameAndGoldDisplay = ({
  message,
  type,
  goldValue,
  height,
  width,
  fontSize,
}) => {
  return (
    <View style={styles.infoBoxHeader}>
      <View style={styles.charNameView}>
        <Text style={styles.charNameDisplay}>{message}</Text>
      </View>
      <GoldDisplay
        type={type}
        goldValue={goldValue}
        height={height}
        width={width}
        fontSize={fontSize}
      />
    </View>
  );
};

export default NameAndGoldDisplay;

const styles = StyleSheet.create({
  charNameDisplay: {
    color: 'white',
    fontSize: 32,
    fontWeight: '700',
    fontFamily: 'Poppins-Regular',
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
});
