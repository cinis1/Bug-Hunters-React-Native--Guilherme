import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from '../../contexts/AuthContext';

const RunButton = ({navigation}) => {
  const {char, setChar} = useContext(AuthContext);
  const onPress = () => {
    setChar(char);
    navigation.navigate('Home');
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Icon style={styles.icon} size={25} name={'run'} />
    </TouchableOpacity>
  );
};

export default RunButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#2E2635',
  },
  icon: {
    transform: [{scaleX: -1}],
    color: 'white',
  },
});
