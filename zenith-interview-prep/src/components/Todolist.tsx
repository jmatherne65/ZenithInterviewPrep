import React, { useState } from 'react';
import { VStack, HStack, Input, Button, Checkbox, Heading } from '@chakra-ui/react';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const Todolist: React.FC = () => {
    const [Todos, setTodos] = useState<Todo[]>([]);
    const [text, setText] = useState('');

    const addTodo = () =>{
        if (text.trim()){
            setTodos([...Todos, { id: Date.now(), text, completed: false }]);
            setText('');
        }
    };

    const toggleTodo = (id: number) => {
        setTodos(Todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };

    const deleteTodo = (id: number) => {
        setTodos(Todos.filter(todo => todo.id !== id));
      };

    return (
        <VStack spacing={4}>
          <Heading as="h1" size="lg">To-Do List</Heading>
          <HStack>
            <Input value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a new task" />
            <Button onClick={addTodo} colorScheme="blue">Add</Button>
          </HStack>
          {Todos.map(todo => (
            <HStack key={todo.id} spacing={4}>
              <Checkbox isChecked={todo.completed} onChange={() => toggleTodo(todo.id)}>{todo.text}</Checkbox>
            </HStack>
          ))}
        </VStack>
      );
    };
    
    export default Todolist;