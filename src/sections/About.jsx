import { MapPin, Sparkles } from 'lucide-react'

import { about, siteConfig } from '../data/portfolioData'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function About() {
  const [lead, ...rest] = about.paragraphs

  return (
    <section id="about" className="section-padding relative">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Introduction"
              index="01"
              title="About Me"
              titleClassName="max-w-xl"
            />

            <div className="mt-8 max-w-2xl space-y-5">
              <p className="text-[16.5px] leading-[1.8] text-ink-700 sm:text-[17.5px]">{lead}</p>
              {rest.map((paragraph) => (
                <p key={paragraph} className="text-[14.5px] leading-[1.8] text-ink-500">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8">
              <Button href={about.cta.href} variant="secondary" showArrow>
                {about.cta.label}
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-ink/[0.07] pt-6">
              <span className="inline-flex items-center gap-2 text-[12px] text-ink-400">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                Based in {siteConfig.location} · Working with clients remotely
              </span>
              <span className="inline-flex items-center gap-2 text-[12px] text-ink-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                Open to freelance &amp; training
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="relative">
                <div
                  className="absolute -inset-2 rounded-[2rem] border border-ink/[0.05] bg-surface/40 dark:bg-white/[0.02]"
                  aria-hidden="true"
                />
                <div className="relative rounded-3xl border border-ink/[0.08] bg-surface p-6 shadow-soft sm:p-7">
                  <div className="flex items-center justify-between border-b border-ink/[0.07] pb-4">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-400">
                        Profile
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-ink-300">2024 — Present</span>
                  </div>

                  <dl className="divide-y divide-ink/[0.06]">
                    {about.facts.map((fact) => (
                      <div
                        key={fact.label}
                        className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4 py-3"
                      >
                        <dt className="text-[12px] text-ink-400">{fact.label}</dt>
                        <dd className="text-right text-[12.5px] font-medium leading-snug text-ink-700">
                          {fact.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-5 flex items-start gap-2.5 rounded-xl bg-canvas p-3.5">
                    <Sparkles
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-500"
                      aria-hidden="true"
                    />
                    <p className="text-[11.5px] leading-relaxed text-ink-500">
                      Combining hands-on development with practical teaching — currently training
                      developers at EpixxAi Institute of Intelligence, Jaipur.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
