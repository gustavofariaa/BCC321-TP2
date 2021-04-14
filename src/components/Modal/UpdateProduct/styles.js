import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000080;
  
  & > form {
    background-color: white;
    width: 40%;
    min-width: 600px;
    max-height: 90vh;
    padding: 32px;
    overflow-y: auto;

    & textarea {
      height: 196px;
      resize: none;
    }
  }
`;