'use client'

import { useState, JSX } from 'react'
import * as S from './styles'
import { motion, AnimatePresence } from 'framer-motion'
import {
    SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiNextdotjs, SiFigma,
    SiGit, SiTailwindcss, SiStyledcomponents, SiGraphql, SiMongodb
} from 'react-icons/si'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FaServer, FaDatabase, FaMobile } from 'react-icons/fa'

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
            type: 'spring',
            stiffness: 100,
            damping: 15
        }
    }
}

const hoverVariants = {
    hover: {
        scale: 1.05,
        boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
        transition: { duration: 0.3 }
    }
}

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
    category: 'frontend' | 'backend' | 'design' | 'tools';
}

const skills: Skill[] = [
    {
        name: 'Next.js',
        years: 2,
        description: 'Criação de aplicações com SSR e SSG usando Next.js, otimizando performance e SEO.',
        projectsUsed: ['Catálogo de Produtos', 'Sistema de Tarefas'],
        level: 'Intermediário',
        category: 'frontend'
    },
    {
        name: 'React',
        years: 3,
        description: 'Desenvolvimento de interfaces dinâmicas com React.js e hooks, componetização e consumo de APIs.',
        projectsUsed: ['Catálogo de Produtos', 'Sistema de Tarefas'],
        level: 'Avançado',
        category: 'frontend'
    },
    {
        name: 'TypeScript',
        years: 3,
        description: 'Aplicação de tipagem estática para garantir segurança e manutenção de código em projetos front-end e back-end.',
        projectsUsed: ['Catálogo de Produtos', 'Sistema de Tarefas'],
        level: 'Intermediário',
        category: 'frontend'
    },
    {
        name: 'Node.js',
        years: 2,
        description: 'Criação de back-ends leves com Node.js e Fastify, incluindo validação de dados com Zod e autenticação JWT.',
        projectsUsed: ['API para Sistema de Tarefas'],
        level: 'Intermediário',
        category: 'backend'
    },
    {
        name: 'Git',
        years: 3,
        description: 'Versionamento de código e fluxo de trabalho com Git, utilizando GitHub e GitLab em projetos próprios e freelance.',
        level: 'Avançado',
        category: 'tools'
    },
    {
        name: 'Tailwind CSS',
        years: 2,
        description: 'Estilização rápida e responsiva com Tailwind CSS, focando em interfaces leves e práticas.',
        projectsUsed: ['Catálogo de Produtos', 'Sistema de Tarefas'],
        level: 'Intermediário',
        category: 'frontend'
    },
    {
        name: 'UI/UX Design',
        projects: 2,
        description: 'Criação de interfaces no Figma, aplicando princípios de UI/UX voltados para usabilidade e clareza.',
        projectsUsed: ['Protótipo do Catálogo de Produtos', 'Protótipo do Sistema de Tarefas'],
        level: 'Intermediário',
        category: 'design'
    }
];

const categoryColors = {
    frontend: '#3498db',
    backend: '#2ecc71',
    design: '#9b59b6',
    tools: '#f39c12'
}

