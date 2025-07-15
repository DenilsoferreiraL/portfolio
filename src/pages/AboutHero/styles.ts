import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroContainer = styled(motion.section)`
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.background} 0%,
    ${({ theme }) => theme.colors.backgroundDark} 100%
  );
  padding: 8rem 2rem 6rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 6rem 1.5rem 4rem;
    min-height: 90vh;
  }
`;

export const HeroContent = styled(motion.div)`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 0 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

export const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  line-height: 1.1;
  font-weight: 800;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0.5rem 0 1.5rem;
  position: relative;
  display: inline-block;
  text-align: center;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: clamp(2rem, 10vw, 3.5rem);
    margin: 0.5rem 0 1rem;
  }
`;

export const Subtitle = styled(motion.h2)`
  font-size: clamp(1.1rem, 3vw, 1.6rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 600;
  letter-spacing: 0.5px;
  margin: 0 auto;
  position: relative;
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(${({ theme }) => theme.colors.primaryRgb}, 0.1);
  border-radius: 50px;
  backdrop-filter: blur(5px);

  @media (max-width: 768px) {
    font-size: clamp(1rem, 4vw, 1.4rem);
  }
`;

export const Description = styled(motion.p)`
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text};
  max-width: 90%;
  margin: 0 auto 2.5rem;
  position: relative;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 2rem;
    line-height: 1.6;
  }
`;

export const HighlightsContainer = styled.div`
  position: relative;
  height: 2.5rem;
  margin: 1rem 0;
  display: inline-flex;
  justify-content: center;
  width: 100%;
`;

export const HighlightUnderline = styled.span`
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
`;

export const CtaButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  width: fit-content;
  margin: 1rem auto 0;
  position: relative;
  overflow: hidden;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(${({ theme }) => theme.colors.primaryRgb}, 0.3);
  transition: all 0.3s ease;
  z-index: 1;

  &::after {
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
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(${({ theme }) => theme.colors.primaryRgb}, 0.4);

    &::after {
      opacity: 1;
    }
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg:last-child {
    transform: translateX(3px);
  }

  @media (max-width: 768px) {
    padding: 0.9rem 2rem;
    font-size: 1rem;
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
  mix-blend-mode: overlay;
`;

export const Shape = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  will-change: transform;
`;