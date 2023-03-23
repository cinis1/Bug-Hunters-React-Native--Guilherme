import {StyleSheet, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from '../../contexts/AuthContext';
import {BattleContext} from '../../contexts/BattleContext';

const PlayButton = ({navigation, quest}) => {
  const {setSelectedQuest, setEnemyStats} = useContext(AuthContext);
  const {onFocusQuest} = useContext(BattleContext);

  const addEquipmentStats = () => {
    const stats = Object.assign({}, quest.bugs[0]);
    if (stats.equipment !== undefined) {
      stats.equipment.forEach(equipment => {
        if (equipment !== null && equipment !== undefined) {
          stats[equipment.affected_attribute] += equipment.affected_amount;
        }
      });
    }
    setEnemyStats({...stats, maxHp: stats.hp});
  };

  return (
    <TouchableOpacity
      onPress={() => onFocusQuest(quest)}
      style={styles.playButton}>
      <Icon name="play" size={30} color={'white'} />
    </TouchableOpacity>
  );
};

export default PlayButton;

const styles = StyleSheet.create({
  playButton: {
    backgroundColor: '#EC2127',
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
