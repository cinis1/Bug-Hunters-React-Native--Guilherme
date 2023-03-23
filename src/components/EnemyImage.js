import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const EnemyImage = ({name, enemy = true}) => {
  return (
    <View style={styles.enemyBox}>
      {enemy && (
        <Image
          resizeMode="contain"
          style={styles.enemyImage}
          source={require('../assets/images/bug.png')}
        />
      )}
      <View style={styles.enemyNameBox}>
        {name && <Text style={styles.enemyName}>{name}</Text>}
      </View>
    </View>
  );
};

export default EnemyImage;

const styles = StyleSheet.create({
  enemyBox: {
    justifyContent: 'center',
    alignItems: 'center',
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
    fontFamily: 'Poppins-Regular',
  },
});
