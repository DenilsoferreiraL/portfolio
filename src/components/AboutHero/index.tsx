'use client'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence, easeInOut } from 'framer-motion'
import { FiArrowRight, FiMessageSquare } from 'react-icons/fi'
import homeperson from '../../../public/assets/home.webp'
import Image from 'next/image'
import * as S from './styles'
import { TechCarousel } from './TechCarousel'


const heroContent = {
    title: 'Denilso Ferreira',
    message:
        "https://api.whatsapp.com/send?phone=5563992922509&text=Ol%C3%A1%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20com%20voc%C3%AA.%20Podemos%20trocar%20uma%20ideia%3F",
    description:
        'Eu ajudo empresas e empreendedores a transformar ideias em aplicações web modernas, rápidas e funcionais. Com React, Next.js e TypeScript, entrego soluções que melhoram a experiência do usuário e impulsionam resultados reais para o seu negócio.',
    about:
        'Como freelancer, já desenvolvi projetos que combinam design, performance e segurança, sempre com foco na solução dos desafios do cliente. Trabalho de forma transparente, entregando código limpo e pronto para escalar conforme sua demanda crescer.',
    cta: 'Vamos conversar',

}

const roles = ['Desenvolvedor Front-end', 'Front-end Developer']

export function AboutHero() {

    const [currentRole, setCurrentRole] = useState(0)


    useEffect(() => {
        const roleInterval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length)
        }, 3000)
        return () => clearInterval(roleInterval)
    }, [])


    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: easeInOut },
        },
    }


    return (
        <S.HeroContainer id="home" initial={false} animate="visible">
            <S.ContentWrapper>
                <S.HeroGrid>
                    <S.TextContent>
                        <S.RoleBadge
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            style={{ minHeight: '1.5rem' }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={roles[currentRole]}
                                    initial={{ opacity: 1, y: 0 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {roles[currentRole]}
                                </motion.span>
                            </AnimatePresence>
                        </S.RoleBadge>

                        <S.MainTitle>
                            {heroContent.title.split('').map((char, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 1, y: 0 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    {char === ' ' ? '\u00A0' : char}
                                </motion.span>
                            ))}
                        </S.MainTitle>

                        <S.Description variants={itemVariants} initial="visible" animate="visible">
                            {heroContent.description}
                        </S.Description>

                        <S.AboutText variants={itemVariants} initial="visible" animate="visible">
                            {heroContent.about}
                        </S.AboutText>
                        <S.CTAButton
                            href={heroContent.message}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={itemVariants}
                            initial="visible"
                            animate={{
                                rotate: [-2, 2, -2],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            whileHover={{
                                scale: 1.05,
                                rotate: 0,
                                boxShadow: '0 8px 25px rgba(99, 102, 241, 0.4)',
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <FiMessageSquare />
                            {heroContent.cta}
                            <FiArrowRight />
                        </S.CTAButton>
                    </S.TextContent>

                    <S.ImageWrapper
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        <Image
                            src={homeperson}
                            alt="Denilso Ferreira - Desenvolvedor Front-end"
                            width={400}
                            height={500}
                            priority
                            quality={80}
                            style={{
                                width: '80%',
                                height: 'auto',
                                objectFit: 'cover',
                                zIndex: 2,
                                marginTop: '4rem',
                            }}
                        />
                    </S.ImageWrapper>
                </S.HeroGrid>
                <TechCarousel />
            </S.ContentWrapper>
        </S.HeroContainer>
    )
}
