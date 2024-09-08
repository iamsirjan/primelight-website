// layout/Layout.tsx
import { Flex } from '@chakra-ui/react';
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
    <Flex direction={'column'}>
      <Topbar />
      <Navbar />
      {children}
      <Footer />
    </Flex>
  );
};

export default Layout;
