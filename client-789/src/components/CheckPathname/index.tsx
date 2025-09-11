/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client';

import { usePathname } from 'next/navigation';

export default function CheckPathname({ children }: any) {
  const pathname = usePathname();
  return (
    <main
      className={`w-full flex ms:h-full justify-center md:items-center ms:min-h-screen max-md:overflow-auto max-md:justify-start max-md:block  bg-[#000]`}
      id='mainID'
    >
      {children}
    </main>
  );
}
