import { createGlobalStyle } from "styled-components";


const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    max-width: 100%;
    height: 100% auto;
  }

  body {
    text-align: center;
    font-family: 'Hind', sans-serif;
    font-size: 0.9rem;
    background-color: #f1f1f1;
    -webkit-font-smoothing: antialiased;
    }

  h1{
      padding: 1.5rem 0 1.5rem 0;
      font-size: 2.2rem;
      background-color: #474A51;
      color: white;
  }
    button{
      cursor: pointer;
      outline: none;
      border: none;
      text-align: center;
      font-size: 1.5rem;
    }

    div>i{
      margin-top: 5rem;
      transform: scale(3.0);
    }

`;

export default Global;