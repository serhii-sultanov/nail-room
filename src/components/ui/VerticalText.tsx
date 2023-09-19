import { FC } from 'react';
import { Caveat } from 'next/font/google';

const caveaet = Caveat({ subsets: ['latin'] });

export const VerticalText: FC = () => {
  return (
    <div
      className={`${caveaet.className} absolute top-1 right-[137px] pointer-events-none block rotate-[5deg] font-medium tracking-wide text-3xl z-10 text-right text-violet text-container`}
    >
      <span className='transform origin-bottom-left absolute top-0 left-0 w-5 h-[150px] rotate-[-12deg]'>
        П
      </span>
      <span className='transform origin-bottom-left absolute top-0 left-0 w-5 h-[150px] rotate-[-6deg]'>
        е
      </span>
      <span className='transform origin-bottom-left absolute top-0 left-0 w-5 h-[150px] rotate-[0deg]'>
        р
      </span>
      <span className='transform origin-bottom-left absolute top-0 left-0 w-5 h-[150px] rotate-[8deg]'>
        ш
      </span>
      <span className='transform origin-bottom-left absolute top-0 left-0 w-5 h-[150px] rotate-[15deg]'>
        а
      </span>
      <span className='transform origin-bottom-left absolute top-0 left-0 w-5 h-[150px] rotate-[18deg]'>
        {' '}
      </span>
      <span className='transform origin-bottom-left absolute top-0 left-0 w-5 h-[150px] rotate-[24deg]'>
        с
      </span>
      <span className='transform origin-bottom-left absolute top-0 left-0 w-5 h-[150px] rotate-[32deg]'>
        т
      </span>
      <span className='transform origin-bottom-left absolute top-0 left-0 w-5 h-[150px] rotate-[38deg]'>
        у
      </span>
      <span className='transform origin-bottom-left absolute top-0 left-0 w-5 h-[150px] rotate-[44deg]'>
        д
      </span>
      <span className='transform origin-bottom-left absolute top-0 left-0 w-5 h-[150px] rotate-[48deg]'>
        і
      </span>
      <span className='transform origin-bottom-left absolute top-0 left-0 w-5 h-[150px] rotate-[54deg]'>
        я
      </span>
      <span className='transform origin-bottom-left absolute top-0 left-0 w-5 h-[150px] rotate-[60deg]'>
        {' '}
      </span>
      <span className='transform origin-bottom-left absolute top-0 left-0 w-5 h-[150px] rotate-[66deg]'>
        м
      </span>
      <span className='transform origin-bottom-left absolute top-0 left-0 w-5 h-[150px] rotate-[72deg]'>
        а
      </span>
      <span className='transform origin-bottom-left absolute top-0 left-0 w-5 h-[150px] rotate-[78deg]'>
        н
      </span>
      <span className='transform origin-bottom-left absolute top-0 left-0 w-5 h-[150px] rotate-[82deg]'>
        і
      </span>
      <span className='transform origin-bottom-left absolute top-0 left-0 w-5 h-[150px] rotate-[88deg]'>
        к
      </span>
      <span className='transform origin-bottom-left absolute top-0 left-0 w-5 h-[150px] rotate-[96deg]'>
        ю
      </span>
      <span className='transform origin-bottom-left absolute top-0 left-0 w-5 h-[150px] rotate-[102deg]'>
        р
      </span>
      <span className='transform origin-bottom-left absolute top-0 left-0 w-5 h-[150px] rotate-[108deg]'>
        у
      </span>
      <span className='transform origin-bottom-left absolute top-0 left-0 w-5 h-[150px] rotate-[114deg]'>
        {' '}
      </span>
      <span className='transform origin-bottom-left absolute top-0 left-0 w-5 h-[150px] rotate-[118deg]'>
        в
      </span>
      <span className='transform origin-bottom-left absolute top-0 left-0 w-5 h-[150px] rotate-[126deg]'>
        {' '}
      </span>
      <span className='transform origin-bottom-left absolute top-0 left-0 w-5 h-[150px] rotate-[132deg]'>
        Х
      </span>
      <span className='transform origin-bottom-left absolute top-0 left-0 w-5 h-[150px] rotate-[138deg]'>
        а
      </span>
      <span className='transform origin-bottom-left absolute top-0 left-0 w-5 h-[150px] rotate-[144deg]'>
        р
      </span>
      <span className='transform origin-bottom-left absolute top-0 left-0 w-5 h-[150px] rotate-[150deg]'>
        к
      </span>
      <span className='transform origin-bottom-left absolute top-0 left-0 w-5 h-[150px] rotate-[156deg]'>
        о
      </span>
      <span className='transform origin-bottom-left absolute top-0 left-0 w-5 h-[150px] rotate-[162deg]'>
        в
      </span>
      <span className='transform origin-bottom-left absolute top-0 left-0 w-5 h-[150px] rotate-[167deg]'>
        і
      </span>
    </div>
  );
};
