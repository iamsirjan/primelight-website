import { Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import { PhoneLogo } from '@primelight-school/assets/svgs';
import { IconButton } from '@primelight-school/component/IconButton';
import {
  FaceBook,
  Whatsapp,
  Linkedln,
  Twitter,
} from '@primelight-school/assets/svgs';
import { Link } from 'react-router-dom';

const Topbar = () => {
  const phoneFlex = useBreakpointValue({ base: 1, md: 0.5, lg: 1 });
  const menuFlex = useBreakpointValue({ base: 1, md: 1, lg: 1, xl: 0.5 });
  const isSmallerThanMd = useBreakpointValue({ base: true, md: false });
  return (
    <Flex
      background={'blue_d'}
      padding={'22px 22px'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Flex flex={phoneFlex} alignItems={'center'} gap={1}>
        <PhoneLogo height={'18px'} width={'18px'} />
        <Text variant={!isSmallerThanMd ? 'display1' : 'display1_small'}>
          +234(0) 814 279 9303
        </Text>
      </Flex>
      {!isSmallerThanMd ? (
        <Flex flex={menuFlex} justifyContent={'space-between'}>
          <Text variant="display1">Student Portal</Text>
          <Text variant="display1">Almuni</Text>
          <Text variant="display1">FAQ</Text>
          <Text variant="display1">Careers</Text>
          <Text variant="display1">Staff Portal</Text>
        </Flex>
      ) : (
        <Flex gap={'10px'}>
          <Link
            target="_blank"
            to={
              'https://www.facebook.com/profile.php?id=61563594305866&mibextid=LQQJ4d'
            }
          >
            <IconButton icon={<FaceBook />} />
          </Link>
          <Link
            target="_blank"
            to={'https://x.com/primelight_sch?t=843VgHT5dEFyQ4Q2mdfWHQ&s=08'}
          >
            <IconButton icon={<Twitter />} />
          </Link>
          <Link to={'https://wa.me/2348142799303?text=Hi'}>
            <IconButton icon={<Whatsapp />} />
          </Link>
          <Link
            to={
              'https://www.linkedin.com/in/the-primelight-schools-73b56431a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            }
          >
            <IconButton icon={<Linkedln />} />
          </Link>
        </Flex>
      )}
    </Flex>
  );
};

export default Topbar;
