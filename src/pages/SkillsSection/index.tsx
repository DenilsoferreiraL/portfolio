'use client'

import * as S from './styles'
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNodedotjs,
    SiNextdotjs,
    SiFigma
} from 'react-icons/si'

// Animations (mantidas iguais)
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
}

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
}

const hoverVariants = {
    hover: {
        y: -5,
        boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
        transition: { duration: 0.3 }
    }
}

// Mapeamento de ícones
const skillIcons: Record<string, JSX.Element> = {
    'JavaScript': <SiJavascript />,
    'TypeScript': <SiTypescript />,
    'React': <SiReact />,
    'Node.js': <SiNodedotjs />,
    'Next.js': <SiNextdotjs />,
    'UI/UX Design': <SiFigma />
}

interface Skill {
    name: string
    years?: number
    projects?: number
}

interface SkillsSectionProps {
    skills: Skill[]
    title?: string
}

export function SkillsSection({
    skills,
    title = "Habilidades Técnicas"
}: SkillsSectionProps) {
    return (
        <S.SkillsContainer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <S.SectionTitle variants={itemVariants}>{title}</S.SectionTitle>

            <S.SkillsCloud>
                {skills.map((skill) => (
                    <S.SkillPill
                        key={skill.name}
                        whileHover="hover"
                        variants={hoverVariants}
                    >
                        <S.SkillIconWrapper>
                            {skillIcons[skill.name] || <SiJavascript />}
                        </S.SkillIconWrapper>
                        <div>
                            <S.SkillName>{skill.name}</S.SkillName>
                            {skill.years && (
                                <S.SkillExperience>
                                    {skill.years}+ {skill.years > 1 ? 'anos' : 'ano'}
                                </S.SkillExperience>
                            )}
                            {skill.projects && !skill.years && (
                                <S.SkillExperience>
                                    {skill.projects}+ projetos
                                </S.SkillExperience>
                            )}
                        </div>
                    </S.SkillPill>
                ))}
            </S.SkillsCloud>
        </S.SkillsContainer>
    )
}