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
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  width: 800px;

  button {
    margin-top: 40px;
    width: 100px;
    padding: 10px;
    background-color: var(--yellow);
    border: 0;
    border-radius: 5px;
    color: black;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: white;
      font-weight: bold;
      font-family: Roboto;
    }

    div {
      svg {
        color: var(--yellow);
        margin-right: 5px;
      }

      span {
        color: var(--yellow);
        font-size: 30px;
      }
    }
  }

  .overview {
    color: white;
    font-size: 20px;
    line-height: 20px;
    font-weight: bold;
    margin-top: 20px;
  }

  .status {
    color: white;
    font-size: 20px;
    line-height: 20px;
    font-weight: bold;
    margin-top: 20px;
    color: var(--success);
  }
`;

export const Footer = styled.div`
  span {
    color: white;
    font-size: 30px;
    font-weight: bold;
    margin-top: 50px;
    color: var(--yellow);
  }
`;
