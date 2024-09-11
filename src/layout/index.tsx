// layout/Layout.tsx
import { Box, Flex } from '@chakra-ui/react';
import Footer from '@primelight-school/layout/footer';
import Navbar from '@primelight-school/layout/Navbar';
import Topbar from '@primelight-school/layout/Topbar';
import { useRef, useEffect } from 'react';
import { useRefsStore } from '@primelight-school/feature/Home/state';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const schoolsRef = useRef<HTMLDivElement>(null);
  const admissionsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const setRefs = useRefsStore((state) => state.setRefs);

  useEffect(() => {
    // Store the refs in Zustand state
    setRefs({ schoolsRef, admissionsRef, contactRef });
  }, [setRefs]);

  return (
    <Flex direction="column" minHeight="100vh">
      {/* Sticky Topbar */}
      <Box position="sticky" top="0" zIndex="99999" width="100%" boxShadow="md">
        <Topbar />
      </Box>

      {/* Sticky Navbar */}
      <Box
        position="sticky"
        top="var(--topbar-height, 50px)"
        zIndex="99999"
        width="100%"
        boxShadow="sm"
      >
        <Navbar />
      </Box>

      {/* Main content should fill remaining space */}
      <Flex as="main" direction="column" flex="1" width="100%">
        {children}
      </Flex>

      {/* Footer */}
      <Box as="footer" width="100%">
        <Footer />
      </Box>
    </Flex>
  );
};

export default Layout;
