import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Divider,
  useBreakpointValue,
  Grid,
} from '@chakra-ui/react';
import { PrimeLightLogoWhite } from '@primelight-school/assets/svgs';
import { IconButton } from '@primelight-school/component/IconButton';
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaSnapchatGhost,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  return (
    <Box bg={'black_blue'} color={'white_re'} py={30} px={10} mt={10}>
      <Flex
        justify="space-between"
        align="flex-start"
        gap={4}
        direction={{ base: 'column', md: 'row' }}
      >
        {/* Logo and Description */}
        <VStack align="flex-start" spacing={3} mb={{ base: 10, md: 0 }}>
          <PrimeLightLogoWhite height={'80px'} width={'80px'} />

          {/* Placeholder for logo */}
          <Text
            w={{ base: '100%', md: '100%', lg: '70%' }}
            variant={'display14'}
          >
            Our main focus is to provide a Christ-centered education that
            inspires academic excellence, fosters spiritual growth, and empowers
            pupils to positively impact their communities and the world.
          </Text>
        </VStack>

        {/* Follow Us */}
        <Grid
          width="100%"
          gridTemplateColumns={`repeat(${columns}, 1fr)`} // Grid layout with responsive columns
          gap={{ base: '40px', md: '40px', lg: '40px' }} // Responsive gap
        >
          <VStack align="flex-start" spacing={2} mb={{ base: 10, md: 0 }}>
            <Text variant="display13_light">Follow us</Text>
            <HStack cursor={'pointer'}>
              <IconButton icon={<FaFacebookF color="red" />} />
              <a
                href={
                  ' https://www.facebook.com/profile.php?id=61563594305866&mibextid=LQQJ4d'
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text variant="display9_light">Facebook</Text>
              </a>
            </HStack>
            <HStack
              cursor={'pointer'}
              _hover={{
                color: 'link',
              }}
            >
              <IconButton icon={<FaYoutube color="red" />} />

              <Text variant="display9_light">YouTube</Text>
            </HStack>
            <HStack
              cursor={'pointer'}
              _hover={{
                color: 'link',
              }}
            >
              <IconButton icon={<FaInstagram color="red" />} />
              <Text variant="display9_light">Instagram</Text>
            </HStack>
            <HStack
              cursor={'pointer'}
              _hover={{
                color: 'link',
              }}
            >
              <IconButton icon={<FaTwitter color="red" />} />
              <a
                href={
                  'https://x.com/primelight_sch?t=843VgHT5dEFyQ4Q2mdfWHQ&s=08'
                }
                target="_blank"
              >
                <Text variant="display9_light">Twitter</Text>
              </a>
            </HStack>
            <HStack
              cursor={'pointer'}
              _hover={{
                color: 'link',
              }}
            >
              <IconButton icon={<FaLinkedin color="red" />} />
              <a
                href={
                  'https://www.linkedin.com/in/the-primelight-schools-73b56431a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
                }
                target="_blank"
              >
                <Text variant="display9_light">LinkedIn</Text>
              </a>
            </HStack>
            <HStack
              cursor={'pointer'}
              _hover={{
                color: 'link',
              }}
            >
              <IconButton icon={<FaTiktok color="red" />} />
              <Text variant="display9_light">Tiktok</Text>
            </HStack>
            <HStack
              cursor={'pointer'}
              _hover={{
                color: 'link',
              }}
            >
              <IconButton icon={<FaSnapchatGhost color="red" />} />
              <Text variant="display9_light">Snapchat</Text>
            </HStack>
            <HStack
              cursor={'pointer'}
              _hover={{
                color: 'link',
              }}
            >
              <IconButton icon={<FaWhatsapp color="red" />} />
              <a href={' https://wa.me/2348142799303?text=Hi'} target="_blank">
                <Text variant="display9_light">WhatsApp</Text>
              </a>
            </HStack>
          </VStack>

          {/* Explore */}
          <VStack align="flex-start" spacing={2} mb={{ base: 10, md: 0 }}>
            <Text cursor={'pointer'} variant="display13_light">
              Explore
            </Text>
            <Text cursor={'pointer'} variant="display9_light">
              Blog
            </Text>
            <Text cursor={'pointer'} variant="display9_light">
              FAQ
            </Text>
            <Text cursor={'pointer'} variant="display9_light">
              Alumni
            </Text>
            <Text cursor={'pointer'} variant="display9_light">
              Staff portal
            </Text>
            <Text cursor={'pointer'} variant="display9_light">
              Careers
            </Text>
            <Text cursor={'pointer'} variant="display9_light">
              Student portal
            </Text>
          </VStack>

          {/* Contact */}
          <VStack align="flex-start" spacing={3}>
            <Text variant={'display13_light'}>Contact</Text>
            <HStack
              cursor={'pointer'}
              _hover={{
                color: 'link',
              }}
            >
              <IconButton icon={<FaMapMarkerAlt color={'red'} />} />
              <Text variant={'display9_light'}>
                Akaboukwu Bus stop, Opp. Mount Zion Anglican Church, Akaboukwu
                Anambra
              </Text>
            </HStack>
            <HStack
              cursor={'pointer'}
              _hover={{
                color: 'link',
              }}
            >
              <IconButton icon={<FaPhone color="red" />} />
              <Text variant={'display9_light'}>+234(0) 814 279 9303</Text>
            </HStack>
            <HStack
              cursor={'pointer'}
              _hover={{
                color: 'link',
              }}
            >
              <IconButton icon={<FaEnvelope color="red" />} />
              <Text variant={'display9_light'}>primelightschool@gmail.com</Text>
            </HStack>
          </VStack>
        </Grid>
      </Flex>

      <Divider my={6} borderColor={'light'} />

      <Flex
        justify="center"
        direction={'column'}
        alignItems={'center'}
        gap={4}
        textAlign={{ base: 'center', md: 'left' }}
      >
        <Text variant={'display14'}>
          Copyright © 2024 | PrimeLight School. All rights reserved
        </Text>
        <Text variant={'display14'}>Powered by Softzenith</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
