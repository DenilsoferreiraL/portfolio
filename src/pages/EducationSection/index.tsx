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
    education: Education[]
    title?: string
}

export function EducationSection({
    education,
    title = "Qualificação"
}: EducationSectionProps) {
    return (
        <S.EducationContainer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <S.SectionTitle variants={titleVariants}>{title}</S.SectionTitle>

            <S.EducationGrid>
                {education.map((edu, index) => (
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