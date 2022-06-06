import { Box, Button, FormControl, FormLabel, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewParty, getVotesForPartyCode } from '../../reducers/admin';
import { AppDispatch, RootState } from '../../store';
import './Stats.css';

function Stats() {
  const [partyCode, setPartyCode] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const { isAdminLoading, currPartyVotes } = useSelector((state: RootState) => state.admin);

  return (
    <Box marginTop={"2em"}>

      <FormControl>
        <FormLabel htmlFor="numbers" marginTop={"1em"}>Party Code</FormLabel>
        <NumberInput max={1000000} min={10} onChange={setPartyCode}>
          <NumberInputField id='amount' />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <Button isLoading={isAdminLoading} marginTop={"1em"}
          onClick={() => {
            dispatch(
              getVotesForPartyCode(Number(partyCode))
            )
          }}
        >Create New Party
        </Button>

        <Text marginTop={"2em"}>{currPartyVotes}</Text>
      </FormControl>
    </Box>
  )
}

export default Stats