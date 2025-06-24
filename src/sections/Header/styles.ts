import styled from 'styled-components'
import { motion } from 'framer-motion'
import { GoPerson } from "react-icons/go"

export const HeaderContainer = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  background: ${({ $scrolled }) => $scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${({ $scrolled }) => $scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: all 0.3s ease;
  border-bottom: ${({ $scrolled }) => $scrolled ? '1px solid rgba(255, 255, 255, 0.3)' : 'none'};
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Logo = styled(motion.a)`
  display: flex;
  align-items: center;
  text-decoration: none;
  position: relative;
`

export const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.5px;
`

export const StyledGoPerson = styled(GoPerson)`
  color: ${({ theme }) => theme.colors.primary};
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-left: 4px;
`

export const DesktopNav = styled(motion.nav)`
  display: flex;
  gap: 2.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled(motion.li)`
  list-style: none;
  position: relative;
`

export const NavLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const NavUnderline = styled(motion.span)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: ${({ theme }) => theme.colors.primary};
  transition: width 0.3s ease;

  ${NavLink}:hover & {
    width: 100%;
  }
`

export const MenuToggle = styled(motion.button) <{ $isOpen: boolean }>`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10000;
  padding: 0.5rem;
  border-radius: 4px;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const MobileMenuWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9998;
  display: flex;
  pointer-events: none;
`

export const MobileMenuOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  z-index: 9998;
  display: flex;
`
export const MobileMenuBelowHeader = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  z-index: 9998;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`

export const MobileMenuContainer = styled(motion.div)`
  flex: 2;
  height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
`

export const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
`

export const MobileNavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0;
`

export const MobileNavItem = styled(motion.li)`
  padding: 0.5rem 0;
`

export const MobileNavLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  display: block;
  padding: 0.5rem 0;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`
