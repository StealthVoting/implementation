import { Box, Center, Heading, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import InsertCard from '../../utils/InsertCard';
import ChooseVote from './ChooseVote';
import ConfirmVote from './ConfirmVote';
import './PhaseTwo.css';

function PhaseTwo() {
  const [partyId, setPartyId] = useState("0");
  const [isPartySelected, setIsPartySelected] = useState(false);

  const partyData = [
    {
      id: "0",
      name: "No Party Selected",
    },
    {
      id: "1",
      name: "BJP",
    },
    {
      id: "2",
      name: "Congress",
    },
    {
      id: "3",
      name: "AAP",
    },
    {
      id: "4",
      name: "SP",
    },
  ]

  return (
    <Box>
      <Center>
        <Heading marginTop={"1em"} marginBottom={"1em"} as='h6' noOfLines={1}>Cast your vote!</Heading>
      </Center>
      <Center marginBottom={'2rem'}>
        <Text as='i' fontSize={"lg"}>This is Phase 2 of the voting. Here the voter casts their vote.</Text>
      </Center>

      {!isPartySelected
        ? <ChooseVote partyId={partyId} setPartyId={setPartyId} setIsPartySelected={setIsPartySelected} partyData={partyData} />
        : <ConfirmVote partyId={partyId} partyData={partyData} />
      }
    </Box>
  )
}

export default PhaseTwo