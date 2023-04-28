import {StyleSheet, StyleProp, ViewStyle, TextStyle} from 'react-native';
import {ThemeState} from '../../context/Theme/themeReducer';

export const stylesFunction = (
  style: StyleProp<ViewStyle>,
  theme: ThemeState,
  ignoreTheme?: boolean,
  useContrastColor?: boolean,
  textStyle?: StyleProp<TextStyle>,
) => {
  let backgroundColor = ignoreTheme ? undefined : theme.primary;
  let color = ignoreTheme ? undefined : theme.text;

  if (useContrastColor) {
    backgroundColor = theme.text;
    color = theme.background;
  }

  return StyleSheet.create({
    container: {
      width: 200,
      height: 45,
      backgroundColor,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 7.49,
      elevation: 6,
      ...(style as any),
    },
    text: {
      fontSize: 18,
      color,
      ...(textStyle as any),
    },
  });
};
