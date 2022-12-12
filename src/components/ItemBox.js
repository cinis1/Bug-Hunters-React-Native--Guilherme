import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import atkIcon from '../assets/images/icon-sword.png';
import defIcon from '../assets/images/icon-shield.png';
import hpIcon from '../assets/images/icon-heart.png';

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
const ItemBox = ({stat, statValue, name}) => {
  return (
    <View style={styles.itemBox}>
      <View style={styles.statBox}>
        <Image
          resizeMode="contain"
          style={styles.statIcon}
          source={stats[stat].icon}
        />
        <Text style={styles.statValue}>+{statValue}</Text>
      </View>
      <View style={styles.rightHalfBox}>
        <Text style={styles.itemName}>{name}</Text>
        <TouchableOpacity style={styles.buyButton}>
          <Icon name="cart" size={16} color={'#8F00FF'} />
        </TouchableOpacity>
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
  buyButton: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1725',
    borderRadius: 10,
  },
  cartImage: {
    height: 20,
    width: 20,
  },
});
