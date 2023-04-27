import React, {useContext} from 'react';
import {
  View,
  StyleSheet,
  useWindowDimensions,
  Image,
  ScaledSize,
} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';
import {bigWidthScreen} from '../helpers/utils';

export const Logo = () => {
  const {theme} = useContext(ThemeContext);
  const dimensions = useWindowDimensions();
  const styles = stylesFunction(dimensions);

  const image = theme.dark
    ? require('../assets/react-logo-black.png')
    : require('../assets/react-logo-white.png');

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
    </View>
  );
};

const stylesFunction = (dimensions: ScaledSize) => {
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
