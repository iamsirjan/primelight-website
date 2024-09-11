import {
  Box,
  Container,
  Flex,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'; // Import react-slick

// Import your images for the carousel
import HeroImage1 from '@primelight-school/assets/hero_section.jpg';
import HeroImage2 from '@primelight-school/assets/hero_bg2.png';
import HeroImage3 from '@primelight-school/assets/hero_bg3.png';

const HeroSection = () => {
  const isSmallerThanSm = useBreakpointValue({ base: true, sm: false });

  // Slider settings for auto-slide
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 4000, // 3 seconds auto-slide
  };

  return (
    <Box position={'relative'}>
      <Box overflow="hidden">
        {/* Add Slider here */}
        <Slider {...settings}>
          {/* Add multiple images as slider items */}
          <Box>
            <img
              src={HeroImage1}
              height={'100%'}
              width="100%"
              alt="Hero Image 1"
            />
          </Box>
          <Box>
            <img
              src={HeroImage2}
              width="100%"
              height={'100%'}
              alt="Hero Image 2"
            />
          </Box>
          <Box>
            <img
              src={HeroImage3}
              width="100%"
              height={'100%'}
              alt="Hero Image 3"
            />
          </Box>
        </Slider>
      </Box>

      {/* Your other content remains as it is */}
      <Container maxW={{ base: '100px', md: '400px', lg: '1300px' }}>
        <Flex
          background="red_da"
          borderRadius="full"
          padding={{ base: '12px 16px', md: '14px 24px', lg: '16px 32px' }}
          position="absolute"
          top={{ base: '84%', sm: '88%', md: '90%', lg: '92%', xl: '96%' }}
          left={'3%'}
          width={{ base: 'fit-content', md: '280px', lg: '300px' }}
          boxShadow="lg"
          gap={2}
          alignItems="center"
          height={{ base: '50px', md: '50px', lg: '50px' }}
          justifyContent="space-between"
        >
          <Link to={'https://forms.gle/dDRpd6pR3ZDPGBB4A'} target="_blank">
            <Text
              variant={!isSmallerThanSm ? 'display2' : 'display2_small'}
              cursor={'pointer'}
            >
              Enrol
            </Text>
          </Link>
          <Box
            height={{ base: '18px', md: '24px' }}
            borderLeft="2px solid white"
          />
          <Link to={'https://forms.gle/dDRpd6pR3ZDPGBB4A'} target="_blank">
            <Text
              variant={!isSmallerThanSm ? 'display2' : 'display2_small'}
              cursor={'pointer'}
            >
              Visit
            </Text>
          </Link>
          <Box
            height={{ base: '18px', md: '24px' }}
            borderLeft="2px solid white"
          />
          <Text
            variant={!isSmallerThanSm ? 'display2' : 'display2_small'}
            cursor={'pointer'}
          >
            Partner
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default HeroSection;
