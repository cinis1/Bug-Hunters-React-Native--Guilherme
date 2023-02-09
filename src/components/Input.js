import {StyleSheet, Text, TextInput} from 'react-native';
import React from 'react';

const Input = ({
  message,
  placeholder = 'Nome do personagem',
  name,
  setName,
}) => {
  return (
    <>
      <Text style={styles.charInputMessage}>{message}</Text>
      <TextInput
        autoCorrect={false}
        autoCapitalize={'none'}
        placeholder={placeholder}
        style={styles.charInputBox}
        onChangeText={newText => setName(newText)}
        defaultValue={name}
      />
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
    fontFamily: 'Poppins-Regular',
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
