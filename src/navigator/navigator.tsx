import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeContext} from '../context/ThemeContext';
import {TestScreen} from '../screens/TestScreen';
import {PermissionScreen} from '../screens/PermissionScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  TestScreen: undefined;
  PermissionScreen: undefined;
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
        <Stack.Screen name="PermissionScreen" component={PermissionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
