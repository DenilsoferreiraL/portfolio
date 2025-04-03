import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const TimelineContainer = styled(motion.section)`
  padding: 5rem 1rem;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
`

export const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 4rem;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`

export const Timeline = styled(motion.ul)`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  list-style: none;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 3px;
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.primary} 0%,
      ${({ theme }) => theme.colors.primary} 80%,
      transparent 100%
    );
    transform: translateX(-50%);

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      left: 30px;
    }
  }
`

export const TimelineItem = styled(motion.li) <{ $isEven: boolean }>`
  position: relative;
  margin-bottom: 4rem;
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
    padding-left: 70px !important;
    padding-right: 20px !important;
    text-align: left !important;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

export const TimelineDot = styled(motion.div)`
  position: absolute;
  top: 20px;
  left: 49%;
  width: 22px;
  height: 22px;
  background: ${({ theme }) => theme.colors.background};
  border: 4px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 2;
  box-shadow: 0 0 0 6px rgba(0,0,0,0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    left: 20px;
  }
`

export const TimelineContent = styled(motion.div)`
  position: relative;
  padding: 2rem;
  margin: 10px;
  background: ${({ theme }) => theme.colors.background || '#fff'};
  border-radius: 8px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.08);
  transition: all 0.1s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    width: 0;
    height: 0;
    border-style: solid;
    z-index: 1;

  

    ${({ theme }) => {
    const borderColor = theme.colors.background || '#fff'
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
`

export const TimelinePeriod = styled(motion.span)`
  display: block;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.8rem;
  font-size: 0.95rem;
`

export const TimelineRole = styled(motion.h3)`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  display: inline-block;

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
    font-size: 1.3rem;
  }
`

export const TimelineCompany = styled(motion.h4)`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 500;
`

export const TimelineDescription = styled(motion.p)`
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.9;
  margin-bottom: 1.5rem;
`

export const TimelineSkills = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.2rem;
`

export const SkillTag = styled(motion.span)`
  display: inline-block;
  padding: 0.3rem 0.9rem;
  background: ${({ theme }) => theme.colors.primary}15;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.primary}30;
`