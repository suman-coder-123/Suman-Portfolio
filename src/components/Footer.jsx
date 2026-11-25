import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

import {
  footer as footerContent,
  navigation,
  services,
  siteConfig,
} from '../data/portfolioData'
import { whatsappUrl } from '../lib/utils'
import WhatsAppIcon from './WhatsAppIcon'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-navy text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-brand-500/20 blur-[100px]"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="grid gap-12 py-14 md:grid-cols-12 md:py-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-flex items-center gap-2.5" aria-label="Go to homepage">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white font-display text-sm font-bold text-navy">
                {siteConfig.initials}
              </span>
              <span className="font-display text-lg font-semibold tracking-[-0.02em]">
                {siteConfig.name}
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-white/60">
              {footerContent.text}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {footerContent.roles.map((role) => (
                <li
                  key={role}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium tracking-wide text-white/70"
                >
                  {role}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex items-center gap-2.5">
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/12 text-white/70 transition-colors hover:border-white/30 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/12 text-white/70 transition-colors hover:border-white/30 hover:text-white"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Send an email"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/12 text-white/70 transition-colors hover:border-white/30 hover:text-white"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={whatsappUrl('general')}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/12 text-white/70 transition-colors hover:border-white/30 hover:text-white"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <nav className="md:col-span-2" aria-label="Footer navigation">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[13.5px] text-white/65 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav className="md:col-span-3" aria-label="Services">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-[13.5px] leading-snug text-white/65 transition-colors hover:text-white"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:col-span-2">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-[13px] text-white/65">
              <li>
                <a
                  href={whatsappUrl('general')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex break-all transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-white/45">{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11.5px] text-white/40">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/30">
              Built with React &amp; Tailwind
            </p>
            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-1.5 rounded-full border border-white/12 px-3 py-1.5 text-[11px] font-medium text-white/60 transition-colors hover:border-white/30 hover:text-white"
            >
              Back to top
              <ArrowUp className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
