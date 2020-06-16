import styled from 'styled-components';

const Poster = styled.div`
  display: flex;
  margin-top: 15px;
  height: 710px;

  background-color: #fefcfd;
  color: #000000;

  div.poster-frame {
    display: flex;
    flex: 1;
    border: 8px solid #26151b;
    height: 100%;
    width: 100%;
    /* padding: 10px; */
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    position: relative;
  }

  div.poster-content {
    padding-top: 5px;
    padding-left: 5px;
    text-align: justify;
    text-justify: inter-word;
    padding-right: 10px;
    line-height: 26px;
    width: 90%;
    height: 84%;
    /* overflow-y: auto; */
    overflow-x: hidden;
    p {
      font-size: 22px;
    }
    /* flex: 1; */
  }

  div.poster-footer {
    color: #eee;
    /* box-shadow: 0 0 20px rgba(0, 0, 0, 0.5); */
    height: 14.5%;
    line-height: 45px;
    position: absolute;
    bottom: 0;

    h2 {
      font-size: 32px;
      color: #000000;
    }

    h1 {
      color: #ec6917;
      font-size: 55px;
    }
  }

  div.poster-sidebar {
    width: 25%;
    /* flex: 1; */
    display: flex;
    background-color: #ec6917;
    align-items: center;
    justify-content: center;
    font-size: 95px;
    padding-left: 15px;
    color: #fefcfd;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    text-align: center;

    b {
      /* padding: 15px; */
    }
  }

  font-size: 25px;
  line-height: 20px;
`;

export default Poster;
