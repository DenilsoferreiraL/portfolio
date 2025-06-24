'use client'

import * as S from './styles'
import { FaCode, FaServer, FaRocket, FaChartLine } from 'react-icons/fa'
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
            duration: 0.6,
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
        period: "Jul 2023 - Presente · 2 anos",
        description: [
            "Desenvolvimento de aplicações web completas para clientes de diversos setores, desde institucionais até produtos digitais complexos",
            "Atuação full-stack com foco especial em otimização de performance e experiência do usuário"
        ],
        achievements: [
            "Redução de 40% no tempo de carregamento em projetos legados através de code splitting e caching estratégico",
            "Implementação de arquitetura escalável que permitiu crescimento de 300% na base de usuários sem perda de performance",
            "Integração perfeita entre front-end e back-end em 100% dos projetos entregues"
        ],
        skills: [
            "React.js",
            "Next.js",
            "TypeScript",
            "Node.js",
            "PostgreSQL",
            "Docker",
            "Figma",
            "AWS",
            "Vercel",
            "CI/CD"
        ],
        icon: <FaCode />
    },
    {
        id: 2,
        role: "Desenvolvedor Full-stack",
        company: "Projetos Pessoais",
        period: "2021 - 2023 · 2 anos",
        description: [
            "Desenvolvimento de projetos completos para aprimoramento técnico e construção de portfólio",
            "Exploração de tecnologias modernas e melhores práticas de desenvolvimento"
        ],
        achievements: [
            "Domínio avançado de TypeScript em projetos complexos",
            "Implementação bem-sucedida de SSR/SSG com Next.js",
            "Modelagem eficiente de bancos de dados relacionais e não-relacionais"
        ],
        skills: [
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "Express",
            "MongoDB",
            "PostgreSQL",
            "REST API",
            "GraphQL"
        ],
        icon: <FaServer />
    }
]

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