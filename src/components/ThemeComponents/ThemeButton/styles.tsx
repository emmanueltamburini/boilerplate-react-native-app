import {StyleSheet, StyleProp, ViewStyle, TextStyle} from 'react-native';
import {ThemeState} from '../../../context/Theme/themeReducer';
import {globalStyles} from '../../../theme/appTheme';

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
      ...globalStyles().shadow,
      ...(style as any),
    },
    text: {
      fontSize: 18,
      color,
      ...(textStyle as any),
    },
  });
};
