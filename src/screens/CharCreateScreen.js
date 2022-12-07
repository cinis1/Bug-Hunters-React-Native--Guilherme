import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../components/header';
import MainButton from '../components/buttons/MainButton';
import FactionButton from '../components/buttons/FactionButton';
import Input from '../components/Input';
import axios from 'axios';

const CharCreateScreen = ({navigation}) => {
  const [characterName, setCharacterName] = useState('');
  const [selectedFaction, setSelectedFaction] = useState('');
  const [factions, setFactions] = useState([]);

  useEffect(() => {
    getFactions();
  }, []);

  const getFactions = async () => {
    const response = await axios.get(
      'https://dws-bug-hunters-api.vercel.app/api/factions',
    );
    setFactions(response.data);
  };
  console.log(factions);
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Header />
      </View>
      <View style={styles.inputView}>
        <Input message={'Criar\nPersonagem'} />
      </View>
      <View style={styles.factionSelect}>
        <Text style={styles.charInputMessage}>Facção</Text>
        <FlatList
          contentContainerStyle={styles.factionSelectBox}
          data={factions}
          horizontal
          renderItem={({item}) => (
            <FactionButton
              onPress={() => setSelectedFaction(item.name)}
              type={item.name}
              isSelected={selectedFaction === item.name}
            />
          )}
        />
      </View>
      <View style={styles.createCharButtonBox}>
        <MainButton label="Criar" navigation={navigation} address="Welcome" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#11081A',
  },
  headerView: {
    height: 80,
  },
  factionSelect: {},
  createCharButtonBox: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  inputView: {
    margintop: 10,
    marginBottom: 30,
  },

  charInputMessage: {
    color: 'white',
    fontSize: 40,
    fontWeight: '700',
    paddingBottom: 30,
  },

  factionSelectBox: {
    width: '100%',
    justifyContent: 'space-between',
  },
});
export default CharCreateScreen;
