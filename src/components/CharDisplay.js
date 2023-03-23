import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {AuthContext} from '../contexts/AuthContext';
import {BattleContext} from '../contexts/BattleContext';

import Animated, {
  useAnimatedStyle,
  withTiming,
  withDelay,
  withSequence,
  SlideInUp,
  SlideInLeft,
  FadeInUp,
  useSharedValue,
  FadeInDown,
} from 'react-native-reanimated';

import hpIcon from '../assets/images/icon-heart.png';

import charFrontend from '../assets/images/character-front.png';
import charMobile from '../assets/images/character-mobile.png';
import charBackend from '../assets/images/character-backend.png';

export const models = {
  characters: {
    frontend: {
      model: charFrontend,
      homeHeight: 136,
      homeWidth: 127,
      animation: FadeInUp,
      iconHeight: 50,
      iconWidth: 50,
    },
    mobile: {
      model: charMobile,
      homeHeight: 156,
      homeWidth: 167,
      animation: FadeInDown,
      iconHeight: 50,
      iconWidth: 50,
    },
    backend: {
      model: charBackend,
      homeHeight: 156,
      homeWidth: 137,
      animation: SlideInLeft,
      iconHeight: 50,
      iconWidth: 50,
    },
  },
};

const CharDisplay = () => {
  const {charStats} = useContext(AuthContext);
  const {battleState, setBattleState, isPlayerAttacking} =
    useContext(BattleContext);

  const characterXPosition = useSharedValue(0);
  const characterYPosition = useSharedValue(0);
  const charOpacity = useSharedValue(1);

  const charAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: characterXPosition.value,
      },
      {translateY: characterYPosition.value},
    ],
    opacity: charOpacity.value,
  }));

  const backendAttackAnimation = () => {
    const totalDuration = 1000;
    characterXPosition.value = withSequence(
      withTiming(230, {duration: totalDuration * 1}),
      withTiming(0),
    );
    characterYPosition.value = withSequence(
      withTiming(-180, {duration: totalDuration * 0.7}),
      withDelay(
        totalDuration * 0.15,
        withTiming(0, {duration: totalDuration * 0.03}),
      ),
    );
  };

  const frontendAttackAnimation = () => {
    const totalDuration = 1000;
    charOpacity.value = withSequence(
      withTiming(0, {duration: totalDuration * 0.3}),
      withDelay(
        totalDuration * 0.1,
        withTiming(1, {duration: totalDuration * 0.1}),
      ),
      withDelay(
        totalDuration * 0.2,
        withTiming(0, {duration: totalDuration * 0.1}),
      ),
      withDelay(totalDuration * 0.5, withTiming(1)),
    );
    characterXPosition.value = withSequence(
      withDelay(
        totalDuration * 0.3,
        withTiming(235, {duration: totalDuration * 0.1}),
      ),
      withDelay(totalDuration * 0.5, withTiming(0)),
    );
    characterYPosition.value = withSequence(
      withDelay(
        totalDuration * 0.4,
        withTiming(-280, {duration: totalDuration * 0.5}),
      ),
      withDelay(totalDuration * 0, withTiming(0)),
    );
  };

  const mobileAttackAnimation = () => {
    const totalDuration = 1000;
    characterYPosition.value = withSequence(
      withTiming(-350, {duration: totalDuration}),
      withDelay(
        totalDuration * 0.5,
        withTiming(0, {duration: totalDuration * 0.2}),
      ),
    );
    characterXPosition.value = withSequence(
      withDelay(
        totalDuration * 1.5,
        withTiming(235, {duration: totalDuration * 0.2}),
      ),
      withDelay(totalDuration * 0.4, withTiming(0)),
    );
    charOpacity.value = withSequence(
      withDelay(totalDuration, withTiming(0, totalDuration * 0.5)),
      withTiming(1, totalDuration * 0.1),
    );
  };

  useEffect(() => {
    if (isPlayerAttacking === true) {
      charStats.factions[0].name.toLowerCase() === 'backend' &&
        backendAttackAnimation();
      charStats.factions[0].name.toLowerCase() === 'frontend' &&
        frontendAttackAnimation();
      charStats.factions[0].name.toLowerCase() === 'mobile' &&
        mobileAttackAnimation();
    }
  }, [isPlayerAttacking]);

  return (
    <View style={styles.container}>
      {/* <View style={styles.hpView}>
        <Image source={hpIcon} resizeMode={'contain'} style={styles.icon} />
        <Text style={styles.hp}>{charStats.hp}</Text>
      </View> */}

      <Animated.Image
        style={[styles.image, charAnimatedStyle]}
        resizeMode="contain"
        source={
          models.characters[charStats.factions[0].name.toLowerCase()].model
        }
        entering={
          (charStats.factions[0].name.toLowerCase() === 'frontend' &&
            FadeInDown.duration(2000)) ||
          (charStats.factions[0].name.toLowerCase() === 'mobile' &&
            SlideInLeft.duration(500)) ||
          (charStats.factions[0].name.toLowerCase() === 'backend' &&
            SlideInUp.duration(400))
        }
        // entering={models.characters[
        //   charStats.factions[0].name.toLowerCase()
        // ].animation.duration(2000)}
      />
    </View>
  );
};

export default CharDisplay;

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
    height: 150,
    width: 150,
  },
});
