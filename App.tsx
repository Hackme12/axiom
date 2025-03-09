import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from 'components/(auth)/LoginPage';
import SignupPage from 'components/(auth)/SignupPage';
import HomeScreen from 'components/HomeScreen';
import BottomTabs from 'navigation/BottomTabs';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#0f172a' }, // Deep Blue
          headerTintColor: '#FFF', // Ensures text/icons are readable
        }}>
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{
            title: 'Login',
            headerShown: false,
          }}
        />
        <Stack.Screen name="Signup" component={SignupPage} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="(tabs)" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
