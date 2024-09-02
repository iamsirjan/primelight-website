import { ChakraProvider } from '@chakra-ui/react';
import { QueryProvider } from '@primelight-school/provider/ReactQueryProvider';
import theme from '@primelight-school/theme';
import { QueryClientProvider } from '@tanstack/react-query';

const GlobalProvider = ({ children }: { children: React.ReactElement }) => {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={QueryProvider}>
        {children}
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default GlobalProvider;
