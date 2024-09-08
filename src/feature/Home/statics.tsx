import { Flex, Grid, Text, useBreakpointValue } from '@chakra-ui/react';
import {
  HouseLogo,
  PeopleLogo,
  TeacherLogo,
} from '@primelight-school/assets/svgs';
import { ReactElement } from 'react';

// Define the statics data
const staticsData = [
  { icon: <TeacherLogo />, header: '100%', label: 'Qualified Teachers' },
  {
    icon: <HouseLogo />,
    header: 'Access To',
    label: 'Modern And Tech Facilities',
  },
  { icon: <PeopleLogo />, header: '100%', label: 'Parents Satisfaction' },
  { icon: <HouseLogo />, header: 'Conductive', label: 'E-learning Programs' },
];

const Statics = () => {
  // Determine the number of columns based on screen size
  const columns = useBreakpointValue({ base: 2, sm: 2, md: 2, lg: 4 });
  return (
    <Flex
      background={'blue_d'}
      marginTop={{ base: '35px', md: '30px', lg: '45px', xl: '40px' }}
      padding={{ base: '20px', md: '45px 60px', lg: '45px 122px' }}
      direction={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Flex direction={'column'} width="100%">
        <Text variant={'display3'} textAlign={'center'}>
          Here is Some of Our School Statistics
        </Text>
        <Grid
          width="100%"
          gridTemplateColumns={`repeat(${columns}, 1fr)`} // Grid layout with responsive columns
          gap={{ base: '20px', md: '20px', lg: '30px' }} // Responsive gap
          marginTop={'40px'}
        >
          {staticsData.map((stat, index) => (
            <Flex
              key={index}
              alignItems={'center'}
              justifyContent={'center'}
              flexDirection={'column'}
              p={{ base: '10px', md: '15px' }} // Responsive padding
              width="100%" // Ensure items fit within their grid column
            >
              <StaticsBox
                icon={stat.icon}
                header={stat.header}
                label={stat.label}
              />
            </Flex>
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
};

interface StaticsBoxProps {
  icon: ReactElement;
  header: string;
  label: string;
}

const StaticsBox = ({ icon, header, label }: StaticsBoxProps) => {
  return (
    <Flex alignItems={'center'} gap={4} direction={'column'}>
      {icon}
      <Flex direction={'column'} gap={1} textAlign={'center'}>
        <Text variant={'display3'}>{header}</Text>
        <Text variant={'display1_500'} lineHeight={'24px'}>
          {label}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Statics;
