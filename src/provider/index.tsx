import { ChakraProvider } from '@chakra-ui/react';
import { QueryProvider } from '@shangrila-cargo/provider/ReactQueryProvider';
import theme from '@shangrila-cargo/theme';
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
