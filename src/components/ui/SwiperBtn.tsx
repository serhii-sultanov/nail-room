import { FC } from 'react';

type SwiperBtnProps = {
  classNameModificator?: string;
};
export const SwiperBtn: FC<SwiperBtnProps> = ({ classNameModificator }) => {
  return (
    <div className={classNameModificator}>
      <button className='prev text-black bg-black bg-opacity-10 p-1 hover:bg-white hover:bg-opacity-50 cursor-pointer transition-all duration-150'>
        <img className='w-10 h-8' src='/icons/swiper-prev.svg' alt='prev' />
      </button>
      <button className='next text-black bg-black bg-opacity-10 p-1 hover:bg-white hover:bg-opacity-50 cursor-pointer transition-all duration-150'>
        <img className='w-10 h-8' src='/icons/swiper-next.svg' alt='next' />
      </button>
    </div>
  );
};
