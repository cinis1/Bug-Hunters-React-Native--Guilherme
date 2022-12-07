import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const FilterOption = ({label}) => {
  return (
    <TouchableOpacity style={styles.filterOption}>
      <Text style={styles.filterLabel}>{label}</Text>
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
  },
});
