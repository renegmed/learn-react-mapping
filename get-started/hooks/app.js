/* global document */
import * as React from 'react';
import {useState} from 'react';
import {render} from 'react-dom';
import MapGL from 'react-map-gl';

const MAPBOX_TOKEN = env.process.REACT_APP_MAPBOX_TOKEN;

function Root() {
  const [viewport, setViewport] = useState({
    latitude: 40.748963,
    longitude: -73.985675,
    zoom: 12,
    bearing: 0,
    pitch: 0
  });

  return (
    <MapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    />
  );
}

document.body.style.margin = 0;
render(<Root />, document.body.appendChild(document.createElement('div')));
