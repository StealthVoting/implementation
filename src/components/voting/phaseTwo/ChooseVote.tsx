import { Box, Button, Center, Spacer, Stack, StackDivider, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { requestBlindSignature } from '../../../reducers/voter';
import { AppDispatch, RootState } from '../../../store';
import CustomLink from '../../utils/CustomLink';

type ChooseVoteProps = {
  partyId?: string,
  setPartyId?: React.Dispatch<React.SetStateAction<string>>,
  setIsPartySelected?: React.Dispatch<React.SetStateAction<boolean>>,
  partyData: {
    id: string;
    name: string;
  }[]
}

function ChooseVote({ partyId, setPartyId, setIsPartySelected, partyData }: ChooseVoteProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { u1 } = useSelector((state: RootState) => state.voter);

  return (
    <Box marginTop={"5em"}>
      <Text>
        Choose your preference:
      </Text>

      <VStack
        marginTop={"2em"}
        divider={<StackDivider borderColor='gray.200' />}
        spacing={4}
        align='stretch'>
        {
          partyData.map(party => (
            party.id !== "0" &&
            (<Box key={party.id} p={5} shadow='md' borderWidth='1px' borderRadius={'1em'}
              onClick={() => {
                if (setPartyId !== undefined) {
                  setPartyId(party.id)
                }
              }}>
              <Center>
                {party.name}
              </Center>
            </Box>)
          ))
        }
      </VStack>

      <Text marginTop={"2em"}>
        {"Selected Party: " + partyData.find(party => party.id === partyId)?.name}
      </Text>

      <Stack spacing={4} direction="row" align="center" marginTop={"2em"}>
        <Button colorScheme={"teal"} variant={"outline"} disabled={(partyId === "0")}
          onClick={() => {
            dispatch(
              requestBlindSignature(Number(partyId))
            );
          }}>Select Party</Button>
        <Spacer />
        <Button colorScheme={'teal'} disabled={(u1 == null)} onClick={() => {
          if (setIsPartySelected !== undefined) {
            setIsPartySelected(true)
          }
        }}>
          <CustomLink to={''}>
            Proceed
          </CustomLink>
        </Button>
      </Stack>
    </Box >
  )
}

export default ChooseVote