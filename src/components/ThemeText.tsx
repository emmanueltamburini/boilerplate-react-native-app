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
  return ignoreTheme
    ? StyleSheet.create({
        text: {
          ...(currentStyle as any),
        },
      })
    : StyleSheet.create({
        text: {
          ...(currentStyle as any),
          color: theme.colors.text,
        },
      });
};
