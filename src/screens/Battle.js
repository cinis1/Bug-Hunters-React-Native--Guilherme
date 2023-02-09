import {StyleSheet, View, SafeAreaView, ImageBackground} from 'react-native';
import React, {useContext, useState} from 'react';
import Header from '../components/Header';
import MainButton from '../components/buttons/MainButton';
import axios from 'axios';
import battleBackground from '../assets/images/background-battle.png';
import CharDisplay from '../components/CharDisplay';
import EnemyDisplay from '../components/EnemyDisplay';
import RunButton from '../components/buttons/RunButton';
import AttackButton from '../components/buttons/AttackButton';
import {BattleContext} from '../contexts/BattleContext';

const Battle = ({navigation}) => {
  const {battleState, setBattleState} = useContext(BattleContext);
  console.log(battleState);
  return (
    <ImageBackground style={styles.background} source={battleBackground}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Header />
          <View style={styles.charactersDisplay}>
            <CharDisplay />
            <EnemyDisplay />
          </View>
          <View style={styles.button}>
            {battleState === 'Win' || battleState === 'Lose' ? (
              <MainButton
                // isLoading={isLoading}
                label={
                  battleState === 'Win'
                    ? 'Receber recompensa'
                    : 'Voltar para a home'
                }
                onPress={() => navigation.navigate('Home')}
              />
            ) : (
              <View style={styles.combatUI}>
                <RunButton navigation={navigation} />
                <AttackButton />
              </View>
            )}
          </View>
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
  charactersDisplay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  combatUI: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});

const removeItem = async (
  char,
  setChar,

  navigation,
) => {
  console.log('You lost and one of your equipments was broken');
  const updatedGear = char.equipment.splice(
    Math.random() * char.equipment.length,
  );
  console.log(updatedGear);

  await axios.patch('https://dws-bug-hunters-api.vercel.app/api/characters', {
    equipment: updatedGear,
    id: char.id,
  });
  const response = await axios.get(
    'https://dws-bug-hunters-api.vercel.app/api/characters',
  );

  setChar(response.data.find(item => item.name === char.name));
  navigation.navigate('Home');
};
