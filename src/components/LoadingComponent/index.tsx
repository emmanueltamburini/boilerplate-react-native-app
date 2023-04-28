import React, {useContext} from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  useWindowDimensions,
} from 'react-native';
import {ThemeContext} from '../../context/Theme/ThemeContext';
import {stylesFunction} from './styles';

interface Props {
  opacity?: number;
}

export const LoadingComponent = ({opacity = 1}: Props) => {
  const windowDimension = useWindowDimensions();
  const {theme} = useContext(ThemeContext);
  const styles = stylesFunction(theme, windowDimension, opacity);

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size={50} color={theme.colors.text} />
    </SafeAreaView>
  );
};
