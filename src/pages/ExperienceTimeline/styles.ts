import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const TimelineContainer = styled(motion.section)`
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  max-width: 1400px;
  margin: 100px auto;
`

export const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.8rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 5rem;
  position: relative;
  font-weight: 700;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: ${({ theme }) => theme.colors.accent};
    border-radius: 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.2rem;
    margin-bottom: 3rem;
  }
`

export const Timeline = styled(motion.ul)`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  list-style: none;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 4px;
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.primary} 0%,
      ${({ theme }) => theme.colors.primary} 80%,
      transparent 100%
    );
    transform: translateX(-50%);
    z-index: 1;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      left: 40px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: 0 ;
    }

    
  }
`

export const TimelineItem = styled(motion.li) <{ $isEven: boolean }>`
  position: relative;
  margin-bottom: 5rem;
  width: 100%;
  clear: both;

  ${({ $isEven }) => $isEven
    ? css`
      padding-left: 50%;
      text-align: left;
      padding-right: 5%;
    `
    : css`
      padding-right: 50%;
      text-align: right;
      padding-left: 5%;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-left: 5px !important;
    padding-right: 0px !important;
    text-align: left !important;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

export const TimelineDot = styled(motion.div)`
  position: absolute;
  top: 20px;
  left: 47.8%;
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.background};
  border: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 6px ${({ theme }) => theme.colors.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    left: -14px;
    width: 45px;
    height: 45px;
  }
`

export const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
`

export const TimelineContent = styled(motion.div)`
  position: relative;
  padding: 2.5rem;
  margin: 10px;
  background: ${({ theme }) => theme.colors.cardBackground || '#fff'};
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => theme.colors.border};

  &::before {
    content: '';
    position: absolute;
    top: 30px;
    width: 0;
    height: 0;
    border-style: solid;
    z-index: 1;

    ${({ theme }) => {
    const borderColor = theme.colors.cardBackground || '#fff'
    return css`
        ${TimelineItem}:nth-child(odd) & {
          right: -15px;
          border-width: 12px 0 12px 15px;
          border-color: transparent transparent transparent ${borderColor};
        }
        
        ${TimelineItem}:nth-child(even) & {
          left: -15px;
          border-width: 12px 15px 12px 0;
          border-color: transparent ${borderColor} transparent transparent;
        }
        
        @media (max-width: ${theme.breakpoints.tablet}) {
          right: auto !important;
          left: 15px !important;
          border-width: 12px 15px 12px 0 !important;
          border-color: transparent ${borderColor} transparent transparent !important;
        }
      `
  }}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1.8rem;
  }
`

export const TimelinePeriod = styled(motion.span)`
  display: block;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  font-size: 1rem;
  opacity: 0.9;
`

export const TimelineRole = styled(motion.h3)`
  font-size: 1.6rem;
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  display: inline-block;
  font-weight: 700;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.4rem;
  }
`

export const TimelineCompany = styled(motion.h4)`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 500;
`

export const TimelineDescription = styled(motion.div)`
  margin-bottom: 2rem;
`

export const DescriptionItem = styled(motion.p)`
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
  position: relative;
  padding-left: 1.5rem;
  font-size: 1.05rem;
`

export const BulletPoint = styled.span`
  position: absolute;
  left: 0;
  top: 0.7rem;
  width: 8px;
  height: 8px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
`

export const AchievementsContainer = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
`

export const AchievementsTitle = styled.h5`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
`

export const AchievementItem = styled(motion.p)`
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.8rem;
  position: relative;
  padding-left: 1.8rem;
  font-size: 0.95rem;
`

export const AchievementIcon = styled.span`
  position: absolute;
  left: 0;
  top: 0.4rem;
  width: 12px;
  height: 12px;
  background: ${({ theme }) => theme.colors.accent};
  border-radius: 2px;
  transform: rotate(45deg);
`

export const TimelineSkills = styled(motion.div)`
  margin-top: 1.5rem;
`

export const SkillsTitle = styled.h5`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
`

export const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`

export const SkillTag = styled(motion.span)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.primary}10;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.primary}20;
  backdrop-filter: blur(5px);
`