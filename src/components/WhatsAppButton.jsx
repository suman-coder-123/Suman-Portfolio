import { useEffect, useState } from 'react'
import { whatsappUrl } from '../lib/utils'
import WhatsAppIcon from './WhatsAppIcon'

/**
 * Floating WhatsApp shortcut.
 * - Stays visible while scrolling through the site.
 * - Fades out over the contact section and footer, where direct channels are
 *   already visible (and where it would otherwise cover form actions on mobile).
 * - Uses a safe-area inset so it clears mobile browser toolbars.
 */
export default function WhatsAppButton() {
  const [nearContact, setNearContact] = useState(false)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const targets = [
      document.getElementById('contact'),
      document.querySelector('footer'),
    ].filter(Boolean)

    if (!targets.length) return

    const visibleTargets = new Set()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visibleTargets.add(entry.target)
          else visibleTargets.delete(entry.target)
        })
        setNearContact(visibleTargets.size > 0)
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0 },
    )

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={`fixed right-4 z-40 transition-all duration-300 ease-premium sm:right-6 ${
        nearContact
          ? 'pointer-events-none translate-y-3 opacity-0'
          : 'translate-y-0 opacity-100'
      }`}
      style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom, 0px))' }}
    >
      <a
        href={whatsappUrl('general')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Suman Patidar on WhatsApp"
        aria-hidden={nearContact}
        tabIndex={nearContact ? -1 : 0}
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.7)] transition-transform duration-300 ease-premium hover:scale-105 focus-visible:scale-105 sm:h-14 sm:w-14"
      >
        <span
          className="absolute inset-0 rounded-full bg-whatsapp/40 motion-safe:animate-pulse-ring"
          aria-hidden="true"
        />
        <WhatsAppIcon className="relative h-5 w-5 sm:h-6 sm:w-6" />

        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-navy px-3 py-1.5 text-[11px] font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 md:block">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  )
}
