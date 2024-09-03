import GetInTouch from '@primelight-school/feature/Home/form';
import HeroSection from '@primelight-school/feature/Home/hero';
import Recent from '@primelight-school/feature/Home/recent';
import OurSchools from '@primelight-school/feature/Home/schools';
import Statics from '@primelight-school/feature/Home/statics';
import TestimonialsSection from '@primelight-school/feature/Home/Testimonial';
import WelcomeSection from '@primelight-school/feature/Home/welcome';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Statics />
      <WelcomeSection />
      <OurSchools />
      <Recent />
      <TestimonialsSection />
      <GetInTouch />
    </>
  );
};

export default Home;
