import { ArrowRight } from 'lucide-react'

import { skills } from '../data/portfolioData'
import SectionHeading from '../components/SectionHeading'
import SkillCard from '../components/SkillCard'

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding relative border-y border-ink/[0.06] bg-surface"
    >
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Skills"
            index="04"
            title="Technologies I Work With"
            description="A practical toolkit built through development projects and hands-on teaching — no percentage bars, just the technologies I use."
          />

          <a
            href="#training"
            className="group inline-flex shrink-0 items-center gap-2 text-[12.5px] font-medium text-ink-500 transition-colors hover:text-brand-600"
          >
            Learn these with me
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <SkillCard key={group.category} group={group} index={index} />
          ))}
        </div>

        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-300">
          Also comfortable with: REST API integration · JWT auth · Form handling · Deployment ·
          Version control
        </p>
      </div>
    </section>
  )
}
