'use client'

import * as S from './styles'

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
        y: -1,
        boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
        transition: { duration: 0.1, ease: "easeOut" }
    }
}

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
    title = "Cronologia"
}: ExperienceTimeLineProps) {
    return (
        <S.TimelineContainer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <S.SectionTitle
                variants={itemVariants}
            >
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
                        <S.TimelineDot variants={dotVariants} />

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
                                {exp.description}
                            </S.TimelineDescription>

                            {exp.skills && (
                                <S.TimelineSkills>
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
                                </S.TimelineSkills>
                            )}
                        </S.TimelineContent>
                    </S.TimelineItem>
                ))}
            </S.Timeline>
        </S.TimelineContainer>
    )
}