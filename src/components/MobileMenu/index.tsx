// 'use client'

// import styled from 'styled-components'
// import { motion, AnimatePresence } from 'framer-motion'
// import { FaTimes } from 'react-icons/fa'
// import { useEffect } from 'react'
// import { navLinks } from '@/data/navLinks'

// interface MobileMenuProps {
//   isOpen: boolean
//   onClose: () => void
// }

// export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden'
//     } else {
//       document.body.style.overflow = ''
//     }

//     return () => {
//       document.body.style.overflow = ''
//     }
//   }, [isOpen])

//   const handleNavClick = (href: string) => {
//     const targetId = href.replace('#', '')
//     const targetElement = document.getElementById(targetId)
//     if (targetElement) {
//       targetElement.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start',
//       })
//     }
//     onClose()
//   }

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <S.Overlay
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={onClose}
//         >
//           <S.MenuContainer
//             initial={{ x: '100%' }}
//             animate={{ x: 0 }}
//             exit={{ x: '100%' }}
//             transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <S.CloseButton
//               onClick={onClose}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <FaTimes />
//             </S.CloseButton>

//             <S.NavList>
//               {navLinks.map(({ label, href }) => (
//                 <S.NavItem
//                   key={href}
//                   initial={{ x: 50, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <S.NavLink
//                     href={href}
//                     onClick={(e) => {
//                       e.preventDefault()
//                       handleNavClick(href)
//                     }}
//                     whileHover={{ color: '#4F46E5' }}
//                   >
//                     {label}
//                   </S.NavLink>
//                 </S.NavItem>
//               ))}
//             </S.NavList>

//             <S.ContactButton
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => {
//                 const contactSection = document.getElementById('contato')
//                 if (contactSection) {
//                   contactSection.scrollIntoView({ behavior: 'smooth' })
//                 }
//                 onClose()
//               }}
//             >
//               Entre em Contato
//             </S.ContactButton>
//           </S.MenuContainer>
//         </S.Overlay>
//       )}
//     </AnimatePresence>
//   )
// }

// const S = {
//   Overlay: styled(motion.div)`
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: rgba(0, 0, 0, 0.7);
//     backdrop-filter: blur(5px);
//     z-index: 999;
//     display: flex;
//     justify-content: flex-end;
//   `,
//   MenuContainer: styled(motion.div)`
//     width: 85%;
//     max-width: 400px;
//     height: 100%;
//     background: ${({ theme }) => theme.colors.background};
//     padding: 2rem;
//     display: flex;
//     flex-direction: column;
//     box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
//   `,
//   CloseButton: styled(motion.button)`
//     position: absolute;
//     top: 1.5rem;
//     right: 1.5rem;
//     background: none;
//     border: none;
//     color: ${({ theme }) => theme.colors.text};
//     font-size: 1.5rem;
//     cursor: pointer;
//     padding: 0.5rem;
//     border-radius: 50%;
//   `,
//   NavList: styled.ul`
//     list-style: none;
//     margin-top: 3rem;
//     display: flex;
//     flex-direction: column;
//     gap: 1.5rem;
//     padding: 0;
//   `,
//   NavItem: styled(motion.li)`
//     padding: 0.5rem 0;
//   `,
//   NavLink: styled(motion.a)`
//     color: ${({ theme }) => theme.colors.text};
//     text-decoration: none;
//     font-size: 1.2rem;
//     font-weight: 500;
//     display: block;
//     padding: 0.5rem 0;
//     transition: color 0.2s ease;
//   `,
//   ContactButton: styled(motion.button)`
//     margin-top: auto;
//     margin-bottom: 2rem;
//     padding: 1rem;
//     background: ${({ theme }) => theme.colors.primary};
//     color: white;
//     border: none;
//     border-radius: 8px;
//     font-size: 1rem;
//     font-weight: 600;
//     cursor: pointer;
//     transition: all 0.2s ease;
//   `,
// }