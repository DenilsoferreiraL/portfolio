'use client'

import { AboutHero } from '@/components/AboutHero'
import { ProjectsSection } from '@/components/ProjectsSection'
import { SkillsSection } from '@/components/SkillsSection'
import SoftSkillsSection from '@/components/SoftSkillsSection'

export const AboutPage = () => {
    return (
        <>
            <main>
                <AboutHero />
                <SkillsSection />
                <SoftSkillsSection />
                <ProjectsSection />
            </main>
        </>
    )
}
