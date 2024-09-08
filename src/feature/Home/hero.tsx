import { Box, Container, Flex, Text } from '@chakra-ui/react';
import HeroImage from '@primelight-school/assets/hero_section.jpg';
import { useRefsStore } from '@primelight-school/feature/Home/state';

const HeroSection = () => {
  const admissionsRef = useRefsStore((state) => state.admissionsRef);

  const scrollToSection = (section: 'schools' | 'admissions' | 'contact') => {
    switch (section) {
      case 'admissions':
        admissionsRef?.current?.scrollIntoView({ behavior: 'smooth' });
        break;

      default:
        break;
    }
  };
  return (
    <Box position={'relative'}>
      <img src={HeroImage} width={'100%'} />
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
          <Text
            variant="display2"
            cursor={'pointer'}
            onClick={() => scrollToSection('admissions')}
          >
            Enrol
          </Text>
          <Box
            height={{ base: '18px', md: '24px' }}
            borderLeft="2px solid white"
          />
          <Text
            variant="display2"
            cursor={'pointer'}
            onClick={() => scrollToSection('admissions')}
          >
            Visit
          </Text>
          <Box
            height={{ base: '18px', md: '24px' }}
            borderLeft="2px solid white"
          />
          <Text variant="display2" cursor={'pointer'}>
            Partner
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default HeroSection;
