import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import ItemBox from '../components/ItemBox';
import FilterOption from '../components/FilterOption';
import NameAndGoldDisplay from '../components/NameAndGoldDisplay';

const StoreScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.infoBoxHeader}>
        <NameAndGoldDisplay message={'Loja'} type="coin" />
      </View>
      <ScrollView horizontal style={styles.filterBox}>
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
    maxHeight: 30,
  },
  itemList: {
    marginTop: 30,
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
    width: '100%',
    marginBottom: 0,
  },
  titleDisplay: {
    color: 'white',
    fontSize: 32,
    fontWeight: '700',
  },
});
