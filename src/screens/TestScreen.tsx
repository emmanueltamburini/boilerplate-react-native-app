import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {ThemeText} from '../components/ThemeText';

export const TestScreen = () => {
  const styles = stylesFunction();

  return (
    <ThemeText style={styles.container}>
      <Text>TestScreen</Text>
    </ThemeText>
  );
};

const stylesFunction = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
  });
