import { Box, Center, Heading, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import ChooseVote from './ChooseVote';
import ConfirmVote from './ConfirmVote';
import './PhaseTwo.css';

function PhaseTwo() {
  const { parties } = useSelector((state: RootState) => state.admin);

  const [partyId, setPartyId] = useState("0");
  const [isPartySelected, setIsPartySelected] = useState(false);

  const partyData = [
    {
      id: "0",
      name: "No Party Selected",
    }
  ]

  parties.forEach(party => {
    partyData.push({
      id: party.partyCode,
      name: party.partyName
    })
  })

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
        : <ConfirmVote partyId={partyId} partyData={partyData} setIsPartySelected={setIsPartySelected} />
      }
    </Box>
  )
}

export default PhaseTwo