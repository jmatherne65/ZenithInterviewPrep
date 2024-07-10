import { Button } from '@chakra-ui/react';
import React from 'react';

interface ButtonProps {
    text: string;
    onClick: () => void;
    colorScheme?: string;
}

const CustomButton: React.FC<ButtonProps> = ({ text, onClick, colorScheme }) => {
    return (
        <Button onClick={onClick} colorScheme={colorScheme}>
            {text}
        </Button>
    );
};

export default CustomButton;
