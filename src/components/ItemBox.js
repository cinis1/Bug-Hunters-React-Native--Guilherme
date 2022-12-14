import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import atkIcon from '../assets/images/icon-sword.png';
import defIcon from '../assets/images/icon-shield.png';
import hpIcon from '../assets/images/icon-heart.png';
import BuyButton from './buttons/BuyButton';

const stats = {
  atk: {
    icon: atkIcon,
  },
  def: {
    icon: defIcon,
  },
  hp: {
    icon: hpIcon,
  },
  agi: {
    icon: atkIcon,
  },
};
const ItemBox = ({item}) => {
  return (
    <View style={styles.itemBox}>
      <View style={styles.statBox}>
        <Image
          resizeMode="contain"
          style={styles.statIcon}
          source={stats[item.affected_attribute].icon}
        />
        <Text style={styles.statValue}>+{item.affected_amount}</Text>
      </View>
      <View style={styles.rightHalfBox}>
        <Text numberOfLines={1} style={styles.itemName}>
          {item.name}
        </Text>
        <BuyButton item={item} />
      </View>
    </View>
  );
};

export default ItemBox;

const styles = StyleSheet.create({
  itemBox: {
    height: 60,
    width: '100%',
    backgroundColor: '#2E2635',
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 10,
  },
  statBox: {
    flexDirection: 'row',
    borderRightWidth: 1,
    borderRightColor: '#11081A',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginVertical: 15,
  },

  rightHalfBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
  },
  statIcon: {
    height: 30,
    width: 30,
  },
  statValue: {
    fontSize: 16,
    color: 'white',
    fontWeight: '700',
    marginLeft: 10,
  },
  itemName: {
    flex: 1,
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
    flexWrap: 'wrap',
  },
});
