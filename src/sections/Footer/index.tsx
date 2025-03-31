'use client'

import * as S from './styles'
import Link from 'next/link'

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <S.FooterContainer>
            <S.FooterContent>
                <S.FooterSection>
                    <S.FooterTitle>Sobre</S.FooterTitle>
                    <S.FooterText>
                        Meu portfólio profissional com projetos e habilidades.
                    </S.FooterText>
                </S.FooterSection>

                <S.FooterSection>
                    <S.FooterTitle>Links Rápidos</S.FooterTitle>
                    <S.FooterLinks>
                        <Link href="/">Home</Link>
                        <Link href="/projects">Projetos</Link>
                        <Link href="/about">Sobre</Link>
                        <Link href="/contact">Contato</Link>
                    </S.FooterLinks>
                </S.FooterSection>

                <S.FooterSection>
                    <S.FooterTitle>Contato</S.FooterTitle>
                    <S.FooterContact>
                        <span>Email: seu@email.com</span>
                        <span>Telefone: (00) 12345-6789</span>
                    </S.FooterContact>
                </S.FooterSection>
            </S.FooterContent>

            <S.FooterBottom>
                <p>&copy; {currentYear} Meu Portfólio. Todos os direitos reservados.</p>
                <S.SocialLinks>
                    <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </Link>
                    <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        Twitter
                    </Link>
                </S.SocialLinks>
            </S.FooterBottom>
        </S.FooterContainer>
    )
}