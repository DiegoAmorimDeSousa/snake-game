import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    background: #ECF0F1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  :root {
    --border-painel: #000000;
    --squad-1: #239B56;
    --squad-2: #0B5345;
  }
`;