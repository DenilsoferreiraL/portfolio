// src/components/About/ExperienceTimeline/index.tsx
'use client'

import * as S from './styles'

export interface Experience {
    id: string | number
    role: string
    company: string
    period: string
    description: string
    skills?: string[]
}

interface ExperienceTimeLineProps {
    experiences: Experience[]
    title?: string
}
export function ExperienceTimeline({
    experiences,
    title = "Experiência Profissional"
}: ExperienceTimeLineProps) {
    return (
        <S.TimelineContainer>
            <S.SectionTitle>{title}</S.SectionTitle>

            <S.Timeline>
                {experiences.map((exp, index) => (
                    <S.TimelineItem key={exp.id} $isEven={index % 2 === 0}>
                        <S.TimelineDot />

                        <S.TimelineContent>
                            <S.TimelinePeriod>{exp.period}</S.TimelinePeriod>
                            <S.TimelineRole>{exp.role}</S.TimelineRole>
                            <S.TimelineCompany>{exp.company}</S.TimelineCompany>
                            <S.TimelineDescription>{exp.description}</S.TimelineDescription>

                            {exp.skills && (
                                <S.TimelineSkills>
                                    {exp.skills.map(skill => (
                                        <S.SkillTag key={skill}>{skill}</S.SkillTag>
                                    ))}
                                </S.TimelineSkills>
                            )}
                        </S.TimelineContent>
                    </S.TimelineItem>
                ))}
            </S.Timeline>
        </S.TimelineContainer>
    )
}