import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from './AuthContext';

export const BattleContext = createContext({});

const BattleProvider = ({children}) => {
  const {charStats, char, setChar} = useContext(AuthContext);
  const [currentQuest, setCurrentQuest] = useState(null);
  const [turn, setTurn] = useState(null);
  const [currentBug, setCurrentBug] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [battleState, setBattleState] = useState('Not started'); //Not started, In progress, Win, Lose
  const navigation = useNavigation();
  const [isPlayerAttacking, setIsPlayerAttacking] = useState(false);
  const [isEnemyAttacking, setIsEnemyAttacking] = useState(false);
  const [battleHistoryLogs, setBattleHistoryLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [playerMaxHp, setPlayerMaxHp] = useState(0);
  /*
1-criar lista em state dos logs
2-adicionar as infos quem atacou  e tal

*/

  const definePrio = () => {
    if (currentPlayer.agi >= currentBug.agi) {
      setTurn('player');
    } else {
      setTurn('bug');
    }
  };

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
      setBattleHistoryLogs([
        ...battleHistoryLogs,
        {
          character: 'player',
          damage: damage,
          log: `${damage} de dano`,
          time: new Date().getHours() + ':' + new Date().getMinutes(),
        },
      ]);
      setBattleState('Win');
      return;
    }
    if (newBugHp > currentBug.hp) {
      setBattleHistoryLogs([
        ...battleHistoryLogs,
        {
          character: 'player',
          damage: damage,
          log: '0 de dano',
          time: new Date().getHours() + ':' + new Date().getMinutes(),
        },
      ]);
      setTurn('Bug');
    } else {
      setCurrentBug({...currentBug, hp: newBugHp});
      setBattleHistoryLogs([
        ...battleHistoryLogs,
        {
          character: 'player',
          damage: damage,
          log: `${damage} de dano`,
          time: new Date().getHours() + ':' + new Date().getMinutes(),
        },
      ]);
      setTurn('Bug');
    }
  };

  const delay = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  const enemyTurn = async () => {
    const damage = currentBug.atk - currentPlayer.def;
    const newPlayerHp = currentPlayer.hp - damage;
    setIsEnemyAttacking(true);
    await delay(900);
    setIsEnemyAttacking(false);
    if (newPlayerHp <= 0) {
      setCurrentPlayer({...currentPlayer, hp: 0});
      setBattleState('Lose');
      setBattleHistoryLogs([
        ...battleHistoryLogs,
        {
          character: 'enemy',
          damage: damage,
          log: `${damage} de dano`,
          time: new Date().getHours() + ':' + new Date().getMinutes(),
        },
      ]);
    }
    if (damage <= 0) {
      setBattleHistoryLogs([
        ...battleHistoryLogs,
        {
          character: 'enemy',
          damage: damage,
          log: '0 de dano',
          time: new Date().getHours() + ':' + new Date().getMinutes(),
        },
      ]);
      setTurn('Player');
    } else {
      setCurrentPlayer({...currentPlayer, hp: newPlayerHp});
      setBattleHistoryLogs([
        ...battleHistoryLogs,
        {
          character: 'enemy',
          damage: damage,
          log: `${damage} de dano`,
          time: new Date().getHours() + ':' + new Date().getMinutes(),
        },
      ]);
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
    setBattleHistoryLogs([]);
    definePrio();
    setPlayerMaxHp(char.hp);
    navigation.navigate('Battle');
  };

  const claimReward = async () => {
    setIsLoading(true);
    await delay(100);
    await axios.patch('https://dws-bug-hunters-api.vercel.app/api/characters', {
      gold: char.gold + currentQuest.reward,
      id: char.id,
    });
    const response = await axios.get(
      'https://dws-bug-hunters-api.vercel.app/api/characters',
    );
    setChar(response.data.find(item => item.name === char.name));

    setIsLoading(false);
  };

  const removeItem = async () => {
    console.log('You lost and one of your equipments was broken');
    const updatedGear = char.equipment;
    const deletedGear = updatedGear.splice(
      Math.random() * updatedGear.length,
      1,
    );
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
    if (turn === 'Bug' && battleState === 'In progress') {
      enemyTurn();
    }
  }, [turn]);

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
        isLoading,
        setIsLoading,
        battleHistoryLogs,
        setBattleHistoryLogs,
        isEnemyAttacking,
        currentPlayer,
        playerMaxHp,
      }}>
      {children}
    </BattleContext.Provider>
  );
};

export default BattleProvider;
