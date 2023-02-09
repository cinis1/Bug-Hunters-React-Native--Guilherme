import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const types = {
  all: {
    name: 'Todos',
    stat: 'all',
  },
  atk: {
    name: 'Ataque',
    stat: 'atk',
  },
  def: {
    name: 'Defesa',
    stat: 'def',
  },
  hp: {
    name: 'Vida',
    stat: 'hp',
  },
  agi: {
    name: 'Agilidade',
    stat: 'agi',
  },
};

const FilterOption = ({type, onPress}) => {
  return (
    <TouchableOpacity style={styles.filterOption} onPress={onPress}>
      <Text style={styles.filterLabel}>{types[type].name}</Text>
    </TouchableOpacity>
  );
};

export default FilterOption;

const styles = StyleSheet.create({
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
    fontFamily: 'Poppins-Regular',
  },
});
