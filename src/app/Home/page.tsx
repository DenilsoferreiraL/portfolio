
import { AboutHero } from '@/pages/AboutHero'
import { ProjectsSection } from '@/pages/ProjectsSection'
import { SkillsSection } from '@/pages/SkillsSection'
import SoftSkillsSection from '@/pages/SoftSkillsSection'


export const AboutPage = () => {

    return (
        <main>
            <AboutHero />
            <SkillsSection />
            <SoftSkillsSection />
            <ProjectsSection />
        </main>
    )
}