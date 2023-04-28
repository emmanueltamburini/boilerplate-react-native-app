import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import {ThemeContext} from '../../context/Theme/ThemeContext';
import {styleFunction} from './styles';

interface Props {
  iconName: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export const Fab = ({iconName, onPress, style: style = {}}: Props) => {
  const {theme} = useContext(ThemeContext);
  const currentStyle = styleFunction(theme);

  return (
    <View style={{...(style as any)}}>
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={onPress}
        style={currentStyle.fabBottom}>
        <Icon
          name={iconName}
          color={theme.text}
          size={30}
          style={currentStyle.icon}
        />
      </TouchableOpacity>
    </View>
  );
};
