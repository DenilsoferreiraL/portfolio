import styled from 'styled-components'
import { motion } from 'framer-motion'

export const EducationContainer = styled(motion.section)`
  padding: 5rem 2rem;
  background: ${({ theme }) => theme.colors.background || '#f9f9f9'};
  position: relative;
  overflow: hidden;
`

export const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme.colors.primary};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s ease;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`

export const EducationGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
`

export const EducationCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background || '#FFFFFF'};
  padding: 2rem;
  border-radius: 0.8rem;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0) 100%);
    z-index: 0;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`

export const EducationYear = styled(motion.span)`
  display: inline-block;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.8rem;
  padding: 0.3rem 0.8rem;
  background: rgba(0,0,0,0.03);
  border-radius: 20px;
  font-size: 0.9rem;
`

export const EducationDegree = styled(motion.h3)`
  font-size: 1.4rem;
  margin-bottom: 0.7rem;
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  z-index: 1;
`

export const EducationInstitution = styled(motion.h4)`
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 500;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '▹';
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.2rem;
  }
`

export const EducationDescription = styled(motion.p)`
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.9;
  position: relative;
  z-index: 1;
`