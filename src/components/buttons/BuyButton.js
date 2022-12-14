import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BuyButton = ({item}) => {
  return (
    <TouchableOpacity style={styles.buyButton}>
      <Icon name="cart" size={16} color={'#8F00FF'} />
    </TouchableOpacity>
  );
};

export default BuyButton;

const styles = StyleSheet.create({
  buyButton: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1725',
    borderRadius: 10,
  },
});
