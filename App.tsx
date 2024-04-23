/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';

import { CardStyleInterpolators } from '@react-navigation/stack';
import { Provider } from 'react-native-paper';

import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import AnimTab1 from './src/bottomTab/AnimTab1';
import AnimTab2 from './src/bottomTab/AnimTab2';
import AnimTab3 from './src/bottomTab/AnimTab3';
import Home from './src/screens/Home';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   flex: 1,
  //   backgroundColor: isDarkMode ? Colors.black : Colors.white,
  // };

  return (
    <Provider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
}
const Stack = createSharedElementStackNavigator();
const options = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false,
};

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'React-Native Ui', headerShown: true}}
      />
      <Stack.Screen
        name="Tab1"
        component={AnimTab1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Tab2"
        component={AnimTab2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Tab3"
        component={AnimTab3}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({});

export default App;
