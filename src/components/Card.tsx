import React, { useState } from 'react';
import { Box, Input, Heading, Flex, FormControl, FormLabel } from '@chakra-ui/react';
import CustomButton, { AlertButton } from './CustomButton';


interface ICard {
  email?: string;
  password?: string;
}

export const Card = ({ email = '', password = '' }: ICard) => {
  const [emailState, setEmail] = useState(email);
  const [passwordState, setPassword] = useState(password);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ emailState, passwordState });
  };

  return (
    <Flex align="center" justify="center" height="90vh">
      <Box maxW="lg" borderWidth="1px" borderRadius="lg" boxShadow="md" p={6} bg="white" w="100%" h="auto">
        <Heading size="md" mb={6} textAlign="center">Login</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id="email" mb={4} isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={emailState} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu email" />
          </FormControl>
          <FormControl id="password" mb={6} isRequired>
            <FormLabel>Senha</FormLabel>
            <Input type="password" value={passwordState} onChange={(e) => setPassword(e.target.value)} placeholder="Digite sua senha" />
          </FormControl>
          <CustomButton type="submit" colorScheme="blue" width="full" onClick={AlertButton}> Button  </CustomButton>
        </form>
      </Box>
    </Flex>
  );
};
