// src/components/About/EducationSection/index.tsx
'use client'

import * as S from './styles'



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

export function EducationSection({ education,
    title = "Formação Acadêmica"
}: EducationSectionProps) {
    return (
        <S.EducationContainer>
            <S.SectionTitle>{title}</S.SectionTitle>

            <S.EducationGrid>
                {education.map((edu) => (
                    <S.EducationCard key={edu.id}>
                        <S.EducationYear>{edu.year}</S.EducationYear>
                        <S.EducationDegree>{edu.degree}</S.EducationDegree>
                        <S.EducationInstitution>{edu.institution}</S.EducationInstitution>
                        <S.EducationDescription>{edu.description}</S.EducationDescription>
                    </S.EducationCard>
                ))}
            </S.EducationGrid>
        </S.EducationContainer>
    )
}