import { useReducer } from 'react';
import { Map, Marker, Popup } from 'maplibre-gl';
import { MapLibreSearchControl } from '@stadiamaps/maplibre-search-box';

import { mapContext } from './context';
import { placesReducer } from './reducer';

export interface MapState {
  isMapReady: boolean;
  map?: Map;
}

const INITIAL_STATE: MapState = {
  isMapReady: true,
  map: undefined,
};

export function MapProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

  const setMap = (map: Map | undefined) => {
    if (map) {
      const control = new MapLibreSearchControl();

      const myLocationPopup = new Popup().setHTML(`
			<h4>Tu ubicación</h4>
			<p>Latitud: ${map.getCenter().lat}</p>
			<p>Longitud: ${map.getCenter().lng}</p>
			<p>Zoom: ${map.getZoom()}</p>
		`);

      new Marker({
        color: '61DAFB',
      })
        .setLngLat(map.getCenter())
        .setPopup(myLocationPopup)
        .addTo(map);

      map.addControl(control, 'top-left');

      dispatch({ type: 'setMap', payload: map });
    }
  };

  return <mapContext.Provider value={{ ...state, setMap }}>{children}</mapContext.Provider>;
}
