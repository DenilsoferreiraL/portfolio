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
        description: "Plataforma imersiva para exibição de veículos de luxo com tecnologia web avançada",
        detailedDescription: "Solução completa para concessionárias premium, oferecendo experiência de visualização 360° interativa, configurador de veículos em tempo real e integração com realidade aumentada. Desenvolvido para aumentar engajamento e conversões através de uma experiência de usuário cinematográfica.",
        image: driveshow,
        date: "Maio 2025",
        url: "https://driveshow.vercel.app/",
        githubUrl: "https://api.whatsapp.com/send?phone=5563992922509&text=Ol%C3%A1%2C%20tenho%20interesse%20em%20saber%20mais%20sobre%20o%20projeto%20DriveShow%20que%20vi%20em%20seu%20portf%C3%B3lio.",
        technologies: [
            "Next.js 14 (App Router)",
            "Tailwind CSS",
            "Framer Motion",
            "TypeScript",
            "Zod (Validação)",
            "React Hook Form (Formulários avançados)",
            "Recharts (Dashboards)"
        ],
        features: [
            "Sistema de agendamento de test drives",
            "Filtro avançado de veículos",
            "Animações fluidas e microinterações"
        ]
    }

]

export function ProjectsSection({ title = "Autoria" }: ProjectsSectionProps) {
    return (
        <S.Container
            id='autoria'
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
                        <S.ProjectCard
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
                                                Solicitar código
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