import React, {useContext} from 'react';
import {StyleSheet, SafeAreaView, Button} from 'react-native';
import {ThemeText} from '../components/ThemeText';
import {
  PermissionContext,
  permissionInitState,
} from '../context/PermissionContext';
import {LoadingScreen} from './LoadingScreen';
import {Map} from '../components/Map';
import {GoogleMap} from '../components/GoogleMap';

export const PermissionScreen = () => {
  const styles = stylesFunction();
  const {permissions, askLocationPermission} = useContext(PermissionContext);

  if (permissions.locationStatus === permissionInitState.locationStatus) {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaView
      style={
        permissions.locationStatus === 'granted'
          ? styles.containerMap
          : styles.container
      }>
      {permissions.locationStatus === 'granted' ? (
        <>
          <Map />
          <GoogleMap />
        </>
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
    containerMap: {
      flex: 1,
    },
  });
