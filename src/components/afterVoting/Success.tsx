import { CheckCircleIcon } from '@chakra-ui/icons'
import { Center, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'

function Success() {
  return (
    <Container maxWidth={''} centerContent className={'container-width'}>
      <Center>
        <Heading marginTop={"2em"} marginBottom={"1em"} as='h6' size='3xl' noOfLines={1} className='success-message'>Success <CheckCircleIcon boxSize={'5rem'} /></Heading>
      </Center>
      <Center marginBottom={'2rem'}>
        <Text as='i' fontSize={"lg"}>Your vote has been counted. Thanks for making a difference! :)</Text>
      </Center>
    </Container >
  )
}

export default Success