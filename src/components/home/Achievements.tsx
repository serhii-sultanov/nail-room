import { FC } from 'react';
import { CounterUp } from '../ui/CountUp';

export const Achievements: FC = () => {
  return (
    <section className='w-full text-black relative'>
      <div className='max-w-[1320px] w-full mx-auto px-2.5 text-black py-14'>
        <h3 className='uppercase font-medium text-4xl mb-10 text-black'>
          <span className='text-green text-6xl font-semibold'>Н</span>аші <br />
          <span className='text-green text-6xl ml-14 font-semibold'>Д</span>
          осягнення
        </h3>
        <div className='flex items-center gap-5'>
          <div className='grid grid-cols-2 gap-20'>
            <CounterUp
              countEnd={50}
              title='Наборів інструментів'
              subTitle='Щодня проходять стерилізацію'
            />
            <CounterUp
              countEnd={250}
              title='Наборів інструментів'
              subTitle='Щодня проходять стерилізацію'
            />
            <CounterUp
              countEnd={1000}
              title='Наборів інструментів'
              subTitle='Щодня проходять стерилізацію'
            />
            <CounterUp
              countEnd={5000}
              title='Наборів інструментів'
              subTitle='Щодня проходять стерилізацію'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
