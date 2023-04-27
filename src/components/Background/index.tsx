import React, {useContext} from 'react';
import {View, useWindowDimensions} from 'react-native';
import {ThemeContext} from '../../context/ThemeContext';
import {stylesFunction} from './styles';

interface Props {
  allColor?: boolean;
}

export const Background = ({allColor}: Props) => {
  const {theme} = useContext(ThemeContext);
  const dimensions = useWindowDimensions();
  const styles = stylesFunction(theme, dimensions);

  return allColor ? (
    <View style={styles.containerAllColor} />
  ) : (
    <View style={styles.container} />
  );
};
