import {StyleSheet} from 'react-native';
import {ThemeState} from '../../context/Theme/themeReducer';

export const stylesFunction = (theme: ThemeState) =>
  StyleSheet.create({
    separator: {
      borderBottomWidth: 1,
      opacity: 0.5,
      marginVertical: 8,
      borderBottomColor: theme.opacityContrastColor,
    },
  });
