import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeText} from '../../components/ThemeText';
import {Background} from '../../components/Background';
import {stylesFunction} from './styles';

export const TestScreen2 = () => {
  const styles = stylesFunction();

  return (
    <SafeAreaView style={styles.container}>
      <Background />
      <ThemeText>TestScreen with background</ThemeText>
    </SafeAreaView>
  );
};
