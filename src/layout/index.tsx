import { Flex } from '@chakra-ui/react';
import Footer from '@primelight-school/layout/footer';
import Navbar from '@primelight-school/layout/Navbar';
import Topbar from '@primelight-school/layout/Topbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
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
