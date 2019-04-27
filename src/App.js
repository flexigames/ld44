import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

function App() {
  return (
    <AppContainer>
      <GlobalStyle /> 
      App
    </AppContainer>
  )
}

const AppContainer = styled.div``

const GlobalStyle = createGlobalStyle`

  body {
    background-color: black;
    background-image: radial-gradient(
      rgba(0, 150, 0, 0.75), black 120%
    );
    height: 100vh;
    color: white;
    font: 1.3rem Inconsolata, monospace;
    text-shadow: 0 0 5px #C8C8C8;
  }

  body::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: repeating-linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.15),
        rgba(0, 0, 0, 0.15) 1px,
        transparent 1px,
        transparent 2px
      );
    }

  ::selection {
    background: #0080FF;
    text-shadow: none;
  }
`

export default App;