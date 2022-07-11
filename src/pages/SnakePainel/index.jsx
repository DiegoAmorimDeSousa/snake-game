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
  const [count, setCount] = useState(0);

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
      const newPosition = Math.floor(Math.random() * quantitySquad);
      if(newPosition !== positionSnake){
        setPositionCircle(newPosition);
      }
    }
  }, [callFunction]);

  document.addEventListener('keydown', event => {
    setCallEvent(true);
    if(lastKey === ''){
      setLastKey(event.key);
    } else if(lastKey === 'ArrowRight' && event.key === 'ArrowLeft'){
      setLastKey(lastKey);
    } else if(lastKey === 'ArrowRight' && event.key !== 'ArrowLeft'){
      setLastKey(event.key);
    } else if(lastKey !== 'ArrowRight' && event.key === 'ArrowLeft'){
      setLastKey(event.key);
    }
  });

  useEffect(() => {
    setTimeout(() => {
      if(callEvent){
        console.log(positionSnake);
        if(lastKey === 'ArrowRight' && positionSnake < (quantitySquad - 1)){
          setPositionSnake(positionSnake + 1);
          if(positionSnake === positionCircle){
            setCount(count + 1);
            setCallFunction(true);
          }
        } else if(lastKey === 'ArrowUp' && positionSnake > 20) {
          setPositionSnake(positionSnake - 20);
          if(positionSnake === positionCircle){
            setCount(count + 1);
            setCallFunction(true);
          }
        } else if(lastKey === 'ArrowDown' && positionSnake < 219){
          setPositionSnake(positionSnake + 20);
          if(positionSnake === positionCircle){
            setCount(count + 1);
            setCallFunction(true);
          }
        } else if(lastKey === 'ArrowLeft' && positionSnake > 0){
          setPositionSnake(positionSnake - 1);
          if(positionSnake === positionCircle){
            setCount(count + 1);
            setCallFunction(true);
          }
        }
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
              positionSnake === index ? <Snake id="snake">{count}</Snake> : ''
            }
          </Squad>
        )
      })}
    </Container>
  );
}

export default SnakePainel;