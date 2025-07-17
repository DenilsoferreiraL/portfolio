import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContainerSkills = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 2rem;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.backgroundAlternative};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ContentSkills = styled(motion.section)`
  width: 100%;
  max-width: 1200px;
`;

export const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 700;
`;

export const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const CategoryFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  justify-content: center;
  margin-bottom: 2.5rem;
`;

export const FilterButton = styled.button<{ $isActive: boolean; $color?: string }>`
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  border: none;
  background: ${({ $isActive, $color }) =>
    $isActive ? ($color || '#2c3e50') : '#f0f0f0'};
  color: ${({ $isActive }) => $isActive ? '#fff' : '#666'};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background: ${({ $color }) => $color || '#2c3e50'};
    color: #fff;
  }
`;

export const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`;

export const SkillCard = styled(motion.div) <{
  $isSelected?: boolean;
  $category: string;
}>`
  background: ${({ theme }) => theme.colors.cardBackground};
  padding: 1.8rem;
  border-radius: 12px;
  border-left: 4px solid ${({ $category }) =>
    $category === 'frontend' ? '#3498db' :
      $category === 'backend' ? '#2ecc71' :
        $category === 'design' ? '#9b59b6' : '#f39c12'};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  }
`;

export const SkillIconWrapper = styled.div<{ $category: string }>`
  font-size: 2.2rem;
  margin-bottom: 1.2rem;
  color: ${({ $category }) =>
    $category === 'frontend' ? '#3498db' :
      $category === 'backend' ? '#2ecc71' :
        $category === 'design' ? '#9b59b6' : '#f39c12'};
`;

export const SkillContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  flex-grow: 1;
`;

export const SkillName = styled.h3`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
`;

export const SkillCategory = styled.span<{ $category: string }>`
  font-size: 0.8rem;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  font-weight: 500;
  background: ${({ $category }) =>
    $category === 'frontend' ? 'rgba(52, 152, 219, 0.1)' :
      $category === 'backend' ? 'rgba(46, 204, 113, 0.1)' :
        $category === 'design' ? 'rgba(155, 89, 182, 0.1)' : 'rgba(243, 156, 18, 0.1)'};
  color: ${({ $category }) =>
    $category === 'frontend' ? '#3498db' :
      $category === 'backend' ? '#2ecc71' :
        $category === 'design' ? '#9b59b6' : '#f39c12'};
  align-self: flex-start;
`;

export const SkillStats = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const SkillStat = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const StatIcon = styled.span`
  font-size: 0.9rem;
`;

export const StatValue = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const SkillLevel = styled.span<{ $level: string }>`
  font-size: 0.8rem;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  font-weight: 500;
  background: ${({ $level }) => {
    switch ($level) {
      case 'Iniciante': return 'rgba(33, 150, 243, 0.1)';
      case 'Intermediário': return 'rgba(255, 152, 0, 0.1)';
      case 'Avançado': return 'rgba(76, 175, 80, 0.1)';
      case 'Especialista': return 'rgba(233, 30, 99, 0.1)';
      default: return 'rgba(33, 150, 243, 0.1)';
    }
  }};
  color: ${({ $level }) => {
    switch ($level) {
      case 'Iniciante': return '#2196f3';
      case 'Intermediário': return '#ff9800';
      case 'Avançado': return '#4caf50';
      case 'Especialista': return '#e91e63';
      default: return '#2196f3';
    }
  }};
  align-self: flex-start;
  margin-top: auto;
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
  z-index: 999;
  padding: 1rem;
  backdrop-filter: blur(5px);
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  padding: 2.5rem;
  border-radius: 16px;
  max-width: 650px;
  width: 100%;
  color: ${({ theme }) => theme.colors.textPrimary};
  position: relative;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const SkillIconWrapperLarge = styled.div<{ $category: string }>`
  font-size: 3.5rem;
  color: ${({ $category }) =>
    $category === 'frontend' ? '#3498db' :
      $category === 'backend' ? '#2ecc71' :
        $category === 'design' ? '#9b59b6' : '#f39c12'};
`;

export const ModalTitle = styled.h3`
  font-size: 1.8rem;
  margin: 0 0 0.3rem 0;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ModalBody = styled.div`
  margin-top: 1rem;
`;

export const SkillDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ExperienceInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

export const ExperienceCard = styled.div`
  background: ${({ theme }) => theme.colors.backgroundAlternative};
  padding: 1rem 1.5rem;
  border-radius: 10px;
  min-width: 120px;
`;

export const InfoLabel = styled.div`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 0.3rem;
`;

export const InfoValue = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ProjectsContainer = styled.div`
  margin-top: 0.5rem;
`;

export const ProjectsList = styled.ul`
  margin-top: 0.8rem;
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const ProjectItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ProjectBullet = styled.span<{ $category: string }>`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ $category }) =>
    $category === 'frontend' ? '#3498db' :
      $category === 'backend' ? '#2ecc71' :
        $category === 'design' ? '#9b59b6' : '#f39c12'};
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;