'use client';

import { MapView } from '@/components/clients';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative w-screen h-screen'>
      {children}
      <MapView />
    </div>
  );
}
