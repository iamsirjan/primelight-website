import {
  Button,
  Container,
  Flex,
  Grid,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import YouTube, { YouTubeEvent } from 'react-youtube';
import YoutubeImage from '@primelight-school/assets/Y Play.jpg';
import { Link } from 'react-router-dom';
const Recent = () => {
  const columns = useBreakpointValue({ base: 1, md: 1, lg: 2 });
  const isSmallerThanMd = useBreakpointValue({ base: true, md: false });
  const videoId = '';

  const opts = {
    height: '500',
    width: '100%  ',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const onReady = (event: YouTubeEvent) => {
    event.target.pauseVideo();
  };
  return (
    <Container
      maxW={{ base: '700px', md: '700px', lg: '1300px' }}
      marginTop={'100px'}
    >
      <Grid
        backgroundColor={isSmallerThanMd ? 'white_re' : 'none'}
        width="100%"
        gridTemplateColumns={`repeat(${columns}, 1fr)`} // Grid layout with responsive columns
        gap={{ base: '40px', md: '40px', lg: '40px' }} // Responsive gap
      >
        {videoId ? (
          <YouTube videoId={videoId} opts={opts} onReady={onReady} />
        ) : (
          <Image src={YoutubeImage} style={{ height: '100%', width: '100%' }} />
        )}
        <Flex direction={'column'} gap={4}>
          <Text variant={'display11'}>Recent Update</Text>
          <Text variant={'display12'}>Entrance Examination Result Out</Text>
          <Text variant={'display9'}>Click Here</Text>
          <Text variant={'display12'}>Regular Student Login</Text>
          <Text variant={'display9'}>Click Here</Text>
          <Text variant={'display12'}>Are you A New Student?</Text>
          <Link to={'https://forms.gle/dDRpd6pR3ZDPGBB4A'} target="_blank">
            <Button
              _hover={{
                backgroundColor: 'blue_d',
              }}
              bg="blue_d"
              color="light"
              width={'300px'}
            >
              Enrol Now
            </Button>
          </Link>
        </Flex>
      </Grid>
    </Container>
  );
};

export default Recent;
