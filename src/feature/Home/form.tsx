import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Input,
  Text,
  Textarea,
  useBreakpointValue,
} from '@chakra-ui/react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const GetInTouch = () => {
  const columns = useBreakpointValue({ base: 1, md: 1, lg: 2 });
  const isSmallerThanMd = useBreakpointValue({ base: true, md: false });
  return (
    <Box background={'white_re'} mt={'100px'} pb={12}>
      <Container
        maxW={{ base: '700px', md: '700px', lg: '1300px' }}
        marginTop={'100px'}
      >
        <Grid
          backgroundColor={isSmallerThanMd ? 'white_re' : 'none'}
          width="100%"
          alignItems={'center'}
          gridTemplateColumns={`repeat(${columns}, 1fr)`} // Grid layout with responsive columns
          gap={{ base: '40px', md: '40px', lg: '40px' }} // Responsive gap
        >
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: '400px', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
          <Flex direction={'column'}>
            <Text variant={'display13'}>Get in Touch with us</Text>
            <Flex direction={'column'} gap={4} mt={4}>
              <Input placeholder="Name" size="lg" />
              <Input placeholder="Email Address" size="lg" />
              <Input placeholder="Phone Number" size="lg" />
              <Textarea placeholder="Reason" size="lg" />
              <Button
                _hover={{
                  backgroundColor: 'blue_d',
                }}
                bg="blue_d"
                color="light"
                width={'full'}
              >
                Submit
              </Button>
            </Flex>
          </Flex>
        </Grid>
      </Container>
    </Box>
  );
};

export default GetInTouch;
