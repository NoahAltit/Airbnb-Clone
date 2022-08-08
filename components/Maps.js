import Map, { Marker } from "react-map-gl";
import { getCenter } from "geolib";

const Maps = ({ searchResults }) => {
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  return (
    <>
      <Map
        initialViewState={{
          longitude: center.longitude,
          latitude: center.latitude,
          zoom: 11,
        }}
        style={{ width: 600, height: 2000 }}
        mapStyle="mapbox://styles/noah5008/cl6fp2v89001c14o2tjqd6bf8"
        mapboxAccessToken={process.env.mapbox_key}
      />
    </>
  );
};

export default Maps;
