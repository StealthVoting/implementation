import { Box, Button, Center, Heading, StackDivider, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux';
import { requestBlindSignature } from '../../../reducers/voter';
import { AppDispatch } from '../../../store';

type ConfirmVoteProps = {
  partyId: string,
  partyData: {
    id: string;
    name: string;
  }[]
}

function ConfirmVote({ partyId, partyData }: ConfirmVoteProps) {
  const dispatch = useDispatch<AppDispatch>();

  const code = partyData.find(party => party.id === partyId)?.id;
  const name = partyData.find(party => party.id === partyId)?.name;

  return (
    <Box>
      <Center marginY={'2rem'}>
        <Text as='b' fontSize={"md"}>Please confirm your vote:</Text>
      </Center>

      <VStack
        divider={<StackDivider borderColor='gray.200' />}
        spacing={4}
        align='stretch'>
        <Box key={code} p={5} shadow='md' borderWidth='1px' borderRadius={'1em'}>
          <Center>
            Party Code: {code}
          </Center>
        </Box>
        <Box key={name} p={5} shadow='md' borderWidth='1px' borderRadius={'1em'}>
          <Center>
            Party Name: {name}
          </Center>
        </Box>
      </VStack>

      <Center>
        <Button colorScheme={"teal"} variant={"outline"} marginTop={'2rem'}
          onClick={() => {
            dispatch(
              requestBlindSignature(Number(code))
            );
          }}>Submit</Button>
      </Center>

    </Box>
  )
}

export default ConfirmVote