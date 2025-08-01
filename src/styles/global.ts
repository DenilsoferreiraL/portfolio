import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* Reset básico */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Scroll suave */
  html, body {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
  overflow-x: hidden;
  width: 100%;
  font-family: 'Inter', sans-serif;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
}
`;
