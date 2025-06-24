'use client'

import * as S from './styles';
import driveshow from '../../../public/assets/driveshow.png';
import type { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

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
            duration: 0.5,
            ease: "easeOut"
        }
    }
}

const cardHover = {
    y: -5,
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
}

interface Project {
    id: number;
    title: string;
    description: string;
    detailedDescription: string;
    image: StaticImageData | string;
    date: string;
    url: string;
    githubUrl?: string;
    technologies: string[];
    features: string[];
}

interface ProjectsSectionProps {
    title?: string
}

const projectsData: Project[] = [
    {
        id: 1,
        title: "DriveShow",
        description: "Plataforma de exibição de veículos premium",
        detailedDescription: "Um showroom virtual completo com visualização 360° dos veículos, configuração personalizada e realidade aumentada.",
        image: driveshow,
        date: "Maio 2025",
        url: "https://driveshow.vercel.app/",
        githubUrl: "https://github.com/seu-usuario/driveshow",
        technologies: ["Next.js", "Three.js", "Tailwind CSS", "Framer Motion"],
        features: [
            "Visualização 360° dos veículos",
            "Configurador de modelos",
            "Realidade aumentada",
            "Sistema de agendamento de test-drive"
        ]
    },
    {
        id: 2,
        title: "DriveShow",
        description: "Plataforma de exibição de veículos premium",
        detailedDescription: "Um showroom virtual completo com visualização 360° dos veículos, configuração personalizada e realidade aumentada.",
        image: driveshow,
        date: "Maio 2025",
        url: "https://driveshow.vercel.app/",
        githubUrl: "https://github.com/seu-usuario/driveshow",
        technologies: ["Next.js", "Three.js", "Tailwind CSS", "Framer Motion"],
        features: [
            "Visualização 360° dos veículos",
            "Configurador de modelos",
            "Realidade aumentada",
            "Sistema de agendamento de test-drive"
        ]
    },
    {
        id: 3,
        title: "DriveShow",
        description: "Plataforma de exibição de veículos premium",
        detailedDescription: "Um showroom virtual completo com visualização 360° dos veículos, configuração personalizada e realidade aumentada.",
        image: driveshow,
        date: "Maio 2025",
        url: "https://driveshow.vercel.app/",
        githubUrl: "https://github.com/seu-usuario/driveshow",
        technologies: ["Next.js", "Three.js", "Tailwind CSS", "Framer Motion"],
        features: [
            "Visualização 360° dos veículos",
            "Configurador de modelos",
            "Realidade aumentada",
            "Sistema de agendamento de test-drive"
        ]
    },

]

export function ProjectsSection({ title = "Autoria" }: ProjectsSectionProps) {
    return (
        <S.Container
            id='projetos'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
        >
            <S.Title variants={itemVariants}>{title}</S.Title>
            <S.Subtitle variants={itemVariants}>Projetos selecionados com dedicação e expertise</S.Subtitle>

            <S.ProjectsGrid>
                {projectsData.map((project) => (
                    <S.ProjectCardWrapper key={project.id}>
                        <S.ProjectCard jectCard
                            variants={itemVariants}
                            whileHover={cardHover}
                            transition={{ duration: 0.3 }}
                        >
                            <S.ProjectImageContainer>
                                <S.ProjectImage
                                    src={typeof project.image === "string" ? project.image : project.image.src}
                                    alt={project.title}
                                    width={400}
                                    height={250}
                                />
                                <S.ProjectOverlay>
                                    <S.ProjectFeatures>
                                        {project.features.slice(0, 3).map((feature, index) => (
                                            <S.FeatureItem key={index}>
                                                <S.FeatureDot />
                                                {feature}
                                            </S.FeatureItem>
                                        ))}
                                    </S.ProjectFeatures>
                                </S.ProjectOverlay>
                            </S.ProjectImageContainer>

                            <S.ProjectContent>
                                <S.ProjectHeader>
                                    <S.ProjectTitle>{project.title}</S.ProjectTitle>
                                    <S.ProjectDate>{project.date}</S.ProjectDate>
                                </S.ProjectHeader>

                                <S.ProjectDescription>{project.description}</S.ProjectDescription>

                                <S.TechnologiesList>
                                    {project.technologies.map((tech, index) => (
                                        <S.TechnologyTag key={index}>{tech}</S.TechnologyTag>
                                    ))}
                                </S.TechnologiesList>

                                <S.ProjectActions>
                                    <Link href={project.url} target="_blank" rel="noopener noreferrer">
                                        <S.VisitButton>
                                            <FiExternalLink size={18} />
                                            Visitar
                                        </S.VisitButton>
                                    </Link>
                                    {project.githubUrl && (
                                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                            <S.GithubButton>
                                                <FiGithub size={18} />
                                                Código
                                            </S.GithubButton>
                                        </Link>
                                    )}
                                </S.ProjectActions>
                            </S.ProjectContent>
                        </S.ProjectCard>
                    </S.ProjectCardWrapper>
                ))}
            </S.ProjectsGrid>
        </S.Container>
    );
}