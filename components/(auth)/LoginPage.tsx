import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { EmailField, PasswordField } from 'utilities/components/InputField';
const { width, height } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
import WaveBackground from 'utilities/components/background/WaveBackground';
import WalleRobot from 'utilities/components/images/WalleRobot';
import KeyboardAvoidingViewComp from 'utilities/components/KeyboardAvoidingView';
import Button from 'utilities/components/buttons/Button';

const LoginPage = () => {
  return <KeyboardAvoidingViewComp Component={LoginView}></KeyboardAvoidingViewComp>;
};

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  return (
    <LinearGradient colors={['#0f172a', '#1e3a8a', '#4f46e5']} style={styles.container}>
      <WaveBackground />
      <WalleRobot />
      <BlurView intensity={20} style={styles.formContainer}>
        <Text style={styles.title}> Welcome</Text>
        <Text style={styles.subtitle}>Login to continue your journey</Text>
        <EmailField value={email} handleChangeText={setEmail}></EmailField>
        <PasswordField value={password} handleChangeText={setPassword}></PasswordField>

        <Button text="Login" onButtonPress={() => navigation.navigate('Signup')}></Button>

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </BlurView>
    </LinearGradient>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animationContainer: {
    width: width * 0.8,
    height: width * 0.8,
    marginBottom: 20,
  },
  animation: {
    width: '100%',
    height: '100%',
  },
  formContainer: {
    width: width * 0.9,
    padding: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 30,
    textAlign: 'center',
  },

  forgotPassword: {
    marginTop: 16,
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: 'white',
    fontSize: 14,
  },
});

export default LoginPage;
