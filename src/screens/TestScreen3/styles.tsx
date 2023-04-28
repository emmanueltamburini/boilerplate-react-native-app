import {StyleSheet} from 'react-native';

export const stylesFunction = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      paddingHorizontal: 20,
    },
    textInput: {
      marginBottom: 10,
    },
    buttonContainer: {flexDirection: 'row', paddingVertical: 20},
    button: {maxWidth: 170},
    spacer: {flex: 1},
  });
