import {
  Flex,
  Text,
  useBreakpointValue,
  Box,
  IconButton,
  VStack,
  Image,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState, useEffect, useRef } from 'react';
import { useRefsStore } from '@primelight-school/feature/Home/state';
import { RxCross2 } from 'react-icons/rx';
import Logo from '@primelight-school/assets/logo_blue.png';
import { Routes } from '@primelight-school/routes/route.constant';
import { Link } from 'react-router-dom';
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneFlex = useBreakpointValue({ base: 1, md: 0.5, lg: 1 });
  const menuFlex = useBreakpointValue({ base: 1, md: 2, lg: 2, xl: 1 });
  const isSmallerThanMd = useBreakpointValue({ base: true, md: false });
  const menuRef = useRef<HTMLDivElement>(null);

  // Access the refs from Zustand store
  const schoolsRef = useRefsStore((state) => state.schoolsRef);
  const admissionsRef = useRefsStore((state) => state.admissionsRef);
  const contactRef = useRefsStore((state) => state.contactRef);

  const scrollToSection = (section: 'schools' | 'admissions' | 'contact') => {
    switch (section) {
      case 'schools':
        schoolsRef?.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'admissions':
        admissionsRef?.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contactRef?.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
    if (isSmallerThanMd) {
      setIsMenuOpen(false); // Close menu on item click in mobile view
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <Flex
      background={'white'}
      height={'fit-content'}
      alignItems={'center'}
      padding={'22px 22px'}
      justifyContent={'space-between'}
      position={'relative'}
    >
      <Flex flex={phoneFlex} alignItems={'center'} gap={1}>
        <Image src={Logo} height={'80px'} w={'80px'} />
      </Flex>
      {!isSmallerThanMd ? (
        <Flex flex={menuFlex} justifyContent={'space-between'}>
          <Link to={Routes.LANDING}>
            <Text variant="display1_dark" cursor={'pointer'}>
              HOME
            </Text>
          </Link>
          <Link to={Routes.ABOUT}>
            <Text variant="display1_dark" cursor={'pointer'}>
              ABOUT
            </Text>
          </Link>
          <Text variant="display1_dark" cursor={'pointer'}>
            EVENTS
          </Text>
          <Text
            variant="display1_dark"
            cursor={'pointer'}
            onClick={() => scrollToSection('schools')}
            _after={{
              content: '""',
              display: 'block',
              borderBottom: '2px solid black',
              width: '100%',
              transform: 'scaleX(0)',
              transition: 'transform 0.3s ease',
            }}
            _hover={{
              _after: {
                transform: 'scaleX(1)',
              },
            }}
          >
            SCHOOLS
          </Text>
          <Text
            variant="display1_dark"
            cursor={'pointer'}
            onClick={() => scrollToSection('admissions')}
            _after={{
              content: '""',
              display: 'block',
              borderBottom: '2px solid black',
              width: '100%',
              transform: 'scaleX(0)',
              transition: 'transform 0.3s ease',
            }}
            _hover={{
              _after: {
                transform: 'scaleX(1)',
              },
            }}
          >
            ADMISSIONS
          </Text>
          <Text
            variant="display1_dark"
            cursor={'pointer'}
            onClick={() => scrollToSection('contact')}
            _after={{
              content: '""',
              display: 'block',
              borderBottom: '2px solid black',
              width: '100%',
              transform: 'scaleX(0)',
              transition: 'transform 0.3s ease',
            }}
            _hover={{
              _after: {
                transform: 'scaleX(1)',
              },
            }}
          >
            CONTACT
          </Text>
        </Flex>
      ) : (
        <>
          <IconButton
            icon={isMenuOpen ? <RxCross2 /> : <GiHamburgerMenu />}
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            variant="outline"
            _hover={{ bg: 'gray.100' }}
          />
          {isMenuOpen && (
            <Box
              ref={menuRef}
              position={'absolute'}
              top={'100%'}
              left={0}
              width={'100%'}
              background={'white'}
              padding={'20px'}
              boxShadow={'md'}
              zIndex={10}
            >
              <VStack spacing={4} align="start">
                <Link to={Routes.LANDING}>
                  <Text
                    variant="display1_dark"
                    fontSize={'sm'}
                    onClick={() => setIsMenuOpen(false)}
                    cursor={'pointer'}
                    _after={{
                      content: '""',
                      display: 'block',
                      borderBottom: '2px solid black',
                      width: '100%',
                      transform: 'scaleX(0)',
                      transition: 'transform 0.3s ease',
                    }}
                    _hover={{
                      _after: {
                        transform: 'scaleX(1)',
                      },
                    }}
                  >
                    HOME
                  </Text>
                </Link>
                <Link to={Routes.ABOUT}>
                  <Text
                    variant="display1_dark"
                    onClick={() => setIsMenuOpen(false)}
                    cursor={'pointer'}
                    fontSize={'sm'}
                    _after={{
                      content: '""',
                      display: 'block',
                      borderBottom: '2px solid black',
                      width: '100%',
                      transform: 'scaleX(0)',
                      transition: 'transform 0.3s ease',
                    }}
                    _hover={{
                      _after: {
                        transform: 'scaleX(1)',
                      },
                    }}
                  >
                    ABOUT
                  </Text>
                </Link>
                <Text
                  variant="display1_dark"
                  cursor={'pointer'}
                  fontSize={'sm'}
                  _after={{
                    content: '""',
                    display: 'block',
                    borderBottom: '2px solid black',
                    width: '100%',
                    transform: 'scaleX(0)',
                    transition: 'transform 0.3s ease',
                  }}
                  _hover={{
                    _after: {
                      transform: 'scaleX(1)',
                    },
                  }}
                >
                  EVENTS
                </Text>
                <Text
                  variant="display1_dark"
                  fontSize={'sm'}
                  cursor={'pointer'}
                  onClick={() => scrollToSection('schools')}
                  _after={{
                    content: '""',
                    display: 'block',
                    borderBottom: '2px solid black',
                    width: '100%',
                    transform: 'scaleX(0)',
                    transition: 'transform 0.3s ease',
                  }}
                  _hover={{
                    _after: {
                      transform: 'scaleX(1)',
                    },
                  }}
                >
                  SCHOOLS
                </Text>
                <Text
                  variant="display1_dark"
                  fontSize={'sm'}
                  cursor={'pointer'}
                  onClick={() => scrollToSection('admissions')}
                  _after={{
                    content: '""',
                    display: 'block',
                    borderBottom: '2px solid black',
                    width: '100%',
                    transform: 'scaleX(0)',
                    transition: 'transform 0.3s ease',
                  }}
                  _hover={{
                    _after: {
                      transform: 'scaleX(1)',
                    },
                  }}
                >
                  ADMISSIONS
                </Text>
                <Text
                  variant="display1_dark"
                  fontSize={'sm'}
                  cursor={'pointer'}
                  onClick={() => scrollToSection('contact')}
                  _after={{
                    content: '""',
                    display: 'block',
                    borderBottom: '2px solid black',
                    width: '100%',
                    transform: 'scaleX(0)',
                    transition: 'transform 0.3s ease',
                  }}
                  _hover={{
                    _after: {
                      transform: 'scaleX(1)',
                    },
                  }}
                >
                  CONTACT
                </Text>
              </VStack>
            </Box>
          )}
        </>
      )}
    </Flex>
  );
};

export default Navbar;
