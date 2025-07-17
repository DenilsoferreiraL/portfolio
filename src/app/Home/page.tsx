
import { AboutHero } from '@/pages/AboutHero'
// import { EducationSection } from '@/pages/EducationSection'
// import { ExperienceTimeline } from '@/pages/ExperienceTimeline'
import { ProjectsSection } from '@/pages/ProjectsSection'
import { SkillsSection } from '@/pages/SkillsSection'


export const AboutPage = () => {

    return (
        <main>
            <AboutHero />
            <SkillsSection />
            <ProjectsSection />
            {/* <ExperienceTimeline />
            <EducationSection /> */}
        </main>
    )
}