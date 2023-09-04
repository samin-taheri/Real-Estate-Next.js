import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface MapComponentProps {
  apiKey: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ apiKey }) => {
  const mapStyles: React.CSSProperties = {
    height: '400px',
    width: '100%',
  };

  const defaultCenter = {
    lat: 40.7128, // Replace with your desired latitude
    lng: -74.0060, // Replace with your desired longitude
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={mapStyles} center={defaultCenter} zoom={10}>
        {/* Add markers or other map elements here */}
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
