import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import atkIcon from '../assets/images/icon-sword.png';
import defIcon from '../assets/images/icon-shield.png';
import hpIcon from '../assets/images/icon-heart.png';
import agiIcon from '../assets/images/icon-agility.png';
import BuyButton from './buttons/BuyButton';
import GoldDisplay from './GoldDisplay';

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
    icon: agiIcon,
  },
};
const ItemBox = ({item, display = true, setIsLoading}) => {
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
        <View style={styles.nameAndGold}>
          <Text numberOfLines={1} style={styles.itemName}>
            {item.name}
          </Text>
          {display && (
            <GoldDisplay
              type={'coin'}
              goldValue={item.value}
              height={14}
              width={14}
              fontSize={14}
            />
          )}
        </View>
        {display && <BuyButton item={item} setIsLoading={setIsLoading} />}
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
    paddingHorizontal: 10,
    marginVertical: 15,
    width: '30%',
  },

  rightHalfBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
  },
  nameAndGold: {
    flex: 1,
    paddingRight: 10,
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
    fontFamily: 'Poppins-Regular',
  },
  itemName: {
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
    fontFamily: 'Poppins-Regular',
    borderColor: 'white',
    flexWrap: 'wrap',
  },
});
