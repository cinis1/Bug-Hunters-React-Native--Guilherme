import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../components/header';
const StartBattle = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.enemyBox}>
        <Image
          resizeMode="contain"
          style={styles.enemyImage}
          source={require('../assets/images/bug.png')}
        />
        <View style={styles.enemyNameBox}>
          <Text style={styles.enemyName}>Gehrman</Text>
        </View>
      </View>
      <View style={styles.enemyStatsBox}>
        <View style={styles.statBox}>
          <Image
            resizeMode="contain"
            style={styles.statIcon}
            source={require('../assets/images/icon-sword.png')}
          />
          <Text style={styles.statValue}>50</Text>
        </View>
        <View style={styles.statBox}>
          <Image
            resizeMode="contain"
            style={styles.statIcon}
            source={require('../assets/images/icon-shield.png')}
          />
          <Text style={styles.statValue}>50</Text>
        </View>
        <View style={styles.statBox}>
          <Image
            resizeMode="contain"
            style={styles.statIcon}
            source={require('../assets/images/icon-heart.png')}
          />
          <Text style={styles.statValue}>50</Text>
        </View>
        <View style={styles.statBox}>
          <Image
            resizeMode="contain"
            style={styles.statIcon}
            source={require('../assets/images/icon-sword.png')}
          />
          <Text style={styles.statValue}>50</Text>
        </View>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.goldBox}>
          <Image
            resizeMode="contain"
            style={styles.statIcon}
            source={require('../assets/images/gold.png')}
          />
          <Text style={styles.goldValue}>69</Text>
        </View>
        <TouchableOpacity style={styles.fightButton}>
          <Text style={styles.buttonLabel}>Lutar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StartBattle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#11081A',
  },
  enemyBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  enemyStatsBox: {
    flexDirection: 'row',
    marginTop: 20,
  },
  bottomView: {
    justifyContent: 'flex-end',
    flex: 1,
  },

  enemyImage: {
    width: 331,
    height: 275,
  },
  enemyNameBox: {
    width: '100%',
    height: 54,
    borderRadius: 10,
    backgroundColor: '#2E2635',
    alignItems: 'center',
    justifyContent: 'center',
  },
  enemyName: {
    fontWeight: '600',
    color: 'white',
    fontSize: 20,
  },
  fightButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EC2127',
    height: 48,
    borderRadius: 10,
    width: '100%',
  },
  buttonLabel: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    color: 'white',
  },
  statBox: {
    flex: 1,
    height: 50,
    width: 50,

    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginRight: 10,
  },
  statIcon: {
    height: 50,
    width: 50,
  },
  statValue: {
    color: 'white',
    fontWeight: '900',
    fontSize: 24,
  },
  goldBox: {
    flexDirection: 'row',
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
