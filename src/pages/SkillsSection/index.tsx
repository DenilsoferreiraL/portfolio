'use client'

import { JSX, useState, useMemo } from 'react'
import * as S from './styles'
import { motion, AnimatePresence } from 'framer-motion'
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNodedotjs,
    SiNextdotjs,
    SiFigma,
    SiGit,
    SiTailwindcss,
    SiStyledcomponents,
    SiGraphql,
    SiMongodb
} from 'react-icons/si'
import { FaServer, FaDatabase, FaMobile } from 'react-icons/fa'

// Animations
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
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

const bubbleVariants = {
    hidden: { opacity: 0 },
    visible: (delay: number) => ({
        opacity: [0, 0.3, 0.25],
        transition: {
            delay,
            duration: 2,
            ease: "easeInOut"
        }
    }),
    float: {
        x: ["0%", `${Math.random() * 30 - 15}%`],
        y: ["0%", `${Math.random() * 30 - 15}%`],
        transition: {
            duration: 40,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "linear"
        }
    }
}

// Mapeamento de ícones
const skillIcons: Record<string, JSX.Element> = {
    'JavaScript': <SiJavascript />,
    'TypeScript': <SiTypescript />,
    'React': <SiReact />,
    'Node.js': <SiNodedotjs />,
    'Next.js': <SiNextdotjs />,
    'UI/UX Design': <SiFigma />,
    'Git': <SiGit />,
    'Tailwind CSS': <SiTailwindcss />,
    'Styled Components': <SiStyledcomponents />,
    'GraphQL': <SiGraphql />,
    'MongoDB': <SiMongodb />,
    'Backend': <FaServer />,
    'Database': <FaDatabase />,
    'Mobile': <FaMobile />
}

interface Skill {
    name: string;
    years?: number;
    projects?: number;
    description: string;
    projectsUsed?: string[];
    level: 'Iniciante' | 'Intermediário' | 'Avançado' | 'Especialista';
}

interface SkillsSectionProps {
    title?: string
}

const skills: Skill[] = [
    {
        name: 'Next.js',
        years: 2,
        description: 'Criação de aplicações SSR e SSG com Next.js para melhor performance e SEO.',
        projectsUsed: ['Site Institucional', 'Blog Pessoal', 'Landing Page'],
        level: 'Intermediário'
    },
    {
        name: 'React',
        years: 3,
        description: 'Criação de interfaces de usuário reativas e componentes reutilizáveis com React.js e hooks.',
        projectsUsed: ['Dashboard Admin', 'E-commerce', 'App de Notícias'],
        level: 'Avançado'
    },
    {
        name: 'TypeScript',
        years: 3,
        description: 'Desenvolvimento de aplicações tipadas com TypeScript para maior segurança e manutenibilidade do código.',
        projectsUsed: ['Projeto X', 'Sistema Y', 'Plataforma Z'],
        level: 'Avançado'
    },
    {
        name: 'Node.js',
        years: 2,
        description: 'Desenvolvimento de APIs RESTful e aplicações server-side com Node.js e Express.',
        projectsUsed: ['API de Pagamentos', 'Sistema de Autenticação'],
        level: 'Intermediário'
    },
    {
        name: 'Git',
        years: 3,
        description: 'Controle de versão e trabalho em equipe utilizando Git e plataformas como GitHub e GitLab.',
        level: 'Avançado'
    },
    {
        name: 'Tailwind CSS',
        years: 2,
        description: 'Estilização rápida e responsiva utilizando a abordagem utility-first do Tailwind CSS.',
        level: 'Intermediário'
    },
    {
        name: 'UI/UX Design',
        projects: 2,
        description: 'Design de interfaces focadas na experiência do usuário com prototipação no Figma.',
        projectsUsed: ['Redesign App Mobile', 'Dashboard Analytics'],
        level: 'Intermediário'
    },
]

