import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

  html, body, #root {
    ${'' /* min-height: 100%; */}
    height: 95%;
  }

  body {
    background: #ec6917;
    -webkit-font-smoothing: antialiased !important;
    margin-bottom: 60px;
  }

  .page-content {
    flex: 1;
  }

  body, input, button {
    color: #222;
    font-size: 16px;
    font-family: Helvetica, Arial, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
