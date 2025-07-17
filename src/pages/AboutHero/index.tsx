'use client'
import React, { JSX } from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FiArrowRight, FiMessageSquare } from 'react-icons/fi'
import styled from 'styled-components'
interface FloatingOrb {
    id: string
    size: number
    x: number
    y: number
    delay: number
    duration: number
}
interface HighlightItem {
    text: string
    icon: JSX.Element
    color: string
    message?: string

}

const LightningIcon = () => <span>⚡</span>
const DeviceIcon = () => <span>📱</span>
const ScaleIcon = () => <span>🏗️</span>
const SearchIcon = () => <span>🔍</span>


const heroContent = {
    title: 'Denilso Ferreira',
    role: 'Desenvolvedor Front-end',
    message: "https://api.whatsapp.com/send?phone=5563992922509&text=Ol%C3%A1%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20com%20voc%C3%AA.%20Podemos%20trocar%20uma%20ideia%3F",
    description: 'Código validado com performance mensurável, escalabilidade comprovada e UX/UI que converte. Entrego a solução digital que seu negócio precisa.',
    cta: 'Vamos conversar',
    highlights: [
        {
            text: 'Performance otimizada',
            icon: <LightningIcon />,
            color: '#0dc97e'
        },
        {
            text: 'Design responsivo',
            icon: <DeviceIcon />,
            color: '#146cd1'
        },
        {
            text: 'Código escalável',
            icon: <ScaleIcon />,
            color: '#fb4ead'
        },
        {
            text: 'SEO integrado',
            icon: <SearchIcon />,
            color: '#ffc60c'
        }
    ]
}

export function AboutHero() {
    const controls = useAnimation()
    const [activeHighlight, setActiveHighlight] = useState(0)
    const [orbs, setOrbs] = useState<FloatingOrb[]>([])
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {

        const generateOrbs = () => {
            const newOrbs: FloatingOrb[] = Array.from({ length: 12 }).map((_, i) => ({
                id: `orb-${i}`,
                size: Math.random() * 80 + 40,
                x: Math.random() * 100,
                y: Math.random() * 100,
                delay: Math.random() * 2,
                duration: Math.random() * 20 + 10
            }))
            setOrbs(newOrbs)
        }


        const highlightInterval = setInterval(() => {
            setActiveHighlight(prev => (prev + 1) % heroContent.highlights.length)
        }, 3500)


        const startAnimations = async () => {
            await controls.start('visible')
            generateOrbs()
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

    const orbVariants = {
        hidden: { opacity: 0 },
        visible: (delay: number) => ({
            opacity: [0, 0.15, 0],
            transition: {
                delay,
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
            }
        }),
        float: {
            x: ["0%", `${Math.random() * 30 - 15}%`],
            y: ["0%", `${Math.random() * 30 - 15}%`],
            transition: {
                duration: (d: number) => d * 10 + 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
            }
        }
    }

    const highlightVariants = {
        enter: { opacity: 0, y: 20 },
        center: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    }

    return (
        <HeroContainer
            id='home'
            ref={containerRef}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
        >
            {/* Background elements */}
            <OrbContainer>
                {orbs.map((orb) => (
                    <FloatingOrb
                        key={orb.id}
                        custom={orb.delay}
                        variants={orbVariants}
                        initial="hidden"
                        animate={['visible', 'float']}
                        style={{
                            width: orb.size,
                            height: orb.size,
                            left: `${orb.x}%`,
                            top: `${orb.y}%`,
                            filter: `blur(${orb.size / 15}px)`
                        }}
                        orbDuration={orb.duration}
                    />
                ))}
            </OrbContainer>

            <ContentWrapper>
                {/* Text content */}
                <TextContent>
                    <RoleBadge variants={itemVariants}>
                        {heroContent.role}
                    </RoleBadge>

                    <MainTitle variants={itemVariants}>
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
                    </MainTitle>

                    <Description variants={itemVariants}>
                        {heroContent.description}
                    </Description>

                    <HighlightsWrapper variants={itemVariants}>
                        <AnimatePresence mode="wait">
                            <HighlightItem
                                key={activeHighlight}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                variants={highlightVariants}
                                transition={{ duration: 0.5 }}
                                highlightColor={heroContent.highlights[activeHighlight].color}
                            >
                                {heroContent.highlights[activeHighlight].icon}
                                {heroContent.highlights[activeHighlight].text}
                            </HighlightItem>
                        </AnimatePresence>
                    </HighlightsWrapper>
                    <CTAButton
                        href={heroContent.message}
                        variants={itemVariants}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '0 8px 25px rgba(99, 102, 241, 0.4)'
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <FiMessageSquare />
                        {heroContent.cta}
                        <FiArrowRight />
                    </CTAButton>
                </TextContent>
            </ContentWrapper>
        </HeroContainer>
    )
}



const HeroContainer = styled(motion.section)`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.background} 0%,
    ${({ theme }) => theme.colors.backgroundDark} 100%
  );

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
    min-height: 100vh;
  }
`

const OrbContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`

const FloatingOrb = styled(motion.div) <{ orbDuration: number }>`
  position: absolute;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  opacity: 0;
  mix-blend-mode: soft-light;
  will-change: transform;
`

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`

const TextContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`

const RoleBadge = styled(motion.div)`
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  background: rgba(${({ theme }) => theme.colors.primaryRgb}, 0.1);
  color: ${({ theme }) => theme.colors.primary};
  backdrop-filter: blur(5px);
  border: 1px solid rgba(${({ theme }) => theme.colors.primaryRgb}, 0.2);

  @media (max-width: 768px) {
    font-size: 0.875rem;
    padding: 0.375rem 1rem;
  }
`

const MainTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin: 0;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.text} 20%,
    ${({ theme }) => theme.colors.primary} 50%,
    ${({ theme }) => theme.colors.text} 80%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;

  @media (max-width: 768px) {
    font-size: clamp(2rem, 8vw, 3.5rem);
  }
`

const Description = styled(motion.p)`
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 90%;
  margin: 0;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 1.1rem;
  }
`

const HighlightsWrapper = styled(motion.div)`
  position: relative;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  width: 100%;
`

const HighlightItem = styled(motion.div) <{ highlightColor: string }>`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 1.5rem;
  color: ${({ highlightColor }) => highlightColor};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const CTAButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.1rem;
  color: white;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(${({ theme }) => theme.colors.primaryRgb}, 0.3);
  border: none;
  margin-top: 1rem;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    svg:last-child {
      transform: translateX(3px);
    }
  }

  @media (max-width: 768px) {
    padding: 0.875rem 1.75rem;
    font-size: 1rem;
  }
`