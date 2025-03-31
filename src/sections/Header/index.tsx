'use client'

import Link from 'next/link'
import * as S from './styles'



export function Header() {
    return (
        <S.HeaderContainer>
            <S.Logo>
                <Link href="/">Meu Portfólio</Link>
            </S.Logo>
            <S.Nav>
                <S.NavLink href="/">Home</S.NavLink>
                <S.NavLink href="/projects">Projetos</S.NavLink>
                <S.NavLink href="/about">Sobre</S.NavLink>
                <S.NavLink href="/contact">Contato</S.NavLink>
            </S.Nav>
        </S.HeaderContainer>
    )
}