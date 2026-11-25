import { process } from '../data/portfolioData'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function Process() {
  return (
    <section
      id="process"
      className="section-padding relative border-y border-ink/[0.06] bg-surface"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Process"
          index="07"
          title={process.title}
          description={process.description}
        />

        <div className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div
            className="absolute left-0 right-0 top-[17px] hidden h-px bg-gradient-to-r from-transparent via-ink/15 to-transparent lg:block"
            aria-hidden="true"
          />

          {process.steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.07} className="relative">
              <div className="flex items-center gap-3 lg:block">
                <span className="relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/[0.1] bg-surface font-mono text-[10px] font-medium text-ink-500 ring-[6px] ring-surface">
                  {step.number}
                </span>
                <span className="h-px flex-1 bg-ink/10 lg:hidden" aria-hidden="true" />
              </div>

              <h3 className="mt-4 font-display text-[17px] font-semibold tracking-[-0.02em] text-ink lg:mt-5">
                {step.title}
              </h3>
              <p className="mt-1.5 max-w-[260px] text-[12.5px] leading-relaxed text-ink-400">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
