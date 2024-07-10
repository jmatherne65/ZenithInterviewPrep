import React, { useState, useCallback } from 'react';
import { useToast, ChakraProvider, VStack, HStack, Input, Button, Checkbox, Heading, Text, Box, IconButton, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, List, ListItem } from '@chakra-ui/react';
import { GiSkateboard } from "react-icons/gi";
import '@fontsource-variable/league-spartan/';
import '@fontsource-variable/orbitron/';
import CustomButton from './buttoninterface';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
    steps: string[];
}

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [text, setText] = useState('');

    const toast = useToast();

    const addTodo = useCallback(() => {
        if (text.trim()) {
            setTodos([...todos, { id: Date.now(), text, completed: false, steps: [] }]);
            setText('');
        }
    }, [text, todos]);

    const toggleTodo = useCallback((id: number) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    }, [todos]);

    const deleteTodo = useCallback((id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }, [todos]);

    const addStep = useCallback((todoId: number, stepText: string) => {
        setTodos(todos.map(todo =>
            todo.id === todoId ? { ...todo, steps: [...todo.steps, stepText] } : todo
        ));
    }, [todos]);

    const handleClick1 = () => {
        console.log('Button clicked');
    };

    const handleClick2 = () => {
        toast({
            title: 'GNARLY',
            description: "YOU TOTALLY CLICKED THE BUTTON WE WANTED YOU TO, DUDE!",
            status: 'success',
            duration: 9000,
            isClosable: true,
        });
    };

    const handleClick3 = () => {
        toast({
            position: 'top-right',
            colorScheme: 'purple',
            title: 'HE OURPLE',
            description: "BECAUSE HE STAY FIVE NIGHTS, WITH FREDDY FIVE BEAR. BETTER THAN FREDDY FREAK-BEAR, WOULDN'T YOU SAY?",
            status: 'success',
            duration: 9000,
            isClosable: true,
        });
    };

    return (
        <ChakraProvider>
            <Box alignSelf="flex-start" mt="0" mb="4" ml="2">
                <Heading as="h1" size="2xl" fontWeight="extrabold" fontFamily='Orbitron'>
                    TONY HAWK'S
                </Heading>
            </Box>
            <Box alignSelf="start" ml="160">
                <Text fontSize='2xl' textColor='pink.500'>
                    AMERICAN TO-DO LIST
                </Text>
            </Box>
            <Box w="90vw" h="100vh" p={4}>
                <VStack w="90%" h="100%" spacing={4} align="stretch">
                    <HStack w="100%">
                        <Input
                            value={text}
                            variant='flushed'
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Do a Gnarly 360"
                            aria-label="Task input"
                            flex="1"
                            focusBorderColor='pink.500'
                        />
                        <IconButton onClick={addTodo} colorScheme="pink" aria-label={'Do A Flip'} size="lg" icon={<GiSkateboard />}>Add</IconButton>
                        <CustomButton text="Click Me" onClick={handleClick1} colorScheme="blue"></CustomButton>
                        <CustomButton text="No, Click Me" onClick={handleClick2} colorScheme="red"></CustomButton>
                        <CustomButton text="Why He Ourple" onClick={handleClick3} colorScheme="purple"></CustomButton>
                    </HStack>
                    {todos.length === 0 ? (
                        <Text>No tricks added yet.</Text>
                    ) : (
                        todos.map(todo => (
                            <VStack key={todo.id} spacing={4} w="100%">
                                <HStack w="100%">
                                    <Checkbox
                                        isChecked={todo.completed}
                                        onChange={() => toggleTodo(todo.id)}
                                        flex="1"
                                        colorScheme='pink'
                                    >
                                        {todo.text}
                                    </Checkbox>
                                    <Button
                                        size="sm"
                                        colorScheme="red"
                                        onClick={() => deleteTodo(todo.id)}
                                    >
                                        Delete
                                    </Button>
                                </HStack>
                                <Accordion allowToggle width="100%">
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex="1" textAlign="left">
                                                    Additional Steps
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <List spacing={2}>
                                                {todo.steps.map((step, index) => (
                                                    <ListItem key={index}>
                                                        {step}
                                                    </ListItem>
                                                ))}
                                                <HStack>
                                                    <Input
                                                        variant='flushed'
                                                        placeholder="Add step"
                                                        aria-label="Step input"
                                                        onKeyDown={(e) => {
                                                            if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                                                                addStep(todo.id, e.currentTarget.value);
                                                                e.currentTarget.value = '';
                                                            }
                                                        }}
                                                    />
                                                </HStack>
                                            </List>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </VStack>
                        ))
                    )}
                </VStack>
            </Box>
        </ChakraProvider>
    );
};

export default TodoList;
