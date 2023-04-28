import {Theme} from '@react-navigation/native';

type ThemeAction = {type: 'SET_LIGHT_THEME'} | {type: 'SET_DARK_THEME'};

export interface ThemeState extends Theme {
  primary: string;
  background: string;
  card: string;
  text: string;
  border: string;
  notification: string;
  currentTheme: 'light' | 'dark';
  opacityColor: string;
  opacityContrastColor: string;
  secondary: string;
  danger: string;
  success: string;
  alert: string;
}

const lightColors = {
  primary: '#084F6A',
  background: 'white',
  card: 'white',
  text: 'black',
  border: 'black',
  notification: 'teal',
};

const darkColors = {
  primary: '#75CEDB',
  background: 'black',
  card: 'black',
  text: 'white',
  border: 'white',
  notification: 'teal',
};

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  opacityColor: 'rgba(255,255,255,0.4)',
  opacityContrastColor: 'rgba(0,0,0,0.4)',
  ...lightColors,
  secondary: '#75CEDB',
  danger: 'red',
  success: 'green',
  alert: 'yellow',
  colors: {...lightColors},
};

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  opacityColor: 'rgba(0,0,0,0.4)',
  opacityContrastColor: 'rgba(255,255,255,0.4)',
  ...darkColors,
  secondary: '#084F6A',
  danger: 'red',
  success: 'green',
  alert: 'yellow',
  colors: {...darkColors},
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'SET_LIGHT_THEME':
      return {...lightTheme};

    case 'SET_DARK_THEME':
      return {...darkTheme};

    default:
      return state;
  }
};
