import styled from 'styled-components';

export const Input = styled.select`
  padding: 10px;
  width: 10%;
  outline: none;
  border-radius: 5px;
  border: 2px solid white;
  transition: border-color 0.2s ease-in;
  margin-left: 20px;

  &:focus {
    border: 2px solid var(--yellow);
  }
`;
