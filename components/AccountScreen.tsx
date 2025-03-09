import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account</Text>
      <View style={styles.levelContainer}>
        <Ionicons name="star" size={24} color="gold" />
        <Text style={styles.levelText}>Lvl: 6</Text>
      </View>
      {/* Additional account details can be added here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#45b6fe',
  },
  title: {
    fontSize: 24,
    color: 'black',
    marginBottom: 20,
  },
  levelContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    position: 'absolute',
    right: 20,
    top: 50,
  },
  levelText: {
    color: 'white',
    fontSize: 18,
  },
});

export default AccountScreen;
