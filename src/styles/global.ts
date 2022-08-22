import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #181B23;
        --background-800: #1F2029;
        --yellow: #f8cf32;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--background)
    }

    button {
        cursor: pointer;
    }
`;
