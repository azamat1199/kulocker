import {createGlobalStyle} from "styled-components";
import BackgroundImage from './images/Background_Dark.png';

const GlobalStyleComponent = createGlobalStyle<any>`
  body {
    font-family: 'Nunito', sans-serif;
    padding: 0;
    margin: 0;
    background-repeat: no-repeat;
    background-size: cover;
  }
  h1 {
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
    font-size: 2.5rem;
  }
`;
export default GlobalStyleComponent;