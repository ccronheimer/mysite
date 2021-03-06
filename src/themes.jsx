import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#1D1D1F",
};

export const darkTheme = {
  body: "#141414",
  fontColor: "white",
};

export const GlobalStyles = createGlobalStyle`

body {
    background-color: ${(props) => props.theme.body};
    color:${(props) => props.theme.fontColor} ;
    transition: 0.25s;
}

a {
    color: ${(props) => props.theme.fontColor};
    transition: 0.25s;
}

*{
    -webkit-tap-highlight-color: transparent;
}
`;
