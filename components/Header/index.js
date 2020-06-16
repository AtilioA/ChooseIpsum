import styled from 'styled-components';

import { darken } from 'polished';

const Header = styled.div`
  display: flex;
  flex: 1;
  color: #fafafa;
  align-items: center;
  justify-content: center;
  /* justify-content: space-between; */

  font-size: 25px;
  line-height: 20px;

  /* padding-top: 15px;
  padding-bottom: 8px;
  padding-left: 15px; */

  margin-bottom: 10px;

  .flex-item-1 {
    flex: 1;
  }

  /* Flex Item */
  .item {
    margin: 5px;
    /* text-align: center; */
    /* font-size: 1.5em; */
  }

  input {
    background-color: transparent;
    color: #26151b;
    font-weight: bold;
    font-size: 21px;
    border: none;
    border-bottom: 1px solid #aaa;
    position: relative;
    top: 5%;
    width: 22%;
    text-align: center;
    margin-left: -3px;
  }

  /* Highlight input field */
  input[type='number'],
  textarea {
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    outline: none;
    padding: 3px 0px 3px 3px;
  }

  input[type='number']:focus,
  textarea:focus {
    padding: 3px 0px 3px 3px;
    border-bottom: 1px solid #fafafa;
  }

  /* Remove spin buttons */
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='radio'] {
    margin-left: -7px;
  }

  input[type='radio']:checked {
  }

  input[type='radio']:checked + label {
    font-weight: 600;
  }

  label {
    font-size: 18px;
  }

  button {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    background: #26151b;

    color: #cabfad;
    border: 0;
    border-radius: 4px;
    padding: 10px 18px;
    font-weight: bold;
    text-transform: uppercase;
    transition: background 0.5s;
    width: 100%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    transition: box-shadow 500ms;

    &:hover {
      background: ${darken(0.05, '#26151b')};
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    }
  }
`;

export default Header;
