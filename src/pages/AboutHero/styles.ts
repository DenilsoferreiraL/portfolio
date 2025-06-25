import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroContainer = styled(motion.section)`
  background: ${({ theme }) => theme.colors.background};
  padding: 6rem 1rem;
  height: 100vh; 
  max-height: 900px; 
  min-height: 600px; 
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  box-sizing: border-box;
  margin-top: 50px;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
    height: 90vh; 
    max-height: 800px;
    min-height: 500px;
  }

  @media (max-height: 700px) {
    height: 100vh;
    min-height: 100vh;
  }
`;

export const HeroContent = styled(motion.div)`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 0 1rem;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;

export const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  margin: auto 0;

  @media (max-width: 768px) {
    gap: 1.5rem;
    padding: 1rem 0;
  }
`;


export const Title = styled(motion.h1)`
  font-size: clamp(2rem, 6vw, 4rem);
  margin-bottom: 1rem;
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
  max-width: 100%; /* Garante que não ultrapasse a largura do container */
  word-wrap: break-word; /* Permite que palavras longas quebrem */
  overflow-wrap: break-word; /* Alternativa mais moderna */
  hyphens: auto; /* Hifenização automática quando necessário */
  text-align: center; /* Centraliza o texto */
  width: 100%; /* Ocupa toda a largura disponível */

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%; /* Reduz a largura para se adaptar melhor */
    max-width: 600px; /* Mantém um limite máximo */
    height: 2px;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary}
    );
    border-radius: 3px;

    @media (max-width: 768px) {
      bottom: -8px;
      width: 100%; /* Aumenta a porcentagem em telas pequenas */
      max-width: 280px;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
    font-size: clamp(1.8rem, 8vw, 3rem); /* Ajuste mais responsivo */
    line-height: 1.2; /* Aumenta o line-height para mobile */
  }
`;

export const Subtitle = styled(motion.h2)`
  font-size: clamp(1rem, 3vw, 1.5rem);
  color: ${({ theme }) => theme.colors.text};
 font-weight: 800;
  letter-spacing: 0.3px;
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  display: inline-block;
  padding: 0 0.5rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const Description = styled(motion.p)`
  font-size: clamp(0.9rem, 2.5vw, 1.1rem);
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.9;
  max-width: 90%;
  margin: 0 auto 2rem;
  position: relative;
  padding: 0 0.5rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 1.5rem;
    line-height: 1.5;
    padding: 0 0.25rem;
    word-break: keep-all;
    overflow-wrap: break-word;
    font-size: 1rem;
  }
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
  padding: 0.8rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  width: fit-content;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
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
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);

    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    padding: 0.7rem 1.8rem;
    font-size: 0.95rem;
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