export function SkillsSection() {
    const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)
    const [activeCategory, setActiveCategory] = useState<string | null>(null)

    const filteredSkills = activeCategory
        ? skills.filter(skill => skill.category === activeCategory)
        : skills

    return (
        <S.ContainerSkills
            id="skills"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
        >
            <S.ContentSkills>
                <S.SectionTitle variants={itemVariants}>Minhas Habilidades</S.SectionTitle>
                <S.SectionSubtitle>Conhecimentos e tecnologias que domino</S.SectionSubtitle>

                <S.CategoryFilter>
                    <S.FilterButton
                        $isActive={!activeCategory}
                        onClick={() => setActiveCategory(null)}
                    >
                        Todos
                    </S.FilterButton>
                    <S.FilterButton
                        $isActive={activeCategory === 'frontend'}
                        onClick={() => setActiveCategory('frontend')}
                        $color={categoryColors.frontend}
                    >
                        Frontend
                    </S.FilterButton>
                    <S.FilterButton
                        $isActive={activeCategory === 'backend'}
                        onClick={() => setActiveCategory('backend')}
                        $color={categoryColors.backend}
                    >
                        Backend
                    </S.FilterButton>
                    <S.FilterButton
                        $isActive={activeCategory === 'design'}
                        onClick={() => setActiveCategory('design')}
                        $color={categoryColors.design}
                    >
                        Design
                    </S.FilterButton>
                    <S.FilterButton
                        $isActive={activeCategory === 'tools'}
                        onClick={() => setActiveCategory('tools')}
                        $color={categoryColors.tools}
                    >
                        Ferramentas
                    </S.FilterButton>
                </S.CategoryFilter>

                <S.SkillsGrid>
                    {filteredSkills.map((skill, index) => (
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
                                $category={skill.category}
                            >
                                <S.SkillIconWrapper $category={skill.category}>
                                    {skillIcons[skill.name] || <SiJavascript />}
                                </S.SkillIconWrapper>
                                <S.SkillContent>
                                    <S.SkillName>{skill.name}</S.SkillName>
                                    <S.SkillCategory $category={skill.category}>
                                        {skill.category === 'frontend' && 'Frontend'}
                                        {skill.category === 'backend' && 'Backend'}
                                        {skill.category === 'design' && 'Design'}
                                        {skill.category === 'tools' && 'Ferramentas'}
                                    </S.SkillCategory>

                                    <S.SkillStats>
                                        {skill.years && (
                                            <S.SkillStat>
                                                <S.StatIcon>📅</S.StatIcon>
                                                <S.StatValue>{skill.years}+ {skill.years > 1 ? 'anos' : 'ano'}</S.StatValue>
                                            </S.SkillStat>
                                        )}
                                        {skill.projects && !skill.years && (
                                            <S.SkillStat>
                                                <S.StatIcon>📂</S.StatIcon>
                                                <S.StatValue>{skill.projects}+ projetos</S.StatValue>
                                            </S.SkillStat>
                                        )}
                                    </S.SkillStats>
                                    <S.SkillContentFooter>
                                        <S.SkillLevel $level={skill.level}>{skill.level}</S.SkillLevel>
                                        <S.ButtonDetail>Saiba mais <MdOutlineKeyboardDoubleArrowRight size={16} /></S.ButtonDetail>
                                    </S.SkillContentFooter>
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
                                <S.ModalCloseButton onClick={() => setSelectedSkill(null)}>
                                    ✕
                                </S.ModalCloseButton>

                                <S.ModalHeader>
                                    <S.SkillIconWrapperLarge $category={selectedSkill.category}>
                                        {skillIcons[selectedSkill.name] || <SiJavascript />}
                                    </S.SkillIconWrapperLarge>
                                    <div>
                                        <S.ModalTitle>{selectedSkill.name}</S.ModalTitle>
                                        <S.SkillCategory $category={selectedSkill.category}>
                                            {selectedSkill.category === 'frontend' && 'Frontend'}
                                            {selectedSkill.category === 'backend' && 'Backend'}
                                            {selectedSkill.category === 'design' && 'Design'}
                                            {selectedSkill.category === 'tools' && 'Ferramentas'}
                                        </S.SkillCategory>
                                    </div>
                                </S.ModalHeader>

                                <S.ModalBody>
                                    <S.SkillDescription>{selectedSkill.description}</S.SkillDescription>

                                    <S.ExperienceContainer>
                                        <S.ExperienceInfo>
                                            <S.ExperienceCard>
                                                <S.InfoLabel>Nível</S.InfoLabel>
                                                <S.SkillLevel $level={selectedSkill.level}>
                                                    {selectedSkill.level}
                                                </S.SkillLevel>
                                            </S.ExperienceCard>

                                            {selectedSkill.years && (
                                                <S.ExperienceCard>
                                                    <S.InfoLabel>Experiência</S.InfoLabel>
                                                    <S.InfoValue>
                                                        {selectedSkill.years}+ {selectedSkill.years > 1 ? 'anos' : 'ano'}
                                                    </S.InfoValue>
                                                </S.ExperienceCard>
                                            )}
                                            {selectedSkill.projects && !selectedSkill.years && (
                                                <S.ExperienceCard>
                                                    <S.InfoLabel>Projetos</S.InfoLabel>
                                                    <S.InfoValue>{selectedSkill.projects}+ realizados</S.InfoValue>
                                                </S.ExperienceCard>
                                            )}
                                        </S.ExperienceInfo>

                                        {selectedSkill.projectsUsed && (
                                            <S.ProjectsContainer>
                                                <S.InfoLabel>Projetos relevantes:</S.InfoLabel>
                                                <S.ProjectsList>
                                                    {selectedSkill.projectsUsed.map((project, i) => (
                                                        <S.ProjectItem key={i}>
                                                            <S.ProjectBullet $category={selectedSkill.category} />
                                                            {project}
                                                        </S.ProjectItem>
                                                    ))}
                                                </S.ProjectsList>
                                            </S.ProjectsContainer>
                                        )}
                                    </S.ExperienceContainer>
                                </S.ModalBody>
                            </S.ModalContent>
                        </S.SkillDetailModal>
                    )}
                </AnimatePresence>
            </S.ContentSkills>
        </S.ContainerSkills>
    )
}