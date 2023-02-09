import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from './AuthContext';

export const BattleContext = createContext({});

const BattleProvider = ({children}) => {
  const {charStats, char, setChar} = useContext(AuthContext);
  console.log(charStats);
  const [currentQuest, setCurrentQuest] = useState(null);
  const [turn, setTurn] = useState('Player');
  const [currentBug, setCurrentBug] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [battleState, setBattleState] = useState('Not started'); //Not started, In progress, Win, Lose
  const navigation = useNavigation();
  const [isPlayerAttacking, setIsPlayerAttacking] = useState(false);

  /*
1-criar lista em state dos logs
2-adicionar as infos quem atacou  e tal

*/
  const charTurn = async () => {
    if (battleState !== 'In progress') {
      return;
    }
    const damage = currentPlayer.atk - currentBug.def;
    const newBugHp = currentBug.hp - damage;

    setIsPlayerAttacking(true);
    await delay(900);
    setIsPlayerAttacking(false);
    if (newBugHp <= 0) {
      setCurrentBug({...currentBug, hp: 0});
      setBattleState('Win');
    }
    if (newBugHp > currentBug.hp) {
      setCurrentBug({...currentBug});
    } else {
      setCurrentBug({...currentBug, hp: newBugHp});
      setTurn('Bug');
    }
  };
  const delay = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  const enemyTurn = () => {
    const damage = currentBug.atk - currentPlayer.def;
    const newPlayerHp = currentPlayer.hp - damage;

    if (newPlayerHp <= 0) {
      setCurrentPlayer({...currentPlayer, hp: 0});
      setBattleState('Lose');
    } else {
      setCurrentPlayer({...currentPlayer, hp: newPlayerHp});
      setTurn('Player');
    }
  };

  const addEquipmentStatsToBug = bug => {
    const stats = Object.assign({}, bug);
    if (stats.equipment !== undefined) {
      stats.equipment.forEach(equipment => {
        if (equipment !== null && equipment !== undefined) {
          stats[equipment.affected_attribute] += equipment.affected_amount;
        }
      });
    }
    setCurrentBug({...stats, maxHp: stats.hp});
  };

  const onFocusQuest = quest => {
    addEquipmentStatsToBug(quest.bugs[0]);
    setBattleState('Not started');
    setCurrentQuest(quest);
    navigation.navigate('Start');
  };

  const startBattle = () => {
    setBattleState('In progress');
    navigation.navigate('Battle');
  };

  const claimReward = async () => {
    await axios.patch('https://dws-bug-hunters-api.vercel.app/api/characters', {
      gold: char.gold + currentQuest.reward,
      id: char.id,
    });
    const response = await axios.get(
      'https://dws-bug-hunters-api.vercel.app/api/characters',
    );
    setChar(response.data.find(item => item.name === char.name));
  };

  const removeItem = async () => {
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
  };

  useEffect(() => {
    setCurrentPlayer(charStats);
  }, [charStats]);

  useEffect(() => {
    if (turn === 'Bug' || battleState === 'In progress') {
      enemyTurn();
    }
  }, [turn, battleState]);

  useEffect(() => {
    if (battleState === 'In Progress') {
      setCurrentPlayer(charStats);
      currentPlayer.agi >= currentBug.agi ? setTurn('Player') : setTurn('Bug');
    }
    if (battleState === 'Win') {
      claimReward();
    }
    if (battleState === 'Lose') {
      removeItem();
    }
  }, [battleState]);

  return (
    <BattleContext.Provider
      value={{
        turn,
        setTurn,
        onFocusQuest,
        claimReward,
        currentQuest,
        currentBug,
        startBattle,
        charTurn,
        battleState,
        setBattleState,
        isPlayerAttacking,
        setIsPlayerAttacking,
      }}>
      {children}
    </BattleContext.Provider>
  );
};

export default BattleProvider;
