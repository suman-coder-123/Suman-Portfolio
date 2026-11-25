import { Code2, Coffee, Database, LayoutTemplate, Server, Wrench } from 'lucide-react'
import Reveal from './Reveal'

const ICONS = {
  layout: LayoutTemplate,
  server: Server,
  coffee: Coffee,
  database: Database,
  code: Code2,
  wrench: Wrench,
}

export default function SkillCard({ group, index = 0 }) {
  const Icon = ICONS[group.icon] || Code2

  return (
    <Reveal
      delay={index * 0.05}
      className="h-full"
      as="article"
      aria-labelledby={`skill-${group.category.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="group flex h-full flex-col rounded-2xl border border-ink/[0.08] bg-surface p-5 transition-all duration-500 ease-premium hover:-translate-y-0.5 hover:border-ink/15 hover:shadow-soft sm:p-6">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-canvas text-ink-500 transition-colors duration-300 group-hover:bg-brand-50 group-hover:text-brand-600 dark:group-hover:bg-brand-500/15 dark:group-hover:text-brand-300">
            <Icon className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
          </span>
          <h3
            id={`skill-${group.category.replace(/\s+/g, '-').toLowerCase()}`}
            className="flex-1 font-display text-[15px] font-semibold tracking-[-0.015em] text-ink"
          >
            {group.category}
          </h3>
          <span className="font-mono text-[9px] tracking-[0.1em] text-ink-300">
            {group.items.length}
          </span>
        </div>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {group.items.map((item) => (
            <li
              key={item}
              className="rounded-md border border-ink/[0.06] bg-canvas px-2 py-1 text-[11.5px] font-medium text-ink-500 transition-colors duration-200 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700 dark:hover:border-brand-500/40 dark:hover:bg-brand-500/15 dark:hover:text-brand-300"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}
