import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';
import {ThemeState} from '../context/themeReducer';

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
          color={theme.colors.text}
          size={30}
          style={currentStyle.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styleFunction = (theme: ThemeState) =>
  StyleSheet.create({
    fabBottom: {
      zIndex: 9999,
      height: 50,
      width: 50,
      backgroundColor: theme.colors.background,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
    icon: {
      left: 1,
    },
  });
