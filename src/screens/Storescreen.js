import {
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import Header from '../components/Header';
import ItemBox from '../components/ItemBox';
import FilterOption from '../components/FilterOption';
import NameAndGoldDisplay from '../components/NameAndGoldDisplay';
import axios from 'axios';
import {AuthContext} from '../contexts/AuthContext';

const StoreScreen = () => {
  const [items, setItems] = useState([]);
  const [selectedFilter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const {char} = useContext(AuthContext);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    setIsLoading(true);
    const response = await axios.get(
      'https://dws-bug-hunters-api.vercel.app/api/equipment',
    );
    setItems(response.data);
    setIsLoading(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header />
        <View style={styles.infoBoxHeader}>
          <NameAndGoldDisplay
            message={'Loja'}
            goldValue={char.gold}
            type="coin"
            height={24}
            width={24}
            fontSize={24}
          />
        </View>
        <ScrollView horizontal style={styles.filterBox}>
          <FilterOption type={'all'} onPress={() => setFilter('all')} />
          <FilterOption type={'atk'} onPress={() => setFilter('atk')} />
          <FilterOption type={'def'} onPress={() => setFilter('def')} />
          <FilterOption type={'hp'} onPress={() => setFilter('hp')} />
          <FilterOption type={'agi'} onPress={() => setFilter('agi')} />
        </ScrollView>
        {isLoading ? (
          <ActivityIndicator animating />
        ) : (
          <FlatList
            contentContainerStyle={styles.itemList}
            data={items}
            renderItem={({item}) =>
              checkItem({item, selectedFilter, setIsLoading})
            }
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#11081A',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  filterBox: {
    maxHeight: 33,
    height: 33,
  },
  itemList: {
    paddingBottom: 20,
    marginTop: 15,
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

export const checkItem = ({
  item,
  selectedFilter,
  setIsLoading,
  display = true,
}) => {
  if (item.affected_attribute === selectedFilter || selectedFilter === 'all') {
    return (
      <ItemBox
        item={item}
        buy={true}
        display={display}
        setIsLoading={setIsLoading}
      />
    );
  }
};
