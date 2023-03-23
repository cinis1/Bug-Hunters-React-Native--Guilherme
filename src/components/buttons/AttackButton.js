import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import icon from '../../assets/images/icon-sword.png';
import {BattleContext} from '../../contexts/BattleContext';
const AttackButton = () => {
  const {charTurn, turn} = useContext(BattleContext);

  return (
    <TouchableOpacity
      disabled={turn === 'Bug'}
      style={styles.button}
      onPress={charTurn}>
      <Image source={icon} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default AttackButton;

const styles = StyleSheet.create({
  button: {
    height: 96,
    width: 96,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EC2127',
    borderRadius: 48,
  },
  icon: {
    height: 38,
    width: 38,
  },
});
