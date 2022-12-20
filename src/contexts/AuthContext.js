import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
  const [char, setChar] = useState(null);
  const [charStats, setCharStats] = useState({});

  useEffect(() => {
    console.log('usuari', char);
    if (char !== null) {
      addEquipmentStats();
    }
  }, [char]);

  const addEquipmentStats = () => {
    const stats = Object.assign({}, char);
    if (stats.equipment !== undefined) {
      stats.equipment.forEach(equipment => {
        if (equipment !== null && equipment !== undefined) {
          stats[equipment.affected_attribute] += equipment.affected_amount;
        }
      });
    }

    setCharStats(stats);
  };
  // const authentication = async () => {
  //   const response = await axios.get(
  //     'https://dws-bug-hunters-api.vercel.app/api/characters',
  //   );
  //   const character = response.data.find(item => item.name === characterName);

  //   if (character === null || character === undefined) {
  //     console.log('Character not found');
  //   } else {
  //     setChar(character);
  //     navigation.navigate('Home');
  //   }
  // };

  return (
    <AuthContext.Provider value={{char, setChar, charStats, setCharStats}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
