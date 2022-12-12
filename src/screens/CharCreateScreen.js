import {StyleSheet, Text, View, FlatList, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import MainButton from '../components/buttons/MainButton';
import FactionButton from '../components/buttons/FactionButton';
import Input from '../components/Input';
import axios from 'axios';

const CharCreateScreen = ({navigation}) => {
  const [characterName, setCharacterName] = useState('');
  const [selectedFaction, setSelectedFaction] = useState({id: '', name: ''});
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
  const postCharacter = async () => {
    if (characterName && selectedFaction) {
      const char = {
        atk: 10,
        def: 10,
        agi: 10,
        hp: 10,
        gold: 0,
        name: characterName,
        equipment: [],
        factions: [selectedFaction],
      };
      console.log({char});
      const response = await axios.post(
        'https://dws-bug-hunters-api.vercel.app/api/characters',
        char,
      );
      console.log({response: response.data});
      if (response.data.message !== 'Character created') {
        Alert.alert('Algo deu errado', response.data.message);
      } else {
        navigation.navigate('Home');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Header />
      </View>
      <View style={styles.inputView}>
        <Input
          name={characterName}
          setName={setCharacterName}
          message={'Criar\nPersonagem'}
        />
      </View>
      <View style={styles.factionSelect}>
        <Text style={styles.charInputMessage}>Facção</Text>
        <FlatList
          contentContainerStyle={styles.factionSelectBox}
          data={factions}
          horizontal
          renderItem={({item}) => (
            <FactionButton
              onPress={() => setSelectedFaction(item)}
              type={item.name}
              isSelected={selectedFaction.id === item.id}
            />
          )}
        />
      </View>
      <View style={styles.createCharButtonBox}>
        <MainButton
          label="Criar"
          navigation={navigation}
          onPress={postCharacter}
        />
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
