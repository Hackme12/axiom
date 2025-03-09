import { StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';

const WalleRobot = () => {
  return (
    <Image
      source={require('assets/images/walle_tran.png')}
      style={styles.topImage}
      resizeMode="contain"
    />
  );
};

export default WalleRobot;

const styles = StyleSheet.create({
  topImage: {
    marginBottom: 0,
    top: 0,
  },
});
