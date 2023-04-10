import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {globalStyles} from '../theme/appTheme';
import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {menuItems} from '../data/menuItem';
import {HeaderTitle} from '../components/HeaderTitle';
import {ItemSeparator} from '../components/ItemSeparator';

export const HomeScreen = () => {
  const styles = stylesFunction();
  const itemSeparatorFunction = () => <ItemSeparator />;

  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={<HeaderTitle title="Menu options" />}
        ItemSeparatorComponent={itemSeparatorFunction}
      />
    </View>
  );
};

const stylesFunction = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      ...globalStyles().globalMargin,
    },
  });
