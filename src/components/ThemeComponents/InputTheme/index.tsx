import React, {useContext} from 'react';
import {View, TextInput, StyleProp, ViewStyle, TextStyle} from 'react-native';
import {ThemeContext} from '../../../context/Theme/ThemeContext';
import {stylesFunction} from './styles';
import {ThemeText} from '../ThemeText';

interface Props {
  placeholder?: string;
  onChange: (field: string) => void;
  value: string;
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;
  ignoreTheme?: boolean;
  useContrastColor?: boolean;
}

export const InputTheme = ({
  placeholder,
  onChange,
  value,
  label,
  containerStyle,
  labelStyle,
  textStyle,
  ignoreTheme,
  useContrastColor,
}: Props) => {
  const {theme} = useContext(ThemeContext);

  const styles = stylesFunction(
    theme,
    containerStyle,
    labelStyle,
    textStyle,
    ignoreTheme,
    useContrastColor,
  );

  return (
    <View style={styles.container}>
      {label && <ThemeText style={styles.label}>{label}</ThemeText>}
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        placeholderTextColor={theme.opacityContrastColor}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};
