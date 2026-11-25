import { cn } from '../lib/utils'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  index,
  align = 'left',
  titleClassName,
  className,
}) {
  const centered = align === 'center'

  return (
    <div
      className={cn(
        'max-w-3xl',
        centered && 'mx-auto flex flex-col items-center text-center',
        className,
      )}
    >
      {(eyebrow || index) && (
        <div className={cn('flex items-center gap-3', centered && 'justify-center')}>
          {index ? (
            <span className="font-mono text-[11px] tracking-[0.16em] text-ink-300">{index}</span>
          ) : null}
          {index ? <span className="h-px w-5 bg-ink/15" aria-hidden="true" /> : null}
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        </div>
      )}

      <h2
        className={cn(
          'mt-5 font-display text-[clamp(1.95rem,4.2vw,3.1rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-ink',
          titleClassName,
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            'mt-5 text-[15px] leading-[1.75] text-ink-500 sm:text-base',
            centered ? 'max-w-2xl' : 'max-w-2xl',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
