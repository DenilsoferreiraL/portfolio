'use client'

import * as S from './styles';
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

export function ProjectsSection({ projects,
    title = "Autoria"
}: ProjectsSectionProps) {
    return (
        <S.Container>
            <S.Title>{title}</S.Title>
            <S.ProjectsGrid>
                {projects.map((project) => (
                    <S.ProjectCard key={project.id}>
                        <S.ProjectImage
                            src={project.imageUrl}
                            alt={project.title}
                            width={300}
                            height={200}
                        />
                        <S.ProjectContent>
                            <S.ProjectTitle>{project.title}</S.ProjectTitle>
                            <S.ProjectDescription>{project.description}</S.ProjectDescription>
                            <S.ProjectDate>{project.date}</S.ProjectDate>
                        </S.ProjectContent>
                    </S.ProjectCard>
                ))}
            </S.ProjectsGrid>
        </S.Container>
    );
};