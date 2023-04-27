import React, {useContext} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {ThemeText} from './ThemeText';
import {ThemeContext} from '../context/ThemeContext';
import {ThemeState} from '../context/themeReducer';

interface Props {
  title: string | React.ReactNode;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  ignoreTheme?: boolean;
  useContrastColor?: boolean;
  textStyle?: StyleProp<TextStyle>;
}

export const ThemeButton = ({
  title,
  onPress,
  ignoreTheme,
  useContrastColor,
  textStyle = {},
  style = {},
}: Props) => {
  const {theme} = useContext(ThemeContext);
  const styles = stylesFunction(
    style,
    theme,
    ignoreTheme,
    useContrastColor,
    textStyle,
  );

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}>
      <ThemeText ignoreTheme={ignoreTheme} style={styles.text}>
        {title}
      </ThemeText>
    </TouchableOpacity>
  );
};

const stylesFunction = (
  style: StyleProp<ViewStyle>,
  theme: ThemeState,
  ignoreTheme?: boolean,
  useContrastColor?: boolean,
  textStyle?: StyleProp<TextStyle>,
) => {
  let backgroundColor = ignoreTheme ? 'black' : theme.colors.primary;
  let color = ignoreTheme ? 'white' : theme.colors.text;

  if (useContrastColor) {
    backgroundColor = theme.colors.text;
    color = theme.colors.background;
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
