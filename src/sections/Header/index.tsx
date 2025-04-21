'use client';

import Link from 'next/link';
import * as S from './styles';
import { FaBars } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { MobileMenu } from '@/components/MobileMenu';
import { navLinks } from '@/data/navLinks';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <S.HeaderContainer>
            <S.Logo>
                <Link href="/">Logo</Link>
            </S.Logo>
            <S.MenuToggle $isOpen={isMenuOpen} onClick={() => setIsMenuOpen(true)}>
                <FaBars />
            </S.MenuToggle>
            <S.DesktopNav>
                {navLinks.map(({ label, href }) => (
                    <S.NavLink
                        key={href}
                        href={href}
                        onClick={(e) => {
                            e.preventDefault(); // impede o comportamento padrão
                            const targetId = href.replace('#', '');
                            const targetElement = document.getElementById(targetId);
                            if (targetElement) {
                                targetElement.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start',
                                });
                            }
                        }}
                    >
                        {label}
                    </S.NavLink>
                ))}
            </S.DesktopNav>
            <AnimatePresence>
                {isMenuOpen && (
                    <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
                )}
            </AnimatePresence>
        </S.HeaderContainer>
    );
}
