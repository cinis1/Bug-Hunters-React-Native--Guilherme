import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const EnemyStatsDisplay = () => {
  return (
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
  );
};

export default EnemyStatsDisplay;

const styles = StyleSheet.create({
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
  enemyStatsBox: {
    flexDirection: 'row',
    marginTop: 20,
  },
});
