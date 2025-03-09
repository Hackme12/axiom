import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

interface BtnProps {
  text: string;
  onButtonPress?: () => void;
}
const Button = ({ text, onButtonPress }: BtnProps) => {
  return (
    <TouchableOpacity style={styles.loginButton} onPress={onButtonPress}>
      <Text style={styles.loginButtonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: '#F7B731',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 24,
  },
  loginButtonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
