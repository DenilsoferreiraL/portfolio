'use client'

import React, { JSX } from 'react'
import * as S from './styles'
import { FaReact, FaNodeJs, FaDatabase, FaServer, FaCode, FaMobileAlt } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiPostgresql, SiDocker } from 'react-icons/si'

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

const titleVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
}

const techIcons: Record<string, JSX.Element> = {
    'React': <FaReact />,
    'Node.js': <FaNodeJs />,
    'TypeScript': <SiTypescript />,
    'Next.js': <SiNextdotjs />,
    'PostgreSQL': <SiPostgresql />,
    'Docker': <SiDocker />,
    'Backend': <FaServer />,
    'Frontend': <FaCode />,
    'Mobile': <FaMobileAlt />,
    'Banco de Dados': <FaDatabase />
}

export interface Education {
    id: number | string
    degree: string
    institution: string
    year: string
    highlights: string[]
    skills: string[]
    imageURL: string
}

interface EducationSectionProps {
    title?: string
}

const educationData: Education[] = [
    {
        id: 1,
        imageURL: "https://media.licdn.com/dms/image/v2/D4D0BAQGs0Jd8tULJZw/company-logo_200_200/company-logo_200_200/0/1659810942474/dev_club_devs_logo?e=1756339200&v=beta&t=Og_tcOCebxmIIzH45XDqh8eW1DDI02Lql8fEu6KglFY",
        degree: "Análise e Desenvolvimento de Sistemas (Desenvolvimento Web Full Stack)",
        institution: "Dev Club - Curso Superior de Tecnologia (CST)",
        year: "Set 2022 - Set 2024",
        highlights: [
            "Formação completa em desenvolvimento web full stack, com práticas orientadas ao mercado",
            "Participação diária em atividades de grupo, resolução de problemas e fortalecimento da colaboração",
            "Desenvolvimento de projetos completos com foco em usabilidade, acessibilidade e performance",
            "Aprendizado de front-end e back-end, passando por APIs, banco de dados e deploy em ambiente cloud"
        ],
        skills: [
            "React.js",
            "Next.js",
            "Node.js",
            "TypeScript",
            "PostgreSQL",
            "MongoDB",
            "Docker",
            "Figma",
            "Backend",
            "Frontend",
            "APIs REST/GraphQL",
            "CI/CD"
        ]
    }
];


export function EducationSection({
    title = "Formação Profissional"
}: EducationSectionProps) {
    return (
        <S.EducationContainer
            id='qualificacao'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            <S.SectionTitle variants={titleVariants}>
                {title}
                <S.TitleDecoration />
            </S.SectionTitle>

            <S.EducationGrid>
                {educationData.map((edu, index) => (
                    <S.EducationCard
                        key={edu.id}
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        custom={index}
                    >
                        <S.EducationHeader>
                            <S.EducationLogo>
                                <img src={edu.imageURL} alt={edu.institution} width={130} height={130} style={{ borderRadius: 10 }} />
                            </S.EducationLogo>
                            <div>
                                <S.EducationYear>
                                    {edu.year}
                                </S.EducationYear>
                                <S.EducationDegree>
                                    {edu.degree}
                                </S.EducationDegree>
                                <S.EducationInstitution>
                                    {edu.institution}
                                </S.EducationInstitution>
                            </div>
                        </S.EducationHeader>

                        <S.HighlightsTitle>Principais Características:</S.HighlightsTitle>
                        <S.EducationHighlights>
                            {edu.highlights.map((highlight, i) => (
                                <S.HighlightItem key={i}>
                                    {highlight}
                                </S.HighlightItem>
                            ))}
                        </S.EducationHighlights>

                        <S.SkillsTitle>Tecnologias Dominadas:</S.SkillsTitle>
                        <S.SkillsGrid>
                            {edu.skills.map((skill, i) => (
                                <S.SkillTag key={i}>
                                    <S.TechIcon>
                                        {techIcons[skill] || <FaCode />}
                                    </S.TechIcon>
                                    {skill}
                                </S.SkillTag>
                            ))}
                        </S.SkillsGrid>
                    </S.EducationCard>
                ))}
            </S.EducationGrid>
        </S.EducationContainer>
    )
}