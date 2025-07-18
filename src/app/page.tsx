import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { AboutPage } from './Home/page'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Denilso Ferreira | Desenvolvedor Front-end',
  description: 'Transformo ideias em experiências digitais modernas, rápidas e responsivas. Portfólio de Denilso Ferreira, desenvolvedor front-end especialista em React, Next.js e aplicações performáticas.',
  keywords: 'Desenvolvedor Front-end, Next.js, React, Landing Page, SEO, Denilso Ferreira, Portfólio',
  icons: {
    icon: '/favicon.ico'
  },
  openGraph: {
    type: 'website',
    url: 'https://seusite.com',
    title: 'Denilso Ferreira | Desenvolvedor Front-end',
    description: 'Portfólio profissional com projetos modernos e focados em performance.',
    images: [
      {
        url: '/public/assets/home.webp',
        width: 1200,
        height: 630,
        alt: 'Denilso Ferreira - Front-end Developer'
      }
    ]
  }
}

export default function Home() {
  return (
    <>
      <Header />
      <AboutPage />
      <Footer />
    </>
  );
}
