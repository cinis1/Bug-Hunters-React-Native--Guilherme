import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const QuestScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text>{'<'}</Text>
        </TouchableOpacity>
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require('../assets/images/logo.png')}
        />
      </View>
      <View style={styles.titleView}>
        <Text style={styles.title}>Quests</Text>
      </View>
      <View style={styles.questBoard}>
        <View style={styles.questBox}>
          <Text style={styles.questName}>Gehrman</Text>
          <View style={styles.contentBox}>
            <View style={styles.goldBox}>
              <Image
                resizeMode="contain"
                style={styles.goldIcon}
                source={require('../assets/images/gold.png')}
              />
              <Text style={styles.goldValue}>666</Text>
            </View>
            <TouchableOpacity style={styles.playButton}>
              <Text style={styles.playButtonLabel}>{'>'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.questBox}>
          <Text style={styles.questName}>Gehrman</Text>
          <View style={styles.contentBox}>
            <View style={styles.goldBox}>
              <Image
                resizeMode="contain"
                style={styles.goldIcon}
                source={require('../assets/images/gold.png')}
              />
              <Text style={styles.goldValue}>666</Text>
            </View>
            <TouchableOpacity style={styles.playButton}>
              <Text style={styles.playButtonLabel}>{'>'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default QuestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleView: {
    marginBottom: 10,
  },
  backButton: {
    position: 'absolute',
    left: 0,
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2E2635',
  },

  logo: {
    height: 100,
    width: 100,
  },
  title: {
    fontWeight: '700',
    fontSize: 32,
    color: 'white',
  },
  questBoard: {
    flex: 1,
  },
  questBox: {
    marginTop: 10,
    backgroundColor: '#2E2635',
    width: '100%',
    height: 125,
    borderRadius: 10,
    padding: 15,
    paddingTop: 20,
  },
  questName: {
    fontWeight: '700',
    fontSize: 25,
    color: 'white',
    marginBottom: 10,
  },
  contentBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  goldBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  goldIcon: {
    height: 50,
    width: 70,
  },
  goldValue: {
    fontSize: 25,
    color: 'gold',
    marginLeft: 10,
    fontWeight: '700',
  },
  playButton: {
    backgroundColor: '#EC2127',
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
