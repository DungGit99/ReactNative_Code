/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon, { Icons } from '../components/Icons';
import Colors from '../constants/Colors';
const TabArr = [
  {
    route: 'Home',
    label: 'Home',
    type: Icons.Feather,
    icon: 'home',
    component: HomeScreen,
  },
  {
    route: 'Search',
    label: 'Search',
    type: Icons.Feather,
    icon: 'search',
    component: LikeScreen,
  },
  {
    route: 'Add',
    label: 'Add',
    type: Icons.Feather,
    icon: 'plus-square',
    component: SearchScreen,
  },
  {
    route: 'Like',
    label: 'Like',
    type: Icons.Feather,
    icon: 'heart',
    component: AccountScreen,
  },
  {
    route: 'Account',
    label: 'Account',
    type: Icons.FontAwesome,
    icon: 'user-circle-o',
    component: AccountScreen,
  },
];
const Tab = createBottomTabNavigator();
const TabButton = props => {
  //Function which returns a React element to render as the tab bar button. It wraps the icon and label. Renders Pressable by default.
  const {item, onPress, accessibilityState} = props; // tabBarButton: (props) => <TouchableOpacity {...props} />;
  const focused = accessibilityState.selected;
  const viewRef = useRef<any>(null);
  const circleRef = useRef<any>(null);
  const textRef = useRef<any>(null);
  const {colors} = useTheme(); // import { useTheme } from '@react-navigation/native';
  const color = Colors.white;
  const bgColor = colors.background;
  const animate1 = {
    0: {scale: 0.5, translateY: 7},
    // 0.92: {translateY: -34},
    1: {scale: 1.2, translateY: -24},
  };
  const animate2 = {
    0: {scale: 1.2, translateY: -24},
    1: {scale: 1, translateY: 7},
  };

  const circle1 = {
    0: {scale: 0},
    // 0.3: {scale: 0.9},
    // 0.5: {scale: 0.2},
    0.8: {scale: 0.7},
    1: {scale: 1},
  };
  const circle2 = {0: {scale: 1}, 1: {scale: 0}};

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({scale: 1});
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({scale: 0});
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
        <View
          style={[
            styles.btn,
            {borderColor: bgColor, backgroundColor: bgColor},
          ]}>
          <Animatable.View ref={circleRef} style={styles.circle} />
          <Icon
            type={item.type}
            name={item.icon}
            color={focused ? Colors.white : Colors.primary}
          />
        </View>
        <Animatable.Text ref={textRef} style={[styles.text]}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

export default function AnimTab2() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
  },
  tabBar: {
    height: 70,
    position: 'absolute',
    margin: 16,
    borderRadius: 16,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 25,
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    color: Colors.primary,
    fontWeight: '500',
  },
});

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home! 2</Text>
    </View>
  );
}
function LikeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Like! 2</Text>
    </View>
  );
}
function SearchScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Search! 2</Text>
    </View>
  );
}

function AccountScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Account! 2</Text>
    </View>
  );
}
