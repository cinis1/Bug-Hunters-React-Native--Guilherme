import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const MainButton = ({
  type = 'primary',
  label,
  marginTop = 0,
  marginBottom = 0,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.mainButton,
        {
          backgroundColor: type === 'primary' ? '#EC2127' : '#11081A',
          borderColor: type === 'primary' ? '#EC2127' : '#11081A',
          marginTop: marginTop,
          marginBottom: marginBottom,
        },
      ]}>
      <Text style={styles.mainLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  mainButton: {
    width: '100%',
    backgroundColor: '#EC2127',
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 5,
    justifyContent: 'center',
  },
  mainLabel: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    color: 'white',
    alignSelf: 'center',
  },
});
