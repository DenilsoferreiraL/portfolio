// src/components/About/SkillsSection/index.tsx
'use client'

import * as S from './styles'

interface Skill {
    name: string
    level: number
}

interface SkillsSectionProps {
    skills: Skill[]
    title?: string  // Opcional para customização
}

export function SkillsSection({
    skills,
    title = "Conhecimentos-Chave"
}: SkillsSectionProps) {
    return (
        <S.SkillsContainer>
            <S.SectionTitle>{title}</S.SectionTitle>

            <S.SkillsGrid>
                {skills.map((skill) => (
                    <S.SkillItem key={skill.name}>
                        <S.SkillName>{skill.name}</S.SkillName>
                        <S.SkillBar>
                            <S.SkillLevel level={skill.level} />
                        </S.SkillBar>
                        <S.SkillPercentage>{skill.level}%</S.SkillPercentage>
                    </S.SkillItem>
                ))}
            </S.SkillsGrid>
        </S.SkillsContainer>
    )
}