import { placesContext, mapContext } from '@/context';
import React, { useContext, useLayoutEffect, useRef } from 'react';
import { Loading } from '@/components/clients';

import { Map } from 'maplibre-gl';

function MapView() {
  const mapContRef = useRef<HTMLDivElement>(null);
  const { isLoading, useLocation } = useContext(placesContext);
  const { setMap, isMapReady } = useContext(mapContext);

  useLayoutEffect(() => {
    if (!isLoading) {
      const map = new Map({
        container: mapContRef.current!,
        //style: 'https://tiles.basemaps.cartocdn.com/gl/positron-gl-style/style.json', // stylesheet location.
        //style: 'https://api.maptiler.com/maps/topo-v2/style.json?key=FV9LuL43IoWoNyKBIYnM', //topografic
        style: 'https://api.maptiler.com/maps/streets-v2/style.json?key=FV9LuL43IoWoNyKBIYnM', //street
        bearing: 0,
        center: useLocation, // starting position [lng, lat]
        zoom: 9, // starting zoom
      });

      setMap(map);

      return () => {
        map.remove();
        setMap(undefined);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, isMapReady]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      id='map'
      style={{ position: 'fixed', top: '0', left: '0', width: '100vw', height: '100vh' }}
      ref={mapContRef}
    ></div>
  );
}
export default MapView;
