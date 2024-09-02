import { Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const phoneFlex = useBreakpointValue({ base: 1, md: 0.5, lg: 1 });
  const menuFlex = useBreakpointValue({ base: 1, md: 2, lg: 2, xl: 1 });
  const isSmallerThanMd = useBreakpointValue({ base: true, md: false });
  return (
    <Flex
      background={'white_re'}
      height={'fit-content'}
      alignItems={'center'}
      padding={'22px 22px'}
      justifyContent={'space-between'}
    >
      <Flex flex={phoneFlex} alignItems={'center'} gap={1}>
        {/* <PrimeLightLogo height={'100px'} width={'100px'} /> */}
        Logo
      </Flex>
      {!isSmallerThanMd ? (
        <Flex flex={menuFlex} justifyContent={'space-between'}>
          <Text variant="display1_dark">HOME</Text>
          <Text variant="display1_dark">ABOUT</Text>
          <Text variant="display1_dark">EVENTS</Text>
          <Text variant="display1_dark">SCHOOLS</Text>
          <Text variant="display1_dark">ADMISSIONS</Text>
          <Text variant="display1_dark">CONTACT</Text>
        </Flex>
      ) : (
        <Flex>
          <GiHamburgerMenu />
        </Flex>
      )}
    </Flex>
  );
};

export default Navbar;
