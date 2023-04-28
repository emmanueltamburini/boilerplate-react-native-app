import 'react-native-gesture-handler';
import React from 'react';
import {Navigator} from './src/navigator/Navigator';
import {ThemeProvider} from './src/context/Theme/ThemeContext';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const App = () => {
  return (
    <AppState>
      <Navigator />
    </AppState>
  );
};

const AppState = ({children}: Props) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
