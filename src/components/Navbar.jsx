import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

import { navigation, siteConfig } from '../data/portfolioData'
import { cn, whatsappUrl } from '../lib/utils'
import { useActiveSection, useScrolled } from '../lib/hooks'
import Button from './Button'
import ThemeToggle from './ThemeToggle'

const SECTION_IDS = ['home', 'about', 'services', 'projects', 'training', 'contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const scrolled = useScrolled(16)
  const active = useActiveSection(SECTION_IDS)
  const reduceMotion = useReducedMotion()
  const location = useLocation()
  const onHome = location.pathname === '/'

  const navItems = useMemo(
    () => navigation.map((item) => ({ ...item, id: item.href.replace('#', '') })),
    [],
  )

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight
      setProgress(height > 0 ? Math.min(100, (window.scrollY / height) * 100) : 0)
    }
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-premium',
        scrolled || open
          ? 'border-b border-ink/[0.07] bg-canvas/85 shadow-[0_1px_20px_-12px_rgba(10,15,26,0.3)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <div className="container-page">
        <div className="flex h-[72px] items-center justify-between gap-4">
          {/* Brand */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="group flex items-center gap-2.5 rounded-lg"
            aria-label="Suman Patidar — home"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-navy font-display text-[13px] font-bold tracking-tight text-white shadow-soft ring-1 ring-inset ring-white/10 transition-transform duration-300 group-hover:-translate-y-0.5">
              SP
            </span>
            <span className="leading-tight">
              <span className="block font-display text-[15px] font-semibold tracking-[-0.02em] text-ink">
                Suman Patidar
              </span>
              <span className="hidden font-mono text-[9px] uppercase tracking-[0.16em] text-ink-400 sm:block">
                Developer · Trainer
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => {
              const isActive = onHome && active === item.id
              return (
                <a
                  key={item.id}
                  href={onHome ? item.href : `/${item.href}`}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'relative rounded-full px-3.5 py-2 text-[13.5px] font-medium transition-colors duration-200',
                    isActive ? 'text-ink' : 'text-ink-500 hover:text-ink',
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      'absolute inset-x-0 -bottom-0.5 mx-auto h-1 w-1 rounded-full bg-brand-500 transition-all duration-300',
                      isActive ? 'opacity-100' : 'opacity-0',
                    )}
                    aria-hidden="true"
                  />
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              href={whatsappUrl('general')}
              size="sm"
              className="hidden sm:inline-flex"
              showArrow
            >
              Let&apos;s Work Together
            </Button>

            <ThemeToggle />

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-surface/70 text-ink transition-colors hover:bg-surface lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll progress */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-transparent" aria-hidden="true">
        <div
          className="h-full bg-gradient-to-r from-brand-500/0 via-brand-500/60 to-brand-600/0 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100vh - 72px)' }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-y-auto overscroll-contain border-t border-ink/[0.06] bg-canvas/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-page flex min-h-full flex-col pb-10 pt-6">
              <nav aria-label="Mobile navigation" className="flex flex-col">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + index * 0.045, duration: 0.35 }}
                    className="flex items-center justify-between border-b border-ink/[0.07] py-4"
                  >
                    <span className="font-display text-[22px] font-medium tracking-[-0.02em] text-ink">
                      {item.label}
                    </span>
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-[10px] tracking-widest text-ink-300">
                        0{index + 1}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-ink-300" aria-hidden="true" />
                    </span>
                  </motion.a>
                ))}
              </nav>

              <div className="mt-8">
                <Button
                  href={whatsappUrl('general')}
                  size="lg"
                  className="w-full"
                  showArrow
                  onClick={() => setOpen(false)}
                >
                  Let&apos;s Work Together
                </Button>

                <div className="mt-6 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-[12px] text-ink-500">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    {siteConfig.availability}
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={siteConfig.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn profile"
                      className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-surface text-ink-500 transition-colors hover:text-brand-600"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href={siteConfig.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub profile"
                      className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-surface text-ink-500 transition-colors hover:text-brand-600"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
