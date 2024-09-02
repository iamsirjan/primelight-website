import { Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import { PhoneLogo } from '@primelight-school/assets/svgs';
import { IconButton } from '@primelight-school/component/IconButton';
import {
  FaceBook,
  Instagram,
  Whatsapp,
  Linkedln,
  Twitter,
} from '@primelight-school/assets/svgs';

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
          <IconButton icon={<FaceBook />} />
          <IconButton icon={<Instagram />} />
          <IconButton icon={<Whatsapp />} />
          <IconButton icon={<Linkedln />} />
          <IconButton icon={<Twitter />} />
        </Flex>
      )}
    </Flex>
  );
};

export default Topbar;
