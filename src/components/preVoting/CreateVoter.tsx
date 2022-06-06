import { Box, Button, Center, Heading, Spacer, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { blindVoting, blindVotingAdmin } from '../../utils/ethers';
import { generateVoter } from '../../utils/preVoting';
import InsertCard from '../utils/InsertCard';
import './CreateVoter.css';

function CreateVoter() {
  const [isLoading, setIsLoading] = useState(false);
  const [storeData, setStoreData] = useState(false);
  const [displayData, setDisplayData] = useState(false);
  const [message, setMessage] = useState(""); // generating voter
  const [data, setData] = useState("");

  console.log(blindVoting.address);

  return (
    <Box>
      <Center>
        <Heading marginTop={"1em"} marginBottom={"1em"} as='h6' noOfLines={1}>Generate a New Voter</Heading>
      </Center>
      <Center>
        <Button isLoading={isLoading}
          onClick={() => {
            setIsLoading(!isLoading);
            generateVoter(setIsLoading, setMessage, setData)
          }} marginBottom={"2rem"} alignSelf={"center"} colorScheme={"teal"}>Generate Voter</Button>
      </Center>
      <Center marginBottom={"2rem"}>
        {(message === "true") && (
          <Text as='i' fontSize={'sm'} className='success-message'>Voter generated successfully!</Text>
        )}
        {(message === "false") && (
          <Text as='i' fontSize={'sm'} className='error-message'>Voter generation failed...</Text>
        )}
      </Center>

      <Center>
        <Text as='i' marginBottom={"2em"}>Select your preference:</Text>
      </Center>
      <Stack spacing={4} direction="row" align="center">
        <Button colorScheme={"teal"} variant={"outline"}
          disabled={message === "false" || message === ""}
          onClick={() => {
            setStoreData(true);
            setDisplayData(false);
          }}>Store data in card</Button>
        <Spacer />
        <Button colorScheme={"teal"} variant={"outline"}
          disabled={message === "false" || message === ""}
          onClick={() => {
            setDisplayData(true);
            setStoreData(false);
          }}>Display data</Button>
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
    </Box>
  )
}

export default CreateVoter;
