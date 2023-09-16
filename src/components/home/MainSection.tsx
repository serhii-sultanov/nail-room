import { FC } from 'react';
import { MainButton } from '../ui/MainButton';
import { MainVideo } from '../ui/MainVideo';
import { VerticalText } from '../ui/VerticalText';

export const MainSection: FC = () => {
  return (
    <section className='relative overflow-hidden bg-pink z-10 min-h-calc flex justify-center items-center'>
      {/* <MainVideo /> */}
      <div className='max-w-[1420px] w-full mx-auto px-2.5 relative overflow-hidden h-screen'>
        <div className='max-w-[500px] w-full ml-20 max-[1230px]:max-w-auto'>
          <h1 className='uppercase font-medium text-6xl mb-20 text-black ml-32'>
            <span className='text-green text-8xl font-semibold'>N</span>ail{' '}
            <br />
            <span className='text-green text-8xl ml-20 font-semibold'>R</span>
            oom
          </h1>
          <div className='flex flex-col gap-10'>
            <MainButton />
          </div>
        </div>
        <div className='absolute top-0 right-0 -rotate-45 mt-40'>
          <VerticalText />
          <video
            className={
              'object-cover opacity-90 rounded-xl h-[600px]  overflow-hidden '
            }
            autoPlay
            loop
            muted
          >
            <source src={'/video/main-video.mp4'} type='video/mp4' />
          </video>
        </div>
      </div>
    </section>
  );
};
