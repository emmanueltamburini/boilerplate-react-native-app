import 'react-native-gesture-handler';
import React from 'react';
import {Navigator} from './src/navigator/navigator';
import {ThemeProvider} from './src/context/ThemeContext';
import {PermissionProvider} from './src/context/PermissionContext';

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
  return (
    <PermissionProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </PermissionProvider>
  );
};
