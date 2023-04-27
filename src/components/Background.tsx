import React, {useContext} from 'react';
import {View, StyleSheet, useWindowDimensions, ScaledSize} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';
import {ThemeState} from '../context/themeReducer';
import {bigWidthScreen} from '../helpers/utils';

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

const stylesFunction = (theme: ThemeState, dimensions: ScaledSize) => {
  const width = bigWidthScreen(dimensions)
    ? dimensions.width * 1.4
    : dimensions.width * 2.1;
  const height = bigWidthScreen(dimensions)
    ? dimensions.height * 2.4
    : dimensions.height * 1.4;

  const rotate = bigWidthScreen(dimensions) ? '-150deg' : '-60deg';
  const top = bigWidthScreen(dimensions) ? -550 : -250;
  const right = bigWidthScreen(dimensions) ? -300 : undefined;

  return StyleSheet.create({
    containerAllColor: {
      position: 'absolute',
      backgroundColor: theme.colors.primary,
      width,
      height,
    },
    container: {
      position: 'absolute',
      backgroundColor: theme.colors.primary,
      top,
      right,
      width,
      height,
      transform: [{rotate}],
    },
  });
};
