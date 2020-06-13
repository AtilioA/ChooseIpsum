import styled from 'styled-components';

const Container = styled.div`
  /* display: flex; */

  max-width: 600px;
  background: #ec6917;
  border-radius: 4px;
  /* box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); */
  padding-left: 30px;
  padding-right: 30px;
  margin: 25px auto;

  max-height: 100%;
  /* overflow: scroll;
  overflow-x: hidden; */

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  svg {
    margin-right: 10px;
  }
`;

export default Container;
