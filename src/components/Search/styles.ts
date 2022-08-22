import styled from 'styled-components';

export const Input = styled.input`
  padding: 10px;
  width: 20%;
  outline: none;
  border-radius: 5px;
  border: 2px solid white;
  transition: border-color 0.2s ease-in;

  &:focus {
    border: 2px solid var(--yellow);
  }
`;
