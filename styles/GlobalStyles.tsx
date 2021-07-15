import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      :root {
        --color-white: #fff;
        --color-black: #000;
        --color-green: #16c784;
        --color-red: #ea3943;
        --color-gray: #959595;
        --color-grayLight: #f5f5f5;
      }

      *,
      *::before,
      *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
        color: var(--color-black);
        background-color: var(--color-grayLight);
      }
    `}
  />
);

export default GlobalStyles;
