import {StyleSheet, StyleProp, ViewStyle, TextStyle} from 'react-native';
import {ThemeState} from '../../../context/Theme/themeReducer';
import {globalStyles} from '../../../theme/appTheme';

interface Props {
  style: StyleProp<ViewStyle>;
  theme: ThemeState;
  ignoreTheme?: boolean;
  useContrastColor?: boolean;
  danger?: boolean;
  warning?: boolean;
  success?: boolean;
  textStyle?: StyleProp<TextStyle>;
}

export const stylesFunction = ({
  style,
  theme,
  ignoreTheme,
  useContrastColor,
  danger,
  warning,
  success,
  textStyle,
}: Props) => {
  let backgroundColor = ignoreTheme ? undefined : theme.primary;
  let color = ignoreTheme ? undefined : theme.text;

  if (useContrastColor) {
    backgroundColor = theme.text;
    color = theme.background;
  }

  if (danger) {
    backgroundColor = theme.danger;
  }

  if (warning) {
    backgroundColor = theme.warning;
  }

  if (success) {
    backgroundColor = theme.success;
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
