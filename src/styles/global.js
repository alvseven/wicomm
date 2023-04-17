import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 
  :root {
    --black: #0B0B0B;
    --white: #FFFFFF;
    --dark_primary: #1C1C1E;
    --dark_secondary: #2C2C2E;
    --dark_tertiary: #3A3A3C;
    --dark_gradient: linear-gradient(180deg; #3A3A3C 0%; #0B0B0B 101.48%);
    --gray_primary: #9A9A9A;
    --gray_secondary: #CACACA;
    --orange_primary: #FF9601;
    --orange_secondary: #FFC470;
    --background: #F1F1F1;
  }

  html, body, div, span, iframe,
h1, h2, h3, h4, h5, h6, p, 
a,  acronym, address, code,
 img,  strong,  var,
b, u, i, ol, ul, li,
fieldset, form, label, legend,
table, 
article, aside,  details, 
figure, figcaption, footer, header, 
 nav,  ruby, section, summary
 {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
}

article, aside, details, figcaption, figure, 
footer, header, menu, nav, section {
    display: block;
}

body, html {
    width: 100%;
    min-height: 100vh;
    background-color: var(--background)
}

  ol, ul {
    list-style: none;
}

  button {
    cursor: pointer;
}

`;
