import { Box, Container, Text } from '@chakra-ui/react';

const AboutPrime = () => {
  return (
    <Container maxW={{ base: '400px', md: '800px', lg: '1300px' }}>
      <Box
        background={''}
        padding={'20px 20px'}
        pb={'40px'}
        backgroundColor={'white_re'}
        marginTop={'25px'}
        borderRadius={'10px'}
      >
        <Text
          fontSize={'25px'}
          fontWeight={'700'}
          color="dark"
          textAlign={'center'}
        >
          About Prime The LightHouse
        </Text>

        <Text color="dark" marginTop={'20px'} fontSize={'18px'}>
          Prime Light House Schools is a school designed to be a beacon of
          excellence in Christian education, nurturing pupils to become
          compassionate leaders, critical thinkers, and lifelong learners
          grounded in the Christian faith. Our main focus is to provide a
          Christ-centered education that inspires academic excellence, fosters
          spiritual growth, and empowers pupils to positively impact their
          communities and the world. We are committed to nurturing the whole
          child—mind, body, and spirit—through a holistic approach to education
          that integrates faith,character development, and academic rigor.
        </Text>
      </Box>
    </Container>
  );
};

export default AboutPrime;
