import {StyleSheet, StyleProp, TextStyle} from 'react-native';
import {ThemeState} from '../../context/themeReducer';

export const stylesFunction = (
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
