import { Box, Center, Button, Spinner } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiOutlineWifi, AiOutlineArrowRight } from 'react-icons/ai'
import { LinkProps } from 'react-router-dom'
import CustomLink from './CustomLink'

type InsertIconProps = {
  isSpinner: boolean
  isLink: boolean
  linkProps?: LinkProps
}

function InsertCard(props: InsertIconProps) {
  const [spinnerLoading, setSpinnerLoading] = useState(false);

  return (
    <Box>
      <Center>
        <AiOutlineWifi size={300} />
      </Center>
      <Center fontSize={20} fontWeight={'bold'}>
        Insert Card
      </Center>
      {props.isSpinner &&
        <Center marginTop={5}>
          {!spinnerLoading &&
            (<Button colorScheme={'teal'} onClick={() => { setSpinnerLoading(!spinnerLoading) }}>
              Continue <AiOutlineArrowRight style={{ marginLeft: '1em' }} />
            </Button>)}

          {spinnerLoading &&
            (<Spinner size={'lg'} />)}
        </Center>
      }

      {props.isLink &&
        <Center>
          <CustomLink {...props.linkProps!} >
            Continue {"->"}
          </CustomLink>
        </Center>
      }
    </Box>
  )
}

export default InsertCard