export function SkillsSection({
    title = "Minhas Habilidades"
}: SkillsSectionProps) {
    const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)

    const bubbles = useMemo(() => {
        return Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            size: Math.random() * 200 + 80,
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: Math.random() * 1 + 1
        }))
    }, [])

    return (
        <S.ContainerSkills id='habilidade'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}>

            <S.FloatingShapes>
                {bubbles.map((bubble, i) => (
                    <motion.div
                        key={`bubble-${bubble.id}`}
                        custom={i * 0.2}
                        initial="hidden"
                        animate={["visible", "float"]}
                        variants={bubbleVariants}
                        style={{
                            position: 'absolute',
                            borderRadius: '50%',
                            background: 'rgba(255, 255, 255, 0.59)',
                            width: `${bubble.size}px`,
                            height: `${bubble.size}px`,
                            left: `${bubble.x}%`,
                            top: `${bubble.y}%`,
                            filter: 'blur(1px)',
                            willChange: 'transform'
                        }}
                    />
                ))}
            </S.FloatingShapes>

            <S.ContentSkills>
                <S.SectionTitle variants={itemVariants}>{title}</S.SectionTitle>

                <S.SkillsGrid>
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            variants={itemVariants}
                            whileHover="hover"
                            custom={index}
                        >
                            <S.SkillCard
                                variants={hoverVariants}
                                $isSelected={selectedSkill?.name === skill.name}
                                onClick={() => setSelectedSkill(skill)}
                            >
                                <S.SkillIconWrapper>
                                    {skillIcons[skill.name] || <SiJavascript />}
                                </S.SkillIconWrapper>
                                <S.SkillContent>
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
                                    <S.SkillLevel $level={skill.level}>
                                        {skill.level}
                                    </S.SkillLevel>
                                    <S.ViewDetailsButton>
                                        Ver detalhes
                                    </S.ViewDetailsButton>
                                </S.SkillContent>
                            </S.SkillCard>
                        </motion.div>
                    ))}
                </S.SkillsGrid>

                <AnimatePresence>
                    {selectedSkill && (
                        <S.SkillDetailModal
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            onClick={() => setSelectedSkill(null)}
                        >
                            <S.ModalContent onClick={(e) => e.stopPropagation()}>
                                <S.ModalCloseButton
                                    onClick={() => setSelectedSkill(null)}
                                    aria-label="Fechar modal"
                                >
                                    <S.CloseIcon />
                                </S.ModalCloseButton>

                                <S.ModalHeader>
                                    <S.SkillIconWrapperLarge>
                                        {skillIcons[selectedSkill.name] || <SiJavascript />}
                                    </S.SkillIconWrapperLarge>
                                    <div>
                                        <S.ModalTitle>{selectedSkill.name}</S.ModalTitle>
                                        <S.SkillLevel $level={selectedSkill.level}>
                                            {selectedSkill.level}
                                        </S.SkillLevel>
                                    </div>
                                </S.ModalHeader>

                                <S.ModalBody>
                                    <S.SkillDescription>{selectedSkill.description}</S.SkillDescription>

                                    <S.ExperienceInfo>
                                        {selectedSkill.years && (
                                            <div>
                                                <S.InfoLabel>Experiência</S.InfoLabel>
                                                <S.InfoValue>{selectedSkill.years}+ {selectedSkill.years > 1 ? 'anos' : 'ano'}</S.InfoValue>
                                            </div>
                                        )}
                                        {selectedSkill.projects && !selectedSkill.years && (
                                            <div>
                                                <S.InfoLabel>Projetos</S.InfoLabel>
                                                <S.InfoValue>{selectedSkill.projects}+ realizados</S.InfoValue>
                                            </div>
                                        )}
                                    </S.ExperienceInfo>

                                    {selectedSkill.projectsUsed && (
                                        <>
                                            <S.InfoLabel>Projetos relevantes:</S.InfoLabel>
                                            <S.ProjectsList>
                                                {selectedSkill.projectsUsed.map((project, i) => (
                                                    <S.ProjectItem key={i}>{project}</S.ProjectItem>
                                                ))}
                                            </S.ProjectsList>
                                        </>
                                    )}
                                </S.ModalBody>
                            </S.ModalContent>
                        </S.SkillDetailModal>
                    )}
                </AnimatePresence>
            </S.ContentSkills>
        </S.ContainerSkills>
    )
}