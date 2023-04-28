import {StyleSheet, StyleProp, TextStyle} from 'react-native';
import {ThemeState} from '../../../context/Theme/themeReducer';

export const stylesFunction = (
  theme: ThemeState,
  style?: StyleProp<TextStyle>,
  ignoreTheme?: boolean,
  useContrastColor?: boolean,
) => {
  const currentStyle = style ? style : {};

  let color = ignoreTheme ? undefined : theme.text;

  if (useContrastColor) {
    color = theme.background;
  }

  return StyleSheet.create({
    text: {
      color,
      ...(currentStyle as any),
    },
  });
};
