import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header from '../components/header';

const StoreScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.infoBoxHeader}>
        <Text style={styles.titleDisplay}>Loja</Text>

        <View style={styles.goldDisplayBox}>
          <Image
            resizeMode="contain"
            style={styles.goldIcon}
            source={require('../assets/images/coin.png')}
          />
          <Text style={styles.goldDisplay}>80</Text>
        </View>
      </View>
      <ScrollView horizontal contentContainerStyle={styles.filterBox}>
        <TouchableOpacity style={styles.filterOption}>
          <Text style={styles.filterLabel}>Todos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterOption}>
          <Text style={styles.filterLabel}>Ataque</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterOption}>
          <Text style={styles.filterLabel}>Defesa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterOption}>
          <Text style={styles.filterLabel}>Vida</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterOption}>
          <Text style={styles.filterLabel}>Agilidade</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.itemList}>
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
      </View>
    </View>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  filterBox: {
    flexGrow: 1,
    height: 70,
    borderWidth: 1,
    borderColor: 'white',
  },
  itemList: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'white',
  },

  goldDisplayBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  goldDisplay: {
    fontSize: 24,
    fontWeight: '700',
    color: 'gold',
    marginLeft: 10,
  },
  goldIcon: {
    height: 20,
    width: 20,
  },
  infoBoxHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  titleDisplay: {
    color: 'white',
    fontSize: 32,
    fontWeight: '700',
  },
  filterOption: {
    marginRight: 15,
    //backgroundColor: '#2E2635',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#2E2635',
    width: 86,
    height: 27,
    borderRadius: 5,
  },
  filterLabel: {
    color: 'white',
    fontSize: 12,
    fontWeight: '400',
  },
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
