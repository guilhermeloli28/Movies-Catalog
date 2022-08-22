import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 10rem;
  display: flex;

  img {
    width: 300px;
    border-radius: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 30px;

    h1 {
      color: white;
      font-weight: bold;
      font-family: Roboto;
      margin: 0 auto;
    }

    span {
      color: white;
      font-family: Roboto;
      margin-top: 20px;
      font-size: 20px;
      line-height: 30px;
    }

    .average {
      color: var(--yellow);
    }
  }
`;

export const Average = styled.div`
  display: flex;
  flex-direction: row;
`;
