import { Global, css, useTheme } from '@emotion/react';

const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
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
          color: ${theme.colors.black};
          background-color: ${theme.colors.grayLight};
        }
      `}
    />
  );
};

export default GlobalStyles;
