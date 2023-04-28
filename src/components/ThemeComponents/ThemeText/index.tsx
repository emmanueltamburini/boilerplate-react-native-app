import React, {useContext} from 'react';
import {Text, StyleProp, TextStyle} from 'react-native';
import {ThemeContext} from '../../../context/Theme/ThemeContext';
import {stylesFunction} from './styles';

interface Props {
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  ignoreTheme?: boolean;
  useContrastColor?: boolean;
}

export const ThemeText = ({
  style,
  children,
  ignoreTheme,
  useContrastColor,
}: Props) => {
  const {theme} = useContext(ThemeContext);
  const styles = stylesFunction(theme, style, ignoreTheme, useContrastColor);

  return <Text style={styles.text}>{children}</Text>;
};
