import { Check, ExternalLink, Github, MessageCircle } from 'lucide-react'
import { cn, whatsappUrl } from '../lib/utils'
import Button from './Button'
import ProjectPreview from './ProjectPreview'
import Reveal from './Reveal'

export default function ProjectCard({ project, index }) {
  const hasDemo = Boolean(project.demoUrl)
  const hasGithub = Boolean(project.githubUrl)
  const projectMessage = `Hello Suman, I visited your portfolio and would like to know more about the ${project.title} project.`

  return (
    <Reveal
      as="article"
      className="group grid items-center gap-6 lg:grid-cols-12 lg:gap-12"
      aria-labelledby={`project-${project.id}`}
    >
      <div className={cn('lg:col-span-7', index % 2 === 1 && 'lg:order-2')}>
        <div className="overflow-hidden rounded-2xl transition-transform duration-700 ease-premium group-hover:-translate-y-1">
          <ProjectPreview
            project={project}
            className="aspect-[16/10] w-full transition-transform duration-700 ease-premium group-hover:scale-[1.015]"
          />
        </div>
      </div>

      <div className="lg:col-span-5">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="rounded-full border border-brand-100 bg-brand-50 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.1em] text-brand-700 dark:border-brand-500/25 dark:bg-brand-500/10 dark:text-brand-300">
            {project.badge}
          </span>
          <span className="font-mono text-[10px] tracking-[0.16em] text-ink-300">
            0{index + 1}
          </span>
        </div>

        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-400">
          {project.category}
        </p>

        <h3
          id={`project-${project.id}`}
          className="mt-2 font-display text-[26px] font-semibold leading-tight tracking-[-0.03em] text-ink sm:text-[30px]"
        >
          {project.title}
        </h3>

        <p className="mt-3 text-[14.5px] leading-relaxed text-ink-500">{project.description}</p>

        <ul className="mt-5 grid gap-x-5 gap-y-1.5 sm:grid-cols-2">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-[12.5px] leading-snug text-ink-500">
              <Check className="mt-[3px] h-3 w-3 shrink-0 text-brand-500" strokeWidth={2.5} aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-ink/[0.07] bg-surface px-2 py-1 font-mono text-[10.5px] text-ink-500"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-2.5">
          {hasDemo ? (
            <Button href={project.demoUrl} size="sm" icon={ExternalLink}>
              Live Demo
            </Button>
          ) : null}
          {hasGithub ? (
            <Button href={project.githubUrl} size="sm" variant="secondary" icon={Github}>
              GitHub
            </Button>
          ) : null}
          {!hasDemo && !hasGithub ? (
            <Button
              href={whatsappUrl(projectMessage)}
              size="sm"
              variant="secondary"
              icon={MessageCircle}
            >
              Ask About This Project
              <span className="sr-only">(opens WhatsApp in a new tab)</span>
            </Button>
          ) : null}
        </div>

        {!hasDemo && !hasGithub ? (
          <p className="mt-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-300">
            Demo &amp; source links available on request
          </p>
        ) : null}
      </div>
    </Reveal>
  )
}
