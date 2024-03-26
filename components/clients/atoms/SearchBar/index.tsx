import React, { useRef } from 'react';

export default function SerchBar() {
  const debounceRef = useRef<NodeJS.Timeout>();

  const onQueryChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      console.log(e.target.value);
    }, 350);
  };

  return (
    <div
      onChange={onQueryChanged}
      className='fixed top-5 left-5 bg-white z-50 shadow-sm w-64 p-1 rounded-md'
    >
      <input type='text' className='w-full h-full' placeholder='buscar...' />
    </div>
  );
}
