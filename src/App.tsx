import { Center, Container, Heading } from '@chakra-ui/react';
import React from 'react';

function App() {
  return (
    <Container marginTop='4'>
      <Center>
        <Heading as='h3'>Voting App</Heading>
      </Center>

      <Heading as='h6' size='md' marginTop='4'>Initialize Voting</Heading>
    </Container>
  );
}

export default App;
