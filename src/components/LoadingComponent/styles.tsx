import {ScaledSize, StyleSheet} from 'react-native';
import {ThemeState} from '../../context/Theme/themeReducer';

export const stylesFunction = (
  theme: ThemeState,
  windowDimension: ScaledSize,
  opacity: number,
) =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
      height: windowDimension.height,
      width: windowDimension.width,
      zIndex: 9999,
      opacity,
    },
  });
