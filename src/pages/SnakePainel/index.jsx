import React, { useState, useEffect } from 'react';

import { 
  Container,
  Squad,
  Circle,
  Snake
} from './styles';

function SnakePainel() {

  const [quantitySquad, setQuantitySquad] = useState(240);
  const [squadArray, setSquadArray] = useState(['']);
  const [positionCircle, setPositionCircle] = useState(Math.floor(Math.random() * quantitySquad));
  const [positionSnake, setPositionSnake] = useState(Math.floor(Math.random() * 150));
  const [callFunction, setCallFunction] = useState(true);
  const [callEvent, setCallEvent] = useState(false);
  const [lastKey, setLastKey] = useState('');

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
  }, [callFunction]);

  document.addEventListener('keydown', event => {
    setCallEvent(true);
    console.log(lastKey, event.key, lastKey === 'ArrowRight' && event.key !== 'ArrowLeft');
    if(lastKey === ''){
      setLastKey(event.key);
    } else if(lastKey === 'ArrowRight' && event.key !== 'ArrowLeft'){
      setLastKey(lastKey);
    } else {
      setLastKey(lastKey);
    }
  });

  useEffect(() => {
    setTimeout(() => {
      if(callEvent){
        if(lastKey === 'ArrowRight' && positionSnake < (quantitySquad - 1)){
          setPositionSnake(positionSnake + 1);
        }
        if(lastKey === 'ArrowLeft' && positionSnake > 0){
          setPositionSnake(positionSnake - 1);
        }
        if(lastKey === 'ArrowLeft' && positionSnake === 0){
          setPositionSnake(239);
        }
        // if(lastKey === 'ArrowUp'){
        //   setPositionSnake(positionSnake - 20);
        // }
        // if(lastKey === 'ArrowDown'){
        //   setPositionSnake(positionSnake + 20);
        // }
      }
    }, 200);
  }, [positionSnake, callEvent, lastKey]);

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
            {
              positionSnake === index ? <Snake id="snake"/> : ''
            }
          </Squad>
        )
      })}
    </Container>
  );
}

export default SnakePainel;