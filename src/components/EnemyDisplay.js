import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useContext, useEffect} from 'react';
import hpIcon from '../assets/images/icon-heart.png';
import {AuthContext} from '../contexts/AuthContext';

import bug1 from '../assets/images/character-bug-1.png';
import bug2 from '../assets/images/character-bug-2.png';
import bug3 from '../assets/images/character-bug-3.png';
import {BattleContext} from '../contexts/BattleContext';

import Animated, {
  SlideInRight,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

const EnemyDisplay = () => {
  const enemyXPosition = useSharedValue(0);
  const enemyYPosition = useSharedValue(0);
  const enemyOpacity = useSharedValue(1);

  const {currentBug, isEnemyAttacking} = useContext(BattleContext);

  const enemyAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: enemyXPosition.value,
      },
      {translateY: enemyYPosition.value},
    ],
    opacity: enemyOpacity.value,
  }));
  const enemyAttackAnimation = () => {
    enemyXPosition.value = withSequence(
      withTiming(-100, {duration: 500}),
      withDelay(200, withTiming(-150, {duration: 0})),
      withDelay(100, withTiming(-400, {duration: 400})),
      withDelay(200, withTiming(200)),
      withTiming(0, {duration: 1000}),
    );
    enemyYPosition.value = withSequence(
      withDelay(500, withTiming(-100, {duration: 200})),
      withDelay(100, withTiming(0, {duration: 150})),
    );
    enemyOpacity.value = withSequence(
      withDelay(1400, withTiming(0)),
      withDelay(100, withTiming(1)),
    );
  };
  useEffect(() => {
    if (isEnemyAttacking === true) {
      enemyAttackAnimation();
    }
  }, [isEnemyAttacking]);
  return (
    <View style={styles.container}>
      {/* <View style={styles.hpView}>
        <Image source={hpIcon} resizeMode={'contain'} style={styles.icon} />
        <Text style={styles.hp}>{currentBug.hp}</Text>
      </View> */}
      <Animated.Image
        style={[styles.image, enemyAnimatedStyle]}
        resizeMode={'contain'}
        source={bug1}
        entering={SlideInRight.duration(1000)}
      />
    </View>
  );
};

export default EnemyDisplay;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  hpView: {
    flexDirection: 'row',
    backgroundColor: 'rgba(48, 48, 48, 0.5)',
    height: 45,
    paddingVertical: 6,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
  },
  icon: {
    height: 25,
    width: 25,
    marginRight: 5,
  },
  hp: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 25,
  },
  image: {
    height: 125,
    width: 125,
  },
});
