'use client'

import * as S from './styles';
import showroom from '../../../public/assets/showroom.png';
import type { StaticImageData } from 'next/image';
import Link from 'next/link';

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
}

interface ProjectsSectionProps {
    title?: string
}

const projectsData: Project[] = [
    {
        id: 1,
        title: "DriveShow",
        description: "Description of project 1",
        image: showroom,
        date: "Maio 2025",
        url: "https://driveshow.vercel.app/"
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

            <S.ProjectsGrid>
                {projectsData.map((project) => (
                    <S.ProjectCard
                        key={project.id}
                        variants={itemVariants}
                        whileHover={cardHover}
                        transition={{ duration: 0.3 }}
                    >
                        <S.ProjectImage
                            src={typeof project.image === "string" ? project.image : project.image.src}
                            alt={project.title}
                            width={300}
                            height={200}
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                        />

                        <S.ProjectContent>
                            <S.ProjectTitle>{project.title}</S.ProjectTitle>
                            <S.ProjectDescription>{project.description}</S.ProjectDescription>
                            <S.ButtonContainer>
                                <S.ProjectDate
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    {project.date}
                                </S.ProjectDate>
                                {/* Botão para acessar o site */}

                                <Link href={project.url} target="_blank" rel="noopener noreferrer">
                                    <S.VisitButton title={`Acessar ${project.title}`} aria-label={`Acessar ${project.title}`}>
                                        Acessar
                                    </S.VisitButton>
                                </Link>
                            </S.ButtonContainer>


                        </S.ProjectContent>
                    </S.ProjectCard>
                ))}
            </S.ProjectsGrid>
        </S.Container>
    );
}