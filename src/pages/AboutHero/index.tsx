'use client'

import * as S from './styles'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface AboutHeroProps {
    title: string
    subtitle: string
    description: string
}

const aboutHeroData: AboutHeroProps = {
    title: 'Desenvolvedor Web ',
    subtitle: 'Denilso Ferreira Leite',
    description: 'Do conceito à implementação, meu processo é focado em excelência técnica e resultados. Sistemas feitos para durar e escalar junto com suas ambições.'
}

export function AboutHero() {
    const subtitleRef = useRef<HTMLDivElement>(null)

    const bubbles = Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        size: Math.random() * 200 + 80,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 40 + 40
    }))

    useEffect(() => {
        const animateText = async () => {
            if (subtitleRef.current) {
                const text = subtitleRef.current.textContent || ''
                subtitleRef.current.textContent = ''

                for (let i = 0; i < text.length; i++) {
                    subtitleRef.current.textContent += text[i]
                    await new Promise(resolve => setTimeout(resolve, 50))
                }
            }
        }

        animateText()
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5
            }
        }
    }

    const titleVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    }

    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.05,
                duration: 0.5,
                ease: "backOut"
            }
        })
    }

    const bubbleVariants = {
        hidden: { opacity: 0 },
        visible: (delay: number) => ({
            opacity: [0, 0.1, 0.08],
            transition: {
                delay,
                duration: 2,
                ease: "easeInOut"
            }
        }),
        float: {
            x: [null, `${Math.random() * 30 - 15}%`],
            y: [null, `${Math.random() * 30 - 15}%`],
            transition: {
                duration: (i: number) => 40 + i * 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
            }
        }
    }

    return (
        <S.HeroContainer
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <S.FloatingShapes>
                {bubbles.map((bubble, i) => (
                    <S.Shape
                        key={bubble.id}
                        custom={i * 0.2}
                        initial="hidden"
                        animate={["visible", "float"]}
                        variants={bubbleVariants}
                        style={{
                            width: bubble.size,
                            height: bubble.size,
                            left: `${bubble.x}%`,
                            top: `${bubble.y}%`,
                        }}
                    />
                ))}
            </S.FloatingShapes>

            <S.HeroContent>
                <S.TextContainer>
                    <S.Title variants={titleVariants}>
                        {aboutHeroData.title.split('').map((letter, i) => (
                            <motion.span
                                key={i}
                                custom={i}
                                variants={letterVariants}
                            >
                                {letter === ' ' ? '\u00A0' : letter}
                            </motion.span>
                        ))}
                    </S.Title>

                    <S.Subtitle>
                        <span ref={subtitleRef}>{aboutHeroData.subtitle}</span>
                    </S.Subtitle>

                    <S.Description variants={titleVariants}>
                        {aboutHeroData.description}
                    </S.Description>

                    <S.CtaButton
                        href="https://wa.me/5563992922509"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.6 }}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.3 }
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Vamos Conversar!
                    </S.CtaButton>
                </S.TextContainer>
            </S.HeroContent>
        </S.HeroContainer>
    )
}