import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeText} from '../../components/ThemeText';
import {stylesFunction} from './styles';

export const TestScreen = () => {
  const styles = stylesFunction();

  return (
    <SafeAreaView style={styles.container}>
      <ThemeText>TestScreen</ThemeText>
    </SafeAreaView>
  );
};
