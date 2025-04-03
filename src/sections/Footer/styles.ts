import styled from 'styled-components'
import { motion } from 'framer-motion'

export const FooterContainer = styled(motion.footer)`
  background: ${({ theme }) => theme.colors.primary || '#000'};
  color: white;
  padding: 0rem 0 1rem;
  margin-top: auto;
  overflow: hidden;
`

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

export const FooterSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const FooterTitle = styled(motion.h3)`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.textlight};
  font-weight: 600;
`

export const FooterText = styled(motion.p)`
  line-height: 1.6;
  opacity: 0.8;
  font-size: 0.95rem;
`

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  a {
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
    opacity: 0.8;
    font-size: 0.95rem;
    position: relative;
    width: fit-content;

    &:hover {
      opacity: 1;
      color:${({ theme }) => theme.colors.secondary};
      transform: translateX(5px);
    }

    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 1px;
      bottom: -2px;
      left: 0;
      background-color: ${({ theme }) => theme.colors.secondary};
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
`

export const FooterContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  opacity: 0.8;
  font-size: 0.95rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

  
  }
`

export const FooterBottom = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem 0;
  margin-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.85rem;
  opacity: 0.8;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;

    &:hover {
      color: ${({ theme }) => theme.colors.textlight};
      transform: translateY(-2px);
    }
  }
`

export const FooterWave = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-bottom: -1px;
  overflow: hidden;
`