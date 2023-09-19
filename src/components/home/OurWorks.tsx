import { breakPoints } from '@/utils/swiper-breakpoints';
import { FC } from 'react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperBtn } from '../ui/SwiperBtn';

export const OurWorks: FC = () => {
  return (
    <section className='relative'>
      <div className='absolute -bottom-[30%] left-0 h-3/4 bg-pinkOpacity w-full' />
      <div className='pt-24 max-w-[1320px] mx-auto px-5 flex items-center gap-4 relative max-md:flex-col max-md:items-start'>
        <div className='max-w-[350px] max-lg:max-w-[250px] max-md:max-w-full w-full bg-pinkOpacity text-black p-3 relative max-md:flex max-md:items-center max-md:justify-between'>
          <h3 className='text-4xl max-md:text-2xl mb-10 max-md:mb-0'>
            <span>Наші</span>
            <br className='max-md:hidden' />{' '}
            <span className='ml-14 max-md:ml-0'>роботи</span>
          </h3>
          <a
            href='#'
            className='block text-center bg-violet font-medium text-milk px-3 py-1.5 text-lg mb-10 w-full max-md:w-auto max-md:mb-0'
          >
            Підписатись
          </a>
          <SwiperBtn classNameModificator='max-md:hidden flex justify-end items-end gap-4' />
        </div>
        <Swiper
          slidesPerView={4}
          navigation={{
            nextEl: '.next',
            prevEl: '.prev',
          }}
          modules={[Navigation, Autoplay]}
          className='mySwiper'
          breakpoints={breakPoints}
          loop={true}
          autoplay={{ delay: 2000 }}
        >
          <SwiperSlide>
            <div className='flex flex-col w-full h-full'>
              <div className='w-full h-full bg-[url("/images/photo5.jpg")] bg-no-repeat bg-cover bg-center mb-2.5' />
              <div className='w-full h-full bg-[url("/images/photo4.jpg")] bg-no-repeat bg-cover bg-center' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col w-full h-full'>
              <div className='w-full h-full bg-[url("/images/photo3.jpg")] bg-no-repeat bg-cover bg-center mb-2.5' />
              <div className='w-full h-full bg-[url("/images/photo2.jpg")] bg-no-repeat bg-cover bg-center' />
            </div>
          </SwiperSlide>{' '}
          <SwiperSlide>
            <div className='flex flex-col w-full h-full'>
              <div className='w-full h-full bg-[url("/images/photo1.jpg")] bg-no-repeat bg-cover bg-center mb-2.5' />
              <div className='w-full h-full bg-[url("/images/photo5.jpg")] bg-no-repeat bg-cover bg-center' />
            </div>
          </SwiperSlide>{' '}
          <SwiperSlide>
            <div className='flex flex-col w-full h-full'>
              <div className='w-full h-full bg-[url("/images/photo5.jpg")] bg-no-repeat bg-cover bg-center mb-2.5' />
              <div className='w-full h-full bg-[url("/images/photo5.jpg")] bg-no-repeat bg-cover bg-center' />
            </div>
          </SwiperSlide>{' '}
          <SwiperSlide>
            <div className='flex flex-col w-full h-full'>
              <div className='w-full h-full bg-[url("/images/photo5.jpg")] bg-no-repeat bg-cover bg-center mb-2.5' />
              <div className='w-full h-full bg-[url("/images/photo5.jpg")] bg-no-repeat bg-cover bg-center' />
            </div>
          </SwiperSlide>{' '}
          <SwiperSlide>
            <div className='flex flex-col w-full h-full'>
              <div className='w-full h-full bg-[url("/images/photo5.jpg")] bg-no-repeat bg-cover bg-center mb-2.5' />
              <div className='w-full h-full bg-[url("/images/photo5.jpg")] bg-no-repeat bg-cover bg-center' />
            </div>
          </SwiperSlide>{' '}
          <SwiperSlide>
            <div className='flex flex-col w-full h-full'>
              <div className='w-full h-full bg-[url("/images/photo5.jpg")] bg-no-repeat bg-cover bg-center mb-2.5' />
              <div className='w-full h-full bg-[url("/images/photo5.jpg")] bg-no-repeat bg-cover bg-center' />
            </div>
          </SwiperSlide>{' '}
          <SwiperSlide>
            <div className='flex flex-col w-full h-full'>
              <div className='w-full h-full bg-[url("/images/photo5.jpg")] bg-no-repeat bg-cover bg-center mb-2.5' />
              <div className='w-full h-full bg-[url("/images/photo5.jpg")] bg-no-repeat bg-cover bg-center' />
            </div>
          </SwiperSlide>
        </Swiper>
        <SwiperBtn classNameModificator='md:hidden w-full flex justify-center items-center gap-4' />
      </div>
    </section>
  );
};
