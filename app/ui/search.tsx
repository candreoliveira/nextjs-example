'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';


function handleSearch(opts: {term: string, searchParams: string, pathname: string, replace: Function}) {
  const params = new URLSearchParams(opts.searchParams);

  if(opts.term) {
    params.set('query', opts.term);
  } else {
    params.delete('query');
  }

  opts.replace(`${opts.pathname}?${params.toString()}`);
}

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  return (
    <>
      <div className="relative flex flex-1 flex-shrink-0">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          placeholder={placeholder}
          onChange={ (e) => handleSearch({term: e.target.value, searchParams, pathname, replace}) }
          defaultValue={searchParams.get('query')?.toString()}
        />
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      </div>
    </>
  );
}
