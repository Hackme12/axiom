import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import * as AppleAuthentication from 'expo-apple-authentication';
import * as Google from 'expo-auth-session/providers/google';
import WaveBackground from 'utilities/components/background/WaveBackground';
import { EmailField, PasswordField, ConfirmPasswordField } from 'utilities/components/InputField';

import { BlurView } from 'expo-blur';
import KeyboardAvoidingViewComp from 'utilities/components/KeyboardAvoidingView';
import Button from 'utilities/components/buttons/Button';

import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const SignupPage = () => {
  return <KeyboardAvoidingViewComp Component={SignupView}></KeyboardAvoidingViewComp>;
};

const SignupView = () => {
  debugger;
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handleSignUp = () => {
    // Implement your signup logic here
    console.log('Sign up with:', email, password);
  };

  const handleGoogleSignUp = async () => {
    // Implement Google sign-up logic
    try {
      // Add your Google authentication logic here
    } catch (error) {
      console.error('Google sign-up error:', error);
    }
  };

  const handleAppleSignUp = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });
      // Handle successful Apple sign-up
      console.log(credential);
    } catch (error) {
      console.error('Apple sign-up error:', error);
    }
  };
  return (
    <LinearGradient colors={['#0f172a', '#1e3a8a', '#4f46e5']} style={styles.container}>
      <WaveBackground />
      {/* Login Form */}
      <BlurView intensity={20} style={styles.formContainer}>
        <Text style={styles.title}>Create Account</Text>

        <EmailField value={email} handleChangeText={setEmail}></EmailField>
        <PasswordField value={password} handleChangeText={setPassword}></PasswordField>
        <ConfirmPasswordField
          value={confirmPassword}
          handleChangeText={setConfirmPassword}></ConfirmPasswordField>

        <Button text="Sign Up" onButtonPress={() => navigation.navigate('(tabs)')}></Button>
        {/* <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity> */}

        <View style={styles.divider}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity style={styles.socialButton} onPress={handleGoogleSignUp}>
          <Text style={styles.socialButtonText}>Sign up with Google</Text>
        </TouchableOpacity>

        <AppleAuthentication.AppleAuthenticationButton
          buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_UP}
          buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.WHITE}
          cornerRadius={10}
          style={styles.appleButton}
          onPress={handleAppleSignUp}
        />
      </BlurView>

      <TouchableOpacity onPress={() => router.push('/login')}>
        <Text style={styles.loginLink}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: width * 0.9,
    padding: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
    textAlign: 'center',
  },
  signupButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'white',
  },
  orText: {
    color: 'white',
    marginHorizontal: 10,
  },
  socialButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  socialButtonText: {
    color: '#000',
    textAlign: 'center',
    fontSize: 16,
  },
  appleButton: {
    height: 44,
    width: '100%',
    marginBottom: 10,
  },
  loginLink: {
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default SignupPage;
