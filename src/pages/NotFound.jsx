import { Link, useLocation } from 'react-router-dom'
import { ArrowLeft, MessageCircle } from 'lucide-react'

import Seo from '../components/Seo.jsx'
import Button from '../components/Button.jsx'
import { siteConfig } from '../data/portfolioData'
import { whatsappUrl } from '../lib/utils'

export default function NotFound() {
  const location = useLocation()

  return (
    <>
      <Seo
        title="Page Not Found | Suman Patidar"
        description="The page you're looking for doesn't exist. Return to Suman Patidar's portfolio to explore website development, Java Full Stack training, and freelance digital services."
        path={location.pathname}
        noindex
      />

      <div className="flex min-h-screen flex-col bg-canvas">
        <header className="border-b border-ink/[0.06]">
          <div className="container-page flex h-[72px] items-center justify-between">
            <Link to="/" className="flex items-center gap-2.5" aria-label="Suman Patidar — home">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-navy font-display text-[13px] font-bold text-white ring-1 ring-inset ring-white/10">
                {siteConfig.initials}
              </span>
              <span className="font-display text-[15px] font-semibold tracking-[-0.02em] text-ink">
                {siteConfig.name}
              </span>
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-ink-500 transition-colors hover:text-ink"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              Back home
            </Link>
          </div>
        </header>

        <main id="main-content" className="relative flex flex-1 items-center overflow-hidden">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-100/40 blur-3xl dark:bg-brand-500/10" />
          </div>

          <div className="container-page relative py-20">
            <div className="mx-auto max-w-xl text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand-600">
                Error 404
              </p>
              <p
                className="mt-4 font-display text-[92px] font-bold leading-none tracking-[-0.06em] text-ink/10 sm:text-[128px]"
                aria-hidden="true"
              >
                404
              </p>
              <h1 className="mt-2 font-display text-[30px] font-semibold leading-tight tracking-[-0.03em] text-ink sm:text-[38px]">
                This page took a different route.
              </h1>
              <p className="mx-auto mt-4 max-w-md text-[14px] leading-relaxed text-ink-500">
                The page you&apos;re looking for doesn&apos;t exist or may have moved. Head back to
                the portfolio, or send me a message directly.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-2.5 sm:flex-row">
                <Button href="/" icon={ArrowLeft}>
                  Back to Portfolio
                </Button>
                <Button
                  href={whatsappUrl('general')}
                  variant="secondary"
                  icon={MessageCircle}
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </main>

        <footer className="border-t border-ink/[0.06] py-5">
          <p className="container-page text-center text-[11px] text-ink-400">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  )
}
