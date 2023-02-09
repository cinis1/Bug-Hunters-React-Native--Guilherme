import {StyleSheet, View, SafeAreaView} from 'react-native';
import Header from '../components/Header';
import EnemyStatsDisplay from '../components/EnemyStatsDisplay';
import EnemyImage from '../components/EnemyImage';
import MainButton from '../components/buttons/MainButton';
import GoldDisplay from '../components/GoldDisplay';
import {AuthContext} from '../contexts/AuthContext';
import React, {useContext, useState, useMemo} from 'react';
import {BattleContext} from '../contexts/BattleContext';

const StartBattle = ({navigation}) => {
  const {char, setChar} = useContext(AuthContext);
  const {claimReward, currentQuest, startBattle} = useContext(BattleContext);
  const [isLoading, setIsLoading] = useState(false);

  const hasBugs = useMemo(() => !!currentQuest?.bugs[0]?.id, [currentQuest]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header />
        {hasBugs ? (
          <>
            <EnemyImage name={currentQuest.bugs[0].name} />
            <EnemyStatsDisplay enemy={currentQuest.bugs[0]} />
          </>
        ) : (
          <EnemyImage name={'Não há inimigos'} enemy={false} />
        )}

        <View style={styles.bottomView}>
          <View style={styles.goldBox}>
            <GoldDisplay
              height={40}
              width={40}
              type={'gold'}
              fontSize={24}
              goldValue={currentQuest?.reward}
            />
          </View>
          {hasBugs ? (
            <MainButton label={'Lutar'} onPress={startBattle} />
          ) : (
            <MainButton
              isLoading={isLoading}
              label={'Receber recompensa'}
              onPress={claimReward}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StartBattle;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#11081A',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  bottomView: {
    justifyContent: 'flex-end',
    flex: 1,
  },

  statIcon: {
    height: 50,
    width: 50,
  },

  goldBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  goldValue: {
    color: 'gold',
    fontSize: 24,
    fontWeight: '700',
  },
});
