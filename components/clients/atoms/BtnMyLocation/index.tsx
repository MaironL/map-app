import { mapContext, placesContext } from '@/context';
import React, { useContext } from 'react';

export default function BtnMyLocation() {
  const { map, isMapReady } = useContext(mapContext);
  const { useLocation } = useContext(placesContext);

  const onClick = () => {
    if (!isMapReady) throw new Error('Mapa no esta listo');
    if (!useLocation) throw new Error('Ubicacion de usuario no existe');

    map?.flyTo({
      center: useLocation,
      zoom: 14,
    });
  };

  return (
    <button
      onClick={onClick}
      className='top-2 right-5 px-2 rounded-md z-10 fixed bg-sky-500 text-white border-2 border-sky-400'
    >
      Mi Ubicacion
    </button>
  );
}
