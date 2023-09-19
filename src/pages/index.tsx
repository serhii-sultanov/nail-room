import { Achievements } from '@/components/home/Achievements';
import { MainSection } from '@/components/home/MainSection';
import { OurWorks } from '@/components/home/OurWorks';
import { Services } from '@/components/home/Services';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <>
      <MainSection />
      <Services />
      <OurWorks />
      <Achievements />
    </>
  );
};

export default Home;
