import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--background-800);
  height: 70px;

  display: flex;
  align-items: center;
  padding: 0 30px;

  input {
    margin-left: 30px;
  }

  div {
    display: flex;
    align-items: center;

    svg {
      color: var(--yellow);
    }

    h1 {
      margin-left: 15px;
      color: var(--yellow);
    }
  }
`;
