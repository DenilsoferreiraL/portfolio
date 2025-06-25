'use client'

import * as S from './styles'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowRightLong } from "react-icons/fa6";
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

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
            <S.FooterWave>
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        opacity=".25"
                    ></path>
                    <path
                        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                        opacity=".5"
                    ></path>
                    <path
                        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                    ></path>
                </svg>
            </S.FooterWave>

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
                        {[
                            { name: 'Início', href: '/' },
                            { name: 'Projetos', href: '/#projetos' },
                            { name: 'Habilidades', href: '/#habilidades' },
                            { name: 'Contato', href: '/#contato' }
                        ].map((link) => (
                            <motion.div key={link.name} variants={itemVariants}>
                                <Link href={link.href} style={{ textDecoration: 'none' }}>
                                    <S.NavLink >
                                        <S.LinkArrow ><FaArrowRightLong /></S.LinkArrow> {link.name}
                                    </S.NavLink>
                                </Link>
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