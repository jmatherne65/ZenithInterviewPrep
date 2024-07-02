import React from 'react';
import { Box, Center, VStack } from '@chakra-ui/react';
import TodoList from './components/Todolist';

const App: React.FC = () => {
  return (
    <Box bg="gray.100" minH="100vh" py={10}>
      <Center>
        <VStack>
          <TodoList />
        </VStack>
      </Center>
    </Box>
  );
};

export default App;
