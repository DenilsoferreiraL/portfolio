import { DefaultTheme } from 'styled-components'

export const defaultTheme: DefaultTheme = {
    colors: {
        primary: '#000',
        secondary: '#9dbfda',
        background: '#ffffff',
        backgroundAlternative: '#f8f9fa',
        text: '#333333',
        textLight: '#FFFFFF',
        title: '#666',
        cardBackground: '#ffffff',
        border: '#eeeeee',
        textPrimary: '#2c3e50',
        textSecondary: '#666666',
        primaryLight: '#4a90e2',   // <-- Faltava esse!
        primaryDark: '#0d47a1',
        accent: '#ff4081',
    },
    breakpoints: {
        mobile: '768px',
        tablet: '1024px',
    },
}
