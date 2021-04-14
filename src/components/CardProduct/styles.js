import styled from 'styled-components';

export const Card = styled.div`
  & .description {
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 90px;
  }

  & .name {
    font-weight: bolder;
  }

  & .value {
    font-size: 28px;
    font-weight: bolder;
  }

  & button, & a {
    width: 50%;
    height: 40px;
    padding: 0;
  }
`

export const CardImage = styled.img`
  width: 100%;
  height: 300px !important;
  object-fit: cover !important;
`;