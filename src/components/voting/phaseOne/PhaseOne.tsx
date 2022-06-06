import { Box, Button, Center, Heading, Spacer, Stack, Text, Textarea } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestBlindSignature } from '../../../reducers/voter';
import { AppDispatch, RootState } from '../../../store';
import { generateVoter } from '../../../utils/preVoting';
import { validateVoter } from '../../../utils/voting';
import CustomLink from '../../utils/CustomLink';
import InsertCard from '../../utils/InsertCard';
import './PhaseOne.css';

function PhaseOne() {
  const [isCompLoading, setIsLoading] = useState(false);
  const [storeData, setStoreData] = useState(false);
  const [displayData, setDisplayData] = useState(false);
  const [message, setMessage] = useState("");  // data read successfully
  const [data, setData] = useState("Voter data...");

  const dispatch = useDispatch<AppDispatch>();
  const { u1, u2, Zdash, isLoading } = useSelector((state: RootState) => state.voter);

  console.log(u1, u2, Zdash?.x, Zdash?.y);

  return (
    <Box>
      <Center>
        <Heading marginTop={"1em"} marginBottom={"1em"} as='h6' noOfLines={1}>Enter Voter data</Heading>
      </Center>
      <Center marginBottom={'2rem'}>
        <Text as='i' fontSize={"lg"}>This is Phase 1 of the voting process. Here we verify the voter and initiate the voting mechanism.</Text>
      </Center>

      <Center>
        <Text as='i' marginBottom={"2em"}>Select your preference:</Text>
      </Center>
      <Stack spacing={4} direction="row" align="center">
        <Button colorScheme={"teal"} variant={"outline"}
          onClick={() => {
            setStoreData(true);
            setDisplayData(false);
          }}>Fetch data from card</Button>
        <Spacer />
        <Button isLoading={isLoading} colorScheme={"teal"} variant={"outline"}
          onClick={() => {
            dispatch(
              requestBlindSignature(11) // msg idhar pass karna hai
            );

            // setDisplayData(true);
            // setStoreData(false);
          }}>Enter data manually</Button>
      </Stack>
      {storeData && (
        <Center>
          <InsertCard isLink={false} isSpinner={true} />
        </Center>
      )}
      {displayData && (
        <Box marginTop={"2rem"}>
          <Text>Hello {data}</Text>
        </Box>
      )}

      <Box marginY={'2rem'}>
        <Text marginBottom={'1rem'}>Voter Data:</Text>
        <Textarea
          isDisabled={true}

          value={
            data
          }
          contentEditable={false}
          rows={3}
          size='md'
        />
      </Box>

      <Center>
        <Button isLoading={isCompLoading}
          onClick={() => {
            setIsLoading(!isCompLoading);
            validateVoter(setIsLoading, setMessage, setData)
          }} marginBottom={"2rem"} alignSelf={"center"} colorScheme={"teal"}>Submit</Button>
      </Center>

      <Center marginBottom={"2rem"}>
        {(message === "true") && (
          <Box>
            <Text as='i' fontSize={'sm'} className='success-message' marginBottom={'1rem'}>Data verified! Please proceed to </Text>

            <Button colorScheme={'teal'} variant={'outline'} marginLeft={'0.5rem'} size={'sm'}>
              <CustomLink to={'../phase-two'}>
                Phase 2
              </CustomLink>

            </Button>

          </Box>
        )}
        {(message === "false") && (
          <Text as='i' fontSize={'sm'} className='error-message'>Error! Please contact administrator.</Text>
        )}
      </Center>
    </Box>
  )
}

export default PhaseOne