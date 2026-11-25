import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'suman-portfolio-theme'
const THEME_COLORS = {
  light: '#FAFAF7',
  dark: '#0A0F18',
}

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
  setTheme: () => {},
})

function getInitialTheme() {
  if (typeof document === 'undefined') return 'light'
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

function applyTheme(theme) {
  const root = document.documentElement
  const isDark = theme === 'dark'

  root.classList.toggle('dark', isDark)
  root.style.colorScheme = isDark ? 'dark' : 'light'

  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', THEME_COLORS[isDark ? 'dark' : 'light'])
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(getInitialTheme)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (event) => {
      // Only follow the OS if the visitor has not chosen a theme yet.
      if (!window.localStorage.getItem(STORAGE_KEY)) {
        setThemeState(event.matches ? 'dark' : 'light')
      }
    }

    media.addEventListener?.('change', handleChange)
    return () => media.removeEventListener?.('change', handleChange)
  }, [])

  const setTheme = useCallback((next) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Private mode can block storage — the theme still applies for this visit.
    }
    setThemeState(next)
  }, [])

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark'

    const root = document.documentElement
    root.classList.add('theme-transition')
    window.setTimeout(() => root.classList.remove('theme-transition'), 400)

    setTheme(next)
  }, [setTheme, theme])

  const value = useMemo(
    () => ({ theme, toggleTheme, setTheme }),
    [setTheme, theme, toggleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}
