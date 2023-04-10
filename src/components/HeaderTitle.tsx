import React from 'react';
import {View, StyleSheet} from 'react-native';
import {globalStyles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeText} from './ThemeText';

interface Props {
  title: string;
  avoidTop?: boolean;
  avoidBottom?: boolean;
}

export const HeaderTitle = ({title, avoidTop, avoidBottom}: Props) => {
  const {top} = useSafeAreaInsets();
  const styles = stylesFunction(avoidTop ? 0 : top, avoidBottom ? 0 : 20);

  return (
    <View style={styles.header}>
      <ThemeText style={globalStyles().title}>{title}</ThemeText>
    </View>
  );
};

const stylesFunction = (top: number, bottom: number) =>
  StyleSheet.create({
    header: {
      marginTop: top + 20,
      marginBottom: bottom,
    },
  });
