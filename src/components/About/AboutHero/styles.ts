// src/components/About/AboutHero/styles.ts
import styled from 'styled-components'
import Link from 'next/link'

export const HeroContainer = styled.section`
  background: ${({ theme }) => theme.colors.background};
  padding: 4rem 2rem;
`

export const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
  }
`

export const TextContainer = styled.div`
  flex: 1;
`

export const ImageContainer = styled.div`
  flex: 1;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  .profile-image {
    border-radius: 1rem;
    object-fit: cover;
  }
`

export const Title = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
  font-weight: 400;
`

export const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
  opacity: 0.9;
`

export const CtaButton = styled(Link)`
  display: inline-block;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 500;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 112, 243, 0.3);
  }
`