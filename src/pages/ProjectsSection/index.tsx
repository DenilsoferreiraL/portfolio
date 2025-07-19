'use client'

import * as S from './styles';
import driveshow from '../../../public/assets/driveshow.png';
import catalogshow from '../../../public/assets/catalogshow.png';
import type { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Image from 'next/image';

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
        description: "Catálogo digital completo e interativo para lojas de veículos de alto padrão.",
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
    },
    {
        id: 2,
        title: "CatalogShow",
        description: "Página institucional sobre a importância de um catálogo digital interativo para lojas de veículos premium.",
        image: catalogshow,
        date: "Junho 2025",
        url: "https://catalogshow.vercel.app/",
        githubUrl: "https://api.whatsapp.com/send?phone=5563992922509&text=Ol%C3%A1%2C%20tenho%20interesse%20em%20saber%20mais%20sobre%20o%20CatalogShow%20que%20vi%20em%20seu%20portf%C3%B3lio.",
        technologies: [
            "Next.js 13.5 (App Router)",
            "Tailwind Animate",
            "Framer Motion 11",
            "Lucide React (ícones)",
            "Radix UI (Tabs e Slot)",
            "React Intersection Observer",
        ],
        features: [
            "Apresentação dos diferenciais de um catálogo digital interativo",
            "Explicação sobre o impacto na experiência do cliente",
            "Demonstração de como o catálogo ajuda na geração de leads",
            "Animações suaves e interação fluída para maior imersão",
            "Design responsivo e adaptável a qualquer dispositivo"
        ]
    }


]

export function ProjectsSection({ title = "Autoria" }: ProjectsSectionProps) {
    return (
        <S.Container
            id='projects'
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
                                >
                                    <Image
                                        src={typeof project.image === "string" ? project.image : project.image.src}
                                        alt={project.title}
                                        layout="fill"
                                        objectFit="cover"
                                        priority
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <S.DetailHint>Clique para detalhes</S.DetailHint>
                                </S.ProjectImage>
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