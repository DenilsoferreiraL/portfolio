'use client'

import * as S from './styles'
import { motion } from 'framer-motion'
import { navLinks } from '../../sections/Header'

interface MobileMenuProps {
    onClose: () => void
    handleNavClick: (href: string) => void
}

export default function MobileMenu({ onClose, handleNavClick }: MobileMenuProps) {
    return (
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
                                onClose()
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
    )
}
