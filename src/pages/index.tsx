import { FC } from 'react';
import { MainSection } from '@/components/home/MainSection';
import { Services } from '@/components/home/Services';

const Home: FC = () => {
  return (
    <>
      <MainSection />
      <Services />
    </>
  );
};

export default Home;
