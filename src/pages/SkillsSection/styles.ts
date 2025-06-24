import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContainerSkills = styled(motion.section)`
display: flex;
width: 100%;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 60vh;
`;
export const ContentSkills = styled(motion.section)`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 22rem 2rem;
background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
    box-shadow: -1px 7px 28px 0px rgba(115,115,115,0.34);
    -webkit-box-shadow: 5px 12px 32px 3px rgba(115,115,115,0.34);

    @media (max-width: 768px){
        width: 100%;
        padding: 12rem 1rem;
    }
`;

export const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.textLight};
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