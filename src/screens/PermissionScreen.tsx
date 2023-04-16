import React, {useContext} from 'react';
import {StyleSheet, SafeAreaView, Button} from 'react-native';
import {ThemeText} from '../components/ThemeText';
import {
  PermissionContext,
  permissionInitState,
} from '../context/PermissionContext';
import {LoadingScreen} from './LoadingScreen';

export const PermissionScreen = () => {
  const styles = stylesFunction();
  const {permissions, askLocationPermission} = useContext(PermissionContext);

  if (permissions.locationStatus === permissionInitState.locationStatus) {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaView style={styles.container}>
      {permissions.locationStatus === 'granted' ? (
        <ThemeText>PermissionGranted</ThemeText>
      ) : (
        <>
          <ThemeText>PermissionScreen</ThemeText>
          <Button title="Permission" onPress={askLocationPermission} />
          <ThemeText>{JSON.stringify(permissions, null, 5)}</ThemeText>
        </>
      )}
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
