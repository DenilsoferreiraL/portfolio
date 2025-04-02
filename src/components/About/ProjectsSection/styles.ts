import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3.125rem;
  color: ${({ theme }) => theme.colors.primary};
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 5rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.colors.accent};
    margin: 0.9375rem auto;
    border-radius: 0.125rem;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.75rem, 1fr));
  gap: 1.875rem;
  padding: 1.25rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 0.625rem;
  overflow: hidden;
  box-shadow: 0 0.3125rem 0.9375rem rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  transform-style: preserve-3d;
  perspective: 1000px;

  &:hover {
    transform: translateY(-0.625rem) rotateX(5deg);
    box-shadow: 0 0.9375rem 1.875rem rgba(0, 0, 0, 0.2);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 12.5rem;
  object-fit: cover;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.colors.border};
`;

export const ProjectContent = styled.div`
  padding: 1.25rem;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.625rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 0.9375rem;
  font-size: 0.95rem;
`;

export const ProjectDate = styled.span`
  display: inline-block;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.3125rem 0.625rem;
  border-radius: 1.25rem;
  font-size: 0.8rem;
  font-weight: bold;
`;