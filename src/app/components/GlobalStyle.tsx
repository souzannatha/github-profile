"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100vw;
    height: 100vh;
  }

  body {
    margin: 0;
    background-color: #0a1128; 
  }
`;
