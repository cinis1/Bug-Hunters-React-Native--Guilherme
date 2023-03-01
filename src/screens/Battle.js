import {
  StyleSheet,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import Header from '../components/Header';
import MainButton from '../components/buttons/MainButton';
import axios from 'axios';
import battleBackground from '../assets/images/background-battle.png';
import CharDisplay from '../components/CharDisplay';
import EnemyDisplay from '../components/EnemyDisplay';
import RunButton from '../components/buttons/RunButton';
import AttackButton from '../components/buttons/AttackButton';
import {BattleContext} from '../contexts/BattleContext';
import AnimatedLottieView from 'lottie-react-native';
import swordAnimation from '../assets/animations/fight_animation.json';
import HpBar from '../components/HpBar';
import BattleLogBox from '../components/BattleLogBox';

const Battle = ({navigation}) => {
  const {battleState, setBattleState, battleHistoryLogs} =
    useContext(BattleContext);
  const animation = useRef(null);
  const [animationPressed, setAnimationPressed] = useState(true);

  const onPress = () => {
    setBattleState('Not started');
    navigation.navigate('Home');
  };
  // useEffect(() => {
  //   animation.current.play(0, 66);
  // }, []);
  const checkLogs = item => {
    if (item !== undefined) {
      return <BattleLogBox item={item} />;
    }
  };
  return (
    <ImageBackground style={styles.background} source={battleBackground}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {animationPressed === false && (
            <TouchableOpacity
              style={styles.animationButton}
              onPress={() => setAnimationPressed(true)}>
              <AnimatedLottieView
                style={styles.animation}
                source={swordAnimation}
                autoSize
                loop={false}
                autoPlay
                ref={animation}
              />
            </TouchableOpacity>
          )}
          {animationPressed === true && (
            <View style={styles.box}>
              <HpBar />
              <HpBar character={'enemy'} side={'right'} />
              <View style={styles.charactersDisplay}>
                <CharDisplay />
                <EnemyDisplay />
              </View>
              <FlatList
                contentContainerStyle={styles.flatlist}
                data={battleHistoryLogs}
                renderItem={({item}) => checkLogs(item)}
              />

              <View style={styles.button}>
                {battleState === 'Win' || battleState === 'Lose' ? (
                  <MainButton
                    // isLoading={isLoading}
                    label={
                      battleState === 'Win'
                        ? 'Receber recompensa'
                        : 'Voltar para a home'
                    }
                    onPress={onPress}
                  />
                ) : (
                  <View style={styles.combatUI}>
                    <RunButton navigation={navigation} />
                    <AttackButton />
                  </View>
                )}
              </View>
            </View>
          )}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Battle;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  animation: {
    height: 600,
    width: 600,
  },
  animationButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    flex: 1,
  },
  charactersDisplay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  battleLogs: {},
  button: {
    justifyContent: 'flex-end',
  },
  flatlist: {
    paddingBottom: 10,
  },
  combatUI: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});
