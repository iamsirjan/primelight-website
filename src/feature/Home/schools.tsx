import { Flex, Grid, Text, useBreakpointValue, Image } from '@chakra-ui/react';
import Background from '@primelight-school/assets/bg.gif'; // Adjust path if necessary
import DayCare from '@primelight-school/assets/daycare.jpg';
import Pre from '@primelight-school/assets/pre.jpg';
import Pri from '@primelight-school/assets/pri.jpg';
import Basic from '@primelight-school/assets/basic.jpg';

const OurSchools = () => {
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 2 }); // Adjusted for larger screens
  const isSmallerThanSm = useBreakpointValue({ base: true, lg: false });

  return (
    <Flex
      marginTop={'50px'}
      direction="column"
      align="center"
      justify="center"
      minHeight="70vh"
      position="relative" // Necessary for the pseudo-element to be positioned absolutely
      p="4"
    >
      {/* Background Image with Opacity */}
      <Flex
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="blue_d"
        backgroundImage={`url('${!isSmallerThanSm && Background}')`} // Use backticks for URL interpolation
        backgroundSize="cover"
        backgroundPosition="center"
        opacity={0.9} // Adjust opacity level here
        zIndex={-1} // Ensure it's behind other content
        pointerEvents="none" // Optional: makes sure background does not interfere with interactions
      />

      {/* Main Content */}
      <Flex
        direction="column"
        zIndex={1}
        position="relative"
        alignItems={'center'}
      >
        <Text variant="display10" mt={15} opacity={1}>
          Our Schools
        </Text>
        <Grid
          templateColumns={`repeat(${columns}, 1fr)`}
          gap={{ base: '20px', md: '20px', lg: '30px' }}
          mt={4}
        >
          <Card img={DayCare} heading="Creche and" value="Day Care" />
          <Card img={Pre} heading="Nursery School" value="Classes 1 2 3" />
          <Card img={Pri} heading="Primary School" value="Classes 1 - 6" />
          <Card img={Basic} heading="Secondary" value="Classes 1 - 6" />
        </Grid>
      </Flex>
    </Flex>
  );
};

const Card = ({
  img,
  heading,
  value,
}: {
  img: string;
  heading: string;
  value: string;
}) => {
  return (
    <Flex
      background={'#fff'}
      width={'full'} // Make the card responsive
      maxWidth={'495px'} // Maximum width to ensure it does not exceed 495px
      direction={'column'}
      borderRadius={'10px'}
      overflow={'hidden'} // Ensure the image and content are clipped within the card
      boxShadow="md" // Optional: adds shadow to make cards stand out
    >
      <Image
        src={img}
        alt={heading}
        height={'250px'}
        width={'full'} // Ensures the image takes up the full width of the card
        objectFit="cover" // Ensures the image covers the area without stretching
      />
      <Flex padding={'10px'} direction={'column'}>
        <Text variant={'display8'}>{heading}</Text>
        <Text variant={'display9'} mt={1}>
          {value}
        </Text>
      </Flex>
    </Flex>
  );
};

export default OurSchools;
