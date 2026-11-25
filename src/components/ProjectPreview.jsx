import { Apple, Carrot, Cookie, Milk, MapPin, Search, ShieldCheck, Sparkles } from 'lucide-react'
import { cn } from '../lib/utils'

function BrowserShell({ url, children }) {
  return (
    <div className="flex h-full w-full flex-col bg-white">
      <div className="flex h-6 shrink-0 items-center gap-1.5 border-b border-black/[0.06] bg-[#F4F4F0] px-2 sm:h-7 sm:px-3">
        <span className="h-1.5 w-1.5 rounded-full bg-[#E5A09A]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#E8CD9A]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#A9CDA8]" />
        <div className="ml-1.5 flex min-w-0 flex-1 items-center justify-center sm:ml-3">
          <div className="flex w-full max-w-[240px] items-center gap-1 rounded-md border border-black/[0.05] bg-white px-1.5 py-[3px]">
            <ShieldCheck className="h-2 w-2 shrink-0 text-emerald-500" />
            <span className="truncate font-mono text-[6.5px] tracking-tight text-ink-400 sm:text-[7.5px]">
              {url}
            </span>
          </div>
        </div>
        <span className="hidden h-1 w-4 rounded-full bg-black/10 sm:block" />
      </div>
      <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
    </div>
  )
}

/* ---------------------------------------------------------------- PreWise AI */

