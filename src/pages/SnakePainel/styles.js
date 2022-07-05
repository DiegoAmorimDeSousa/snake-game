import styled from 'styled-components';

export const Container = styled.div`
  width: 60vw;
  height: 60vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
`;

export const Squad = styled.div`
  background: ${props => props.backgroundColor};
  width: 3vw;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.2px solid black;
`;

export const Circle = styled.div`
  width: 1vw;
  height: 2vh;
  background: red;
  border-radius: 50px;
`;
