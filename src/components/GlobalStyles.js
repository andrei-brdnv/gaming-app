import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  *,
  *:after,
  *:before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
    outline: none;
  }

  html {
    width: 100vw;
    
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: darkgrey;
    }
    
    scroll-behavior: smooth;

    @media screen and (max-width: 768px) {
      -ms-overflow-style: none;
      scrollbar-width: none;
      
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  body {
    font-family: "Montserrat", sans-serif;
    overflow-y: scroll;
    background: ${props => props.theme.colors.background};
  }

  h2 {
    font-size: 2rem;
    font-family: "Raleway", cursive;
    font-weight: 300;
    color: ${props => props.theme.colors.font};
  }

  h3 {
    font-size: 1.25rem;
    color: ${props => props.theme.colors.font};
  }

  p {
    font-size: 1.25rem;
    line-height: 150%;
    color: ${props => props.theme.colors.paragraph};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.font};
  }

  img {
    display: block;
  }

  input {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
  }
  
  button {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    color: ${props => props.theme.colors.font};
  }
`

export default GlobalStyles