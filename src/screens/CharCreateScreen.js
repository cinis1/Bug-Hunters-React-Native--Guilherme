import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import Header from '../components/header';
const CharCreateScreen = () => {
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
          <TouchableOpacity style={styles.frontFactionButton}>
            <Text style={styles.factionButtonLabel}>Frontend</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mobileFactionButton}>
            <Text style={styles.factionButtonLabel}>Mobile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.backendFactionButton}>
            <Text style={styles.factionButtonLabel}>Backend</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.createCharButtonBox}>
          <TouchableOpacity style={styles.createCharacterButton}>
            <Text style={styles.createCharBLabel}>Criar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },

  charNameInput: {
    flex: 2,
    borderWidth: 1,
    borderColor: 'white',
  },
  factionSelect: {
    flex: 5,
    top: 10,
  },
  createCharButtonBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  imageView: {
    paddingLeft: '25%',
  },
  goBackButton: {
    borderRadius: 50,
    width: 40,
    height: 40,
    backgroundColor: '#2E2635',
    justifyContent: 'center',
  },
  logo: {
    size: 100,
    width: 100,
    alignSelf: 'center',
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
    height: 40,
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
  },
  frontFactionButton: {
    borderWidth: 1,
    borderColor: '#38116A',
    height: 136,
    marginRight: 10,
    flex: 1,
    borderRadius: 15,
  },
  mobileFactionButton: {
    borderWidth: 1,
    borderColor: '132109',
    height: 136,
    flex: 1,
    borderRadius: 15,
  },
  backendFactionButton: {
    borderWidth: 1,
    borderColor: '#402A07',
    height: 136,
    marginLeft: 10,
    flex: 1,
    borderRadius: 15,
  },
  factionButtonLabel: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center',
    top: 90,
  },
  createCharacterButton: {
    width: '100%',
    backgroundColor: '#EC2127',
    height: 48,
    borderRadius: 10,

    borderWidth: 1,
    marginTop: 5,
    justifyContent: 'center',
  },
  createCharBLabel: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    color: 'white',
    alignSelf: 'center',
  },
});
export default CharCreateScreen;
