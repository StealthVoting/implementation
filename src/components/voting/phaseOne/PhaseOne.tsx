import { Box, Button, Center, Heading, Text, Textarea } from '@chakra-ui/react';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { validateVoter } from '../../../utils/voting';
import CustomLink from '../../utils/CustomLink';
import InsertCard from '../../utils/InsertCard';
import './PhaseOne.css';

function PhaseOne() {
  const [storeData, setStoreData] = useState(false);
  const [message, setMessage] = useState("");  // data read successfully
  const [timerCompleted, setTimerCompleted] = useState(false);

  const { a, b, w, A, B, P, Q, K, M, u1, u2, isVoterLoading } = useSelector((state: RootState) => state.voter);

  const data = `
    a: ${a} \n
    b: ${b} \n
    w: ${w} \n
    A: (${A?.x}, ${A?.y}) \n
    B: (${B?.x}, ${B?.y}) \n
    P: (${P?.x}, ${P?.y}) \n
    Q: (${Q?.x}, ${Q?.y}) \n
    M: (${M?.x}, ${M?.y}) \n
    K: (${K?.x}, ${K?.y}) \n
  `;
  const temp = "Voter data...";

  const checkVoted = () => {
    if (A != null) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ voterA: { x: A?.x, y: A?.y } }),
      };

      fetch("/idp/validate-voter", requestOptions)
        .then(response => response.json())
        .then(data => {
          if (data.isVoterEligible) {
            setMessage("true");
          } else {
            setMessage("false")
          }
        })
    }
  }


  return (
    <Box>
      <Center>
        <Heading marginTop={"1em"} marginBottom={"1em"} as='h6' noOfLines={1}>Enter Voter data</Heading>
      </Center>
      <Center marginBottom={'2rem'}>
        <Text as='i' fontSize={"lg"}>This is Phase 1 of the voting process. Here we verify the voter and initiate the voting mechanism.</Text>
      </Center>

      <Center>
        <Button colorScheme={"teal"} variant={"outline"}
          onClick={() => {
            setStoreData(true);
            setTimerCompleted(false);
          }}>Fetch data from card</Button>
      </Center>

      {storeData && (
        <Center>
          <InsertCard isLink={false} isSpinner={true} message={'Data fetched successfully from card!'} setTimerCompleted={setTimerCompleted} />
        </Center>
      )}

      <Box marginY={'2rem'}>
        <Text marginBottom={'1rem'}>Voter Data:</Text>
        <Textarea
          isDisabled={true}
          value={timerCompleted ? data : temp}
          contentEditable={false}
          rows={15}
          size='md'
        />
      </Box>

      <Center>
        <Button isLoading={isVoterLoading}
          onClick={() => {
            checkVoted()
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