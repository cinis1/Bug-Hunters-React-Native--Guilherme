import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import atkIcon from '../assets/images/icon-sword.png';
import defIcon from '../assets/images/icon-shield.png';
import hpIcon from '../assets/images/icon-heart.png';

const EnemyStatsDisplay = ({enemy}) => {
  const addEquipmentStats = char => {
    const stats = Object.assign({}, char);
    stats.equipment.forEach(
      equipment =>
        (stats[equipment.affected_attribute] += equipment.affected_amount),
    );
    return stats;
  };
  const enemyInfo = addEquipmentStats(enemy);
  console.warn(enemy);
  // const enemyStats = [
  //   {
  //     img: atkIcon,
  //     value: enemyInfo.atk,
  //   },
  //   {
  //     img: defIcon,
  //     value: enemyInfo.def,
  //   },
  //   {
  //     img: hpIcon,
  //     value: enemyInfo.hp,
  //   },
  //   {
  //     img: atkIcon,
  //     value: enemyInfo.agi,
  //   },
  // ];
  console.log({enemy});
  return (
    <View />
    // <FlatList
    //   contentContainerStyle={styles.enemyStatsBox}
    //   data={enemyStats}
    //   horizontal
    //   renderItem={({item}) => (
    //     <View style={styles.statBox}>
    //       <Image
    //         resizeMode="contain"
    //         style={styles.statIcon}
    //         source={item.img}
    //       />
    //       <Text style={styles.statValue}>{item.value}</Text>
    //     </View>
    //   )}
    // />
  );
};

export default EnemyStatsDisplay;

const styles = StyleSheet.create({
  statBox: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statIcon: {
    height: 50,
    width: 50,
  },
  statValue: {
    color: 'white',
    fontWeight: '900',
    fontSize: 24,
  },
  enemyStatsBox: {
    width: '100%',
    marginTop: 40,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
});
