import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import Header from '../components/header';
import MainButton from '../components/buttons/MainButton';
import FactionButton from '../components/buttons/FactionButton';
const CharCreateScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.charNameInput}>
        <Text style={styles.charInputMessage}>{'Criar\nPersonagem'}</Text>
        <TextInput
          placeholder="Nome do personagem"
          style={styles.charInputBox}
        />
      </View>
      <View style={styles.factionSelect}>
        <Text style={styles.charInputMessage}>Facção</Text>
        <View style={styles.factionSelectBox}>
          <FactionButton type="frontend" />
          <FactionButton type="mobile" />
          <FactionButton type="backend" />
        </View>
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

  charNameInput: {
    borderWidth: 1,
    borderColor: 'white',
  },
  factionSelect: {
    top: 10,
  },
  createCharButtonBox: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  imageView: {
    paddingLeft: '25%',
  },

  charInputMessage: {
    color: 'white',
    fontSize: 40,
    fontWeight: '700',
    paddingBottom: 30,
  },
  charInputBox: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    height: 48,
    color: '#858585',
    backgroundColor: '#D9D9D9',
    alignContent: 'center',
    paddingHorizontal: 10,
  },
  factionSelectMessage: {
    color: 'white',
    fontSize: 32,
    fontWeight: '500',
  },
  factionSelectBox: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'space-between',
  },
});
export default CharCreateScreen;
