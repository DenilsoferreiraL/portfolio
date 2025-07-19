import styled from 'styled-components'
import { motion } from 'framer-motion'

export const HeroContainer = styled(motion.section)`
  position: relative;
  width: 100%;
  padding: 5rem min(5vw, 2rem); 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.backgroundAlternative};
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 2rem min(3vw, 1.5rem); 
  }
`

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 65px min(3vw, 1rem);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}){
  padding: 20px min(3vw, 1rem);
  }


`

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  width: 100%; 

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
     gap: clamp(1rem, 2vw, 2rem);
  }
`

export const TextContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 1.5vw, 1.5rem); 
  max-width: 600px;
  width: 100%; 

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    order: 2;
    text-align: center;
    align-items: center;
    max-width: 100%; 
  }
`

export const RoleBadge = styled(motion.div)`
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  background: rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.colors.primary};
  backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 0, 0, 0.1);
  align-self: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-self: center;
    font-size: 0.875rem;
  }
`

export const MainTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: clamp(2rem, 8vw, 3rem);
  }
`

export const Description = styled(motion.p)`
  font-size: 1.25rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.1rem;
  }
`

export const AboutText = styled(motion.p)`
  font-size: 1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 1rem 0 0 0;
  padding: 1rem;
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
  background: rgba(0, 0, 0, 0.03);
  border-radius: 0 8px 8px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 0.95rem;
    padding: 0.8rem;
  }
`

export const HighlightsWrapper = styled(motion.div)`
  position: relative;
  height: 3rem;
  display: flex;
  align-items: center;
  margin: 1rem 0;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`

export const HighlightItem = styled(motion.div) <{ $highlightColor: string }>`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 1.1rem;
  color: ${({ $highlightColor }) => $highlightColor};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  left: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: relative;
    font-size: 1rem;
    left: auto;
  }
`

export const CTAButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.1rem;
  color: white;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: none;
  width: fit-content;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    svg:last-child {
      transform: translateX(3px);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0.875rem 1.75rem;
    font-size: 1rem;
  }
`

export const ImageWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; 

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    order: 1;
    margin-bottom: clamp(1rem, 2vw, 2rem); 
  }
`


