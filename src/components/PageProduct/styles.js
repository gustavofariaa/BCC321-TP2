import styled from 'styled-components';


export const Container = styled.div`
  width: 40%;
  min-width: 400px;
  padding: 32px;

  & .name {
    font-size: 24px;
    font-weight: bold;
  }

  & .value {
    font-size: 64px;
    font-weight: bolder;
    margin-right: 16px;
    opacity: .8;
  }

  & .info {
    margin: 0;
    margin-bottom: 8px;
  }
`;

export const Image = styled.img`
  width: 60%;
  height: 640px;
  object-fit: cover !important;
`;

