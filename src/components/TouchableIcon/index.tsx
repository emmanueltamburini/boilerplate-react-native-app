import React from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  name: string;
  activeOpacity?: number;
  size?: number;
  color?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export const TouchableIcon = ({
  name,
  color = 'white',
  size = 65,
  onPress,
  style,
  activeOpacity = 0.8,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={style}
      activeOpacity={activeOpacity}>
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};
