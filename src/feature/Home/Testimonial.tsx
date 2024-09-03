import React from 'react';
import { Box, Text, useBreakpointValue } from '@chakra-ui/react';
import TestimonialCard from '../../component/TestimonialCard';
import Slider from 'react-slick';
import { FaChevronRight } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Background from '@primelight-school/assets/bg.jpg'; // Adjust path if necessary

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      testimonial:
        'Simplemente el texto de relleno de las imprentas y archivos de texto...',
      name: 'Anita Dumebi',
      role: 'JSS3 Student',
      avatarUrl: 'https://bit.ly/dan-abramov',
    },
    {
      testimonial: 'Simplemente edsadasdasdasd dasdas das dasd  dsada sdas d..',
      name: 'Anita Dumebi',
      role: 'JSS3 Student',
      avatarUrl: 'https://bit.ly/dan-abramov',
    },
    // Add more testimonials as needed
  ];
  const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <FaChevronRight
      onClick={onClick}
      style={{
        position: 'absolute',
        right: '10',
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        zIndex: 1,
        color: isSmallerThanSm ? '#000' : '#fff',
      }}
    />
  );
  const isSmallerThanSm = useBreakpointValue({ base: true, md: false });

  const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <FaChevronLeft
      onClick={onClick}
      style={{
        position: 'absolute',
        left: '10',
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        zIndex: 1,
        color: isSmallerThanSm ? '#000' : '#fff',
      }}
    />
  );

  const settings = {
    infinite: true,
    speed: 500,

    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Box
      py={20}
      mt={'80px'}
      bg="blue_d"
      position="relative"
      backgroundImage={`url('${Background}')`} // Use backticks for URL interpolation
      backgroundSize="cover"
      backgroundPosition="center"
      opacity={0.9} // Adjust opacity level here
      zIndex={1} // Ensure it's behind other content
    >
      <Text
        textAlign="center"
        mb={8}
        zIndex={1}
        position="relative"
        variant="display13_800_light"
      >
        Testimonials
      </Text>
      <Box position={'relative'} height={'400px'} padding={5}>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial.testimonial}
              name={testimonial.name}
              role={testimonial.role}
              avatarUrl={testimonial.avatarUrl}
            />
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default TestimonialsSection;
