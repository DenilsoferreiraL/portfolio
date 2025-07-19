'use client'

import * as S from './styles'
import { CgMenuRight, CgClose } from 'react-icons/cg'
import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { navLinks } from '@/data/navLinks'

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
        setIsMenuOpen(false)
    }

    return (
        <>
            <S.HeaderContainer $scrolled={scrolled || isMenuOpen}>
                <S.HeaderContent>
                    <S.LogoContainer>
                        <S.Logo
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

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            position: 'fixed',
                            left: 0,
                            width: '100%',
                            background: 'white',
                            zIndex: 998,
                            padding: '2rem 1.5rem',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                            height: 'calc(100vh - 60px)',
                            overflowY: 'auto',
                            marginTop: '60px',
                        }}
                    >
                        <S.MobileNavList>
                            {navLinks.map(({ label, href }) => (
                                <S.MobileNavItem
                                    key={href}
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <S.MobileNavLink
                                        href={href}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            handleNavClick(href)
                                        }}
                                    >
                                        {label}
                                    </S.MobileNavLink>
                                </S.MobileNavItem>
                            ))}
                        </S.MobileNavList>

                        <div style={{ marginTop: '2rem' }}>
                            <p style={{ fontSize: '1rem', color: '#666' }}>© 2025 Portfolio. Todos os direitos reservados.</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
