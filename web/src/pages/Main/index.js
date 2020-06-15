import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaRandom, FaRegClipboard } from 'react-icons/fa';

import generateSentences, {
  generateParagraphs,
  maxParagraphs,
} from '../../../../src/lib/generateIpsum';
import { chooseLifePasta } from '../../../../src/lib/sentences';

import Container from '../../components/Container/index.js';
import Header from '../../components/Header/index.js';
import Poster from '../../components/Poster/index.js';
import CopyButton from '../../components/CopyButton/index.js';
import Footer from '../../components/Footer/index.js';

export default class Main extends Component {
  state = {
    chooseIpsum: chooseLifePasta,
    sentences: 20,
    paragraphs: 3,
    ipsumType: 'sentences',
    swear: true,
    political: true,
    copySuccess: false,
  };

  componentDidMount() {
    const chooseIpsum = localStorage.getItem('chooseIpsum');
    const ipsumType = localStorage.getItem('ipsumType');
    const sentences = localStorage.getItem('sentences');
    const paragraphs = localStorage.getItem('paragraphs');
    const swear = localStorage.getItem('swear');
    const political = localStorage.getItem('political');

    if (chooseIpsum) {
      this.setState({ chooseIpsum: JSON.parse(chooseIpsum) });
    }
    if (ipsumType) {
      this.setState({ ipsumType: JSON.parse(ipsumType) });
    }
    if (sentences) {
      this.setState({ sentences: JSON.parse(sentences) });
    }
    if (paragraphs) {
      this.setState({ paragraphs: JSON.parse(paragraphs) });
    }
    if (swear) {
      this.setState({ swear: JSON.parse(swear) });
    }
    if (political) {
      this.setState({ political: JSON.parse(political) });
    }
  }

  componentDidUpdate(_, prevState) {
    const {
      chooseIpsum,
      ipsumType,
      sentences,
      paragraphs,
      swear,
      political,
    } = this.state;

    if (prevState.chooseIpsum !== chooseIpsum) {
      localStorage.setItem('chooseIpsum', JSON.stringify(chooseIpsum));
    }
    if (prevState.ipsumType !== ipsumType) {
      localStorage.setItem('ipsumType', JSON.stringify(ipsumType));
    }
    if (prevState.sentences !== sentences) {
      localStorage.setItem('sentences', JSON.stringify(sentences));
    }
    if (prevState.paragraphs !== paragraphs) {
      localStorage.setItem('paragraphs', JSON.stringify(paragraphs));
    }
    if (prevState.swear !== swear) {
      localStorage.setItem('swear', JSON.stringify(swear));
    }
    if (prevState.political !== political) {
      localStorage.setItem('political', JSON.stringify(political));
    }
  }

