import styled from 'styled-components';

export const CardList = styled.div`
  padding: 100px;

  h1 {
    color: white;
  }

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
  }
`;
