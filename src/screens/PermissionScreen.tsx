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
import {MarkerProps} from '../interfaces/MarkerInterface';

const maps: MarkerProps[] = [
  {
    coordinate: {
      latitude: 37.8,
      longitude: -122.4324,
    },
    title: 'Map1',
    description: 'Description de Map 1',
  },
  {
    coordinate: {
      latitude: 37.78825,
      longitude: -122.4354,
    },
    title: 'Map2',
    description: 'Description de Map 2',
  },
  {
    coordinate: {
      latitude: 37.76,
      longitude: -122.4365,
    },
    title: 'Map3',
    description: 'Description de Map 2',
  },
];

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
          <Map markers={maps} />
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
