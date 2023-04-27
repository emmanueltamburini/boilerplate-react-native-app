import {StyleSheet} from 'react-native';
import {globalStyles} from '../../theme/appTheme';

export const stylesFunction = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      ...globalStyles().globalMargin,
    },
  });
