import { Text } from '@chakra-ui/react';
import React from 'react';
import InsertCard from '../../utils/InsertCard';
import './PhaseOne.css';

function PhaseOne() {
  return (
    <div style={{ marginTop: "5em" }}>
      <Text>
        This is the Phase 1 of the voting, here we verify the voter and initiate main voting step.
      </Text>

      <InsertCard isSpinner={true} isLink={false} />

    </div>
  )
}

export default PhaseOne