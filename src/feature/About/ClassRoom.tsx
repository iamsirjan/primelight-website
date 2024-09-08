import {
  Box,
  Container,
  Grid,
  Image,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import School1 from '@primelight-school/assets/school1.jpg';
import School2 from '@primelight-school/assets/school2.jpg';
import School3 from '@primelight-school/assets/school3.jpg';

const ClassRoom = () => {
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3, xl: 3 });

  return (
    <Box mt={5} background="red_da" padding="20px">
      <Text
        textAlign={'center'}
        color="light"
        fontSize={'30px'}
        fontWeight={700}
      >
        A Glimpse Of Our Classrooms
      </Text>

      <Container maxW={{ base: '400px', md: '800px', lg: '1300px' }}>
        <Grid
          width="100%"
          marginTop={'30px'}
          alignItems={'center'}
          justifyContent={'center'}
          gridTemplateColumns={`repeat(${columns}, 1fr)`} // Grid layout with responsive columns
          gap={{ base: '20px', md: '20px', lg: '20px' }} // Responsive gap
        >
          <ClassroomCard
            imageSrc={School1}
            title="Nursery School Classroom"
            link="#"
          />
          <ClassroomCard
            imageSrc={School2}
            title="Primary School Classroom"
            link="#"
          />
          <ClassroomCard
            imageSrc={School3}
            title="Secondary School Classroom"
            link="#"
          />
        </Grid>
      </Container>
    </Box>
  );
};

export default ClassRoom;

interface ClassroomCardProps {
  imageSrc: string;
  title: string;
  link: string;
}

const ClassroomCard: React.FC<ClassroomCardProps> = ({
  imageSrc,
  title,
  link,
}) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      bg="white"
      position="relative" // Ensure content inside is positioned correctly
      overflow="hidden" // Hide overflow to keep content inside the box
    >
      <Image src={imageSrc} alt={title} maxW={'sm'} />

      {/* Always display the title and link at the bottom of the card */}
      <VStack
        p={4}
        align="start"
        bg="rgba(0, 0, 0, 0.5)" // Dark background for the text
        color="white"
        position="absolute"
        bottom={0}
        w="100%"
      >
        <Text fontWeight="bold" fontSize="lg">
          {title}
        </Text>
        <Link to={link}>Virtual Tour</Link>
      </VStack>
    </Box>
  );
};
