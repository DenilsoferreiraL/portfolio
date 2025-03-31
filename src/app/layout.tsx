'use client' // Necessário para usar styled-components no App Router

import { ThemeProvider } from 'styled-components'
import StyledComponentsRegistry from './lib/registry'
import { GlobalStyle } from '../styles/global'
import { defaultTheme } from '../styles/theme'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}