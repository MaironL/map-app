import { Map } from 'maplibre-gl';
import { MapState } from './Provider';

type MapAction = {
  type: 'setMap';
  payload: Map;
};

export const placesReducer = (state: MapState, { payload, type }: MapAction): MapState => {
  switch (type) {
    case 'setMap':
      return {
        ...state,
        isMapReady: true,
        map: payload,
      };

    default:
      return state;
  }
};
