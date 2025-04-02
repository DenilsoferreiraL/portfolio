import styled from 'styled-components'
// import Link from 'next/link'

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 2rem 0;
  margin-top: auto;
`

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const FooterTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
`

export const FooterText = styled.p`
  line-height: 1.6;
  opacity: 0.8;
`

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  a {
    color: white;
    text-decoration: none;
    transition: opacity 0.2s;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`

export const FooterContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  opacity: 0.8;
`

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem 0;
  margin-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 0.9rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color:${({ theme }) => theme.colors.textLight};
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }
`