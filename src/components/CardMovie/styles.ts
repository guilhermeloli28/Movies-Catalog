import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  width: 200px;

  :hover {
    transform: scale(1.1);
  }

  img {
    width: 100%;
    height: 265px;
    border-radius: 10px;
    box-shadow: 0 0 30px 0 rgb(0 0 0 / 50%);
  }

  span {
    margin-top: 8px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: bold;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;

  p {
    font-size: 12px;
    color: #828282;
  }

  div {
    display: flex;

    svg {
      color: var(--yellow);
      margin-right: 5px;
    }

    p {
      color: var(--yellow);
    }
  }
`;