function AiPreview() {
  return (
    <div className="flex h-full bg-[#F5F8FD]">
      <aside className="hidden w-[17%] shrink-0 flex-col bg-navy p-2.5 sm:flex">
        <div className="flex items-center gap-1.5">
          <span className="grid h-4 w-4 place-items-center rounded bg-white text-[6px] font-bold text-navy">
            P
          </span>
          <span className="font-display text-[7px] font-semibold tracking-wide text-white">
            PreWise
          </span>
        </div>
        <div className="mt-4 space-y-1">
          {['Dashboard', 'Resume', 'Interview', 'Skills'].map((item, index) => (
            <div
              key={item}
              className={cn(
                'rounded px-1.5 py-1 text-[6.5px] font-medium',
                index === 1 ? 'bg-white/[0.12] text-white' : 'text-white/40',
              )}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="mt-auto rounded border border-white/10 p-1.5">
          <div className="h-1 w-8 rounded-full bg-white/30" />
          <div className="mt-1 h-1 w-5 rounded-full bg-white/15" />
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col p-2 sm:p-3.5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-mono text-[5.5px] uppercase tracking-[0.18em] text-slate-400 sm:text-[6.5px]">
              Career dashboard
            </p>
            <p className="mt-0.5 font-display text-[10px] font-semibold tracking-tight text-slate-900 sm:text-[13px]">
              Resume analysis
            </p>
          </div>
          <span className="hidden items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-1.5 py-0.5 text-[5.5px] font-medium text-emerald-700 sm:inline-flex">
            <span className="h-1 w-1 rounded-full bg-emerald-500" />
            Analysis ready
          </span>
        </div>

        <div className="mt-2 grid grid-cols-5 gap-1.5 sm:gap-2">
          <div className="col-span-2 rounded-lg border border-slate-200/80 bg-white p-2">
            <p className="text-[6px] font-medium text-slate-400 sm:text-[7px]">ATS Score</p>
            <div className="mt-1 flex items-center gap-1.5">
              <div className="relative h-10 w-10 shrink-0 sm:h-12 sm:w-12">
                <svg viewBox="0 0 44 44" className="h-full w-full">
                  <circle cx="22" cy="22" r="18" fill="none" stroke="#E9EEF6" strokeWidth="4.5" />
                  <circle
                    cx="22"
                    cy="22"
                    r="18"
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeDasharray="113"
                    strokeDashoffset="15"
                    transform="rotate(-90 22 22)"
                  />
                </svg>
                <span className="absolute inset-0 grid place-items-center font-display text-[12px] font-bold text-slate-900 sm:text-[14px]">
                  87
                </span>
              </div>
              <div className="min-w-0">
                <p className="text-[6px] font-semibold text-emerald-600 sm:text-[7px]">Strong match</p>
                <p className="mt-0.5 hidden text-[5.5px] leading-tight text-slate-400 sm:block">
                  Top 18% of applicants
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-3 rounded-lg border border-slate-200/80 bg-white p-2">
            <div className="flex items-center justify-between">
              <p className="text-[6px] font-medium text-slate-400 sm:text-[7px]">Skill match</p>
              <p className="text-[5.5px] text-slate-400">vs. role</p>
            </div>
            <div className="mt-1.5 space-y-1.5">
              {[
                ['React.js', '92%', 'w-[92%]'],
                ['Node.js', '84%', 'w-[84%]'],
                ['MongoDB', '76%', 'w-[76%]'],
              ].map(([label, value, width]) => (
                <div key={label}>
                  <div className="flex items-center justify-between text-[5.5px] text-slate-500 sm:text-[6.5px]">
                    <span>{label}</span>
                    <span className="font-medium text-slate-700">{value}</span>
                  </div>
                  <div className="mt-0.5 h-1 overflow-hidden rounded-full bg-slate-100">
                    <div className={cn('h-full rounded-full bg-brand-500', width)} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-1.5 grid grid-cols-2 gap-1.5 sm:mt-2 sm:gap-2">
          <div className="rounded-lg border border-slate-200/80 bg-white p-2">
            <p className="text-[5.5px] font-medium text-slate-400 sm:text-[6.5px]">Strengths</p>
            <div className="mt-1 flex flex-wrap gap-1">
              {['Project depth', 'React', 'REST APIs'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-emerald-50 px-1.5 py-[2px] text-[5px] font-medium text-emerald-700 sm:text-[5.5px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-slate-200/80 bg-white p-2">
            <p className="text-[5.5px] font-medium text-slate-400 sm:text-[6.5px]">Missing skills</p>
            <div className="mt-1 flex flex-wrap gap-1">
              {['Docker', 'Testing'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-amber-50 px-1.5 py-[2px] text-[5px] font-medium text-amber-700 sm:text-[5.5px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-1.5 hidden items-start gap-1.5 rounded-lg border border-brand-200/70 bg-white p-2 sm:mt-2 sm:flex">
          <span className="grid h-4 w-4 shrink-0 place-items-center rounded bg-brand-50 text-brand-600">
            <Sparkles className="h-2.5 w-2.5" />
          </span>
          <div className="min-w-0">
            <p className="text-[5.5px] font-semibold text-slate-500">AI interview question</p>
            <p className="truncate text-[6.5px] leading-tight text-slate-600">
              “Walk me through how you structured your authentication flow.”
            </p>
          </div>
        </div>

        <div className="mt-1.5 hidden gap-1.5 sm:mt-2 sm:grid sm:grid-cols-3">
          {[
            ['Frontend Developer', '92%'],
            ['Full Stack Developer', '88%'],
            ['React Developer', '90%'],
          ].map(([role, match]) => (
            <div
              key={role}
              className="flex items-center justify-between gap-1 rounded-lg border border-slate-200/80 bg-white px-2 py-1.5"
            >
              <span className="truncate text-[5.5px] font-medium text-slate-500">{role}</span>
              <span className="shrink-0 rounded bg-emerald-50 px-1 py-[1px] text-[5px] font-semibold text-emerald-700">
                {match}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-auto hidden items-center justify-between border-t border-slate-200/70 pt-2 sm:flex">
          <span className="font-mono text-[5px] uppercase tracking-[0.12em] text-slate-400">
            Last analysis · 2 hours ago
          </span>
          <span className="rounded bg-navy px-1.5 py-[2px] text-[5px] font-medium text-white">
            New analysis
          </span>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------ Luxury hotel */

function HotelPreview() {
  return (
    <div className="flex h-full flex-col bg-[#F6F2EC]">
      <div className="flex shrink-0 items-center justify-between px-2.5 py-1.5 sm:px-4 sm:py-2.5">
        <span className="font-display text-[7px] font-semibold tracking-[0.32em] text-[#37322B] sm:text-[8.5px]">
          AURELIA
        </span>
        <div className="hidden items-center gap-2.5 text-[5.5px] font-medium uppercase tracking-[0.16em] text-[#6C6459] sm:flex">
          <span>Suites</span>
          <span>Dining</span>
          <span>Spa</span>
        </div>
        <span className="rounded-full border border-[#37322B]/25 px-1.5 py-[3px] text-[5.5px] font-medium uppercase tracking-wider text-[#37322B]">
          Book
        </span>
      </div>

      <div className="relative mx-2 flex-1 overflow-hidden rounded-md sm:mx-3 sm:rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D8CBB8] via-[#A7937A] to-[#4B4238]" />
        <div className="absolute -left-8 -top-10 h-32 w-32 rounded-full bg-white/20 blur-2xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

        <div className="absolute inset-x-3 bottom-2.5 text-white sm:bottom-3.5">
          <p className="font-mono text-[5px] uppercase tracking-[0.25em] text-white/70 sm:text-[6px]">
            The Aurelia · Udaipur
          </p>
          <p className="mt-0.5 font-display text-[14px] font-medium leading-[1.05] tracking-[-0.02em] sm:text-[19px]">
            Stay beyond
            <br />
            the ordinary.
          </p>
        </div>

        <div className="absolute right-2 top-2 rounded-md bg-white/95 p-1.5 shadow-sm backdrop-blur sm:right-3 sm:top-3 sm:p-2">
          <p className="text-[5px] font-semibold uppercase tracking-wider text-[#37322B] sm:text-[5.5px]">
            Reserve
          </p>
          <div className="mt-1 flex items-center gap-1">
            <span className="rounded border border-black/10 px-1 py-[2px] text-[5px] text-[#6C6459] sm:text-[5.5px]">
              Check in
            </span>
            <span className="rounded border border-black/10 px-1 py-[2px] text-[5px] text-[#6C6459] sm:text-[5.5px]">
              Check out
            </span>
            <span className="rounded bg-[#37322B] px-1.5 py-[2px] text-[5px] font-medium text-white sm:text-[5.5px]">
              Search
            </span>
          </div>
        </div>
      </div>

      <div className="grid shrink-0 grid-cols-3 gap-1.5 p-2 sm:gap-2 sm:p-3">
        {[
          ['Garden Suite', 'from-[#DCD3C6] to-[#B8A992]'],
          ['Lake Villa', 'from-[#CFD4CE] to-[#8F9B90]'],
          ['Royal Suite', 'from-[#E0D2C0] to-[#BFAB92]'],
        ].map(([name, gradient]) => (
          <div key={name} className="flex items-center gap-1.5 rounded-md border border-black/[0.06] bg-white p-1 sm:p-1.5">
            <div className={cn('h-5 w-6 shrink-0 rounded-sm bg-gradient-to-br sm:h-6 sm:w-8', gradient)} />
            <div className="min-w-0">
              <p className="truncate text-[5px] font-medium text-[#37322B] sm:text-[6px]">{name}</p>
              <p className="text-[4.5px] text-[#8C8377] sm:text-[5.5px]">From ₹8,400</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ---------------------------------------------------------------- Travel/bus */

function TravelPreview() {
  return (
    <div className="flex h-full flex-col bg-[#FBF7F0]">
      <div className="flex shrink-0 items-center justify-between px-2.5 py-1.5 sm:px-4 sm:py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="grid h-4 w-4 place-items-center rounded-full bg-[#C05621] text-[6px] font-bold text-white sm:h-5 sm:w-5">
            S
          </span>
          <span className="font-display text-[7px] font-semibold tracking-tight text-[#3B2E24] sm:text-[9px]">
            Sunrise Travels
          </span>
        </div>
        <div className="hidden items-center gap-2.5 text-[5.5px] font-medium text-[#8A7663] sm:flex">
          <span>Packages</span>
          <span>Destinations</span>
          <span>About</span>
        </div>
        <span className="rounded-full bg-[#3B2E24] px-1.5 py-[3px] text-[5.5px] font-medium text-white">
          Book now
        </span>
      </div>

      <div className="mx-2 flex shrink-0 overflow-hidden rounded-md bg-[#F3E6D5] sm:mx-3">
        <div className="flex-1 p-2 sm:p-3.5">
          <p className="font-mono text-[4.5px] uppercase tracking-[0.2em] text-[#A0764F] sm:text-[5.5px]">
            Comfortable journeys
          </p>
          <p className="mt-1 font-display text-[11px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#3B2E24] sm:text-[15px]">
            Sacred journeys,
            <br />
            comfortable rides.
          </p>
          <div className="mt-1.5 flex items-center gap-1">
            <span className="rounded-full bg-[#C05621] px-1.5 py-[3px] text-[5px] font-medium text-white sm:text-[5.5px]">
              Explore packages
            </span>
            <span className="text-[5px] font-medium text-[#8A7663] sm:text-[5.5px]">· 120+ routes</span>
          </div>
        </div>
        <div className="relative w-[38%] shrink-0 overflow-hidden bg-gradient-to-br from-[#D9A15E] via-[#B87333] to-[#6B3A1E]">
          <span className="absolute right-2 top-2 h-5 w-5 rounded-full bg-[#FFE3A8]/80 blur-[1px] sm:h-7 sm:w-7" />
          <div className="absolute bottom-0 left-0 right-0 h-7 rounded-t-[100%] bg-[#5E3A22]/70 sm:h-9" />
          <div className="absolute bottom-0 left-4 right-4 h-4 rounded-t-[100%] bg-[#3B2E24]/60 sm:h-5" />
          <div className="absolute bottom-1 left-1/2 h-1.5 w-10 -translate-x-1/2 rounded-full bg-white/30 sm:h-2 sm:w-14" />
        </div>
      </div>

      <div className="mt-1.5 grid shrink-0 grid-cols-3 gap-1.5 px-2 sm:mt-2 sm:gap-2 sm:px-3">
        {[
          ['Varanasi', '3N / 4D', 'from-[#E8C9A4] to-[#B98A55]'],
          ['Char Dham', '9N / 10D', 'from-[#C8D3C5] to-[#7E9181]'],
          ['Ujjain', '2N / 3D', 'from-[#E5CBBE] to-[#B78C78]'],
        ].map(([name, nights, gradient]) => (
          <div key={name} className="overflow-hidden rounded-md border border-black/[0.06] bg-white">
            <div className={cn('h-5 bg-gradient-to-br sm:h-7', gradient)} />
            <div className="p-1 sm:p-1.5">
              <p className="truncate text-[5px] font-semibold text-[#3B2E24] sm:text-[6.5px]">{name}</p>
              <p className="text-[4.5px] text-[#9B8877] sm:text-[5.5px]">{nights}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between px-2 pb-1.5 pt-1 sm:px-3 sm:pb-2">
        <span className="hidden items-center gap-1 text-[5px] text-[#9B8877] sm:flex sm:text-[5.5px]">
          <MapPin className="h-2 w-2" /> Trusted by 4,000+ travellers
        </span>
        <span className="ml-auto flex items-center gap-1 rounded-full bg-[#25D366] px-1.5 py-[3px] text-[5px] font-semibold text-white sm:text-[5.5px]">
          <span className="grid h-1.5 w-1.5 place-items-center rounded-full bg-white/30" />
          Book on WhatsApp
        </span>
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------- FreshCart */

function CartPreview() {
  const products = [
    { name: 'Alphonso Mango', price: '₹249', icon: Apple, bg: 'bg-amber-50', color: 'text-amber-500' },
    { name: 'Baby Carrots', price: '₹49', icon: Carrot, bg: 'bg-orange-50', color: 'text-orange-500' },
    { name: 'Farm Milk', price: '₹68', icon: Milk, bg: 'bg-sky-50', color: 'text-sky-500' },
    { name: 'Oat Cookies', price: '₹129', icon: Cookie, bg: 'bg-rose-50', color: 'text-rose-400' },
  ]

  return (
    <div className="flex h-full flex-col bg-[#F7FAF4]">
      <div className="flex shrink-0 items-center justify-between px-2.5 pt-2 sm:px-4">
        <div className="flex items-center gap-1">
          <span className="grid h-4 w-4 place-items-center rounded-md bg-[#16A34A] text-[7px] font-bold text-white sm:h-5 sm:w-5">
            f
          </span>
          <span className="font-display text-[8px] font-bold tracking-tight text-[#14301F] sm:text-[10px]">
            freshcart
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="flex items-center gap-0.5 rounded-full border border-black/[0.06] bg-white px-1.5 py-[2px] text-[4.5px] font-medium text-[#4B6152] sm:text-[5.5px]">
            <MapPin className="h-1.5 w-1.5 text-[#16A34A]" /> Indore 452001
          </span>
          <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-[#14301F] text-[4.5px] font-semibold text-white sm:h-4 sm:w-4">
            SP
          </span>
        </div>
      </div>

      <div className="mx-2 mt-1.5 flex shrink-0 items-center gap-1 rounded-full border border-black/[0.05] bg-white px-2 py-1 sm:mx-4 sm:mt-2 sm:py-1.5">
        <Search className="h-2 w-2 text-[#8A9A8E] sm:h-2.5 sm:w-2.5" />
        <span className="text-[5px] text-[#8A9A8E] sm:text-[6px]">Search fresh groceries…</span>
        <span className="ml-auto hidden rounded-full bg-[#EEF6E9] px-1 py-[1px] text-[4.5px] font-medium text-[#4C7A3D] sm:block">
          10 min delivery
        </span>
      </div>

      <div className="mt-1.5 flex shrink-0 items-start justify-between gap-1 px-2 sm:mt-2.5 sm:px-4">
        {[
          ['Fruits', 'bg-rose-50 text-rose-500'],
          ['Veggies', 'bg-lime-50 text-lime-600'],
          ['Dairy', 'bg-sky-50 text-sky-500'],
          ['Snacks', 'bg-amber-50 text-amber-500'],
          ['More', 'bg-slate-100 text-slate-400'],
        ].map(([label, colors]) => (
          <div key={label} className="flex flex-1 flex-col items-center gap-[2px]">
            <span className={cn('grid h-5 w-5 place-items-center rounded-full sm:h-6 sm:w-6', colors)}>
              <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70 sm:h-2 sm:w-2" />
            </span>
            <span className="text-[4.5px] font-medium text-[#5C6D60] sm:text-[5.5px]">{label}</span>
          </div>
        ))}
      </div>

      <div className="mt-1.5 grid flex-1 grid-cols-4 gap-1 px-2 sm:mt-2 sm:gap-2 sm:px-4">
        {products.map((product) => {
          const Icon = product.icon
          return (
            <div
              key={product.name}
              className="flex min-w-0 flex-col overflow-hidden rounded-md border border-black/[0.05] bg-white sm:rounded-lg"
            >
              <div className={cn('relative grid flex-1 place-items-center', product.bg)}>
                <Icon className={cn('h-3.5 w-3.5 sm:h-5 sm:w-5', product.color)} strokeWidth={1.6} />
                <span className="absolute right-0.5 top-0.5 rounded-full bg-white/90 px-0.5 text-[4px] font-semibold text-[#16A34A] sm:text-[4.5px]">
                  10m
                </span>
              </div>
              <div className="p-1">
                <p className="truncate text-[4.5px] font-medium leading-tight text-[#14301F] sm:text-[6px]">
                  {product.name}
                </p>
                <div className="mt-0.5 flex items-center justify-between">
                  <span className="text-[5px] font-semibold text-[#14301F] sm:text-[6.5px]">{product.price}</span>
                  <span className="rounded bg-[#EAF6E5] px-1 text-[4px] font-bold text-[#16A34A] sm:text-[5px]">
                    ADD
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mx-2 mb-1.5 mt-1 flex shrink-0 items-center justify-between rounded-full bg-[#14301F] px-2 py-1 sm:mx-4 sm:mb-2.5">
        <span className="text-[4.5px] font-medium text-white/70 sm:text-[5.5px]">3 items · Free delivery</span>
        <span className="rounded-full bg-[#25D366] px-1.5 py-[1px] text-[4.5px] font-bold text-[#08301B] sm:text-[5.5px]">
          View cart · ₹347
        </span>
      </div>
    </div>
  )
}

const PREVIEWS = {
  ai: AiPreview,
  hotel: HotelPreview,
  travel: TravelPreview,
  cart: CartPreview,
}

const PREVIEW_URLS = {
  ai: 'prewise.ai/dashboard',
  hotel: 'aurelia-hotels.com',
  travel: 'sunrisetravels.in/packages',
  cart: 'freshcart.app',
}

export default function ProjectPreview({ project, className }) {
  const Preview = PREVIEWS[project.preview] || AiPreview

  return (
    <figure
      role="img"
      aria-label={`${project.title} — ${project.category} interface preview`}
      className={cn(
        'relative overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-card',
        className,
      )}
    >
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} — ${project.category}`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      ) : (
        <div aria-hidden="true" className="h-full w-full">
          <BrowserShell url={PREVIEW_URLS[project.preview] || 'project-preview'}>
            <Preview />
          </BrowserShell>
        </div>
      )}
      <span className="sr-only">
        A visual preview of the {project.title} interface. Replace it with a real screenshot in
        portfolioData.js.
      </span>
    </figure>
  )
}
