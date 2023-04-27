import React, {useContext} from 'react';
import {Text, StyleProp, TextStyle} from 'react-native';
import {ThemeContext} from '../../context/ThemeContext';
import {stylesFunction} from './styles';

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
