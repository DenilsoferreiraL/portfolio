'use client'

import * as S from './styles'

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

export interface Education {
    id: number | string
    degree: string
    institution: string
    year: string
    description: string
}

interface EducationSectionProps {
    title?: string
}

const educationData: Education[] = [
    {
        id: 1,
        degree: "Bacharel em Ciência da Computação",
        institution: "Universidade Federal de São Paulo (UNIFESP)",
        year: "2020 - 2024",
        description:
            "Cursando o Bacharelado em Ciência da Computação, com foco em desenvolvimento de software e inteligência artificial."
    },
    {
        id: 2,
        degree: "Técnico em Informática",
        institution: "Escola Técnica Estadual (ETEC) de São Paulo",
        year: "2018 - 2020",
        description:
            "Concluído o curso técnico em informática, com ênfase em desenvolvimento web e programação."
    }
]

export function EducationSection({
    title = "Qualificação"
}: EducationSectionProps) {
    return (
        <S.EducationContainer
            id='qualificacao'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <S.SectionTitle variants={titleVariants}>{title}</S.SectionTitle>

            <S.EducationGrid>
                {educationData.map((edu, index) => (
                    <S.EducationCard
                        key={edu.id}
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        custom={index}
                    >
                        <S.EducationYear variants={itemVariants}>
                            {edu.year}
                        </S.EducationYear>
                        <S.EducationDegree variants={itemVariants}>
                            {edu.degree}
                        </S.EducationDegree>
                        <S.EducationInstitution variants={itemVariants}>
                            {edu.institution}
                        </S.EducationInstitution>
                        <S.EducationDescription variants={itemVariants}>
                            {edu.description}
                        </S.EducationDescription>
                    </S.EducationCard>
                ))}
            </S.EducationGrid>
        </S.EducationContainer>
    )
}