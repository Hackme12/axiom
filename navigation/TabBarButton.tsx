import { Pressable, StyleSheet, View, Text } from 'react-native';
import React, { useEffect } from 'react';

import { PlatformPressable } from '@react-navigation/elements';

import Feather from 'react-native-vector-icons/Feather';

import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

const TabBarButtton = ({
  onPress,
  onLongPress,
  isFocused,
  routeName,
  color,
  label,
  buttonKey,
}: {
  onPress: () => void;
  onLongPress: () => void;
  isFocused: boolean;
  routeName: string;
  color: string;
  label: string;
  buttonKey: string;
}) => {
  console.log('dddddsaaad');
  const { colors } = useTheme();

  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(typeof isFocused === 'boolean' ? (isFocused ? 1 : 0) : isFocused, {
      duration: 350,
    });
  }, [scale, isFocused]);

  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [0, 1]);
    //  transform: [{ scale: scale.value }],
    return {
      opacity,
    };
  });
  console.log('fff');

  return (
    <Pressable
      key={buttonKey}
      accessibilityState={isFocused ? { selected: true } : {}}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabbarItems}>
      <TabWithIcon name={routeName} />

      <Text style={[{ color: isFocused ? colors.primary : colors.text }]}>{label}</Text>
    </Pressable>
  );
};

type TabWithIconProps = {
  name: string;
};

const TabWithIcon = ({ name }: TabWithIconProps) => {
  const iconName = name.toLowerCase();
  if (iconName === 'account') {
    return <Feather name="user" size={24} color={'#224'} />;
  }
  return <Feather name={iconName} size={24} color={'#224'} />;
};

export default TabBarButtton;

const styles = StyleSheet.create({
  tabbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
    backgroundColor: '#fff',
    marginHorizontal: 70,
    paddingVertical: 5,
    borderRadius: 35,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
  },
  tabbarItems: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
});
function interpolate(value: number, input: number[], output: number[]) {
  const inputRange = input;
  const outputRange = output;

  const inputMin = inputRange[0];
  const inputMax = inputRange[inputRange.length - 1];
  const outputMin = outputRange[0];
  const outputMax = outputRange[outputRange.length - 1];

  if (value < inputMin) {
    return outputMin;
  }

  if (value > inputMax) {
    return outputMax;
  }

  const percentage = (value - inputMin) / (inputMax - inputMin);
  const result = outputMin + percentage * (outputMax - outputMin);

  return result;
}
