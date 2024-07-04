import React, { useState } from 'react';
import { VStack, HStack, Input, Button, Checkbox, Heading, Text } from '@chakra-ui/react';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [text, setText] = useState('');

    const addTodo = () => {
        if (text.trim()) {
            setTodos([...todos, { id: Date.now(), text, completed: false }]);
            setText('');
        }
    };

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <VStack spacing={4}>
            <Heading as="h1" size="lg">TONY HAWK'S</Heading>
            <HStack>
                <Input 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                    placeholder="Add a new task" 
                />
                <Button onClick={addTodo} colorScheme="blue">Add</Button>
            </HStack>
            {todos.length === 0 ? (
                <Text>No tasks added yet.</Text>
            ) : (
                todos.map(todo => (
                    <HStack key={todo.id} spacing={4}>
                        <Checkbox 
                            isChecked={todo.completed} 
                            onChange={() => toggleTodo(todo.id)}
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
                ))
            )}
        </VStack>
    );
};

export default TodoList;
