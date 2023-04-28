import {StyleSheet, StyleProp, TextStyle} from 'react-native';
import {ThemeState} from '../../context/Theme/themeReducer';

export const stylesFunction = (
  theme: ThemeState,
  style?: StyleProp<TextStyle>,
  ignoreTheme?: boolean,
) => {
  const currentStyle = style ? style : {};

  const color = ignoreTheme ? undefined : theme.text;

  return StyleSheet.create({
    text: {
      color,
      ...(currentStyle as any),
    },
  });
};
