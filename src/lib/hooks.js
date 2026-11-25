import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in the viewport so the navbar can
 * highlight the matching link.
 */
export function useActiveSection(sectionIds, offset = 140) {
  const [active, setActive] = useState(sectionIds[0])

  useEffect(() => {
    const handler = () => {
      const scrollPosition = window.scrollY + offset
      let current = sectionIds[0]

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.offsetTop <= scrollPosition) current = id
      }

      // Snap to the last section when the page is scrolled to the bottom.
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 24) {
        current = sectionIds[sectionIds.length - 1]
      }

      setActive(current)
    }

    handler()
    window.addEventListener('scroll', handler, { passive: true })
    window.addEventListener('resize', handler)
    return () => {
      window.removeEventListener('scroll', handler)
      window.removeEventListener('resize', handler)
    }
  }, [sectionIds, offset])

  return active
}

/** Returns true once the page has scrolled past the given threshold. */
export function useScrolled(threshold = 12) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}
