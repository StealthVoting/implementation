import { Box, Center, Button, Spinner, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiOutlineWifi, AiOutlineArrowRight } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { LinkProps } from 'react-router-dom'
import { RootState } from '../../store'
import CustomLink from './CustomLink'

type InsertIconProps = {
  isSpinner?: boolean
  isLink?: boolean
  message?: string,
  linkProps?: LinkProps,
  setTimerCompleted?: React.Dispatch<React.SetStateAction<boolean>>
}

function InsertCard({ isSpinner, message, isLink, linkProps, setTimerCompleted }: InsertIconProps) {
  const [spinnerLoading, setSpinnerLoading] = useState(false);
  const [spinnerMessage, setSpinnerMessage] = useState("");

  return (
    <Box>
      <Center>
        <AiOutlineWifi size={300} />
      </Center>
      <Center fontSize={20} fontWeight={'bold'}>
        Insert Card
      </Center>
      {isSpinner &&
        <Center marginTop={'1rem'}>
          {!spinnerLoading &&
            (<Button colorScheme={'teal'}
              onClick={() => {
                setSpinnerLoading(true)
                setTimeout(() => {
                  setSpinnerLoading(false);
                  if (message !== undefined) {
                    setSpinnerMessage(message);
                  }
                  if (setTimerCompleted !== undefined) {
                    setTimerCompleted(true);
                  }
                }, 5000);
              }}>
              Continue <AiOutlineArrowRight style={{ marginLeft: '1em' }} />
            </Button>)}

          {spinnerLoading &&
            (<Spinner size={'lg'} />)}
        </Center>
      }
      {spinnerMessage !== "" && (
        <Center marginTop={'2rem'}>
          <Text as='i' fontSize={'sm'} className='success-message'>{spinnerMessage}</Text>
        </Center>
      )}

      {isLink &&
        <Center>
          <CustomLink {...linkProps!} >
            Continue {"->"}
          </CustomLink>
        </Center>
      }
    </Box>
  )
}

export default InsertCard