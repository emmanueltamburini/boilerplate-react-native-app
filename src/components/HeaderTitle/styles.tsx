import {StyleSheet} from 'react-native';

export const stylesFunction = (top: number, bottom: number) =>
  StyleSheet.create({
    header: {
      marginTop: top + 20,
      marginBottom: bottom,
    },
  });
