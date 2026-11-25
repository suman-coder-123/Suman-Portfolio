import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  Briefcase,
  CalendarDays,
  ChevronDown,
  Code2,
  Coffee,
  Database,
  HeartHandshake,
  Layers,
  LayoutTemplate,
  Palette,
  Rocket,
  Server,
  Target,
  Terminal,
  Users,
} from 'lucide-react'

import { training } from '../data/portfolioData'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import WhatsAppIcon from '../components/WhatsAppIcon'
import { whatsappUrl } from '../lib/utils'

const HIGHLIGHT_ICONS = {
  briefcase: Briefcase,
  calendar: CalendarDays,
  users: Users,
  code: Code2,
  layers: Layers,
  rocket: Rocket,
  heart: HeartHandshake,
  target: Target,
}

const PROGRAM_ICONS = {
  layers: Layers,
  layout: LayoutTemplate,
  rocket: Rocket,
  code: Code2,
  coffee: Coffee,
  server: Server,
  terminal: Terminal,
  palette: Palette,
  database: Database,
}

function Module({ module, index, open, onToggle }) {
  const reduceMotion = useReducedMotion()
  const panelId = `training-module-panel-${index}`
  const buttonId = `training-module-button-${index}`

  return (
    <div>
      <h4>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="group flex w-full items-center gap-3 py-3.5 text-left"
        >
          <span className="font-mono text-[10px] tracking-[0.1em] text-ink-300">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-[13.5px] font-semibold text-ink transition-colors group-hover:text-brand-700">
            {module.title}
          </span>
          <span className="ml-auto flex items-center gap-2.5">
            <span className="hidden font-mono text-[9.5px] uppercase tracking-[0.1em] text-ink-300 sm:inline">
              {module.items.length} topics
            </span>
            <span className="grid h-6 w-6 place-items-center rounded-full border border-ink/[0.08] bg-canvas text-ink-400 transition-colors group-hover:border-brand-200 group-hover:text-brand-600 dark:group-hover:border-brand-500/40">
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </span>
          </span>
        </button>
      </h4>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key={panelId}
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <ul className="grid gap-x-6 gap-y-1.5 pb-4 pl-7 sm:grid-cols-2">
              {module.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[12.5px] text-ink-500">
                  <span
                    className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-brand-300"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export default function Training() {
  const [openModule, setOpenModule] = useState(0)
  const { primaryProgram } = training

  return (
    <section id="training" className="section-padding relative">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left: teaching intro */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="Teaching & Training"
                index="05"
                title={training.title}
                description={training.description}
              />

              <ul className="mt-8 grid grid-cols-1 gap-x-5 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {training.highlights.map((highlight) => {
                  const Icon = HIGHLIGHT_ICONS[highlight.icon] || Code2
                  return (
                    <li
                      key={highlight.label}
                      className="flex items-center gap-2.5 text-[12.5px] text-ink-500"
                    >
                      <Icon className="h-3.5 w-3.5 shrink-0 text-brand-500" aria-hidden="true" />
                      {highlight.label}
                    </li>
                  )
                })}
              </ul>

              <div className="mt-8 flex flex-col gap-2.5 sm:flex-row lg:flex-col xl:flex-row">
                <Button href={whatsappUrl('training')} showArrow>
                  Start Your Learning Journey
                  <span className="sr-only">(opens WhatsApp in a new tab)</span>
                </Button>
                <Button href="#roadmap" variant="secondary">
                  View roadmap
                </Button>
              </div>

              <p className="mt-5 font-mono text-[9.5px] uppercase leading-relaxed tracking-[0.12em] text-ink-300">
                Mentor-led · Project-based · Beginner friendly
              </p>
            </div>
          </div>

          {/* Right: primary program */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-ink/[0.08] bg-surface shadow-card">
                <div className="relative border-b border-ink/[0.07] p-6 sm:p-8">
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-50 blur-2xl dark:bg-brand-500/10"
                    aria-hidden="true"
                  />
                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-brand-50 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-brand-700 dark:border-brand-500/25 dark:bg-brand-500/10 dark:text-brand-300">
                        <span className="h-1 w-1 rounded-full bg-brand-500" />
                        Primary program
                      </span>
                      <h3 className="mt-3.5 max-w-md font-display text-[23px] font-semibold leading-[1.15] tracking-[-0.03em] text-ink sm:text-[26px]">
                        {primaryProgram.title}
                      </h3>
                      <p className="mt-2.5 max-w-md text-[13.5px] leading-relaxed text-ink-500">
                        {primaryProgram.description}
                      </p>
                    </div>
                    <span className="hidden h-12 w-12 shrink-0 place-items-center rounded-2xl bg-navy text-white ring-1 ring-inset ring-white/10 sm:grid">
                      <Coffee className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                  </div>

                  <ul className="relative mt-5 flex flex-wrap gap-1.5">
                    {primaryProgram.format.map((format) => (
                      <li
                        key={format}
                        className="rounded-md border border-ink/[0.06] bg-canvas px-2 py-1 text-[10.5px] font-medium text-ink-500"
                      >
                        {format}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-6 sm:px-8">
                  <div className="divide-y divide-ink/[0.07] border-b border-ink/[0.07]">
                    {primaryProgram.modules.map((module, index) => (
                      <Module
                        key={module.title}
                        module={module}
                        index={index}
                        open={openModule === index}
                        onToggle={() => setOpenModule(openModule === index ? -1 : index)}
                      />
                    ))}
                  </div>

                  <div className="py-6">
                    <Button
                      href={whatsappUrl('javaTraining')}
                      icon={WhatsAppIcon}
                      showArrow
                      className="w-full sm:w-auto"
                    >
                      Enquire About Java Full Stack Training
                    </Button>
                    <p className="mt-3 text-[11px] leading-relaxed text-ink-400">
                      Opens WhatsApp with a pre-filled training enquiry. You can ask about batch
                      timings, duration and fees.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Other programs */}
        <div className="mt-16">
          <div className="flex items-end justify-between gap-4">
            <h3 className="font-display text-[18px] font-semibold tracking-[-0.02em] text-ink">
              Other training programs
            </h3>
            <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-300">
              {training.programs.length} programs
            </span>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {training.programs.map((program, index) => {
              const Icon = PROGRAM_ICONS[program.icon] || Code2
              return (
                <Reveal key={program.title} delay={index * 0.03}>
                  <div className="group flex h-full items-start gap-3 rounded-xl border border-ink/[0.07] bg-surface p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-soft dark:hover:border-brand-500/40">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-canvas text-ink-400 transition-colors group-hover:bg-brand-50 group-hover:text-brand-600 dark:group-hover:bg-brand-500/15 dark:group-hover:text-brand-300">
                      <Icon className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-[13px] font-semibold text-ink">{program.title}</h4>
                      <p className="mt-0.5 text-[11.5px] leading-snug text-ink-400">
                        {program.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>

        {/* Student CTA */}
        <Reveal className="mt-14">
          <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-8 ring-1 ring-inset ring-white/[0.08] sm:px-10 sm:py-10">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
                backgroundSize: '56px 56px',
              }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-brand-500/30 blur-[80px]"
              aria-hidden="true"
            />

            <div className="relative flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl">
                <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-white/40">
                  Student CTA
                </p>
                <h3 className="mt-2.5 font-display text-[24px] font-semibold leading-tight tracking-[-0.02em] text-white sm:text-[28px]">
                  {training.studentCta.title}
                </h3>
                <p className="mt-2 max-w-lg text-[13px] leading-relaxed text-white/60">
                  {training.studentCta.description}
                </p>
              </div>

              <Button href={whatsappUrl('training')} variant="light" size="lg" showArrow>
                {training.studentCta.button}
                <span className="sr-only">(opens WhatsApp in a new tab)</span>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
