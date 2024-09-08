import {
  Box,
  Container,
  Flex,
  Grid,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { ArrowDownLogo, TickLogo } from '@primelight-school/assets/svgs';

const WhyPrime = () => {
  const columns = useBreakpointValue({ base: 1, md: 1, lg: 2, xl: 2 });
  const strategies = [
    {
      id: 1,
      title: 'Establish School Infrastructure',
      description:
        'In the short term, we will gear efforts towards securing suitable facilities and or purchase agreements, equipping our classrooms with necessary furniture, supplies, and teaching materials and also ensuring these facilities meet safety standards and regulatory requirements.',
    },
    {
      id: 2,
      title: 'Recruit Qualified Staff',
      description:
        'We will screen and interview candidates to assess qualifications, experience, and alignment with the school’s values and mission. We intend to offer remuneration between the range of #20,000 to #100,000 depending on the level of the teacher’s professionalism.',
    },
    {
      id: 3,
      title: 'Develop Curriculum',
      description:
        'TPLHS will collaborate with educators, curriculum specialists, and subject matter experts to design a comprehensive and engaging curriculum. We will align curriculum with educational standards, including national or state guidelines and accreditation requirements and as well incorporate Christian values, principles, and teachings into lesson plans and instructional materials.',
    },
    {
      id: 4,
      title: 'Obtain Accreditation',
      description:
        'TPLHS will obtain registration and approval from relevant regulatory authorities, such as the Anambra State Ministry of Education and the State Universal Basic Education Board (SUBEB) in Anambra. We will comply with registration procedures, documentation requirements, and inspection processes to ensure legal authorization to operate as a school and aligning with the requirements and guidelines set by relevant educational authorities and other accrediting bodies.',
    },
    {
      id: 5,
      title: 'Build Enrollment',
      description:
        'We intend to develop marketing materials, including brochures, flyers, and a school website, to promote the school’s programs and offerings. Host open houses, information sessions, and school tours to showcase the facilities and meet prospective families. Offer promotional incentives, such as early enrollment discounts or referral bonuses, to attract new students.',
    },
    {
      id: 6,
      title: 'Foster Community Engagement',
      description:
        'We envisage establishing partnerships with local churches, community organizations, and businesses to support school initiatives and events, organizing outreach activities, service projects, and charity drives to involve pupils, families, and staff in giving back to the community. Also, we will encourage parental involvement through volunteer opportunities, parent-teacher associations, and family engagement events.',
    },
    {
      id: 7,
      title: 'Provide Professional Development',
      description:
        'We will offer workshops, seminars, and training sessions for teachers and staff to their skills, knowledge, and expertise in teaching, curriculum development, and classroom management. We intend to provide opportunities for ongoing professional development through conferences, webinars, and online courses.',
    },
    {
      id: 8,
      title: 'Ensure Financial Stability',
      description:
        'Developing a realistic budget that accounts for operating expenses, staffing costs, facilities maintenance, and other financial obligations is part of our short-term strategies. We will also explore funding sources, such as tuition fees, donations, grants, and sponsorships, to generate revenue and support school operations. We will also implement financial management practices, including budget expense tracking and cash flow management, to ensure fiscal responsibility and sustainability.',
    },
  ];

  return (
    <Container maxW={{ base: '400px', md: '800px', lg: '1300px' }}>
      <Box
        background={'white_re'}
        borderRadius={'10px'}
        padding={'20px 20px'}
        pb={'90px'}
        mt={10}
      >
        <Text fontSize={'25px'} fontWeight={700} color="dark">
          Why Prime LightHouse School
        </Text>
        <Text mt={3} fontSize={'18px'} color="dark">
          Looking ahead, our long-term vision is to become a center of
          excellence in Christian education. We aim to achieve academic
          excellence, expand our facilities, enhance technology integration,
          cultivate spiritual formation, strengthen community impact, promote
          inclusivity and diversity, and sustain financial viability. Through
          these efforts, we aspire to make a lasting and positive impact on the
          lives of our pupils. To achieve the above goals/objectives, The Prime
          Light House Schools has put in place the following strategic plans;
        </Text>

        <Flex mt={7} alignItems={'center'} gap={3}>
          <TickLogo />
          <Text color="dark" fontSize={'18px'} fontWeight={700}>
            Short-Term Goal Strategies
          </Text>
          <ArrowDownLogo />
        </Flex>
        <Grid
          width="100%"
          marginTop={'25px'}
          gridTemplateColumns={`repeat(${columns}, 1fr)`} // Grid layout with responsive columns
          gap={{ base: '20px', md: '20px', lg: '20px' }} // Responsive gap
        >
          {strategies.map((data, i) => (
            <ListItems
              id={data.id}
              title={data.title}
              description={data.description}
              key={i}
            />
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default WhyPrime;

const ListItems = ({
  id,
  title,
  description,
}: {
  id: number;
  title: string;
  description: string;
}) => {
  return (
    <Box>
      <Flex fontSize={'18px'} w={'100%'} alignItems="center">
        <Text color="red_da" mr={2} fontWeight="700">
          {id}.
        </Text>
        <Text color="red_da" fontWeight="700" mr={2}>
          {title}:
        </Text>
      </Flex>
      <Text mt={1} color="dark" fontSize={'18px'}>
        {description}
      </Text>
    </Box>
  );
};
