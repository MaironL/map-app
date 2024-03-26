import { useEffect, useReducer } from 'react';
import { placesContext } from './context';
import { placesReducer } from './reducer';
import { getUserLocation } from '@/utils';

export interface PlacesState {
  isLoading: boolean;
  useLocation?: [number, number];
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  useLocation: undefined,
};

export function PlacesProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

  if (!navigator.geolocation) {
    alert('Tu navegador no tiene opción de Geolocation');

    throw new Error('Tu navegador no tiene opción de Geolocation');
  }

  useEffect(() => {
    getUserLocation().then((lngLat) => {
      dispatch({
        type: 'setUserLocation',
        payload: lngLat,
      });
    });
  }, []);

  return <placesContext.Provider value={{ ...state }}>{children}</placesContext.Provider>;
}
