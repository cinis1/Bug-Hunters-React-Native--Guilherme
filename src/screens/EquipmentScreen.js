import {
  StyleSheet,
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import Header from '../components/Header';
import ItemBox from '../components/ItemBox';
import axios from 'axios';
import FilterOption from '../components/FilterOption';
import {checkItem} from './StoreScreen';
import {AuthContext} from '../contexts/AuthContext';

const EquipmentScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [selectedFilter, setFilter] = useState('all');
  const {char} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header />
        <Text style={styles.title}>Equipamento</Text>
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
            data={char.equipment}
            renderItem={({item}) =>
              checkItem({item, selectedFilter, display: false})
            }
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default EquipmentScreen;

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
    marginVertical: 10,
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: '700',
    fontFamily: 'Poppins-Regular',
  },
});
