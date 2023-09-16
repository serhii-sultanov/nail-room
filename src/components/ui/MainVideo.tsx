import { FC } from 'react';
import { VerticalText } from './VerticalText';

export const MainVideo: FC = () => {
  return (
    <div className='absolute top-[150px] right-0 -z-[1] -rotate-45 max-[1435px]:top-[180px] max-[1240px]:top-[210px] max-[1100px]:rotate-0 h-[600px] max-[1435px]:h-[500px] max-[1240px]:h-[400px]'>
      <VerticalText />
      <video
        className={
          'object-cover opacity-90 rounded-xl max-w-full h-full mx-auto '
        }
        autoPlay
        loop
        muted
      >
        <source src={'/video/main-video.mp4'} type='video/mp4' />
      </video>
    </div>
  );
};
