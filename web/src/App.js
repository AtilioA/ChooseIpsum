import React from 'react';

import Routes from './routes';

import Footer from './components/Footer/index.js';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
      <div className="page-container">
        <Footer>
          <b>
            built by{' '}
            <a href="https://www.github.com/AtilioA/ChooseIpsum">AtilioA</a>.
          </b>
          <br />
          <small>
            This work has been inspired by Trainspotting quotes written by
            Irvine Welsh.
          </small>
        </Footer>
      </div>
    </>
  );
}

export default App;
