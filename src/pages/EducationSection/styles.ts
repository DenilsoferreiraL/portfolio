import styled from 'styled-components'
import { motion } from 'framer-motion'

export const EducationContainer = styled(motion.section)`
  padding: 6rem 1.5rem;
  background: ${({ theme }) => theme.colors.primary || '#f8fafc'};
  position: relative;
  width: 100%;
  margin-top: 2rem;
  border-radius: 50px 50px 0 0;
  max-width: 1400px;
  margin: 100px auto;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`

export const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 4rem;
  position: relative;
  font-weight: 700;
  display: inline-block;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`

export const TitleDecoration = styled.span`
  display: block;
  width: 80px;
  height: 4px;
  background: ${({ theme }) => theme.colors.accent};
  margin: 0.8rem auto 0;
  border-radius: 2px;
`

export const EducationGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

export const EducationCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBackground || '#fff'};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

export const EducationHeader = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`

export const EducationLogo = styled.div`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.primary};
  padding: 1.2rem;
  background: ${({ theme }) => theme.colors.primary}15;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 60px;
  min-height: 60px;

  @media (max-width: 768px) {
    
  }

  @media (max-width: 480px) {
    padding: 1rem;
    min-width: 50px;
    min-height: 50px;
  }
`

export const EducationYear = styled.span`
  display: block;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`

export const EducationDegree = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`

export const EducationInstitution = styled.h4`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

export const HighlightsTitle = styled.h5`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.primary};
  margin: 1.5rem 0 1rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

export const EducationHighlights = styled.ul`
  margin-bottom: 2rem;
  padding-left: 1rem;
`

export const HighlightItem = styled.li`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.8rem;
  position: relative;
  line-height: 1.6;
  font-size: 0.95rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

export const SkillsTitle = styled(HighlightsTitle)`
  margin-top: 2rem;
`

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 0.8rem;
  margin-top: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
`

export const SkillTag = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 0.8rem;
  background: ${({ theme }) => theme.colors.primary}10;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.primary}20;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary}15;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0.7rem;
    font-size: 0.8rem;
  }
`

export const TechIcon = styled.span`
  font-size: 1rem;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`