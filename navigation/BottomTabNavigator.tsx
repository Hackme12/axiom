// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import * as React from 'react';

// import HomeScreen from 'components/HomeScreen';
// import PostScreen from 'components/PostScreen';
// import ReelsScreen from 'components/ReelsScreen';
// import SearchScreen from 'components/SearchScreen';
// import AccountScreen from 'components/AccountScreen';
// import WaveBackground from 'utilities/components/background/WaveBackground';

// const BottomTab = createBottomTabNavigator();

// export default function BottomTabNavigator() {
//   return (
//     <BottomTab.Navigator
//       initialRouteName="SearchScreen"
//       screenOptions={{
//         tabBarActiveTintColor: '#0f178a',
//         headerStyle: { backgroundColor: '#0f172a' },
//       }}>
//       <BottomTab.Screen name="PostScreen" component={PostScreen} options={{ headerShown: false }} />

//       <BottomTab.Screen
//         name="ReelsScreen"
//         component={ReelsScreen}
//         options={{ headerShown: false }}
//       />
//       <BottomTab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />

//       <BottomTab.Screen
//         name="SearchScreen"
//         component={SearchScreen}
//         options={{ headerShown: false }}
//       />
//       <BottomTab.Screen
//         name="AccountScreen"
//         component={AccountScreen}
//         options={{ headerShown: false }}
//       />
//     </BottomTab.Navigator>
//   );
// }
