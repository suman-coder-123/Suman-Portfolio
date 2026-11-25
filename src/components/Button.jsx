import { ArrowRight } from 'lucide-react'
import { cn } from '../lib/utils'

const variants = {
  primary:
    'bg-navy text-white shadow-soft ring-1 ring-inset ring-white/[0.08] hover:bg-navy-800 hover:shadow-lift dark:bg-brand-600 dark:ring-white/10 dark:hover:bg-brand-500 active:translate-y-px',
  accent:
    'bg-brand-600 text-white shadow-soft hover:bg-brand-700 hover:shadow-lift active:translate-y-px',
  secondary:
    'border border-ink/[0.12] bg-surface text-ink hover:border-ink/25 hover:bg-surface hover:shadow-soft dark:border-ink/[0.16] dark:hover:border-ink/[0.28] active:translate-y-px',
  ghost: 'text-ink hover:bg-ink/[0.05]',
  light:
    'bg-white text-[#0A0F1A] shadow-soft hover:bg-brand-50 active:translate-y-px',
  dark: 'bg-white/[0.06] text-white ring-1 ring-white/15 backdrop-blur hover:bg-white/[0.12]',
}

const sizes = {
  sm: 'h-9 gap-1.5 px-4 text-[13px]',
  md: 'h-11 gap-2 px-5 text-sm',
  lg: 'h-[52px] gap-2 px-6 text-[15px]',
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  showArrow = false,
  className,
  external,
  ...props
}) {
  const isExternal =
    external ?? (typeof href === 'string' && /^(https?:|mailto:|tel:)/.test(href))

  const classes = cn(
    'group/btn inline-flex select-none items-center justify-center rounded-full font-medium tracking-[-0.01em] transition-all duration-300 ease-premium disabled:pointer-events-none disabled:opacity-50',
    variants[variant],
    sizes[size],
    className,
  )

  const content = (
    <>
      {Icon ? <Icon className="h-4 w-4 shrink-0" aria-hidden="true" /> : null}
      <span>{children}</span>
      {showArrow ? (
        <ArrowRight
          className="h-4 w-4 shrink-0 transition-transform duration-300 ease-premium group-hover/btn:translate-x-0.5"
          aria-hidden="true"
        />
      ) : null}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  )
}
