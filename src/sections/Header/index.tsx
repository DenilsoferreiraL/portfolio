'use client'

import * as S from './styles'
import { CgMenuRight, CgClose } from 'react-icons/cg'
import { AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

export const navLinks = [
    { label: 'Início', href: '#home' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Habilidades Interpessoais', href: '#soft-skills' },
    { label: 'Projetos', href: '#projects' },
];


const MobileMenu = dynamic(() => import('./MobileMenu'), {
    ssr: false
})

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (!isMenuOpen) {
                setScrolled(window.scrollY > 10)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [isMenuOpen])

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto'
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isMenuOpen])

    const handleNavClick = (href: string) => {
        const targetId = href.replace('#', '')
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }
    }

    return (
        <>
            <S.HeaderContainer $scrolled={scrolled || isMenuOpen}>
                <S.HeaderContent>
                    <S.LogoContainer>
                        <S.Logo
                            href='https://denilsoferreira.vercel.app/'
                            initial={false}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0 }}
                        >
                            <S.LogoText>Portfolio</S.LogoText>
                            <S.StyledGoPerson />
                        </S.Logo>
                    </S.LogoContainer>

                    <S.DesktopNav>
                        <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
                            {navLinks.map(({ label, href }) => (
                                <S.NavItem
                                    key={href}
                                    initial={false}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0 }}
                                >
                                    <S.NavLink
                                        href={href}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            handleNavClick(href)
                                            setIsMenuOpen(false)
                                        }}
                                        whileHover={{ color: '#8c8c8c' }}
                                    >
                                        {label}
                                        <S.NavUnderline />
                                    </S.NavLink>
                                </S.NavItem>
                            ))}
                        </ul>
                    </S.DesktopNav>

                    <S.MenuToggle onClick={() => setIsMenuOpen(!isMenuOpen)} $isOpen={isMenuOpen}>
                        {isMenuOpen ? <CgClose /> : <CgMenuRight />}
                    </S.MenuToggle>
                </S.HeaderContent>
            </S.HeaderContainer>

            <AnimatePresence mode="wait">
                {isMenuOpen && (
                    <MobileMenu
                        onClose={() => setIsMenuOpen(false)}
                        handleNavClick={handleNavClick}
                    />
                )}
            </AnimatePresence>
        </>
    )
}
