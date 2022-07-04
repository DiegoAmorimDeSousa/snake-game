import React, { useState } from 'react';

import { 
  Container,
  Squad
} from './styles';

function SnakePainel() {

  const [quantitySquad, setQuantitySquad] = useState(40);

  const buildSquads = () => {

    let count = 0;

    if(count < quantitySquad){
      count++;
      return (
        <>
          <Squad />
        </>
      )
    }
  }

  return (
    <Container>
      {buildSquads()}
    </Container>
  );
}

export default SnakePainel;