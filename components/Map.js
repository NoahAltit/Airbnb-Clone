import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

const Map = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});

  // Transform the searchResults "long, lat" ==> "longitude" - "latitude"
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  // Lat and Long of the results (Pin points)
  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
    height: "100%",
    width: "100%",
  });

  return (
    <div>
      <ReactMapGL
        mapboxAccessToken={process.env.mapbox_key}
        mapStyle="mapbox://styles/noah5008/cl6fp2v89001c14o2tjqd6bf8"
        {...viewport}
        onMove={(ev) => setViewport(ev.viewport)}
      >
        {searchResults.map((result) => (
          <div key={result.long}>
            {/* <Marker
              longitude={result.long}
              latitude={result.lat}
              offsetLeft={-20}
              offsetTop={-10}
            > */}
            {/* <p onClick={() => setSelectedLocation(result)} className="">📌</p> */}
            {/* </Marker> */}
          </div>
        ))}
      </ReactMapGL>
    </div>
  );
};

export default Map;
