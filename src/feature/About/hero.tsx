import { Box, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import AboutImage from '@primelight-school/assets/about.jpg';

const AboutHero = () => {
  const isSmallerThanSm = useBreakpointValue({ base: true, sm: false });

  return (
    <Box position={'relative'}>
      <Image src={AboutImage} style={{ width: '100%' }} />
      <Box position={'absolute'} bottom="30%" left="5%">
        {!isSmallerThanSm && (
          <Text fontWeight={'500'} fontSize={'18px'}>
            The PrimeLight School, Anambra &gt; about
          </Text>
        )}
        <Text fontWeight={'800'} fontSize={'30px'} mt={2}>
          About Our School
        </Text>
        <Box width="25%" height="3px" bg="orange" mt={1} />
      </Box>
    </Box>
  );
};

export default AboutHero;
