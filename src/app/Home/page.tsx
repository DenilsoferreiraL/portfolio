
import { AboutHero } from '@/pages/AboutHero'
// import { EducationSection } from '@/pages/EducationSection'
// import { ExperienceTimeline } from '@/pages/ExperienceTimeline'
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
            {/* <ExperienceTimeline />
            <EducationSection /> */}
        </main>
    )
}