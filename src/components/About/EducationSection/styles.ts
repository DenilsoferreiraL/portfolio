// src/components/About/EducationSection/styles.ts
import styled from 'styled-components'

export const EducationContainer = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.colors.lightBackground || '#f9f9f9'};
`

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 3rem;
`

export const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

export const EducationCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`

export const EducationYear = styled.span`
  display: block;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`

export const EducationDegree = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
`

export const EducationInstitution = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 400;
`

export const EducationDescription = styled.p`
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.9;
`