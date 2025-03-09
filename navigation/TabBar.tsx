import { View, Text, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import Feather from 'react-native-vector-icons/Feather';

type TabWithIconProps = {
  name: string;
  isFocused: boolean;
};

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.key}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.tabItem]}>
            <TabWithIcon name={route.name} isFocused={true} />
            {!isFocused && (
              <Text style={[styles.label, { color: !isFocused ? '#800080' : '#000000' }]}>
                {label}
              </Text>
            )}
          </PlatformPressable>
        );
      })}
    </View>
  );
};

const TabWithIcon = ({ name, isFocused }: TabWithIconProps) => {
  const iconName = name.toLowerCase();
  if (iconName === 'account') {
    return <Feather name="user" size={24} color={isFocused ? 'blue' : '#000000'} />;
  }
  return <Feather name={iconName} size={24} color={isFocused ? 'blue' : '#000000'} />;
};

// Styles
const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    backgroundColor: '#ffffff',
    //backgroundColor: '#ABB8E170',
    marginHorizontal: 70,
    paddingVertical: 5,
    borderRadius: 35,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },

  label: {
    fontSize: 10,
    fontFamily: 'sans-serif',
  },
});

export default TabBar;
