import React from 'react';
import { Heading, Text, Box, Center } from '@chakra-ui/react';
import './Home.css';

function Home() {
  return (
    <Box className=''>
      <Center>
        <Heading marginTop={100} marginBottom={50} as='h1' size='4xl' noOfLines={1}>Stealth Voting</Heading>
      </Center>
      <Center>
        <Text as='i'>A fast, secure and efficient Voting Web App based on Blockchain.</Text>
      </Center>
    </Box>
  )
}

export default Home;