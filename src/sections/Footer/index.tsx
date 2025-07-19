'use client'

import * as S from './styles'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowRightLong } from "react-icons/fa6";
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { navLinks } from '../Header';

// Animations
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
        >
            <S.FooterContent>
                <S.FooterSection variants={itemVariants} style={{ width: '400px' }}>
                    <S.FooterTitle variants={itemVariants}>Minha Jornada</S.FooterTitle>
                    <S.FooterText variants={itemVariants}>
                        Construir com propósito, se você tem uma ideia, vamos desenvolvê-la juntos.
                    </S.FooterText>
                    <S.MotivationText variants={itemVariants}>
                        O sucesso é a soma de pequenos esforços repetidos dia após dia.
                    </S.MotivationText>
                </S.FooterSection>

                <S.FooterSection variants={itemVariants} style={{ width: '250px' }}>
                    <S.FooterTitle variants={itemVariants}>Navegação</S.FooterTitle>
                    <S.FooterLinks style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {navLinks.map((link) => (
                            <motion.div key={link.label} variants={itemVariants}>
                                <S.NavLink
                                    onClick={() => {
                                        const section = document.querySelector(link.href);
                                        section?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <S.LinkArrow><FaArrowRightLong /></S.LinkArrow> {link.label}
                                </S.NavLink>
                            </motion.div>
                        ))}
                    </S.FooterLinks>
                </S.FooterSection>

                <S.FooterSection variants={itemVariants} style={{ width: '250px' }}>
                    <S.FooterTitle variants={itemVariants}>Vamos Conversar</S.FooterTitle>
                    <S.FooterContact>
                        <motion.div variants={itemVariants}>
                            <S.ContactItem>
                                <FiMail /> denilsoferreiraleite@gmail.com
                            </S.ContactItem>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <S.ContactItem>
                                <FiPhone /> (63) 99292-2509
                            </S.ContactItem>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <S.ContactItem>
                                <FiMapPin /> Araguaína, Tocantins
                            </S.ContactItem>
                        </motion.div>
                    </S.FooterContact>
                </S.FooterSection>
            </S.FooterContent>

            <S.FooterBottom variants={bottomVariants}>
                <S.SocialLinks>
                    {[
                        { icon: <FiGithub />, name: 'GitHub', href: 'https://github.com/DenilsoferreiraL' },
                        { icon: <FiLinkedin />, name: 'LinkedIn', href: 'https://www.linkedin.com/in/denilso-ferreira-leite/' },
                        { icon: <FiInstagram />, name: 'Instagram', href: 'https://www.instagram.com/denilso.dev/' }
                    ].map((social) => (
                        <Link
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none' }}
                        >
                            <S.SocialIcon whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} style={{ fontSize: '1.2rem' }}>
                                {social.icon}
                                <span>{social.name}</span>
                            </S.SocialIcon>
                        </Link>
                    ))}
                </S.SocialLinks>
                <S.Copyright>
                    &copy; {currentYear} Todos os direitos reservados. Construído com paixão e Next.
                </S.Copyright>
            </S.FooterBottom>
        </S.FooterContainer>
    )
}