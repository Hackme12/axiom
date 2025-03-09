import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from 'components/HomeScreen.tsx';
import PostScreen from 'components/PostScreen';
import MyTabBar from 'navigation/TabBar.tsx'; // Import your custom tab bar
import ReelsScreen from 'components/ReelsScreen';
import SearchScreen from 'components/SearchScreen';
import AccountScreen from 'components/AccountScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
