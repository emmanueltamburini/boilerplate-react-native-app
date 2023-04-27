import React, {useContext} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {MenuItem} from '../../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../navigator/Navigator';
import {ThemeContext} from '../../context/ThemeContext';
import {ThemeText} from '../ThemeText';
import {stylesFunction} from './styles';

interface Props {
  menuItem: MenuItem;
}

type navigationProp = StackNavigationProp<RootStackParams>;

export const FlatListMenuItem = ({menuItem}: Props) => {
  const navigation = useNavigation<navigationProp>();
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const styles = stylesFunction();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={() => navigation.navigate(menuItem.component)}>
      <Icon name={menuItem.icon} color={colors.primary} size={23} />
      <ThemeText style={styles.itemText}>{`${menuItem.name}`}</ThemeText>
      <View style={styles.spacer} />
      <Icon name="chevron-forward-outline" color={colors.primary} size={23} />
    </TouchableOpacity>
  );
};
