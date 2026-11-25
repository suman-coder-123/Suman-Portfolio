import { ArrowUpRight, Check } from 'lucide-react'

import { experience } from '../data/portfolioData'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { whatsappUrl } from '../lib/utils'

const FOCUS_AREAS = [
  'Programming fundamentals',
  'Full-stack development',
  'Practical project development',
  'Student mentoring',
  'Interview preparation',
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container-page">
        <SectionHeading
          eyebrow="Experience"
          index="06"
          title="Professional Experience"
          description="A focused timeline of teaching, mentoring, and building with modern technology."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-8">
            {experience.map((job, index) => {
              const isCurrent = job.period.toLowerCase().includes('present')
              return (
                <Reveal key={`${job.organization}-${index}`} as="article">
                  <div className="relative overflow-hidden rounded-3xl border border-ink/[0.08] bg-surface p-6 shadow-soft sm:p-8">
                    <div
                      className={`absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b ${
                        isCurrent
                          ? 'from-brand-500 via-brand-400 to-brand-200'
                          : 'from-ink-300 via-ink-200 to-ink-200/30'
                      }`}
                      aria-hidden="true"
                    />

                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-4">
                        <span
                          className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl font-display text-[12px] font-bold tracking-tight ${
                            isCurrent
                              ? 'bg-navy text-white ring-1 ring-inset ring-white/10'
                              : 'bg-canvas text-ink-500'
                          }`}
                        >
                          {job.initials}
                        </span>
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="font-display text-[20px] font-semibold tracking-[-0.02em] text-ink">
                              {job.role}
                            </h3>
                            {isCurrent ? (
                              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.08em] text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                                Current
                              </span>
                            ) : null}
                          </div>
                          <p className="mt-1 text-[13px] text-ink-500">
                            {job.organization}
                            {job.location ? (
                              <>
                                <span className="mx-1.5 text-ink-300">·</span>
                                <span className="text-ink-400">{job.location}</span>
                              </>
                            ) : null}
                          </p>
                        </div>
                      </div>

                      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-ink/[0.08] bg-canvas px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-500">
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            isCurrent ? 'bg-emerald-500' : 'bg-ink-300'
                          }`}
                          aria-hidden="true"
                        />
                        {job.period}
                      </span>
                    </div>

                    <p className="mt-6 max-w-2xl text-[14px] leading-relaxed text-ink-500">
                      {job.description}
                    </p>

                    <ul className="mt-6 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                      {job.responsibilities.map((responsibility) => (
                        <li
                          key={responsibility}
                          className="flex items-start gap-2 text-[12.5px] leading-snug text-ink-600"
                        >
                          <Check
                            className="mt-[3px] h-3 w-3 shrink-0 text-brand-500"
                            strokeWidth={2.5}
                            aria-hidden="true"
                          />
                          {responsibility}
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-6 flex flex-wrap gap-1.5 border-t border-ink/[0.06] pt-5">
                      {job.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-md border border-ink/[0.06] bg-canvas px-2 py-1 font-mono text-[10px] text-ink-400"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <div className="lg:col-span-4">
            <Reveal delay={0.1} className="h-full">
              <div className="flex h-full flex-col gap-4">
                <div className="rounded-3xl border border-ink/[0.08] bg-surface p-6">
                  <h3 className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink-400">
                    Teaching focus
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {FOCUS_AREAS.map((area) => (
                      <li key={area} className="flex items-center gap-2.5 text-[12.5px] text-ink-600">
                        <span className="h-1 w-1 rounded-full bg-brand-400" aria-hidden="true" />
                        {area}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 grid grid-cols-2 gap-3 border-t border-ink/[0.06] pt-5">
                    <div>
                      <p className="font-display text-[22px] font-semibold leading-none tracking-[-0.03em] text-ink">
                        50+
                      </p>
                      <p className="mt-1 text-[10.5px] text-ink-400">Students trained</p>
                    </div>
                    <div>
                      <p className="font-display text-[22px] font-semibold leading-none tracking-[-0.03em] text-ink">
                        2024
                      </p>
                      <p className="mt-1 text-[10.5px] text-ink-400">Training since</p>
                    </div>
                  </div>
                </div>

                <div className="relative flex-1 overflow-hidden rounded-3xl bg-navy p-6 text-white ring-1 ring-inset ring-white/[0.08]">
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-500/25 blur-2xl"
                    aria-hidden="true"
                  />
                  <p className="relative font-display text-[16px] font-medium leading-snug tracking-[-0.01em]">
                    Teaching is how I sharpen what I build.
                  </p>
                  <p className="relative mt-2 text-[12px] leading-relaxed text-white/55">
                    Explaining a concept clearly is the fastest way to truly understand it. That
                    mindset shapes both my classes and my code.
                  </p>
                  <a
                    href={whatsappUrl('training')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative mt-5 inline-flex items-center gap-1.5 text-[12px] font-semibold text-white transition-opacity hover:opacity-80"
                  >
                    Discuss training
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
