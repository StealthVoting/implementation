import { Box, Center, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import InsertCard from '../../utils/InsertCard';
import './PhaseTwo.css';

function PhaseTwo() {
  return (
    <Box>
      <Center>
        <Heading marginTop={"1em"} marginBottom={"1em"} as='h6' noOfLines={1}>Cast your vote!</Heading>
      </Center>
      <Center marginBottom={'2rem'}>
        <Text as='i' fontSize={"lg"}>This is Phase 2 of the voting. Here the voter casts their vote.</Text>
      </Center>
      <Text>Pending...</Text>
      <InsertCard isSpinner={false} isLink={true} linkProps={{ to: "choose-vote" }} />
    </Box>
  )
}

export default PhaseTwo