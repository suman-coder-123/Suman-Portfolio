import { ArrowUpRight, GraduationCap, Globe2, Sparkles, Store } from 'lucide-react'
import { whatsappUrl } from '../lib/utils'
import Reveal from './Reveal'

const ICONS = {
  globe: Globe2,
  graduation: GraduationCap,
  store: Store,
  sparkles: Sparkles,
}

export default function ServiceCard({ service, index = 0 }) {
  const Icon = ICONS[service.icon] || Sparkles

  return (
    <Reveal
      delay={index * 0.06}
      className="h-full"
      as="article"
      aria-labelledby={`service-${service.id}`}
    >
      <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink/[0.08] bg-surface p-6 transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift dark:hover:border-brand-500/40 sm:p-7">
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-50 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 dark:bg-brand-500/10"
          aria-hidden="true"
        />

        <div className="relative flex items-start justify-between gap-4">
          <span className="grid h-11 w-11 place-items-center rounded-xl border border-ink/[0.06] bg-canvas text-ink-700 transition-colors duration-300 group-hover:border-brand-100 group-hover:bg-brand-50 group-hover:text-brand-600 dark:group-hover:border-brand-500/30 dark:group-hover:bg-brand-500/15 dark:group-hover:text-brand-300">
            <Icon className="h-[19px] w-[19px]" strokeWidth={1.7} aria-hidden="true" />
          </span>
          <span className="font-mono text-[11px] tracking-[0.16em] text-ink-300">
            {service.number}
          </span>
        </div>

        <h3
          id={`service-${service.id}`}
          className="relative mt-5 font-display text-[19px] font-semibold leading-snug tracking-[-0.02em] text-ink"
        >
          {service.title}
        </h3>

        <p className="relative mt-2.5 text-[13.5px] leading-relaxed text-ink-500">
          {service.description}
        </p>

        <div className="relative my-5 h-px w-full bg-ink/[0.07]" aria-hidden="true" />

        <ul className="relative grid gap-x-4 gap-y-1.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {service.items.map((item) => (
            <li key={item} className="flex items-start gap-1.5 text-[12px] leading-snug text-ink-500">
              <span
                className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-brand-300 dark:bg-brand-500/70"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <a
          href={whatsappUrl(service.cta.message)}
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-6 inline-flex w-fit items-center gap-1.5 border-b border-transparent pb-0.5 text-[13px] font-semibold text-ink transition-colors duration-200 hover:border-brand-400 hover:text-brand-600"
        >
          {service.cta.label}
          <ArrowUpRight
            className="h-3.5 w-3.5 transition-transform duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
          <span className="sr-only">(opens WhatsApp in a new tab)</span>
        </a>
      </div>
    </Reveal>
  )
}
