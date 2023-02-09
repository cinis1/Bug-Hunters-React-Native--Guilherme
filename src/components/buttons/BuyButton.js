import {Alert, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from '../../contexts/AuthContext';
import axios from 'axios';

const BuyButton = ({item, setIsLoading}) => {
  const {char, setChar} = useContext(AuthContext);

  const BuyItem = async () => {
    const newItem = char.equipment.filter(e => e.id === item.id);
    console.log(newItem.length);
    if (char.gold >= item.value && newItem.length === 0) {
      setIsLoading(true);
      const updatedEquipment = [...char.equipment, item];

      await axios.patch(
        'https://dws-bug-hunters-api.vercel.app/api/characters',
        {
          gold: char.gold - item.value,
          equipment: updatedEquipment,
          id: char.id,
        },
      );
      const response = await axios.get(
        'https://dws-bug-hunters-api.vercel.app/api/characters',
      );
      setChar(response.data.find(item => item.name === char.name));

      setIsLoading(false);
      return console.log(`${item.name} purchased`);
    }
    if (char.gold < item.value) {
      return console.log('Insufficient funds');
    } else {
      return console.log('You already own that item');
    }
  };

  const confirmPurchase = () => {
    Alert.alert(
      'Confirm purchase',
      `buy ${item.name} for ${item.value} gold?`,
      [
        {
          text: 'buy',
          onPress: () => BuyItem(),
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
