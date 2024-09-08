import {
  Box,
  Container,
  VStack,
  Text,
  useBreakpointValue,
  Grid,
} from '@chakra-ui/react';
import {
  DisciplineLogo,
  ExcelLogo,
  IntegrityLogo,
  ServiceLogo,
  TeamLogo,
} from '@primelight-school/assets/svgs';
import { ReactElement } from 'react';

const CoreValues = () => {
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  return (
    <Container maxW={{ base: '400px', md: '800px', lg: '1300px' }}>
      <VStack mt={6} gap={3}>
        <Text
          textAlign={'center'}
          fontSize={'35px'}
          fontWeight={700}
          color="dark"
        >
          Our Core Values
        </Text>
        <Grid
          width="100%"
          marginTop={'25px'}
          justifyContent={'center'}
          alignItems={'center'}
          gridTemplateColumns={`repeat(${columns}, 1fr)`} // Grid layout with responsive columns
          gap={{ base: '40px', md: '40px', lg: '40px' }} // Responsive gap
        >
          <ValueBox
            icon={<ExcelLogo />}
            Head="Excellence & equality"
            Body="To cultivate academic excellence 
through a challenging and 
comprehensive curriculum that 
fosters critical thinking, 
problem-solving, and lifelong 
learning skills"
          />

          <ValueBox
            icon={<TeamLogo />}
            Head="TeamWork"
            Body="To foster a culture of respect, 
inclusivity, and diversity that 
celebrates theunique talents, 
backgrounds, and perspectives 
of every pupil. "
          />
          <ValueBox
            icon={<IntegrityLogo />}
            Head="Integrity"
            Body="To provide a nurturing and 
supportive learning environment 
where pupils feelvalued, 
respected, and inspired to learn. "
          />
          <ValueBox
            icon={<ServiceLogo />}
            Head="Service"
            Body="To empower pupils to become 
compassionate leaders and 
active citizens who contribute 
positively to society and make a 
difference in the world."
          />
          <ValueBox
            icon={<DisciplineLogo />}
            Head="Discipline"
            Body="To empower pupils to become 
compassionate leaders and 
active citizens who contribute 
positively to society and make a 
difference in the world."
          />
        </Grid>
      </VStack>
    </Container>
  );
};

export default CoreValues;

const ValueBox = ({
  icon,
  Head,
  Body,
}: {
  icon: ReactElement;
  Head: string;
  Body: string;
}) => {
  return (
    <Box
      background={'white_re'}
      borderRadius={'10px'}
      padding={'20px 20px'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      {icon}
      <Text
        mt={4}
        fontSize={'18px'}
        fontWeight="600"
        color="dark"
        textAlign={'center'}
      >
        {Head}
      </Text>
      <Text mt={2} fontWeight={'18px'} color="dark">
        {Body}
      </Text>
    </Box>
  );
};
