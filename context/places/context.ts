import { createContext } from 'react';

interface PlacesContextProps {
  isLoading: boolean;
  useLocation?: [number, number];
}

export const placesContext = createContext<PlacesContextProps>({} as PlacesContextProps);
