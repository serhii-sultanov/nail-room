import { ROUTE, links } from '@/utils/navigation';
import Link from 'next/link';
import { FC } from 'react';
import { LangButtonts } from '../ui/LanguageButtons';

export const Header: FC = () => {
  return (
    <header className='bg-green h-[65px] flex items-center text-white font-medium'>
      <div className='max-w-[1320px] mx-auto w-full px-2.5 flex items-center justify-between'>
        <div className='flex items-center'>
          <Link
            className='bg-white w-14 h-14 rounded-full p-2.5'
            href={ROUTE.HOME}
          >
            <img
              className='max-w-full h-full mx-auto'
              src='/images/logo.jpg'
              alt='logo'
            />
          </Link>
          <span className='ml-6'>Xарків, вул.Ярослава Мудрого 22</span>
        </div>
        <div className='flex items-center gap-10'>
          <nav>
            <ul className='flex gap-5'>
              {links.map(({ href, label, list }) => {
                return !list ? (
                  <li key={label}>
                    <Link href={href}>{label}</Link>
                  </li>
                ) : (
                  <li key={label} className='group relative cursor-pointer'>
                    {label}
                    <ul className='rounded-md invisible opacity-0 group-hover:opacity-100 group-hover:visible absolute transition-all duration-200 bg-white w-52 top-[110%]'>
                      {list.map(({ href, label }) => (
                        <li
                          key={label}
                          className='rounded-md hover:bg-green hover:bg-opacity-20 px-2.5 py-1 text-black font-semibold border-b border-black border-opacity-25 text-sm'
                        >
                          <Link href={href}>{label}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </nav>
          <LangButtonts />
        </div>
      </div>
    </header>
  );
};
