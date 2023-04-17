import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {MarkerProps} from '../interfaces/MarkerInterface';

interface Props {
  markers?: MarkerProps[];
}

export const Map = ({markers}: Props) => {
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.container}>
        {markers?.map(marker => (
          <Marker
            key={marker.title}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
            image={require('../assets/custom-marker.png')}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
