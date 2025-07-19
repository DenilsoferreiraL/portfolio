import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            background: string;
            backgroundAlternative: string;
            text: string;
            textLight: string;
            title: string;
            cardBackground: string;
            border: string;
            textPrimary: string;
            textSecondary: string;
            primaryLight: string;
            primaryDark: string;
            accent: string;
        };
        breakpoints: {
            mobile: string;
            tablet: string;
        };
    }
}
