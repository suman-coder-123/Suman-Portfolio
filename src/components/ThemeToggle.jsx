import { Moon, Sun } from 'lucide-react'
import { cn } from '../lib/utils'
import { useTheme } from '../lib/theme'

export default function ThemeToggle({ className }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={cn(
        'group/theme grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/[0.1] bg-surface/70 text-ink-500 transition-all duration-300 ease-premium hover:border-ink/20 hover:bg-surface hover:text-ink',
        className,
      )}
    >
      <span className="relative block h-4 w-4" aria-hidden="true">
        <Sun
          className={cn(
            'absolute inset-0 h-4 w-4 transition-all duration-300 ease-premium',
            isDark ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-50 opacity-0',
          )}
          strokeWidth={1.8}
        />
        <Moon
          className={cn(
            'absolute inset-0 h-4 w-4 transition-all duration-300 ease-premium',
            isDark ? '-rotate-90 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100',
          )}
          strokeWidth={1.8}
        />
      </span>
    </button>
  )
}
