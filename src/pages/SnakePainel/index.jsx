import React, { useState, useEffect } from 'react';

import { 
  Container,
  Squad,
  Circle
} from './styles';

function SnakePainel() {

  const [quantitySquad, setQuantitySquad] = useState(240);
  const [squadArray, setSquadArray] = useState(['']);
  const [positionCircle, setPositionCircle] = useState(100);
  const [callFunction, setCallFunction] = useState(true);

  let newSquadArray = [];

  useEffect(() => {
    while (newSquadArray.length < quantitySquad) {
      newSquadArray.push(1);
    }
    setSquadArray(newSquadArray);
  }, []);

  useEffect(() => {
    if(callFunction){
      setCallFunction(false);
      setTimeout(() => {
        setPositionCircle(Math.floor(Math.random() * quantitySquad));
        setCallFunction(true);
      }, 3000);
    }
  }, [positionCircle, callFunction]);

  return (
    <Container>
      {squadArray.map((element, index) => {
        return (
          <Squad 
            key={index}
            backgroundColor={
              index % 2 == 0 ? 'var(--squad-1)' : 'var(--squad-2)'
            }
          >
            {
              positionCircle === index ? <Circle /> : ''
            }
          </Squad>
        )
      })}
    </Container>
  );
}

export default SnakePainel;