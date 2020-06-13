import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import { FaRandom, FaRegClipboard } from 'react-icons/fa';

// import { Form, SubmitButton, List } from './styles';

// import api from '../../services/api';
import Container from '../../components/Container/index.js';
import Footer from '../../components/Footer/index.js';
import Header from '../../components/Header/index.js';
import CopyButton from '../../components/CopyButton/index.js';
import Poster from '../../components/Poster/index.js';

export default class Main extends Component {
  state = {};

  // componentDidMount() {
  //   const repositories = localStorage.getItem('repositories');

  //   if (repositories) {
  //     this.setState({ repositories: JSON.parse(repositories) });
  //   }
  // }

  // componentDidUpdate(_, prevState) {
  //   const { repositories } = this.state;

  //   if (prevState.repositories !== repositories) {
  //     localStorage.setItem('repositories', JSON.stringify(repositories));
  //   }
  // }

  render() {
    // const { newRepo, repositories, loading, error } = this.state;

    return (
      <>
        <Container>
          <Header>
            {/* "Choose" (Number input) (Radio input) (Checkbox input) ('Generate' button) */}
            <div className="text-choose item flex-item-1">
              Choose <input id="number-of-ipsums" type="number"></input>
            </div>

            <div className="selector-choose item flex-item-1">
              <input
                type="radio"
                id="sentences"
                name="type"
                value="sentences"
                checked
              />
              <label htmlFor="sentences">sentences</label>

              <br />

              <input
                type="radio"
                id="paragraphs"
                name="type"
                value="paragraphs"
              />
              <label htmlFor="paragraphs">paragraphs</label>
            </div>

            <div className="button-random item flex-item-1">
              <input
                type="checkbox"
                id="swear"
                name="type"
                value="swear"
              // checked
              />
              <label htmlFor="swear">swear</label>

              <br />

              <input
                type="checkbox"
                id="political"
                name="type"
                value="political"
              // checked
              />
              <label htmlFor="political">political</label>
            </div>

            <div className="button-random item flex-item-1">
              <button>
                <FaRandom color={'#ccc'} /> Generate
              </button>
            </div>
          </Header>

          <Poster>
            <div className="poster-frame">
              <div className="poster-content">
                <p>
                  Choose life. Choose a job. Choose a career. Choose a family.
                  Choose a fucking big television. Choose washing machines,
                  cars, compact disc players, and electrical tin openers. Choose
                  good health, low cholesterol and dental insurance. Choose
                  fixed-interest mortgage repayments. Choose a starter home.
                  Choose your friends. Choose leisure wear and matching luggage.
                  Choose a three-piece suit on hire purchase in a range of
                  fucking fabrics. Choose DIY and wondering who the fuck you are
                  on a Sunday morning. Choose sitting on that couch watching
                  mind-numbing spirit-crushing game shows, stuffing fucking junk
                  food into your mouth. Choose rotting away at the end of it
                  all, pissing your last in a miserable home, nothing more than
                  an embarrassment to the selfish, fucked-up brats you spawned
                  to replace yourself.
                </p>
                <div className="poster-footer">
                  <h2>Choose lorem.</h2>
                  <h1>Choose ipsum.</h1>
                </div>
              </div>
              <div className="poster-sidebar">
                <b>Choose Ipsum</b>
              </div>
            </div>
            {/* (Frame: (Poster: Choose lorem. Choose Ipsum.) (Sidebar)) */}
          </Poster>

          <CopyButton>
            <button>
              <FaRegClipboard color={'#ccc'} /> Choose
            </button>
          </CopyButton>
        </Container>

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
}
