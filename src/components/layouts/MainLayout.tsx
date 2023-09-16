import clsx from 'clsx';
import { Montserrat } from 'next/font/google';
import type { FC, ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

const montserrat = Montserrat({ subsets: ['latin'] });

type MainLayout = {
  children: ReactNode;
};

export const MainLayout: FC<MainLayout> = ({ children }) => {
  return (
    <div className={clsx(montserrat.className, 'flex flex-col min-h-full')}>
      <Header />
      <main className='flex-1 mt-[65px]'>{children}</main>
      <Footer />
    </div>
  );
};
