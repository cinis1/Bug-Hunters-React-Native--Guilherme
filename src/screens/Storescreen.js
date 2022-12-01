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
import ItemBox from '../components/ItemBox';
import FilterOption from '../components/FilterOption';

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
        <FilterOption label={'Todos'} />
        <FilterOption label={'Ataque'} />
        <FilterOption label={'Defesa'} />
        <FilterOption label={'Vida'} />
        <FilterOption label={'Agilidade'} />
      </ScrollView>
      <View style={styles.itemList}>
        <ItemBox />
        <ItemBox />
        <ItemBox />
      </View>
    </View>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#11081A',
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
});
