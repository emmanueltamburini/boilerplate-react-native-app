import React, {useContext} from 'react';
import {TouchableOpacity, StyleProp, ViewStyle, TextStyle} from 'react-native';
import {ThemeText} from '../ThemeText';
import {ThemeContext} from '../../../context/Theme/ThemeContext';
import {stylesFunction} from './styles';

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
