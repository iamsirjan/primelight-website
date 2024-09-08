// feature/Home/Home.tsx
import GetInTouch from '@primelight-school/feature/Home/form';
import HeroSection from '@primelight-school/feature/Home/hero';
import Recent from '@primelight-school/feature/Home/recent';
import OurSchools from '@primelight-school/feature/Home/schools';
import Statics from '@primelight-school/feature/Home/statics';
import TestimonialsSection from '@primelight-school/feature/Home/Testimonial';
import WelcomeSection from '@primelight-school/feature/Home/welcome';
import { useRefsStore } from '@primelight-school/feature/Home/state';

const Home = () => {
  const schoolsRef = useRefsStore((state) => state.schoolsRef);
  const admissionsRef = useRefsStore((state) => state.admissionsRef);
  const contactRef = useRefsStore((state) => state.contactRef);

  return (
    <>
      <HeroSection />
      <Statics />
      <WelcomeSection />
      <div ref={schoolsRef}>
        <OurSchools />
      </div>
      <div ref={admissionsRef}>
        <Recent />
      </div>
      <TestimonialsSection />
      <div ref={contactRef}>
        <GetInTouch />
      </div>
    </>
  );
};

export default Home;
