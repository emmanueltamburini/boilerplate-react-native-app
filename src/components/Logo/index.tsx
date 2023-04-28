import React, {useContext} from 'react';
import {View, useWindowDimensions, Image} from 'react-native';
import {ThemeContext} from '../../context/Theme/ThemeContext';
import {stylesFunction} from './styles';

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
