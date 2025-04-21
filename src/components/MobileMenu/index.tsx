'use client';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { navLinks } from '@/data/navLinks';
import Link from 'next/link';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: Props) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // trava o scroll
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Overlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MenuContainer
        initial={{ y: '-100%' }}
        animate={{ y: 0 }}
        exit={{ y: '-100%' }}
        transition={{ type: 'spring', stiffness: 70 }}
      >
        <CloseButton onClick={onClose}>
          <FaTimes />
        </CloseButton>
        <NavItems>
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link href={href} onClick={onClose}>
                {label}
              </Link>
            </li>
          ))}
          <VisitButton>Entre em contato</VisitButton>
        </NavItems>
      </MenuContainer>
    </Overlay>
  );
}

// Styled Components

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  z-index: 999;
`;

const MenuContainer = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NavItems = styled.ul`
  list-style: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-size: 20px;
  color: white;

  li a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #aaa;
  }
}
`;

const VisitButton = styled.button`
  background-color: #ffffff;
  color: #000;
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #575757;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 28px;
  background: none;
  color: white;
  border: none;
  cursor: pointer;
`;
