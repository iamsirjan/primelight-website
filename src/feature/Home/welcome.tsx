import {
  Container,
  Flex,
  Grid,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import WelcomeImage from '@primelight-school/assets/welcome.jpg';

const WelcomeSection = () => {
  const columns = useBreakpointValue({ base: 1, md: 1, lg: 2 });
  const isSmallerThanMd = useBreakpointValue({ base: true, md: false });

  return (
    <Container
      maxW={{ base: '700px', md: '700px', lg: '1300px' }}
      marginTop={'100px'}
    >
      <Grid
        backgroundColor={isSmallerThanMd ? 'white_re' : 'none'}
        width="100%"
        alignItems={'center'}
        gridTemplateColumns={`repeat(${columns}, 1fr)`} // Grid layout with responsive columns
        gap={{ base: '20px', md: '20px', lg: '30px' }} // Responsive gap
      >
        <Image
          src={WelcomeImage}
          height={{ base: '400px', md: '700px', lg: '700px' }}
        />
        <Flex direction={'column'} gap={4}>
          <Text variant={'display4'}>Welcome to our Website</Text>
          <Flex direction={'column'}>
            <Text variant={'display5'}>Welcome to the Primelight Schools!</Text>
            <Text variant={'display5'} mt={2}>
              We are delighted to have you visit our school website. At
              Primelight Schools, we provide a Christ-centered education that{' '}
            </Text>
            <Text variant={'display5'}>
              inspires academic excellence, fosters spiritual growth, and
              empowers students to make a positive impact.
            </Text>
            <Text variant={'display5'} mt={2}>
              With a holistic approach, we nurture the whole child – mind, body,
            </Text>
            <Text variant={'display5'} mt={2}>
              and spirit – creating an environment for academic and spiritual
              growth.
            </Text>
            <Text variant={'display5'} mt={2}>
              Join us in empowering students to shine their light brightly, both
            </Text>
            <Text variant={'display5'}>
              within our school community and beyond.
            </Text>
            <Text variant={'display5'} mt={2}>
              We look forward to welcoming you to PrimeLight Schools.
            </Text>
            <Text variant={'display5'} mt={2}>
              Best regards,
            </Text>
            <Text variant={'display6'} mt={5}>
              Chidimma Adaora Mark
            </Text>
            <Text variant={'display7'} mt={1}>
              Proprietor, Primelight Schools
            </Text>
          </Flex>
        </Flex>
      </Grid>
    </Container>
  );
};

export default WelcomeSection;
