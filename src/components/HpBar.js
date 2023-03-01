import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {AuthContext} from '../contexts/AuthContext';
import {BattleContext} from '../contexts/BattleContext';
import {models} from './CharDisplay';
import bug1 from '../assets/images/character-bug-1.png';
import Animated, {
  useAnimatedStyle,
  withTiming,
  withDelay,
  withSequence,
  useSharedValue,
  interpolate,
} from 'react-native-reanimated';

const HpBar = ({character = 'player', side = 'left'}) => {
  //side = 'left' || 'right'
  const {charStats} = useContext(AuthContext);
  const {currentBug, currentPlayer, battleHistoryLogs, playerMaxHp} =
    useContext(BattleContext);

  const damageRef = useRef(0);
  const currentHp = useSharedValue(0);
  const [maxHp, setMaxHp] = useState(0);

  const hpBarAnimatedStyle = useAnimatedStyle(() => {
    const widthVal = interpolate(currentHp.value, [0, maxHp], [0, 100]);
    return {
      width: `${widthVal}%`,
    };
  });

  const hp = {
    player: {
      hp: currentPlayer.hp,
      maxHp: playerMaxHp,
    },
    enemy: {
      hp: currentBug.hp,
      maxHp: currentBug.maxHp,
    },
  };

  useEffect(() => {
    currentHp.value = withTiming(hp[character].hp);
    setMaxHp(hp[character].maxHp);
    console.log(currentBug.hp);
    console.log(currentBug.maxHp);
  }, [hp[character]]);

  useEffect(() => {
    if (
      battleHistoryLogs[battleHistoryLogs.length - 1] &&
      battleHistoryLogs[battleHistoryLogs.length - 1].character !== character &&
      battleHistoryLogs[battleHistoryLogs.length - 1].damage !== undefined
    ) {
      damageRef.current +=
        battleHistoryLogs[battleHistoryLogs.length - 1].damage;
    }
  }, [battleHistoryLogs]);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.upperHalf,
          {
            justifyContent:
              character === 'player' ? 'flex-start' : 'flex-start',
            flexDirection: character === 'player' ? 'row' : 'row-reverse',
          },
        ]}>
        <Image
          source={
            side === 'left'
              ? models.characters[charStats.factions[0].name.toLowerCase()]
                  .model
              : bug1
          }
          style={[
            {
              height: 50,
              width: 50,
            },
          ]}
        />
        <Text numberOfLines={1} style={styles.name}>
          {character === 'player' ? charStats.name : 'bug'}
        </Text>
      </View>
      <View style={styles.lowerHalf}>
        <View style={styles.hpBarView}>
          <Animated.View
            style={[
              styles.hpBar,
              hpBarAnimatedStyle,
              {
                alignItems: character === 'player' ? 'flex-end' : 'flex-start',
                flexDirection: side === 'left' ? 'column' : 'row-reverse',
              },
            ]}
          />
          <Text
            style={[
              styles.hpValue,
              {alignSelf: side === 'left' ? 'flex-end' : 'flex-start'},
            ]}>
            {character === 'player'
              ? `${currentPlayer.hp}/${charStats.hp}`
              : `${currentBug.hp}/${currentBug.maxHp}`}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HpBar;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
  upperHalf: {
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '600',
    fontSize: 20,
    color: 'white',
    marginLeft: 10,
    marginRight: 10,
    alignSelf: 'flex-end',
  },
  lowerHalf: {},
  hpBarView: {
    borderRadius: 35,
    height: 35,
    backgroundColor: 'rgba(48, 48, 48, 0.5)',
    overflow: 'hidden',
    justifyContent: 'center',
  },
  hpBar: {
    backgroundColor: '#EC2127',
    borderRadius: 35,
    height: 35,
    position: 'absolute',
    left: 0,
    right: 0,
  },
  hpValue: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '600',
    fontSize: 20,
    color: 'white',
    marginHorizontal: 10,
  },
});
