'use client';

import * as S from './styles'

const softSkills = [
    {
        title: 'Comunicação Clara',
        description: 'Transmito ideias de forma objetiva, facilitando a colaboração entre equipes técnicas e não técnicas.',
    },
    {
        title: 'Proatividade',
        description: 'Antecipação de problemas e busca por soluções antes mesmo que sejam solicitadas.',
    },
    {
        title: 'Trabalho em Equipe',
        description: 'Atuação colaborativa com foco em resultados, respeitando as diferentes opiniões e competências.',
    },
    {
        title: 'Aprendizado Contínuo',
        description: 'Compromisso constante com a evolução técnica e comportamental.',
    },
    {
        title: 'Organização e Foco',
        description: 'Gerenciamento de tarefas e tempo com foco em entregas de qualidade dentro dos prazos.',
    },
];

export default function SoftSkillsSection() {
    return (
        <S.Wrapper
            id='soft-skills'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <S.Title>Habilidades Interpessoais</S.Title>
            <S.Subtitle>Competências comportamentais que impulsionam minha atuação profissional</S.Subtitle>

            <S.SkillsGrid>
                {softSkills.map((skill, index) => (
                    <S.SkillCard
                        key={skill.title}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <S.SkillTitle>{skill.title}</S.SkillTitle>
                        <S.SkillDescription>{skill.description}</S.SkillDescription>
                    </S.SkillCard>
                ))}
            </S.SkillsGrid>
        </S.Wrapper>
    );
}
