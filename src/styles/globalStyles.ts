import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  body{
    background: ${(props) => props.theme.colors.background};
    display: flex;
    flex-direction: column;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
`;
