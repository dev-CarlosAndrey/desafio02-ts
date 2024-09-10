import React from 'react';
import { Button } from '@chakra-ui/react'; 

interface CustomButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
    type?: "button" | "submit" | "reset"; 
    colorScheme?: string; 
    width?: string; 
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, children, type = "button", colorScheme, width }) => {
    return (
        <Button 
            onClick={onClick} 
            type={type} 
            colorScheme={colorScheme}  
            width={width === "full" ? "100%" : width}  
        >
            {children}
        </Button>
    );
};

export const AlertButton = () => {
    alert("Bem vindo ao DIO Bank");
};

export default CustomButton;
