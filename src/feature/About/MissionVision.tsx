import {
  Box,
  Container,
  Flex,
  Grid,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { MissionLogo, VissionLogo } from '@primelight-school/assets/svgs';

const MissionVision = () => {
  const columns = useBreakpointValue({ base: 1, md: 1, lg: 2 });

  return (
    <Container maxW={{ base: '400px', md: '800px', lg: '1300px' }}>
      <Grid
        width="100%"
        marginTop={'25px'}
        gridTemplateColumns={`repeat(${columns}, 1fr)`} // Grid layout with responsive columns
        gap={{ base: '40px', md: '40px', lg: '40px' }} // Responsive gap
      >
        <Box>
          <Text fontWeight={'600'} fontSize={'18px'} mt={2} color="dark">
            Mission
          </Text>
          <Box width="6%" height="3px" bg="orange" mt={1} />
          <Box
            mt={5}
            borderRadius={'10px'}
            border="2px solid #000"
            padding={'20px 20px'}
            height={'200px'}
          >
            <Flex alignItems={'center'} height={'100%'} direction={'column'}>
              <MissionLogo />
              <Text
                color="dark"
                textTransform={'capitalize'}
                mt={4}
                fontSize={'18px'}
              >
                To bring out the best in every child regardless of the
                background, nature orrace; a school that will not only meet the
                needs of its customers but also supersede it.
              </Text>
            </Flex>
          </Box>
        </Box>
        <Box>
          <Text fontWeight={'600'} fontSize={'18px'} mt={2} color="dark">
            Vision
          </Text>
          <Box width="6%" height="3px" bg="orange" mt={1} />
          <Box
            mt={5}
            borderRadius={'10px'}
            border="2px solid #E3312C"
            padding={'20px 20px'}
            height={'200px'}
          >
            <Flex alignItems={'center'} height={'100%'} direction={'column'}>
              <VissionLogo />
              <Text
                color="dark"
                textTransform={'capitalize'}
                mt={4}
                fontSize={'18px'}
              >
                To raise children who will model the true essence of education
                and learning to be able to represent God and blend in, in all
                spheres of life.
              </Text>
            </Flex>
          </Box>
        </Box>
      </Grid>
    </Container>
  );
};

export default MissionVision;
