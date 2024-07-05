import React from 'react';
import { Box, ChakraProvider, VStack} from '@chakra-ui/react';
import TodoList from './components/Todolist'
import theme from './components/themeelements.tsx'

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
    <Box bg="gray.100" minH="100vh" py={2}>
        <VStack>
          <TodoList />
        </VStack>
    </Box>
    </ChakraProvider>
  );
};

export default App;
