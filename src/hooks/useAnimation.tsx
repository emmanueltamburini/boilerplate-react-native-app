import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;

  const fadeIn = (duration: number = 300) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start(() => console.log('FadeIn animation finished'));
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => console.log('FadeOut animation finished'));

    Animated.timing(position, {
      toValue: -100,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => console.log('top animation finished'));
  };

  const startMoving = (initPosition: number, duration: number = 300) => {
    position.setValue(initPosition);

    Animated.timing(position, {
      toValue: 0,
      duration,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start(() => console.log('top animation finished'));
  };

  const goToPosition = (newPosition: number, duration: number = 300) => {
    Animated.timing(position, {
      toValue: newPosition,
      duration,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start(() => console.log('top animation finished'));
  };

  return {opacity, position, fadeIn, fadeOut, startMoving, goToPosition};
};
