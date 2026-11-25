import { useState } from 'react'
import {
  ArrowUpRight,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Github,
  Linkedin,
  Loader2,
  Mail,
  Send,
} from 'lucide-react'

import { contact, siteConfig } from '../data/portfolioData'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import WhatsAppIcon from '../components/WhatsAppIcon'
import { cn, whatsappUrl } from '../lib/utils'

const INITIAL_VALUES = {
  name: '',
  email: '',
  service: contact.serviceOptions[0],
  message: '',
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(values) {
  const errors = {}

  if (values.name.trim().length < 2) {
    errors.name = 'Please enter your name.'
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!values.service) {
    errors.service = 'Please choose a service.'
  }

  if (values.message.trim().length < 10) {
    errors.message = 'Please share a few details (at least 10 characters).'
  }

  return errors
}

function buildMessage(values) {
  return [
    'Hello Suman, I visited your portfolio and would like to discuss your services.',
    '',
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    `Service: ${values.service}`,
    '',
    'Message:',
    values.message.trim(),
  ].join('\n')
}

function FieldError({ id, children }) {
  if (!children) return null
  return (
    <p id={id} className="mt-1.5 text-[11.5px] font-medium text-red-600 dark:text-red-400">
      {children}
    </p>
  )
}

export default function Contact() {
  const [values, setValues] = useState(INITIAL_VALUES)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [whatsappLink, setWhatsappLink] = useState('')
  const [submitError, setSubmitError] = useState('')

  const isEndpointMode = Boolean(siteConfig.formEndpoint)
  const sending = status === 'sending'

  const updateField = (field) => (event) => {
    setValues((current) => ({ ...current, [field]: event.target.value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    if (status === 'error') setStatus('idle')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (sending) return

    setSubmitError('')
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      const firstField = Object.keys(nextErrors)[0]
      document.getElementById(`contact-${firstField}`)?.focus()
      return
    }

    const message = buildMessage(values)

    if (isEndpointMode) {
      setStatus('sending')
      try {
        const response = await fetch(siteConfig.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name: values.name.trim(),
            email: values.email.trim(),
            service: values.service,
            message: values.message.trim(),
          }),
        })

        if (!response.ok) throw new Error('Request failed')
        setStatus('success')
        setValues(INITIAL_VALUES)
      } catch {
        setStatus('error')
        setSubmitError(
          'Your message could not be sent right now. Please try WhatsApp or email instead.',
        )
      }
      return
    }

    // No backend configured: open WhatsApp with the details pre-filled.
    setStatus('sending')
    const url = whatsappUrl(message)
    setWhatsappLink(url)
    window.open(url, '_blank', 'noopener,noreferrer')

    window.setTimeout(() => {
      setStatus('success')
    }, 650)
  }

  const resetForm = () => {
    setValues(INITIAL_VALUES)
    setErrors({})
    setSubmitError('')
    setStatus('idle')
  }

  const channels = [
    {
      label: 'WhatsApp',
      value: siteConfig.whatsapp.display,
      href: whatsappUrl('general'),
      Icon: WhatsAppIcon,
      external: true,
      accent: true,
    },
    {
      label: 'Email',
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}?subject=${encodeURIComponent('Enquiry from your portfolio')}`,
      Icon: Mail,
      external: false,
    },
    {
      label: 'LinkedIn',
      value: 'in/suman-patidar-415b03348',
      href: siteConfig.socials.linkedin,
      Icon: Linkedin,
      external: true,
    },
    {
      label: 'GitHub',
      value: '@suman-coder-123',
      href: siteConfig.socials.github,
      Icon: Github,
      external: true,
    },
  ]

  const inputClass = (field) =>
    cn(
      'w-full rounded-xl border bg-canvas px-3.5 py-3 text-[13.5px] text-ink transition-all duration-200 placeholder:text-ink-300 focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-500/10',
      errors[field]
        ? 'border-red-300 bg-red-50/30 dark:border-red-500/40 dark:bg-red-500/10'
        : 'border-ink/[0.1] hover:border-ink/20',
    )

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent"
        aria-hidden="true"
      />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Contact"
          index="08"
          title={contact.title}
          description={contact.description}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Direct channels */}
          <div className="lg:col-span-5">
            <Reveal>
              <h3 className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink-400">
                Direct channels
              </h3>

              <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {channels.map(({ label, value, href, Icon, external, accent }) => (
                  <a
                    key={label}
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className={cn(
                      'group relative flex flex-col gap-3 rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-0.5',
                      accent
                        ? 'border-ink/[0.08] bg-surface hover:border-emerald-200 hover:shadow-soft dark:hover:border-emerald-500/40'
                        : 'border-ink/[0.08] bg-surface hover:border-brand-200 hover:shadow-soft dark:hover:border-brand-500/40',
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={cn(
                          'grid h-8 w-8 place-items-center rounded-lg',
                          accent
                            ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300'
                            : 'bg-canvas text-ink-500 group-hover:bg-brand-50 group-hover:text-brand-600 dark:group-hover:bg-brand-500/15 dark:group-hover:text-brand-300',
                        )}
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <ArrowUpRight
                        className="h-3.5 w-3.5 text-ink-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink-500"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold text-ink">{label}</p>
                      <p className="mt-0.5 truncate text-[11px] text-ink-400">{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-5 flex items-start gap-3 rounded-2xl border border-ink/[0.07] bg-surface/60 p-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300">
                  <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[12.5px] font-semibold text-ink">
                    Available for projects &amp; training
                  </p>
                  <p className="mt-0.5 text-[11.5px] leading-relaxed text-ink-400">
                    Based in {siteConfig.location}, working with clients and students remotely.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="mt-6 hidden lg:block">
              <div className="rounded-2xl border border-ink/[0.07] bg-surface/60 p-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink-300">
                  Prefer WhatsApp?
                </p>
                <p className="mt-2 text-[12px] leading-relaxed text-ink-500">
                  Send a short message with your idea. You can also use the form — it opens
                  WhatsApp with your details ready to send.
                </p>
                <Button
                  href={whatsappUrl('general')}
                  variant="secondary"
                  size="sm"
                  icon={WhatsAppIcon}
                  className="mt-3"
                >
                  Message on WhatsApp
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.08}>
              <div className="rounded-3xl border border-ink/[0.08] bg-surface p-5 shadow-card sm:p-8">
                {status === 'success' ? (
                  <div role="status" className="flex min-h-[430px] flex-col items-center justify-center py-8 text-center">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300">
                      <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-display text-[22px] font-semibold tracking-[-0.02em] text-ink">
                      {isEndpointMode ? 'Message sent' : 'Your message is ready'}
                    </h3>
                    <p className="mt-2 max-w-sm text-[13px] leading-relaxed text-ink-500">
                      {isEndpointMode
                        ? "Thanks for reaching out. I'll get back to you as soon as possible."
                        : 'WhatsApp should have opened in a new tab with your details filled in. Press send there so the message reaches me.'}
                    </p>

                    <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                      {!isEndpointMode ? (
                        <Button href={whatsappLink} icon={WhatsAppIcon} size="sm">
                          Open WhatsApp again
                        </Button>
                      ) : null}
                      <Button variant="secondary" size="sm" onClick={resetForm}>
                        Send another message
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate aria-busy={sending}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-[19px] font-semibold tracking-[-0.02em] text-ink">
                          Tell me about your project
                        </h3>
                        <p className="mt-1 text-[11.5px] text-ink-400">
                          Takes about a minute. No spam, ever.
                        </p>
                      </div>
                      <span className="hidden rounded-full bg-canvas px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-ink-400 sm:block">
                        Enquiry
                      </span>
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="mb-1.5 block text-[11.5px] font-medium text-ink-600"
                        >
                          Name <span className="text-brand-500">*</span>
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          placeholder="Your full name"
                          value={values.name}
                          onChange={updateField('name')}
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={errors.name ? 'contact-name-error' : undefined}
                          className={inputClass('name')}
                        />
                        <FieldError id="contact-name-error">{errors.name}</FieldError>
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="mb-1.5 block text-[11.5px] font-medium text-ink-600"
                        >
                          Email <span className="text-brand-500">*</span>
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder="you@example.com"
                          value={values.email}
                          onChange={updateField('email')}
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? 'contact-email-error' : undefined}
                          className={inputClass('email')}
                        />
                        <FieldError id="contact-email-error">{errors.email}</FieldError>
                      </div>
                    </div>

                    <div className="mt-4">
                      <label
                        htmlFor="contact-service"
                        className="mb-1.5 block text-[11.5px] font-medium text-ink-600"
                      >
                        Service interested in <span className="text-brand-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="contact-service"
                          name="service"
                          value={values.service}
                          onChange={updateField('service')}
                          aria-invalid={Boolean(errors.service)}
                          aria-describedby={errors.service ? 'contact-service-error' : undefined}
                          className={cn(inputClass('service'), 'appearance-none pr-10')}
                        >
                          {contact.serviceOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400"
                          aria-hidden="true"
                        />
                      </div>
                      <FieldError id="contact-service-error">{errors.service}</FieldError>
                    </div>

                    <div className="mt-4">
                      <div className="mb-1.5 flex items-center justify-between">
                        <label
                          htmlFor="contact-message"
                          className="block text-[11.5px] font-medium text-ink-600"
                        >
                          Message <span className="text-brand-500">*</span>
                        </label>
                        <span className="font-mono text-[9.5px] text-ink-300">
                          {values.message.length}/800
                        </span>
                      </div>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        maxLength={800}
                        placeholder="What are you building, or what would you like to learn? Share a little context."
                        value={values.message}
                        onChange={updateField('message')}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? 'contact-message-error' : undefined}
                        className={cn(inputClass('message'), 'resize-y leading-relaxed')}
                      />
                      <FieldError id="contact-message-error">{errors.message}</FieldError>
                    </div>

                    <div aria-live="polite">
                      {status === 'error' && submitError ? (
                        <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-3.5 py-2.5 text-[12px] leading-relaxed text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300">
                          {submitError}
                        </p>
                      ) : null}
                    </div>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <Button
                        type="submit"
                        size="md"
                        disabled={sending}
                        className="w-full sm:w-auto"
                        icon={sending ? Loader2 : Send}
                      >
                        {sending ? 'Preparing your message…' : 'Send Message'}
                      </Button>

                      <p className="text-[10.5px] leading-relaxed text-ink-400 sm:text-right">
                        {isEndpointMode
                          ? 'Delivered securely through the configured form service.'
                          : 'Opens WhatsApp with your details pre-filled.'}
                      </p>
                    </div>

                    <p className="mt-4 border-t border-ink/[0.06] pt-3 text-[10px] leading-relaxed text-ink-300">
                      This website does not store form submissions. Your information is only used to
                      reply to your enquiry.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
