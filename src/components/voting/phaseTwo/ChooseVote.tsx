import { Box, Button, Center, StackDivider, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

function ChooseVote() {
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

  const [partyId, selectParty] = useState("0");

  return (
    <div style={{ marginTop: "5em" }}>
      <Text>
        Voter here can choose their vote and submit it.
      </Text>

      <VStack
        marginTop={"2em"}
        divider={<StackDivider borderColor='gray.200' />}
        spacing={4}
        align='stretch'>
        {
          partyData.map(party => (
            party.id !== "0" &&
            (<Box key={party.id} p={5} shadow='md' borderWidth='1px' borderRadius={'1em'} onClick={() => { selectParty(party.id) }}>
              <Center>
                {party.name}
              </Center>
            </Box>)
          ))
        }
      </VStack>

      <Text marginTop={"2em"}>
        {"Selected Party:- " + partyData.find(party => party.id === partyId)?.name}
      </Text>

      <Center marginTop={"2em"}>
        <Button colorScheme={'teal'}>
          Submit Vote
        </Button>
      </Center>
    </div >
  )
}

export default ChooseVote