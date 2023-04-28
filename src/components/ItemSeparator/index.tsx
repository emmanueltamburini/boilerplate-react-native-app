import React, {useContext} from 'react';
import {View} from 'react-native';
import {ThemeContext} from '../../context/Theme/ThemeContext';
import {stylesFunction} from './styles';

export const ItemSeparator = () => {
  const {theme} = useContext(ThemeContext);
  const styles = stylesFunction(theme);

  return <View style={styles.separator} />;
};
