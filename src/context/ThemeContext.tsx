import React, {createContext, useEffect, useMemo, useReducer} from 'react';
import {ThemeState, darkTheme, lightTheme, themeReducer} from './themeReducer';
import {useColorScheme} from 'react-native';

interface Props {
  children: JSX.Element | JSX.Element[];
}

interface ContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

const providerValueDummy = {
  theme: {...lightTheme},
  setDarkTheme: () => {},
  setLightTheme: () => {},
};

export const ThemeContext = createContext<ContextProps>({
  ...providerValueDummy,
});

export const ThemeProvider = ({children}: Props) => {
  const colorScheme = useColorScheme();
  const [theme, dispatch] = useReducer(
    themeReducer,
    colorScheme === 'dark' ? {...darkTheme} : {...lightTheme},
  );

  useEffect(() => {
    colorScheme === 'light' ? setLightTheme() : setDarkTheme();
  }, [colorScheme]);

  const setDarkTheme = () => dispatch({type: 'SET_DARK_THEME'});
  const setLightTheme = () => dispatch({type: 'SET_LIGHT_THEME'});

  const providerValue = useMemo(
    () => ({
      theme,
      setDarkTheme,
      setLightTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
};
