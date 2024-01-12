import React from 'react';
import {Text, Title} from './BigCountNumber.style'

function BigCountNumber({ count }) {
  console.info('BigCountNumber render');
  
  return (
    <Text>
      <Title>Count:</Title>
      {count}
    </Text>
  );
}

export default BigCountNumber;