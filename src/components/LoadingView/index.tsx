import React from 'react';
import {SafeAreaView, StyleProp, ViewStyle} from 'react-native';
import {stylesFunction} from './styles';
import {LoadingComponent} from '../LoadingComponent';

interface Props {
  children: JSX.Element | JSX.Element[];
  isLoading: boolean;
  opacity?: number;
  style?: StyleProp<ViewStyle>;
}

export const LoadingView = ({children, isLoading, opacity, style}: Props) => {
  const styles = stylesFunction(style);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && <LoadingComponent opacity={opacity} />}
      {children}
    </SafeAreaView>
  );
};
