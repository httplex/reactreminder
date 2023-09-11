import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
 --blue-300: #9ab4ff;
 --blue-600: #5776c2;
 --blue-900: #335aa4;

 --font-black: #1c1c1c;
 --font-white: #fff;
}

* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}

html {
 //1rem = 16px

 @media(max-width: 1080px) {
  font-size: 93.75%; // 1rem = 15 pixels
 }
 @media(max-width: 720px) {
  font-size: 87.5%; // 1rem = 14 pixels
 }
}
`;
