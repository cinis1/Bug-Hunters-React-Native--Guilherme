import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../contexts/AuthContext';
import GoldDisplay from './GoldDisplay';
import {models} from './CharDisplay';

const HomeCharDisplay = () => {
  const {char} = useContext(AuthContext);
  return (
    <View style={styles.infoBoxHeader}>
      <Image
        source={models.characters[char.factions[0].name.toLowerCase()].model}
        resizeMode={'contain'}
        style={[
          styles.image,
          {
            height:
              models.characters[char.factions[0].name.toLowerCase()].homeHeight,
            width:
              models.characters[char.factions[0].name.toLowerCase()].homeWidth,
          },
        ]}
      />
      <View style={styles.charName}>
        <Text style={styles.charNameDisplay}>{char.name}</Text>
        <GoldDisplay
          type={'coin'}
          goldValue={char.gold}
          height={20}
          width={20}
          fontSize={20}
          alignSelf={'flex-end'}
          marginBottom={1}
        />
      </View>
    </View>
  );
};

export default HomeCharDisplay;

const styles = StyleSheet.create({
  charName: {
    justifyContent: 'flex-end',
  },
  image: {
    height: 156,
    width: 167,
  },
  charNameDisplay: {
    color: 'white',
    fontSize: 26,
    fontWeight: '700',
    fontFamily: 'Poppins-Regular',
    marginBottom: 5,
  },

  infoBoxHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 110,
  },
  goldDisplayBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
