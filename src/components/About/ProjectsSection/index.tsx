'use client'

import React from 'react';
import * as S from './styles';

// 1. Definir a interface do projeto
interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    date: string;
}

interface ProjectsSectionProps {
    projects: Project[];
}

// 3. Implementar o componente tipado
export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
    return (
        <S.Container>
            <S.Title>Meus Projetos</S.Title>
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