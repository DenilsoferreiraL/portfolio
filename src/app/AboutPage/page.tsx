import { AboutHero } from '@/components/About/AboutHero'
import { SkillsSection } from '@/components/About/SkillsSection'
import { ExperienceTimeline } from '@/components/About/ExperienceTimeline'
import { EducationSection } from '@/components/About/EducationSection'
import { portfolioData } from '@/data/portfolio-data'
import { ProjectsSection } from '@/components/About/ProjectsSection'

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