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
  box-shadow: 1px 11px 26px 3px rgba(0,0,0,0.24);
-webkit-box-shadow: 1px 11px 26px 3px rgba(0,0,0,0.24);
-moz-box-shadow: 1px 11px 26px 3px rgba(0,0,0,0.24);
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;

  a {
    color: white;
    text-decoration: none;
  }
`

export const DesktopNav = styled.nav`
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