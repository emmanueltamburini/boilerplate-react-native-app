import React, {useContext} from 'react';
import {StyleSheet, SafeAreaView, Button} from 'react-native';
import {ThemeText} from '../components/ThemeText';
import {
  PermissionContext,
  permissionInitState,
} from '../context/PermissionContext';
import {LoadingScreen} from './LoadingScreen';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

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
        <MapView
          style={styles.containerMap}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
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
