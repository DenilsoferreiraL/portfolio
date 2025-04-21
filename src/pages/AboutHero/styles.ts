import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroContainer = styled(motion.section)`
  background: ${({ theme }) => theme.colors.background};
  padding: 8rem 2rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  

  @media (max-width: 768px) {
   min-height:115vh;
   padding: 8rem 0;
  }

`;


export const HeroContent = styled(motion.div)`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  text-align: center;
`;

export const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
`;

export const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 5rem);
  margin-bottom: 1.5rem;
  line-height: 1.1;
  font-weight: 800;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary},
    ${({ theme }) => theme.colors.primary}
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary}
    );
    border-radius: 3px;
  }
`;

export const Subtitle = styled(motion.h2)`
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  letter-spacing: 0.5px;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  display: inline-block;
  padding: 0 1rem;

  span {
    position: relative;
    display: inline-block;
  }
`;

export const Description = styled(motion.p)`
  font-size: clamp(1rem, 3vw, 1.2rem);
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto 3rem;
  position: relative;
  padding: 0 1rem;
`;

export const CtaButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  width: fit-content;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.secondary},
      ${({ theme }) => theme.colors.primary}
    );
    opacity: 0;
    z-index: -1;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);

    &::before {
      opacity: 1;
    }
  }
`;

export const FloatingShapes = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
`;

export const Shape = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.secondary};
  opacity: 1;
  filter: blur(1px);
  will-change: transform;
`;