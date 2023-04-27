import {StyleSheet} from 'react-native';
import {ThemeState} from '../../context/themeReducer';

export const styleFunction = (theme: ThemeState) =>
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
