import React from 'react';
import { Box, Flex, Text, Icon, Avatar } from '@chakra-ui/react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

interface TestimonialCardProps {
  testimonial: string;
  name: string;
  role: string;
  avatarUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  name,
  role,
  avatarUrl,
}) => {
  return (
    <Box p={8} bg="white" maxW="700px" mx="auto" position="relative">
      <Flex mb={4} direction={'column'}>
        <Avatar
          position={'absolute'}
          top={1}
          zIndex={1}
          overflow={'visible'}
          left={2}
          size="lg"
          name={name}
          src={avatarUrl}
          border={'3px solid #808080'}
        />
        <Flex mt={12} gap={2}>
          <Icon as={FaQuoteLeft} color="orange_dd" />

          <Text fontSize="lg" color="gray.600" mt={4}>
            {testimonial}
          </Text>
          <Icon as={FaQuoteRight} color="orange_dd" />
        </Flex>
        <Box ml={4}>
          <Text mt={4} variant="display15">
            {role}
          </Text>
          <Text variant="display11_400">{name}</Text>
        </Box>
      </Flex>

      <Flex justify="flex-end"></Flex>
    </Box>
  );
};

export default TestimonialCard;
