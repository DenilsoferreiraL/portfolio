// src/components/About/ExperienceTimeline/styles.ts
import styled, { css } from 'styled-components'

export const TimelineContainer = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
`

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`

export const Timeline = styled.ul`
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
    width: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transform: translateX(-50%);

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      left: 31px;
    }
  }
`

export const TimelineItem = styled.li<{ $isEven: boolean }>`
  position: relative;
  margin-bottom: 3rem;
  width: 100%;
  clear: both;

  ${({ $isEven }) => $isEven
    ? css`
      padding-left: 50%;
      text-align: left;
    `
    : css`
      padding-right: 50%;
      text-align: right;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-left: 70px !important;
    padding-right: 0 !important;
    text-align: left !important;
  }
`

export const TimelineDot = styled.div`
  position: absolute;
  top: 30px;
  left: 50%;
  width: 20px;
  height: 20px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    left: 21px;
  }
`

export const TimelineContent = styled.div`
  position: relative;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.cardBackground || '#fff'};
  border-radius: 0.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  &::before {
    content: '';
    position: absolute;
    top: 30px;
    width: 0;
    height: 0;
    border-style: solid;

    ${({ theme }) => {
    const borderColor = theme.colors.cardBackground || '#fff'
    return css`
        ${TimelineItem}:nth-child(odd) & {
          right: -15px;
          border-width: 15px 0 15px 15px;
          border-color: transparent transparent transparent ${borderColor};
        }
        
        ${TimelineItem}:nth-child(even) & {
          left: -15px;
          border-width: 15px 15px 15px 0;
          border-color: transparent ${borderColor} transparent transparent;
        }
        
        @media (max-width: ${theme.breakpoints.tablet}) {
          right: auto !important;
          left: 15px !important;
          border-width: 15px 15px 15px 0 !important;
          border-color: transparent ${borderColor} transparent transparent !important;
        }
      `
  }}
  }
`

export const TimelinePeriod = styled.span`
  display: block;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`

export const TimelineRole = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.3rem;
  }
`

export const TimelineCompany = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 400;
`

export const TimelineDescription = styled.p`
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.9;
  margin-bottom: 1rem;
`

export const TimelineSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`

export const SkillTag = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: ${({ theme }) => theme.colors.primary || '#CCC'};
  color: ${({ theme }) => theme.colors.textLight};
  border-radius: 1rem;
  font-size: 0.8rem;
`