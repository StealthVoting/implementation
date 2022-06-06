import { Box, Button, FormControl, FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNewParty } from '../../reducers/admin';
import { AppDispatch, RootState } from '../../store';
import './CreateVoter.css'

function CreateParty() {
  const [partyName, setPartyName] = useState("");
  const [partyCode, setPartyCode] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const { isAdminLoading, parties } = useSelector((state: RootState) => state.admin);

  console.log(parties);

  return (
    <Box marginTop={"2em"}>
      <FormControl>
        <FormLabel>Party Name</FormLabel>
        <Input onChange={(e) => setPartyName(e.target.value)} />

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
              addNewParty({ partyName, partyCode })
            )
          }}
        >Create New Party
        </Button>
      </FormControl>

    </Box >
  )
}

export default CreateParty