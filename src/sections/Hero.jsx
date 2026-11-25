import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, ArrowRight, GitBranch, GraduationCap, Plus, Sparkles } from 'lucide-react'

import { hero, siteConfig } from '../data/portfolioData'
import Button from '../components/Button'

const TOKEN_COLORS = {
  kw: 'text-[#93C5FD]',
  var: 'text-[#E2E8F0]',
  key: 'text-[#7DD3FC]',
  str: 'text-[#86EFAC]',
  num: 'text-[#FCD34D]',
  plain: 'text-white/40',
}

const TECH_STRIP = [
  'React.js',
  'Next.js',
  'Node.js',
  'MongoDB',
  'Core Java',
  'Spring Boot',
  'Tailwind CSS',
]

export default function Hero() {
  const reduceMotion = useReducedMotion()

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
  }

  const item = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  }

  const float = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          animate: { y: [0, -9, 0] },
          transition: {
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay,
          },
        }

  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-grid opacity-60 [mask-image:linear-gradient(to_bottom,black_10%,transparent_85%)]" />
        <div className="absolute -right-24 -top-24 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-brand-200/50 via-brand-100/30 to-transparent blur-3xl dark:from-brand-500/20 dark:via-brand-500/[0.06]" />
        <div className="absolute -left-32 top-40 h-[380px] w-[380px] rounded-full bg-[#EAEADF]/70 blur-3xl dark:bg-[#16202E]/70" />
        <div className="absolute bottom-0 left-1/2 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-ink/10 to-transparent" />
      </div>

      <div className="container-page relative">
        <div className="grid items-center gap-14 pb-14 lg:grid-cols-12 lg:gap-8 lg:pb-20">
          {/* Copy */}
          <motion.div
            className="lg:col-span-6"
            variants={reduceMotion ? undefined : container}
            initial={reduceMotion ? false : 'hidden'}
            animate="visible"
          >
            <motion.div variants={reduceMotion ? undefined : item}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-ink/[0.08] bg-surface/70 py-1.5 pl-2 pr-3.5 text-[11.5px] font-medium text-ink-600 shadow-soft backdrop-blur">
                <span className="relative flex h-5 w-5 items-center justify-center">
                  <span className="absolute h-2 w-2 animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                {siteConfig.availability}
              </span>
            </motion.div>

            <motion.h1
              variants={reduceMotion ? undefined : item}
              className="mt-6 font-display text-[clamp(2.05rem,6.2vw,4.15rem)] font-semibold leading-[1.04] tracking-[-0.045em] text-ink"
            >
              <span className="block">{hero.headline[0]}</span>
              <span className="block">{hero.headline[1]}</span>
              <span className="block text-gradient-blue">{hero.headline[2]}</span>
            </motion.h1>

            <motion.p
              variants={reduceMotion ? undefined : item}
              className="mt-6 max-w-xl text-[15px] leading-[1.75] text-ink-500 sm:mt-7 sm:text-[16.5px]"
            >
              {hero.description}
            </motion.p>

            <motion.div
              variants={reduceMotion ? undefined : item}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button href="#projects" size="lg" showArrow>
                {hero.primaryCta.label}
              </Button>
              <Button href="#contact" size="lg" variant="secondary" icon={ArrowDownRight}>
                {hero.secondaryCta.label}
              </Button>
            </motion.div>

            <motion.dl
              variants={reduceMotion ? undefined : item}
              className="mt-10 flex max-w-md divide-x divide-ink/10 border-t border-ink/[0.08] pt-6"
            >
              {hero.stats.map((stat) => (
                <div key={stat.label} className="flex-1 pl-4 first:pl-0">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-[24px] font-semibold leading-none tracking-[-0.03em] text-ink">
                      {stat.value}
                    </span>
                    <span className="mt-1.5 block text-[11px] leading-tight text-ink-400">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          {/* Visual */}
          <motion.div
            className="relative lg:col-span-6"
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative mx-auto w-full max-w-[500px] px-2 py-8 sm:px-6 lg:px-0">
              <div
                className="absolute inset-x-8 inset-y-4 rounded-[2.25rem] border border-ink/[0.06] bg-gradient-to-br from-white via-[#F7F8F4] to-brand-50/60 dark:from-white/[0.055] dark:via-white/[0.02] dark:to-brand-500/[0.08]"
                aria-hidden="true"
              />
              <div
                className="absolute -right-4 top-12 h-36 w-36 rounded-full bg-brand-300/20 blur-2xl dark:bg-brand-500/15"
                aria-hidden="true"
              />
              <Plus
                className="absolute -left-1 top-4 h-4 w-4 text-brand-300"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <Plus
                className="absolute -bottom-2 right-4 h-3.5 w-3.5 text-ink-200"
                strokeWidth={1.5}
                aria-hidden="true"
              />

              {/* Code window */}
              <motion.div
                {...float(0.4)}
                className="relative z-10 mx-auto mt-10 w-full max-w-[420px] overflow-hidden rounded-2xl border border-white/10 bg-navy shadow-[0_40px_80px_-40px_rgba(8,20,38,0.85)]"
              >
                <div className="flex items-center gap-2 border-b border-white/[0.07] px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B6B]/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFD93D]/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#6BCB77]/80" />
                  <span className="ml-2 font-mono text-[10px] text-white/40">
                    {hero.code.filename}
                  </span>
                  <span className="ml-auto rounded border border-white/10 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-white/35">
                    JS
                  </span>
                </div>

                <div className="overflow-x-auto px-3 py-4 sm:px-4 sm:py-5">
                  <div className="min-w-max font-mono text-[10.5px] leading-[1.95] sm:text-[11.5px]">
                    {hero.code.lines.map((line, index) => (
                      <div key={index} className="flex gap-3">
                        <span className="w-3 select-none text-right text-white/15">
                          {index + 1}
                        </span>
                        <span className="whitespace-pre">
                          {'  '.repeat(line.indent)}
                          {line.tokens.map((token, tokenIndex) => (
                            <span key={tokenIndex} className={TOKEN_COLORS[token.c]}>
                              {token.t}
                            </span>
                          ))}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-white/[0.07] px-4 py-2">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[9px] text-white/35">
                    <GitBranch className="h-2.5 w-2.5" />
                    main
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[9px] text-emerald-400/80">
                    <span className="h-1 w-1 rounded-full bg-emerald-400" />
                    0 errors
                  </span>
                </div>
              </motion.div>

              {/* Floating: students */}
              <motion.div
                {...float(1.2)}
                className="absolute -top-1 right-0 z-20 flex items-center gap-2.5 rounded-2xl border border-ink/[0.07] bg-surface/95 p-2.5 pr-3.5 shadow-lift backdrop-blur sm:right-2 sm:gap-3 sm:p-3"
              >
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-brand-50 text-brand-600 sm:h-9 sm:w-9 dark:bg-brand-500/15 dark:text-brand-300">
                  <GraduationCap className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-ink-400">
                    Mentored
                  </p>
                  <p className="font-display text-[15px] font-bold leading-tight text-ink sm:text-base">
                    50+{' '}
                    <span className="text-[10px] font-medium text-ink-400 sm:text-[11px]">
                      students
                    </span>
                  </p>
                </div>
              </motion.div>

              {/* Floating: building */}
              <motion.div
                {...float(2.2)}
                className="absolute -bottom-1 left-0 z-20 hidden w-[190px] rounded-2xl border border-ink/[0.07] bg-surface/95 p-3 shadow-lift backdrop-blur sm:left-2 sm:block"
              >
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                  <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-ink-400">
                    Currently building
                  </span>
                </div>
                <p className="mt-1.5 flex items-baseline justify-between font-display text-[12.5px] font-semibold text-ink">
                  PreWise AI
                  <span className="font-mono text-[8px] font-normal text-ink-300">v1.0</span>
                </p>
                <div className="mt-2 h-1 overflow-hidden rounded-full bg-ink/[0.07]">
                  <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-brand-400 to-brand-600" />
                </div>
              </motion.div>

              <motion.div
                {...float(3)}
                className="absolute -right-1 bottom-12 z-20 hidden rounded-xl border border-ink/[0.07] bg-surface/90 px-2.5 py-2 shadow-soft backdrop-blur sm:block"
              >
                <Sparkles className="h-3.5 w-3.5 text-brand-500" aria-hidden="true" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Core stack strip */}
        <div className="flex flex-col gap-4 border-t border-ink/[0.07] py-6 sm:flex-row sm:items-center sm:gap-8">
          <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-ink-300">
            Core stack
          </span>
          <ul className="no-scrollbar flex items-center gap-x-6 gap-y-2 overflow-x-auto whitespace-nowrap">
            {TECH_STRIP.map((tech) => (
              <li key={tech} className="text-[12px] font-medium text-ink-400">
                {tech}
              </li>
            ))}
          </ul>
          <a
            href="#skills"
            className="hidden shrink-0 items-center gap-1 text-[11.5px] font-medium text-ink-400 transition-colors hover:text-brand-600 sm:ml-auto sm:inline-flex"
          >
            All skills
            <ArrowRight className="h-3 w-3" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
