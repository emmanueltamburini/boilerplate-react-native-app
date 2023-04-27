import {StyleSheet} from 'react-native';

export const stylesFunction = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      flex: 1,
    },
    itemText: {
      marginLeft: 10,
      fontSize: 19,
    },
    spacer: {
      flex: 1,
    },
  });
