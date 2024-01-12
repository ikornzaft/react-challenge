import React from 'react';
import { DecorationWrapper } from './Decoration.style'

function Decoration() {
  console.info('Decoration render');
  
  return (
    <DecorationWrapper>
      ⛵️
    </DecorationWrapper>
  );
}

export default Decoration;