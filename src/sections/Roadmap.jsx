import { roadmap } from '../data/portfolioData'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { whatsappUrl } from '../lib/utils'

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="section-padding relative border-y border-ink/[0.06] bg-surface"
    >
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow={roadmap.eyebrow}
                title={roadmap.title}
                description={roadmap.description}
              />

              <div className="mt-7">
                <Button href={whatsappUrl('training')} showArrow>
                  {roadmap.cta.label}
                  <span className="sr-only">(opens WhatsApp in a new tab)</span>
                </Button>
              </div>

              <div className="mt-8 flex items-center gap-3 border-t border-ink/[0.07] pt-5">
                <span className="font-display text-[28px] font-semibold leading-none tracking-[-0.03em] text-ink">
                  8
                </span>
                <p className="font-mono text-[9.5px] uppercase leading-relaxed tracking-[0.12em] text-ink-400">
                  Steps from first
                  <br />
                  line of code to interview
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <ol className="relative">
              {roadmap.steps.map((step, index) => {
                const isLast = index === roadmap.steps.length - 1
                return (
                  <li key={step.title} className="group relative flex gap-5">
                    <div className="flex flex-col items-center">
                      <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink/[0.1] bg-canvas font-mono text-[10.5px] font-medium text-ink-400 transition-colors duration-300 group-hover:border-brand-300 group-hover:bg-brand-50 group-hover:text-brand-700 dark:group-hover:border-brand-500/40 dark:group-hover:bg-brand-500/15">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {!isLast ? (
                        <span
                          className="mt-1.5 w-px flex-1 bg-gradient-to-b from-ink/15 via-ink/10 to-ink/5"
                          aria-hidden="true"
                        />
                      ) : null}
                    </div>

                    <div className={`min-w-0 flex-1 ${isLast ? '' : 'pb-8'}`}>
                      <div className="rounded-xl px-1 pt-1.5 transition-transform duration-300 group-hover:translate-x-1">
                        <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-ink">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-[12.5px] leading-relaxed text-ink-400">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ol>

            <Reveal delay={0.1} className="mt-6 flex items-center gap-3 rounded-xl border border-ink/[0.07] bg-canvas px-4 py-3.5 sm:ml-[60px]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
              <p className="text-[11.5px] leading-relaxed text-ink-500">
                Every step includes hands-on practice, code reviews, and project work — not just
                theory.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
