import { FC } from 'react';
import Link from 'next/link';

const services = [
  'Манікюр',
  'Педикюр',
  'Дизайн',
  'Комплекси',
  'Наращивание',
  'Чоловікам',
];

export const Services: FC = () => {
  return (
    <section className='overflow-hidden relative pt-28 mb-24'>
      <div className='bg-pink absolute inset-0 h-2/5' />
      <div className='max-w-[1320px] w-full mx-auto px-2.5'>
        <div className='relative flex justify-center max-lg:h-[1000px] h-[500px] max-sm:h-full w-full max-lg:grid max-lg:grid-cols-3 max-sm:flex max-sm:flex-col max-sm:gap-1'>
          {services.map((service) => (
            <Link
              key={service}
              href='/'
              className='service__link max-md:min-w-[300px] h-[500px] md:h-full max-lg:w-full w-60 px-3 py-4 md:py-8 lg:hover:w-96 transition-all duration-300 max-sm:h-[380px]'
            >
              <span className='relative z-10 font-medium text-lg ml-4'>
                {service}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
