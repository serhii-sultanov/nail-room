import { FC, useRef } from 'react';
import { useCountUp } from 'react-countup';

type CounterUpProps = {
  countEnd: number;
  title: string;
  subTitle: string;
};

export const CounterUp: FC<CounterUpProps> = ({
  countEnd,
  title,
  subTitle,
}) => {
  const countRef = useRef(null);

  useCountUp({
    ref: countRef,
    start: 0,
    end: countEnd,
    separator: '',
    delay: 1000,
    duration: 5,
    enableScrollSpy: true,
  });

  return (
    <div className='flex items-center justify-start gap-5'>
      <p
        className='text-4xl text-white font-bold min-w-[150px] text-center py-3 px-5 bg-green rounded-full shadow-md shadow-white'
        ref={countRef}
      />
      <div className='flex flex-col items-start justify-between gap-1'>
        <p className='font-medium text-2xl'>{title}</p>
        <p className='text-lg'>{subTitle}</p>
      </div>
    </div>
  );
};
