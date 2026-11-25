import { siteConfig, whatsappMessages } from '../data/portfolioData'

/** Join class names while ignoring falsy values. */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

/** Digits-only WhatsApp number, ready for wa.me links. */
export function getWhatsAppNumber() {
  return String(siteConfig.whatsapp.number || '').replace(/\D/g, '')
}

/**
 * Build a wa.me deep link with a pre-filled message.
 * Always opens in a new tab (paired with target="_blank" rel="noopener noreferrer").
 */
export function whatsappUrl(messageKeyOrText = 'general') {
  const message = whatsappMessages[messageKeyOrText] ?? messageKeyOrText
  return `https://wa.me/${getWhatsAppNumber()}?text=${encodeURIComponent(message)}`
}

export function mailtoUrl(subject = 'Project enquiry from your portfolio') {
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}`
}

/** True when a real contact number has been configured yet. */
export function hasWhatsAppConfigured() {
  return getWhatsAppNumber().length >= 8
}
