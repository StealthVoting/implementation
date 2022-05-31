import { Text } from '@chakra-ui/react';
import React from 'react'
import InsertCard from '../utils/InsertCard';
import './CreateVoter.css';

function CreateVoter() {

  return (
    <div className='black-border' style={{ marginTop: "5em" }}>
      {/* <Icon as={AiOutlineWifi} size={100}/> */}
      <Text>
        Here, we create a new voter with random private data.
      </Text>

      <InsertCard isLink={false} isSpinner={true} />
    </div>
  )
}

export default CreateVoter;