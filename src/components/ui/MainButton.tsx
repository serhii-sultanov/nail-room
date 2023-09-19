import { FC } from 'react';

export const MainButton: FC = () => {
  return (
    <div
      className={
        'relative max-w-mainBtn w-full bg-[#10b1c36e] rounded-tl-xl rounded-br-xl cursor-pointer animate-pulse hover:animate-none'
      }
    >
      <button className='bg-green p-2.5 text-lg text-milkh font-medium uppercase flex max-w-mainBtn w-full justify-center items-center translate-x-3 -translate-y-[16%] hover:transform-none focus:transform-none transition-all duration-200 rounded-tl-xl rounded-br-xl tracking-wider hover:opacity-70'>
        записатися
      </button>
    </div>
  );
};
