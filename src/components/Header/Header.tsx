import { Box, Flex, Text } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Box
      as="header"
      bg="gray.100"
      px={4}
      py={4}
      borderBottom="1px solid"
      borderColor="gray.200"
      position="fixed"
      width="100%"
      top={0}
      zIndex={1000}
    >
      <Flex justify="center" align="center">
        {/* Nome da Aplicação */}
        <Text fontSize="2xl" fontWeight="bold" color="teal.500">
          DIO Bank
        </Text>
      </Flex>
    </Box>
  );
};
