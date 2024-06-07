'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent } from 'react';
import { startTransition } from 'react';
import { usePathname } from '@/navigation';



const LocalSwitcher = ({ localActive, isPending }: { localActive: string, isPending: boolean }) => {
  const router = useRouter();
  const pathname = usePathname(); 

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}${pathname}`); 
    });
  };
  return (
    <label className='relative focus:outline-none'>
      <select
        defaultValue={localActive}
        className='appearance-none bg-transparent py-2 pl-3 pr-8 text-gray-700 focus:outline-none focus:ring-0 border-none'
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value='en'>English</option>
        <option value='es'>Español</option>
      </select>
      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        </svg>
      </span>
    </label>   
  );
}

export default LocalSwitcher;