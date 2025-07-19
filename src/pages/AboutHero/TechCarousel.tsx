'use client'

import { motion } from 'framer-motion'
import styled from 'styled-components'
import {
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaGithub, FaDocker, FaFigma, FaAws,
} from 'react-icons/fa'
import {
    SiNextdotjs, SiTypescript, SiPostgresql, SiMongodb, SiTailwindcss
} from 'react-icons/si'

const techIcons = [
    <FaReact key="react" color="#61DBFB" />,
    <SiNextdotjs key="next" color="#000000" />,
    <SiTypescript key="ts" color="#3178C6" />,
    <FaNodeJs key="node" color="#83CD29" />,
    <FaHtml5 key="html" color="#E34F26" />,
    <FaCss3Alt key="css" color="#1572B6" />,
    <FaJsSquare key="js" color="#F7DF1E" />,
    <SiTailwindcss key="tailwind" color="#38B2AC" />,
    <FaGitAlt key="git" color="#F05032" />,
    <FaGithub key="github" color="#000" />,
    <FaDocker key="docker" color="#0db7ed" />,
    <FaFigma key="figma" color="#F24E1E" />,
    <SiPostgresql key="postgres" color="#336791" />,
    <SiMongodb key="mongo" color="#4DB33D" />,
    <FaAws key="aws" color="#FF9900" />,
]

export function TechCarousel() {
    return (
        <CarouselWrapper>
            <motion.div
                animate={{ x: ['0%', '-50%'] }}
                transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                style={{ display: 'flex', gap: '3rem' }}
            >
                {techIcons.concat(techIcons).map((icon, index) => (
                    <IconWrapper key={index}>
                        {icon}
                    </IconWrapper>
                ))}
            </motion.div>
        </CarouselWrapper>
    )
}

const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.backgroundAlternative};
  border-top: 1px solid rgba(255,255,255,0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 2rem 0;
  }
`

const IconWrapper = styled.div`
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.5rem;
    min-width: 60px;
  }
`
