'use client'

import * as S from './styles';

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
    imageUrl: string;
    date: string;
}

interface ProjectsSectionProps {
    projects: Project[];
    title?: string
}

export function ProjectsSection({ projects, title = "Autoria" }: ProjectsSectionProps) {
    return (
        <S.Container
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
        >
            <S.Title variants={itemVariants}>{title}</S.Title>

            <S.ProjectsGrid>
                {projects.map((project) => (
                    <S.ProjectCard
                        key={project.id}
                        variants={itemVariants}
                        whileHover={cardHover}
                        transition={{ duration: 0.3 }}
                    >
                        <S.ProjectImage
                            src={project.imageUrl}
                            alt={project.title}
                            width={300}
                            height={200}
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                        />

                        <S.ProjectContent>
                            <S.ProjectTitle>{project.title}</S.ProjectTitle>
                            <S.ProjectDescription>{project.description}</S.ProjectDescription>
                            <S.ProjectDate
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                {project.date}
                            </S.ProjectDate>
                        </S.ProjectContent>
                    </S.ProjectCard>
                ))}
            </S.ProjectsGrid>
        </S.Container>
    );
}