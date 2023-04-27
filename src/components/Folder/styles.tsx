import {StyleSheet, Animated, StyleProp, ImageStyle} from 'react-native';

export const stylesFunction = (
  opacity: Animated.Value,
  style?: StyleProp<ImageStyle>,
) => {
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    activityIndicator: {
      position: 'absolute',
    },
  });

  const image = {
    width: '100%',
    height: 400,
    ...(style as any),
    opacity,
  };

  return {...styles, image};
};
