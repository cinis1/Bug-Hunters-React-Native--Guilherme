import {Alert, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BuyButton = ({item}) => {
  const confirmPurchase = () => {
    Alert.alert(
      'Confirm purchase',
      `buy ${item.name} for ${item.value} gold?`,
      [
        {
          text: 'buy',
          onPress: () => console.log(`${item.name} purchased`),
        },
        {
          text: 'cancel',
          onPress: () => console.log('Purchase canceled'),
        },
      ],
    );
  };

  return (
    <TouchableOpacity onPress={confirmPurchase} style={styles.buyButton}>
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
