// src/components/About/AboutHero/index.tsx
'use client'

import * as S from './styles'
import Image from 'next/image'

interface AboutHeroProps {
    title: string
    subtitle: string
    description: string
    image: string
}

export function AboutHero({ title, subtitle, description, image }: AboutHeroProps) {
    return (
        <S.HeroContainer>
            <S.HeroContent>
                <S.TextContainer>
                    <S.Title>{title}</S.Title>
                    <S.Subtitle>{subtitle}</S.Subtitle>
                    <S.Description>
                        {description}
                    </S.Description>
                    <S.CtaButton href="/contact">Entre em Contato</S.CtaButton>
                </S.TextContainer>
                <S.ImageContainer>
                    <Image
                        src={image}
                        alt="Minha foto de perfil"
                        width={400}
                        height={400}
                        priority
                        className="profile-image"
                    />
                </S.ImageContainer>
            </S.HeroContent>
        </S.HeroContainer>
    )
}