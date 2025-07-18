'use client'
import React from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiArrowRight, FiMessageSquare } from 'react-icons/fi'
import * as S from './styles'
import homeperson from '../../../public/assets/home.png'


const LightningIcon = () => <span>⚡</span>
const DeviceIcon = () => <span>📱</span>
const ScaleIcon = () => <span>🏗️</span>
const SearchIcon = () => <span>🔍</span>

const heroContent = {
    title: 'Denilso Ferreira',
    message: "https://api.whatsapp.com/send?phone=5563992922509&text=Ol%C3%A1%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20com%20voc%C3%AA.%20Podemos%20trocar%20uma%20ideia%3F",
    description: 'Eu ajudo empresas e empreendedores a transformar ideias em aplicações web modernas, rápidas e funcionais. Com React, Next.js e TypeScript, entrego soluções que melhoram a experiência do usuário e impulsionam resultados reais para o seu negócio.',
    about: 'Como freelancer pleno, já desenvolvi projetos que combinam design, performance e segurança, sempre com foco na solução dos desafios do cliente. Trabalho de forma transparente, entregando código limpo e pronto para escalar conforme sua demanda crescer.',
    cta: 'Vamos conversar',
    highlights: [
        {
            text: 'Performance que mantém seus usuários engajados',
            icon: <LightningIcon />,
            color: '#0dc97e'
        },
        {
            text: 'Design responsivo que funciona em todos os dispositivos',
            icon: <DeviceIcon />,
            color: '#146cd1'
        },
        {
            text: 'Código escalável para crescimento sem dor de cabeça',
            icon: <ScaleIcon />,
            color: '#fb4ead'
        },
        {
            text: 'SEO e otimização para você ser encontrado no Google',
            icon: <SearchIcon />,
            color: '#ffc60c'
        }
    ]
}

const roles = [
    'Desenvolvedor Front-end',
    'Front-end Developer',
]


export function AboutHero() {
    const controls = useAnimation()
    const [activeHighlight, setActiveHighlight] = useState(0)
    const [currentRole, setCurrentRole] = useState(0)

    useEffect(() => {
        const roleInterval = setInterval(() => {
            setCurrentRole(prev => (prev + 1) % roles.length)
        }, 3000)

        return () => clearInterval(roleInterval)
    }, [])

    useEffect(() => {
        const highlightInterval = setInterval(() => {
            setActiveHighlight(prev => (prev + 1) % heroContent.highlights.length)
        }, 5000)

        const startAnimations = async () => {
            await controls.start('visible')
        }

        startAnimations()
        return () => clearInterval(highlightInterval)
    }, [controls])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                when: "beforeChildren"
            }
        }
    }

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    }

    const highlightVariants = {
        enter: { opacity: 0, y: 20 },
        center: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    }

    return (
        <S.HeroContainer
            id='home'
            initial="hidden"
            animate={controls}
            variants={containerVariants}
        >
            <S.ContentWrapper>
                <S.HeroGrid>
                    <S.TextContent>
                        <S.RoleBadge variants={itemVariants} style={{ minHeight: '1.5rem' }}>
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={roles[currentRole]}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {roles[currentRole]}
                                </motion.span>
                            </AnimatePresence>
                        </S.RoleBadge>
                        <S.MainTitle variants={itemVariants}>
                            {heroContent.title.split('').map((char, i) => (
                                <motion.span
                                    key={i}
                                    custom={i * 0.03}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: (delay) => ({
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                delay,
                                                duration: 0.7,
                                                ease: [0.34, 1.56, 0.64, 1]
                                            }
                                        })
                                    }}
                                >
                                    {char === ' ' ? '\u00A0' : char}
                                </motion.span>
                            ))}
                        </S.MainTitle>

                        <S.Description variants={itemVariants}>
                            {heroContent.description}
                        </S.Description>

                        <S.AboutText variants={itemVariants}>
                            {heroContent.about}
                        </S.AboutText>

                        <S.HighlightsWrapper variants={itemVariants}>
                            <AnimatePresence mode="wait">
                                <S.HighlightItem
                                    key={activeHighlight}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    variants={highlightVariants}
                                    transition={{ duration: 0.6 }}
                                    $highlightColor={heroContent.highlights[activeHighlight].color}
                                >
                                    {heroContent.highlights[activeHighlight].icon}
                                    {heroContent.highlights[activeHighlight].text}
                                </S.HighlightItem>
                            </AnimatePresence>
                        </S.HighlightsWrapper>
                        <S.CTAButton
                            href={heroContent.message}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={itemVariants}
                            animate={{
                                rotate: [-2, 2, -2],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}
                            whileHover={{
                                scale: 1.05,
                                rotate: 0,
                                boxShadow: '0 8px 25px rgba(99, 102, 241, 0.4)'
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
                            y: [0, -10, 0]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        }}
                    >
                        <S.ProfileImage
                            src={homeperson.src}
                            loading="lazy"
                            alt="Denilso Ferreira - Desenvolvedor Front-end"
                            width={400}
                            height={500}
                        />
                    </S.ImageWrapper>
                </S.HeroGrid>
            </S.ContentWrapper>
        </S.HeroContainer>
    )
}