import { Box, Container, Flex, Text } from '@chakra-ui/react';
import HeroImage from '@primelight-school/assets/hero_section.jpg';

const HeroSection = () => {
  return (
    <Box position={'relative'}>
      <img src={HeroImage} width={'100%'} />
      <Container maxW={{ base: '100px', md: '400px', lg: '1300px' }}>
        <Flex
          background="red_da"
          borderRadius="full"
          padding={{ base: '12px 16px', md: '14px 24px', lg: '16px 32px' }}
          position="absolute"
          bottom={{ base: '-14%', md: '-14%', lg: '-6%' }} // Adjust position based on screen size
          transform="translateX(-50%)"
          width={{ base: 'fit-content', md: '280px', lg: '300px' }}
          boxShadow="lg"
          gap={2}
          alignItems="center"
          height={{ base: '50px', md: '100px', lg: '100px' }}
          justifyContent="space-between"
        >
          <Text variant="display2">Enrol</Text>
          <Box
            height={{ base: '18px', md: '24px' }}
            borderLeft="2px solid white"
          />
          <Text variant="display2">Visit</Text>
          <Box
            height={{ base: '18px', md: '24px' }}
            borderLeft="2px solid white"
          />
          <Text variant="display2">Partner</Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default HeroSection;
