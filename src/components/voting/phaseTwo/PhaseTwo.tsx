import { Text } from '@chakra-ui/react';
import React from 'react';
import InsertCard from '../../utils/InsertCard';
import './PhaseTwo.css';

function PhaseTwo() {
  return (
    <div style={{ marginTop: "5em" }}>
      <Text>
        This is the Phase 1 of the voting, here the voter actually casts vote.
      </Text>

      <InsertCard isSpinner={false} isLink={true} linkProps={{ to: "choose-vote" }} />

    </div>
  )
}

export default PhaseTwo