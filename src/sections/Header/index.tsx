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
                <S.NavLink href="/">Projetos</S.NavLink>
                <S.NavLink href="/">Habilidades</S.NavLink>
                <S.NavLink href="/">Experiência</S.NavLink>
                <S.NavLink href="/">Formação</S.NavLink>
            </S.Nav>
        </S.HeaderContainer>
    )
}