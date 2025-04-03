import styled from 'styled-components'
import Link from 'next/link'

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10; 
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;

  a {
    color: white;
    text-decoration: none;
  }
`

export const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`