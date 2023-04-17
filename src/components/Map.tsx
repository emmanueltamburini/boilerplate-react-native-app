import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

export const Map = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.container}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
