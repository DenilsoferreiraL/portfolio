import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContainerSkills = styled(motion.section)`
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
  isolation: isolate;
  margin: 0px auto;
`;

export const ContentSkills = styled(motion.section)`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8rem 2rem;
    background: linear-gradient(
        135deg,
        ${({ theme }) => theme.colors.primary},
        ${({ theme }) => theme.colors.secondary}
    );
    box-shadow: -1px 7px 28px 0px rgba(115,115,115,0.34);
    -webkit-box-shadow: 5px 12px 32px 3px rgba(115,115,115,0.34);

    @media (max-width: 768px){
        width: 100%;
        padding: 6rem 1rem;
    }
`;

export const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 4rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: ${({ theme }) => theme.colors.accent};
  }
`;

export const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const SkillCard = styled(motion.div) <{ $isSelected?: boolean }>`
  padding: 1.5rem;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.cardBackground};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.1s ease;
  border: 1px solid ${({ theme }) => theme.colors.border};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

export const SkillContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const SkillIconWrapper = styled.div`
  font-size: 1.8rem;
  display: flex;
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;

export const SkillName = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

export const SkillExperience = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.5rem;
`;

export const SkillLevel = styled.div<{ $level: string }>`
  font-size: 0.8rem;
  padding: 0.3rem 0.6rem;
  border-radius: 20px;
  display: inline-block;
  margin-top: 0.5rem;
  font-weight: 500;
  background: ${({ $level, theme }) => {
    switch ($level) {
      case 'Iniciante': return theme.colors.info;
      case 'Intermediário': return theme.colors.warning;
      case 'Avançado': return theme.colors.success;
      case 'Especialista': return theme.colors.accent;
      default: return theme.colors.info;
    }
  }};
  color: white;
`;

export const ViewDetailsButton = styled.div`
  padding: 0.5rem 1rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 10px;
  font-size: 0.8rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
  }
`;

export const FloatingShapes = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
`;

export const SkillDetailModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  padding: 1rem;
  backdrop-filter: blur(5px);
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 16px;
  max-width: 600px;
  width: 100%;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  max-height: 80vh;
  overflow-y: auto;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const SkillIconWrapperLarge = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  padding: 1rem;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 12px;
`;

export const ModalTitle = styled.h3`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
`;

export const ModalBody = styled.div`
  margin-bottom: 2rem;
`;

export const SkillDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

export const ExperienceInfo = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;
`;

export const InfoLabel = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.3rem;
`;

export const InfoValue = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

export const ProjectsList = styled.ul`
  margin-top: 1rem;
  padding-left: 1.5rem;
`;

export const ProjectItem = styled.li`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
  position: relative;

  &::before {
    content: '•';
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

export const CloseIcon = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.text};
  }
  
  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  
  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.2s ease;
`;