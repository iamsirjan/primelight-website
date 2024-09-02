import HeroSection from '@primelight-school/feature/Home/hero';
import OurSchools from '@primelight-school/feature/Home/schools';
import Statics from '@primelight-school/feature/Home/statics';
import WelcomeSection from '@primelight-school/feature/Home/welcome';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Statics />
      <WelcomeSection />
      <OurSchools />
    </>
  );
};

export default Home;
