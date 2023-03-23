import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import treasure from '../../assets/images/treasure.png';
import quests from '../../assets/images/quest.png';
import equipment from '../../assets/images/chest.png';

const ScreenButton = ({type, navigation, marginTop, marginBottom}) => {
  const types = {
    store: {
      img: treasure,
      label: 'Loja',
      icon: 'storeIcon',
      address: 'Store',
    },
    quests: {
      img: quests,
      label: 'Quests',
      icon: 'questsIcon',
      address: 'Quests',
    },
    equipment: {
      img: equipment,
      label: 'Equipamento',
      icon: 'equipmentIcon',
      address: 'Equipment',
    },
  };
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {marginTop: marginTop},
        {marginBottom: marginBottom},
      ]}
      onPress={() => navigation.navigate(types[type].address)}>
      <View style={styles.iconBox}>
        <Image
          style={styles[types[type].icon]}
          resizeMode="contain"
          source={types[type].img}
        />
      </View>
      <View style={styles.buttonLabelBox}>
        <Text style={styles.buttonLabel}>{types[type].label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ScreenButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2E2635',
    width: '100%',
    height: 80,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  buttonLabel: {
    fontSize: 25,
    fontWeight: '900',
    color: 'white',
    fontFamily: 'Poppins-Regular',
  },
  buttonLabelBox: {
    justifyContent: 'center',
  },

  storeIcon: {
    height: 100,
    width: 100,
    transform: [{translateY: -9}],
  },
  questsIcon: {
    height: 100,
    width: 100,
    transform: [{translateY: -9}],
  },
  equipmentIcon: {
    height: 100,
    width: 100,
    transform: [{translateY: -9}],
  },
  iconBox: {
    justifyContent: 'center',
  },
});
