import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReelsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reels</Text>
      <Text style={styles.content}>Content for the Reels tab will go here.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    color: 'white',
  },
  content: {
    fontSize: 16,
    color: 'gray',
  },
});

export default ReelsScreen;
