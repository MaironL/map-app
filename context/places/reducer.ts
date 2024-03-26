import { PlacesState } from './Provider';

type PlacesAction = {
  type: 'setUserLocation';
  payload: [number, number];
};

export const placesReducer = (state: PlacesState, { payload, type }: PlacesAction): PlacesState => {
  switch (type) {
    case 'setUserLocation':
      return {
        ...state,
        isLoading: false,
        useLocation: payload,
      };

    default:
      return state;
  }
};
