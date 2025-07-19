import { ThemeProvider } from 'styled-components'
import StyledComponentsRegistry from './lib/registry'
import { GlobalStyle } from '../styles/global'
import { defaultTheme } from '../styles/theme'

export const metadata = {
  metadataBase: new URL('https://seu-dominio.com'),
  title: 'Denilso Ferreira | Portfólio',
  description: 'Desenvolvedor Front-end | React | Next.js',
}

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