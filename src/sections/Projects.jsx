import { ArrowUpRight } from 'lucide-react'

import { projects } from '../data/portfolioData'
import Button from '../components/Button'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import { whatsappUrl } from '../lib/utils'

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Portfolio"
            index="03"
            title="Selected Projects"
            description="Practical projects that reflect my development skills, creativity, and ability to solve real-world problems."
          />

          <div className="shrink-0">
            <Button href={whatsappUrl('general')} variant="secondary" showArrow>
              Start a Project
              <span className="sr-only">(opens WhatsApp in a new tab)</span>
            </Button>
          </div>
        </div>

        <div className="mt-14 space-y-16 sm:space-y-20 lg:space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 rounded-2xl border border-ink/[0.07] bg-surface/60 px-6 py-5 sm:flex-row sm:items-center">
          <p className="text-[13px] leading-relaxed text-ink-500">
            More development and training work is available on request.
            <span className="hidden sm:inline"> Screenshots are illustrative previews.</span>
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-ink transition-colors hover:text-brand-600"
          >
            Request a walkthrough
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
