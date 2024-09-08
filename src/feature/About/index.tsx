import { Box } from '@chakra-ui/react';
import AboutPrime from '@primelight-school/feature/About/aboutPrime';
import ClassRoom from '@primelight-school/feature/About/ClassRoom';
import CoreValues from '@primelight-school/feature/About/Corevalues';
import AboutHero from '@primelight-school/feature/About/hero';
import MissionVision from '@primelight-school/feature/About/MissionVision';
import WhyPrime from '@primelight-school/feature/About/whyPrime';
import TestimonialsSection from '@primelight-school/feature/Home/Testimonial';

const About = () => {
  return (
    <Box>
      <AboutHero />
      <AboutPrime />
      <MissionVision />
      <CoreValues />
      <WhyPrime />
      <ClassRoom />
      <TestimonialsSection />
    </Box>
  );
};

export default About;
