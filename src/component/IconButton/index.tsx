import { Flex } from '@chakra-ui/react';
import { ReactElement } from 'react';

interface IconButtonProps {
  icon: ReactElement;
}
export const IconButton = ({ icon }: IconButtonProps) => {
  return (
    <Flex
      backgroundColor={'light'}
      height={'18px'}
      width={'18px'}
      borderRadius={'100%'}
      padding={'5px'}
      alignItems={'center'}
    >
      {icon}
    </Flex>
  );
};
