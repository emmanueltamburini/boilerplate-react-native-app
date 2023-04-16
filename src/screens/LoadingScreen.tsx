import React, {useContext} from 'react';
import {StyleSheet, SafeAreaView, ActivityIndicator} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';

export const LoadingScreen = () => {
  const styles = stylesFunction();
  const {theme} = useContext(ThemeContext);

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size={50} color={theme.colors.text} />
    </SafeAreaView>
  );
};

const stylesFunction = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
