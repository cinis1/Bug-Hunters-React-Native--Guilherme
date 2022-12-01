import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const ItemBox = () => {
  return (
    <View style={styles.itemBox}>
      <View style={styles.statBox}>
        <Image
          resizeMode="contain"
          style={styles.statIcon}
          source={require('../assets/images/icon-sword.png')}
        />
        <Text style={styles.statValue}>+80</Text>
      </View>
      <View style={styles.rightHalfBox}>
        <Text style={styles.itemName}>Moonlight Greatsword</Text>
        <TouchableOpacity style={styles.buyButton}>
          <Image
            resizeMode="contain"
            style={styles.cartImage}
            source={require('../assets/images/coin.png')}
          />
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
    fontSize: 12,
    fontWeight: '400',
    color: 'white',
  },
  buyButton: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1725',
  },
  cartImage: {
    height: 20,
    width: 20,
  },
});
