import React from 'react';
import {ThemeText} from '../../components/ThemeComponents/ThemeText';
import {stylesFunction} from './styles';
import {LoadingView} from '../../components/LoadingView';

export const TestScreen4 = () => {
  const styles = stylesFunction();

  return (
    <LoadingView style={styles.container} isLoading opacity={0.2}>
      <ThemeText>You can see a loading in view in this screen</ThemeText>
    </LoadingView>
  );
};
