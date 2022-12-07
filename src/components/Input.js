import {StyleSheet, Text, TextInput} from 'react-native';
import React from 'react';

const Input = ({message, placeholder = 'Nome do personagem'}) => {
  return (
    <>
      <Text style={styles.charInputMessage}>{message}</Text>
      <TextInput placeholder={placeholder} style={styles.charInputBox} />
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputBox: {},
  loginButtonBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  charInputMessage: {
    color: 'white',
    fontSize: 40,
    fontWeight: '700',
    marginBottom: 10,
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
});
