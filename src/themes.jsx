import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
};

export const darkTheme = {
  body: "#141414",
  fontColor: "#fff",
};

export const GlobalStyles = createGlobalStyle`

body {
    background-color: ${(props) => props.theme.body};
    color:${(props) => props.theme.fontColor} ;
    transition: 0.25s;
}

a {
    color: ${(props) => props.theme.fontColor};
}

*{
    -webkit-tap-highlight-color: transparent;
}
`;
