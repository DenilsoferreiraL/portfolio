// src/components/About/SkillsSection/styles.ts
import styled from 'styled-components'

export const SkillsContainer = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.colors.lightBackground || '#f9f9f9'};
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

export const SkillsGrid = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

export const SkillItem = styled.div`
  margin-bottom: 1.5rem;
`

export const SkillName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
`

export const SkillBar = styled.div`
  height: 10px;
  background: ${({ theme }) => theme.colors.border || '#e0e0e0'};
  border-radius: 5px;
  overflow: hidden;
`

export const SkillLevel = styled.div<{ level: number }>`
  height: 100%;
  width: ${({ level }) => level}%;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  transition: width 1s ease-in-out;
`

export const SkillPercentage = styled.span`
  display: inline-block;
  margin-top: 0.3rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`