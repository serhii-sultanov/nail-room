import { FC } from 'react';
import { Caveat } from 'next/font/google';
import clsx from 'clsx';

const caveaet = Caveat({ subsets: ['latin'] });

export const VerticalText: FC = () => {
  return (
    <div
      className={`${caveaet.className} pointer-events-none block font-medium text-4xl tracking-wide text-violet absolute -top-11 left-[20%]`}
    >
      Перша студія манікюру в Xаркові
    </div>
  );
};
