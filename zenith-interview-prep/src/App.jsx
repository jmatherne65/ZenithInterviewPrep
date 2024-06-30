import { ChakraProvider, Flex, Text, Image, Box, Button, ButtonGroup } from '@chakra-ui/react';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Flex 
        minHeight="100vh"
        width="100vw"
        direction={{ base: 'column', md: 'row' }}
        justify="center"
        align="center"
        bg="#FFFFFF"
        p={{ base: 2, md: 4, lg: 8 }}
        wrap="wrap"
        gap={{ base: 2, md: 4, lg: 8 }}
      >
        <Box boxSize='sm'alignContent='top'>
          <Image src = 'https://images.inc.com/uploaded_files/image/1920x1080/getty_591877956_200013472000928038_315541.jpg' alt='This is James.'></Image>
        </Box>
        <Text
          bgGradient='linear(to-b, #4A90E2, #8E44AD)'
          bgClip='text'
          fontSize='6xl'
          fontWeight='extrabold'
          textAlign='center'
        >
          Welcome to James' Test Site
        </Text>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
