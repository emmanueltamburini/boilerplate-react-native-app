export interface MarkerProps {
  coordinate: Coordinate;
  title: string;
  description: string;
}

export interface Coordinate {
  latitude: number;
  longitude: number;
}
