import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import Seo from '../components/Seo.jsx'

import Hero from '../sections/Hero.jsx'
import About from '../sections/About.jsx'
import Services from '../sections/Services.jsx'
import Projects from '../sections/Projects.jsx'
import Skills from '../sections/Skills.jsx'
import Training from '../sections/Training.jsx'
import Roadmap from '../sections/Roadmap.jsx'
import Experience from '../sections/Experience.jsx'
import Process from '../sections/Process.jsx'
import Contact from '../sections/Contact.jsx'

import { structuredData } from '../data/portfolioData'

export default function Home() {
  return (
    <>
      <Seo jsonLd={structuredData} />
      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Training />
        <Roadmap />
        <Experience />
        <Process />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
