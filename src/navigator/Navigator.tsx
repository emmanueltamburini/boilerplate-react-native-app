import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeContext} from '../context/Theme/ThemeContext';
import {TestScreen} from '../screens/TestScreen';
import {TestScreen2} from '../screens/TestScreen2';
import {TestScreen3} from '../screens/TestScreen3';
import {TestScreen4} from '../screens/TestScreen4';

export type RootStackParams = {
  HomeScreen: undefined;
  TestScreen: undefined;
  TestScreen2: undefined;
  TestScreen3: undefined;
  TestScreen4: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="TestScreen" component={TestScreen} />
        <Stack.Screen name="TestScreen2" component={TestScreen2} />
        <Stack.Screen name="TestScreen3" component={TestScreen3} />
        <Stack.Screen name="TestScreen4" component={TestScreen4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
