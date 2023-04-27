import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {ThemeText} from '../components/ThemeText';
import {Background} from '../components/Background';

export const TestScreen2 = () => {
  const styles = stylesFunction();

  return (
    <SafeAreaView style={styles.container}>
      <Background />
      <ThemeText>TestScreen</ThemeText>
    </SafeAreaView>
  );
};

const stylesFunction = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
  });
