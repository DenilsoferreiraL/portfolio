import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8rem 2rem;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  min-height: 100vh;
  color: #fff;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #cfd8dc;
  max-width: 600px;
  text-align: center;
  margin-bottom: 4rem;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

export const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  transition: 0.3s all;
`;

export const SkillTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
`;

export const SkillDescription = styled.p`
  font-size: 1rem;
  color: #cfd8dc;
  line-height: 1.6;
`;
