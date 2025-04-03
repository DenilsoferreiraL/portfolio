import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SkillsContainer = styled(motion.section)`
  padding: 5rem 2rem;
  background: ${({ theme }) => theme.colors.background || '#ffffff'};
`;

export const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 4rem;
  position: relative;

`;

export const SkillsCloud = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SkillPill = styled(motion.div)`
  padding: 1rem 1.5rem;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  gap: 0.8rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

export const SkillIconWrapper = styled(motion.div)`
  font-size: 1.5rem;
  display: flex;
  color: ${({ theme }) => theme.colors.primary};
`;

export const SkillName = styled(motion.h3)`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  z-index: 2;
`;

export const SkillExperience = styled(motion.div)`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-style: italic;
  margin-top: 0.3rem;
`;