import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';

const CharacterInformation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.goBackButton}>
          <Text>{'<'}</Text>
        </TouchableOpacity>

        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require('../assets/images/logo.png')}
        />
      </View>
      <View style={styles.charInfoBox}>
        <View style={styles.infoBoxHeader}>
          <View style={styles.charNameView}>
            <Text style={styles.charNameDisplay}>Caneta Azul</Text>
          </View>
          <View style={styles.goldDisplayBox}>
            <Image
              resizeMode="contain"
              style={styles.goldIcon}
              source={require('../assets/images/coin.png')}
            />
            <Text style={styles.goldDisplay}>80</Text>
          </View>
        </View>
        <View style={styles.statsBox}>
          <View style={styles.statsBoxContent}>
            <View style={styles.statAndNameBox}>
              <Image
                resizeMode="contain"
                style={styles.statIcon}
                source={require('../assets/images/icon-sword.png')}
              />
              <Text style={styles.statName}>Ataque</Text>
            </View>
            <Text style={styles.statValue}>80</Text>
          </View>
          <View style={styles.statsBoxContent}>
            <View style={styles.statAndNameBox}>
              <Image
                resizeMode="contain"
                style={styles.statIcon}
                source={require('../assets/images/icon-shield.png')}
              />
              <Text style={styles.statName}>Defesa</Text>
            </View>
            <Text style={styles.statValue}>80</Text>
          </View>
          <View style={styles.statsBoxContent}>
            <View style={styles.statAndNameBox}>
              <Image
                resizeMode="contain"
                style={styles.statIcon}
                source={require('../assets/images/icon-heart.png')}
              />
              <Text style={styles.statName}>Vida</Text>
            </View>
            <Text style={styles.statValue}>80</Text>
          </View>
          <View style={styles.statsBoxContent}>
            <View style={styles.statAndNameBox}>
              <Image
                resizeMode="contain"
                style={styles.statIcon}
                source={require('../assets/images/icon-sword.png')}
              />
              <Text style={styles.statName}>Agilidade</Text>
            </View>
            <Text style={styles.statValue}>80</Text>
          </View>
        </View>
      </View>
      <View style={styles.navigationBox}>
        <TouchableOpacity style={styles.storeButton}>
          <View style={styles.storeIconBox}>
            <Image
              style={styles.storeIcon}
              resizeMode="contain"
              source={require('../assets/images/treasure.png')}
            />
          </View>
          <View style={styles.storeBLabelBox}>
            <Text style={styles.storeBLabel}>Loja</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.questsButton}>
          <View style={styles.questsIconBox}>
            <Image
              style={styles.questsIcon}
              resizeMode="contain"
              source={require('../assets/images/quest.png')}
            />
          </View>
          <View style={styles.questsBLabelBox}>
            <Text style={styles.questsBLabel}>Quests</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  charInfoBox: {
    flex: 1,
    width: '100%',
  },
  navigationBox: {
    flex: 1,
    //top: 300,
    justifyContent: 'flex-end',
  },
  statsBox: {
    //flex: 1,
    width: '100%',
    backgroundColor: '#2E2635',
    borderRadius: 10,
  },
  statsBoxContent: {
    height: 40,
    borderTopWidth: 1,
    borderColor: '#11081A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  statIcon: {
    height: 20,
    width: 20,
  },
  statName: {
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
    fontWeight: '600',
  },
  statValue: {
    color: 'white',
    fontSize: 20,
  },
  statAndNameBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  charNameDisplay: {
    color: 'white',
    fontSize: 32,
    fontWeight: '700',
  },

  goBackButton: {
    position: 'absolute',
    left: 0,
    borderRadius: 25,
    width: 50,
    height: 50,
    backgroundColor: '#2E2635',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 80,
    width: 80,
    alignSelf: 'center',
  },
  storeButton: {
    backgroundColor: '#2E2635',

    width: '100%',
    height: 90,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  storeBLabel: {
    fontSize: 25,
    fontWeight: '900',
    color: 'white',
  },
  storeBLabelBox: {
    justifyContent: 'center',
  },

  storeIcon: {
    height: 105,
    width: 135,
  },
  questsButton: {
    backgroundColor: '#2E2635',
    marginTop: 40,
    width: '100%',
    height: 90,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },

  questsBLabel: {
    fontSize: 25,
    fontWeight: '900',
    color: 'white',
  },
  questsBLabelBox: {
    justifyContent: 'center',
  },

  questsIcon: {
    height: 110,
    width: 110,
  },
  infoBoxHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  goldDisplayBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  goldDisplay: {
    fontSize: 24,
    fontWeight: '700',
    color: 'gold',
    marginLeft: 10,
  },
  goldIcon: {
    height: 20,
    width: 20,
  },
  charNameView: {},
});
export default CharacterInformation;