  sendCopyToClipboardSuccess() {
    toast.success('Copied to clipboard!', {
      position: 'bottom-right',
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  }

  handleClickGenerate() {
    const { sentences, paragraphs, ipsumType, swear, political } = this.state;

    try {
      switch (ipsumType) {
        case 'sentences':
          this.setState({
            chooseIpsum: generateSentences(sentences, swear, political),
          });
          break;
        case 'paragraphs':
          this.setState({
            chooseIpsum: generateParagraphs(paragraphs, swear, political),
          });
          break;
        default:
          toast.error('Unknown type of ipsum!', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
      }
    } catch (e) {
      if (ipsumType === 'sentences' && e instanceof RangeError) {
        toast.error(
          `Too many sentences. Maximum number is ${e.message}; requested: ${sentences}`,
          {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );
        this.setState({
          sentences: e.message, // Max number of sentences depends on whether 'swear' and 'political' options are checked
        });
      } else if (ipsumType === 'paragraphs' && e instanceof RangeError) {
        toast.error(
          `Too many paragraphs. Maximum number is ${maxParagraphs}; requested: ${paragraphs}`,
          {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );
        this.setState({
          paragraphs: maxParagraphs,
        });
      }
    }
    // console.log(this.state.chooseIpsum);
  }

  handleNumberInputChange = (changeInputEvent) => {
    if (changeInputEvent.currentTarget.value < 0) {
      changeInputEvent.currentTarget.value = -changeInputEvent.currentTarget
        .value;
    }

    this.setState({
      [this.state.ipsumType]: changeInputEvent.currentTarget.value,
    });
    // console.log(this.state.sentences);
  };

  handleCheckboxChange(toggleCheckboxEvent) {
    this.setState({
      [toggleCheckboxEvent.currentTarget.value]:
        toggleCheckboxEvent.currentTarget.checked,
    });
    console.log({
      [toggleCheckboxEvent.currentTarget.value]:
        toggleCheckboxEvent.currentTarget.checked,
    });
  }

  handleRadioChange(changeRadioInputEvent) {
    this.setState({
      ipsumType: changeRadioInputEvent.currentTarget.value,
    });
    console.log(this.state.ipsumType);
  }

  // Generate lorem ipsum when user press Enter on input form
  handleOnKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      this.handleClickGenerate();
    }
  };

  render() {
    const { chooseIpsum, swear, political } = this.state;

    return (
      <>
        <Container>
          <Header>
            <div className="text-choose item flex-item-1">
              Choose{' '}
              <input
                type="number"
                value={this.state[this.state.ipsumType]}
                onChange={this.handleNumberInputChange}
                onKeyDown={this.handleOnKeyDownHandler}
              ></input>
            </div>

            <div className="selector-choose item flex-item-1">
              <input
                type="radio"
                id="sentences"
                name="type"
                value="sentences"
                defaultChecked
                onChange={(e) => this.handleRadioChange(e)}
              />
              <label htmlFor="sentences">sentences</label>

              <br />

              <input
                type="radio"
                id="paragraphs"
                name="type"
                value="paragraphs"
                onChange={(e) => this.handleRadioChange(e)}
              />
              <label htmlFor="paragraphs">paragraphs</label>
            </div>

            <div className="button-random item flex-item-1">
              <input
                type="checkbox"
                id="swear"
                name="type"
                value="swear"
                onChange={(e) => this.handleCheckboxChange(e)}
                checked={swear}
              />
              <label htmlFor="swear">swear</label>

              <br />

              <input
                type="checkbox"
                id="political"
                name="type"
                value="political"
                checked={political}
                onChange={(e) => this.handleCheckboxChange(e)}
              />
              <label htmlFor="political">political</label>
            </div>

            <div className="button-random item flex-item-1">
              <button onClick={() => this.handleClickGenerate()}>
                <FaRandom color={'#ccc'} /> Generate
              </button>
            </div>
          </Header>

          <Poster>
            <div className="poster-frame">
              <div className="poster-content">
                <p>
                  {Array.isArray(chooseIpsum)
                    ? chooseIpsum.join('\n\n')
                    : chooseIpsum}
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
          </Poster>

          <CopyButton>
            <CopyToClipboard text={chooseIpsum}>
              <button onClick={() => this.sendCopyToClipboardSuccess()}>
                <FaRegClipboard color={'#ccc'} /> Choose
              </button>
            </CopyToClipboard>
          </CopyButton>
          <ToastContainer transition={Slide} />
        </Container>

        <div className="page-container">
          <Footer>
            <b>
              built by{' '}
              <a href="https://www.github. com/AtilioA/ChooseIpsum">AtilioA</a>.
            </b>
            <br />
            <div id="footer-last-line">
              <small>
                This work has been inspired by Trainspotting quotes written by
                Irvine Welsh.
              </small>
              <span>
                <a href="https://www.github. com/AtilioA/ChooseIpsum/README.md#API">
                  API
                </a>
              </span>
            </div>
          </Footer>
        </div>
      </>
    );
  }
}
