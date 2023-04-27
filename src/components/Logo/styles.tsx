import {StyleSheet, ScaledSize} from 'react-native';
import {bigWidthScreen} from '../../helpers/utils';

export const stylesFunction = (dimensions: ScaledSize) => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      marginTop: bigWidthScreen(dimensions) ? 60 : 0,
      right: bigWidthScreen(dimensions) ? 50 : undefined,
    },
    image: {
      width: 110,
      height: 100,
    },
  });
};
