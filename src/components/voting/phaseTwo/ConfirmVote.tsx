import { Box, Button, Center, Heading, Spacer, Stack, StackDivider, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux';
import { validateBlindSignature } from '../../../reducers/voter';
import { AppDispatch } from '../../../store';
import CustomLink from '../../utils/CustomLink';

type ConfirmVoteProps = {
  partyId: string,
  partyData: {
    id: string;
    name: string;
  }[],
  setIsPartySelected: React.Dispatch<React.SetStateAction<boolean>>
}

function ConfirmVote({ partyId, partyData, setIsPartySelected }: ConfirmVoteProps) {
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

      <Stack spacing={4} direction="row" align="center" marginTop={'2rem'}>
        <Button colorScheme={"teal"} variant={"outline"}
          onClick={() => {
            setIsPartySelected(false);
          }}>Back</Button>
        <Spacer />
        <Button colorScheme={"teal"} onClick={() => {
          dispatch(validateBlindSignature(Number(code)))
        }}
        >
          <CustomLink to={"../success"}>
            Submit
          </CustomLink>
        </Button>
      </Stack>

    </Box>
  )
}

export default ConfirmVote