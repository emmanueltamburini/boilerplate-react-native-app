import React from 'react';
import {View, FlatList} from 'react-native';
import {FlatListMenuItem} from '../../components/FlatListMenuItem';
import {menuItems} from '../../data/menuItem';
import {HeaderTitle} from '../../components/HeaderTitle';
import {ItemSeparator} from '../../components/ItemSeparator';
import {stylesFunction} from './styles';

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
