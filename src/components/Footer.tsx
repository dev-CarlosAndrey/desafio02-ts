import { Box, Text, Center } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box bg="gray.100" py={4} mt={8} borderTop="1px solid" borderColor="gray.200" marginTop='40 px'>
      <Center> 
        <Text fontSize="lg" fontWeight="bold" color="teal.500">
          DIO Bank
        </Text>
      </Center>
      <Center mt={2}>
        <Text fontSize="md" color="gray.600">
          DIO Bank - A melhor aplicação
        </Text>
      </Center>
    </Box>
  );
};
