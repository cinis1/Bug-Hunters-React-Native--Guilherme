import {StyleSheet, View, ScrollView, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import ItemBox from '../components/ItemBox';
import FilterOption from '../components/FilterOption';
import NameAndGoldDisplay from '../components/NameAndGoldDisplay';
import axios from 'axios';

const StoreScreen = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems();
  }, []);

  console.log(items);
  const getItems = async () => {
    const response = await axios.get(
      'https://dws-bug-hunters-api.vercel.app/api/equipment',
    );
    setItems(response.data);
  };

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
      <FlatList
        contentContainerStyle={styles.itemList}
        data={items}
        extraData={items}
        renderItem={({item}) => <ItemBox item={item} />}
      />
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
    paddingBottom: 20,
  },

  goldDisplayBox: {
    flexDirection: 'row',
    alignItems: 'center',
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
