
import { portfolioData } from '@/data/portfolio-data'
import { AboutHero } from '@/pages/AboutHero'
import { EducationSection } from '@/pages/EducationSection'
import { ExperienceTimeline } from '@/pages/ExperienceTimeline'
import { ProjectsSection } from '@/pages/ProjectsSection'
import { SkillsSection } from '@/pages/SkillsSection'


export const AboutPage = () => {
    const { about } = portfolioData

    return (
        <main>
            <AboutHero
                title={about.title}
                subtitle={about.subtitle}
                description={about.description}
                image={about.image}
            />
            <SkillsSection skills={about.skills} />
            <ProjectsSection projects={about.projects} />
            <ExperienceTimeline experiences={about.experiences} />
            <EducationSection education={about.education} />


        </main>
    )
}