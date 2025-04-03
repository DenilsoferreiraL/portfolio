'use client'

import Link from 'next/link'
import * as S from './styles'



export function Header() {
    return (
        <S.HeaderContainer>
            <S.Logo>
                <Link href="/">Logo</Link>
            </S.Logo>
            <S.Nav>
                <S.NavLink href="/">Habilidade</S.NavLink>
                <S.NavLink href="/">Projetos</S.NavLink>
                <S.NavLink href="/">Cronologia</S.NavLink>
                <S.NavLink href="/">Qualificação</S.NavLink>
            </S.Nav>
        </S.HeaderContainer>
    )
}