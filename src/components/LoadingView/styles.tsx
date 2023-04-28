import {StyleProp, StyleSheet, ViewStyle} from 'react-native';

export const stylesFunction = (style?: StyleProp<ViewStyle>) =>
  StyleSheet.create({
    container: {
      flex: 1,
      ...(style as any),
    },
  });
