'use client'

import * as S from './styles'
import Link from 'next/link'
import { motion } from 'framer-motion'

// Animations
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
}

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
}

const bottomVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            delay: 0.5
        }
    }
}

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <S.FooterContainer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <S.FooterWave />

            <S.FooterContent>
                <S.FooterSection variants={itemVariants}>
                    <S.FooterTitle variants={itemVariants}>Sobre</S.FooterTitle>
                    <S.FooterText variants={itemVariants}>
                        Meu portfólio profissional com projetos selecionados que demonstram minhas habilidades e experiência em desenvolvimento.
                    </S.FooterText>
                </S.FooterSection>

                <S.FooterSection variants={itemVariants}>
                    <S.FooterTitle variants={itemVariants}>Links Rápidos</S.FooterTitle>
                    <S.FooterLinks>
                        <motion.div variants={itemVariants}>
                            <Link href="/">Home</Link>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <Link href="/">Projetos</Link>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <Link href="/">Sobre</Link>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <Link href="/">Contato</Link>
                        </motion.div>
                    </S.FooterLinks>
                </S.FooterSection>

                <S.FooterSection variants={itemVariants}>
                    <S.FooterTitle variants={itemVariants}>Contato</S.FooterTitle>
                    <S.FooterContact>
                        <motion.span variants={itemVariants}>Email: seu@email.com</motion.span>
                        <motion.span variants={itemVariants}>Telefone: (00) 12345-6789</motion.span>
                        <motion.span variants={itemVariants}>Localização: Cidade, País</motion.span>
                    </S.FooterContact>
                </S.FooterSection>
            </S.FooterContent>

            <S.FooterBottom variants={bottomVariants}>
                <p>&copy; {currentYear} Meu Portfólio. Todos os direitos reservados.</p>
                <S.SocialLinks>
                    <Link href="/" target="_blank" rel="noopener noreferrer">
                        <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }}>
                            GitHub
                        </motion.div>
                    </Link>
                    <Link href="/" target="_blank" rel="noopener noreferrer">
                        <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }}>
                            LinkedIn
                        </motion.div>
                    </Link>
                    <Link href="/" target="_blank" rel="noopener noreferrer">
                        <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }}>
                            Instagram
                        </motion.div>
                    </Link>
                </S.SocialLinks>
            </S.FooterBottom>
        </S.FooterContainer>
    )
}