import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.section)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 8rem 2rem;
`;

export const Title = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3.125rem;
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
`;

export const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.75rem, 1fr));
  gap: 1.875rem;
  padding: 1.25rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 0.625rem;
  overflow: hidden;
  box-shadow: 0 0.3125rem 0.9375rem rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const ProjectImage = styled(motion.img)`
  width: 100%;
  height: 18rem;
  object-fit: cover;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.colors.border};
`;

export const ProjectContent = styled(motion.div)`
  padding: 1.25rem;
`;

export const ProjectTitle = styled(motion.h3)`
  font-size: 1.4rem;
  margin-bottom: 0.625rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ProjectDescription = styled(motion.p)`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 0.9375rem;
  font-size: 0.95rem;
`;

export const ProjectDate = styled(motion.span)`
  display: inline-block;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.3125rem 0.625rem;
  border-radius: 1.25rem;
  font-size: 0.8rem;
  font-weight: bold;
`;