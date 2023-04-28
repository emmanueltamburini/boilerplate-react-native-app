import {StyleProp, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {ThemeState} from '../../../context/Theme/themeReducer';

export const stylesFunction = (
  theme: ThemeState,
  containerStyle?: StyleProp<ViewStyle>,
  labelStyle?: StyleProp<TextStyle>,
  textStyle?: StyleProp<TextStyle>,
  ignoreTheme?: boolean,
  useContrastColor?: boolean,
) => {
  let borderColor = ignoreTheme ? undefined : theme.opacityContrastColor;
  let color = ignoreTheme ? undefined : theme.text;

  if (useContrastColor) {
    borderColor = theme.opacityColor;
    color = theme.background;
  }

  return StyleSheet.create({
    container: {
      ...(containerStyle as any),
    },
    label: {
      fontSize: 18,
      marginVertical: 15,
      ...(labelStyle as any),
    },
    textInput: {
      borderWidth: 1,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 20,
      borderColor,
      height: 45,
      color,
      ...(textStyle as any),
    },
  });
};
