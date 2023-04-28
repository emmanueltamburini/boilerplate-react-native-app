import {StyleSheet} from 'react-native';
import {ThemeState} from '../../context/Theme/themeReducer';
import {globalStyles} from '../../theme/appTheme';

export const styleFunction = (theme: ThemeState) =>
  StyleSheet.create({
    fabBottom: {
      zIndex: 9999,
      height: 50,
      width: 50,
      backgroundColor: theme.background,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
      ...globalStyles().shadow,
    },
    icon: {
      left: 1,
    },
  });
