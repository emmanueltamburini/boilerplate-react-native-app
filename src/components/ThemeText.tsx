import React, {useContext} from 'react';
import {Text, StyleSheet, StyleProp, TextStyle} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';
import {ThemeState} from '../context/themeReducer';

interface Props {
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  ignoreTheme?: boolean;
}

export const ThemeText = ({style, children, ignoreTheme}: Props) => {
  const {theme} = useContext(ThemeContext);
  const styles = stylesFunction(theme, style, ignoreTheme);

  return <Text style={styles.text}>{children}</Text>;
};

const stylesFunction = (
  theme: ThemeState,
  style?: StyleProp<TextStyle>,
  ignoreTheme?: boolean,
) => {
  const currentStyle = style ? style : {};

  const color = ignoreTheme ? 'white' : theme.colors.text;

  return StyleSheet.create({
    text: {
      color,
      ...(currentStyle as any),
    },
  });
};
