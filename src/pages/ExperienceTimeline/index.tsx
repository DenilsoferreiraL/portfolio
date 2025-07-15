'use client'

import * as S from './styles'
import { FaCode, FaRocket, FaChartLine, FaLaptopCode } from 'react-icons/fa'
import React from 'react'

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
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: "easeOut"
        }
    }
}

const dotVariants = {
    hidden: { scale: 0 },
    visible: {
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 12
        }
    }
}

const contentVariants = {
    hover: {
        y: -5,
        boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
        transition: { duration: 0.2, ease: "easeOut" }
    }
}

const lineVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
        height: "100%",
        opacity: 1,
        transition: {
            delay: 0.9,
            duration: 1.5,
            ease: "easeInOut"
        }
    }
}

export interface Experience {
    id: string | number
    role: string
    company: string
    period: string
    description: string[]
    achievements?: string[]
    skills?: string[]
    icon: React.ReactNode
}

interface ExperienceTimeLineProps {
    title?: string
}

const experiences: Experience[] = [
    {
        id: 1,
        role: "Desenvolvedor Front-end Freelancer (Pleno)",
        company: "Trabalho Autônomo",
        period: "Fev 2024 - Presente · 1 ano e 5 meses",
        description: [
            "Desenvolvimento de aplicações web para clientes dos setores institucionais e produtos digitais, com foco em escalabilidade e performance.",
            "Otimização de sistemas legados com melhorias de performance, arquitetura e experiência do usuário.",
            "Atuação full-stack com React.js, Next.js, TypeScript e Node.js, incluindo integração com APIs REST e GraphQL."
        ],
        achievements: [
            "Redução de 40% no tempo de carregamento de aplicações legadas com code splitting, lazy loading e caching.",
            "Deploy e monitoramento em ambientes cloud (AWS e Vercel), com pipelines de CI/CD.",
            "Entrega de projetos complexos com integração de front-end e back-end, bancos de dados PostgreSQL e MongoDB."
        ],
        skills: [
            "React.js",
            "Next.js",
            "TypeScript",
            "Node.js",
            "PostgreSQL",
            "MongoDB",
            "Docker",
            "Figma",
            "AWS",
            "Vercel",
            "CI/CD",
            "GraphQL",
            "REST API"
        ],
        icon: <FaCode />
    },
    {
        id: 2,
        role: "Desenvolvedor Front-end Freelancer (Júnior)",
        company: "Trabalho Autônomo",
        period: "Jul 2023 - Jan 2024 · 7 meses",
        description: [
            "Primeira atuação prática em projetos comerciais como freelancer, com desenvolvimento de interfaces web responsivas usando React.js e Next.js.",
            "Construção de páginas otimizadas para SEO e integração com APIs REST, garantindo entregas dentro do prazo e com foco em aprendizado prático.",
            "Início da atuação com back-end utilizando Node.js e Express, realizando as primeiras integrações com bancos de dados."
        ],
        achievements: [
            "Entrega de projetos institucionais completos com React e Next.js, reforçando a base técnica em front-end.",
            "Primeiras integrações reais com APIs e bancos de dados relacionais (PostgreSQL).",
            "Aprimoramento das soft skills em comunicação com clientes e gerenciamento de demandas no modelo autônomo."
        ],
        skills: [
            "React.js",
            "Next.js",
            "TypeScript",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Figma",
            "REST API"
        ],
        icon: <FaLaptopCode />
    }
];




export function ExperienceTimeline({
    title = "Jornada Profissional"
}: ExperienceTimeLineProps) {
    return (
        <S.TimelineContainer
            id='jornada'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <S.SectionTitle variants={itemVariants}>
                {title}
            </S.SectionTitle>

            <S.Timeline>
                <S.TimelineLine variants={lineVariants} />

                {experiences.map((exp, index) => (
                    <S.TimelineItem
                        key={exp.id}
                        $isEven={index % 2 === 0}
                        variants={itemVariants}
                        custom={index}
                    >
                        <S.TimelineDot variants={dotVariants}>
                            <S.IconWrapper>
                                {exp.icon}
                            </S.IconWrapper>
                        </S.TimelineDot>

                        <S.TimelineContent
                            whileHover="hover"
                            variants={contentVariants}
                        >
                            <S.TimelinePeriod>
                                {exp.period}
                            </S.TimelinePeriod>

                            <S.TimelineRole>
                                {exp.role}
                            </S.TimelineRole>

                            <S.TimelineCompany>
                                {exp.company}
                            </S.TimelineCompany>

                            <S.TimelineDescription>
                                {exp.description.map((desc, i) => (
                                    <S.DescriptionItem key={i}>
                                        <S.BulletPoint />
                                        {desc}
                                    </S.DescriptionItem>
                                ))}
                            </S.TimelineDescription>

                            {exp.achievements && (
                                <S.AchievementsContainer>
                                    <S.AchievementsTitle>
                                        <FaRocket /> Conquistas
                                    </S.AchievementsTitle>
                                    {exp.achievements.map((achievement, i) => (
                                        <S.AchievementItem key={i}>
                                            <S.AchievementIcon />
                                            {achievement}
                                        </S.AchievementItem>
                                    ))}
                                </S.AchievementsContainer>
                            )}

                            {exp.skills && (
                                <S.TimelineSkills>
                                    <S.SkillsTitle>
                                        <FaChartLine /> Tecnologias
                                    </S.SkillsTitle>
                                    <S.SkillsGrid>
                                        {exp.skills.map(skill => (
                                            <S.SkillTag
                                                key={skill}
                                                whileHover={{
                                                    scale: 1.05,
                                                    backgroundColor: 'rgba(0,0,0,0.05)'
                                                }}
                                                transition={{ type: "spring", stiffness: 400 }}
                                            >
                                                {skill}
                                            </S.SkillTag>
                                        ))}
                                    </S.SkillsGrid>
                                </S.TimelineSkills>
                            )}
                        </S.TimelineContent>
                    </S.TimelineItem>
                ))}
            </S.Timeline>
        </S.TimelineContainer>
    )
}
