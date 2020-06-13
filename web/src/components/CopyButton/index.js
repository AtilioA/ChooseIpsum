import styled from 'styled-components';

import { darken } from 'polished';

const CopyButton = styled.div`
  margin-top: 10px;
  display: flex;
  flex: 1;

  button {
    display: flex;
    flex: 1;
    justify-content: center;

    background: #26151b;
    color: #cabfad;
    border: 0;
    border-radius: 4px;
    padding: 12px 20px;
    font-weight: bold;
    text-transform: uppercase;
    transition: background 0.2s;
    width: 100%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

    &:hover {
      background: ${darken(0.05, '#26151b')};
    }
  }
`;

export default CopyButton;
