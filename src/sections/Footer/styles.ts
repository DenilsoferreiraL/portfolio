import styled from 'styled-components'
import { motion } from 'framer-motion'

export const FooterContainer = styled(motion.footer)`
  background: ${({ theme }) => theme.colors.primary || '#2c3e50'};
  color: white;
  padding-top: 5rem;
  position: relative;
  overflow: hidden;
  text-decoration: none;
`

export const FooterWave = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  transform: rotate(180deg);
  
  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`

export const FooterContent = styled.div`
  display: flex;
  max-width: 1200px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
}
`

export const FooterSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const FooterTitle = styled(motion.h3)`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: white;
  font-weight: 600;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 50px;
    height: 3px;
    background: ${({ theme }) => theme.colors.secondary || '#3498db'};
    border-radius: 3px;
  }
`

export const FooterText = styled(motion.p)`
  line-height: 1.7;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
`

export const MotivationText = styled(motion.p)`
  font-style: italic;
  color: rgba(255, 255, 255, 0.8);
  border-left: 3px solid ${({ theme }) => theme.colors.secondary};
  padding-left: 1rem;
  margin-top: 1rem;
  font-size: 1.1rem;
  line-height: 1.6;
`

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const NavLink = styled.div`
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  padding: 0.5rem 0;
  position: relative;
  overflow: hidden;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    transform: translateX(5px);
  }
`

export const LinkArrow = styled.span`
  transition: all 0.3s ease;
  display: inline-block;

  ${NavLink}:hover & {
    transform: translateX(5px);
    color: ${({ theme }) => theme.colors.secondary};
  }
`

export const FooterContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  transition: all 0.3s ease;

  svg {
    min-width: 20px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    transform: translateX(5px);
  }
`

export const FooterBottom = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  gap: 1.5rem;
`

export const Copyright = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`

export const SocialIcon = styled(motion.div)`
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    background: rgba(255, 255, 255, 0.1);
  }

  span {
    @media (max-width: 480px) {
      display: none;
    }
  }
`