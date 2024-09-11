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
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';

const GetInTouch = () => {
  const columns = useBreakpointValue({ base: 1, md: 1, lg: 2 });
  const isSmallerThanMd = useBreakpointValue({ base: true, md: false });

  // State variables to hold form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [reason, setReason] = useState('');

  // Function to handle form submission
  const handleSubmit = () => {
    // Construct the WhatsApp link with form data
    const whatsappLink = `https://wa.me/2348142799303?text=Hi,%20My%20name%20is%20${encodeURIComponent(name)},%20phone%20-%20${encodeURIComponent(phone)},%20email%20:%20${encodeURIComponent(email)}`;

    // Open the WhatsApp link in a new tab/window
    window.open(whatsappLink, '_blank');
  };

  return (
    <Box background={'white_re'} mt={'100px'} pb={12} pt={1}>
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
          <Box
            as="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.6837586073665!2d6.8865619!3d6.0378807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10439777a2ed4365%3A0xae682ebf416fb479!2sMount%20Zion%20Anglican%20Church!5e0!3m2!1sen!2sng!4v1694124724519!5m2!1sen!2sng"
            width="100%"
            height="400px"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <Flex direction={'column'}>
            <Text variant={'display13'}>Get in Touch with us</Text>
            <Flex direction={'column'} gap={4} mt={4}>
              <Input
                placeholder="Name"
                size="lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                placeholder="Email Address"
                size="lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="Phone Number"
                size="lg"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Textarea
                placeholder="Reason"
                size="lg"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
              <Button
                _hover={{
                  backgroundColor: 'blue_d',
                }}
                bg="blue_d"
                color="light"
                width={'full'}
                onClick={handleSubmit} // Call the handleSubmit function on click
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
