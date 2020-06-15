import styled from 'styled-components';

const Footer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;

  background-color: #26151b;
  color: #cabfad;

  font-size: 25px;
  line-height: 20px;

  padding-top: 15px;
  padding-bottom: 8px;
  padding-left: 15px;

  a {
    text-decoration: none;
    color: #edddc7;
  }

  small {
    font-size: 15px;
    float: left;
  }

  div#footer-last-line span {
    float: right;
    font-size: 12px;
    padding-right: 5px;
  }
`;

export default Footer;
