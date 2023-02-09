import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const MainButton = ({
  type = 'primary',
  label,
  marginTop = 0,
  marginBottom = 0,
  onPress,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.mainButton,
        {
          backgroundColor: type === 'primary' ? '#EC2127' : '#11081A',
          borderColor: type === 'primary' ? '#EC2127' : 'white',
          marginTop: marginTop,
          marginBottom: marginBottom,
        },
      ]}>
      {isLoading ? (
        <ActivityIndicator animating />
      ) : (
        <Text style={styles.mainLabel}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  mainButton: {
    width: '100%',
    backgroundColor: '#EC2127',
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
  },
  mainLabel: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    color: 'white',
    alignSelf: 'center',
  },
});
