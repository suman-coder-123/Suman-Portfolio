import { ArrowRight } from 'lucide-react'

import { services } from '../data/portfolioData'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding relative border-y border-ink/[0.06] bg-surface"
    >
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Services"
            index="02"
            title="Digital Solutions for People and Businesses"
            description="I help individuals, students, and businesses turn ideas into practical digital solutions."
          />

          <Reveal delay={0.1} className="shrink-0">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-[12.5px] font-medium text-ink-500 transition-colors hover:text-brand-600"
            >
              Not sure what you need? Let&apos;s talk
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
