import { Map } from 'maplibre-gl';
import { createContext } from 'react';

interface MapContextProps {
  isMapReady: boolean;
  map?: Map;
  setMap: (map: Map | undefined) => void;
}

export const mapContext = createContext<MapContextProps>({} as MapContextProps);
