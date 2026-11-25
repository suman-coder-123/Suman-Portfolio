# Suman Patidar — Portfolio

A premium, single-page personal portfolio for **Suman Patidar** — Full Stack Developer, Technical Trainer, and Freelance Digital Partner. Built with React, Vite, Tailwind CSS, Framer Motion, and React Router.

The site includes a complete light/dark theme system, responsive layouts, scroll animations, SEO metadata, structured data, and working WhatsApp-first contact flows. No fake testimonials, client logos, or invented statistics are used.

---

## 1. Tech stack

| Layer | Choice |
| --- | --- |
| Framework | React 18 + Vite 5 |
| Language | JavaScript (JSX, no TypeScript) |
| Styling | Tailwind CSS 3 (semantic CSS-variable colour tokens) |
| Routing | React Router 6 |
| Animation | Framer Motion 11 |
| Icons | Lucide React |
| SEO | React Helmet Async |
| Fonts | Self-hosted Inter & Manrope variable fonts (Latin subset) |

---

## 2. Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

Production build and preview:

```bash
npm run build
npm run preview
```

---

## 3. Before you deploy — configure your details

Everything editable lives in **`src/data/portfolioData.js`**. Look for the `TODO` comments at the top of the file.

| Setting | Current placeholder | What to do |
| --- | --- | --- |
| `siteConfig.email` | `your.email@example.com` | Add your real email. Used in the footer, contact channels, and `mailto:` links. |
| `siteConfig.whatsapp.number` | `919999999999` | Add your WhatsApp number in international format, digits only. |
| `siteConfig.whatsapp.display` | `+91 99999 99999` | The formatted number shown on the site. |
| `siteConfig.url` | `https://sumanpatidar.com` | Your live domain. Used for canonical URLs, Open Graph, and structured data. |
| `siteConfig.socials` | LinkedIn / GitHub | Update if your profile URLs change. |
| `projects[].demoUrl` | empty | Add a live demo URL, or leave empty to show the “Ask About This Project” CTA. |
| `projects[].githubUrl` | empty | Add a repository URL, or leave empty. |
| `projects[].image` | not set | Optional real screenshot path (see section 6). |
| `siteConfig.formEndpoint` | empty | Optional Formspree endpoint for real email delivery. |
| `siteConfig.seo.googleSiteVerification` | empty | Google Search Console HTML-tag verification token. |

Also update these public SEO files with your final domain:

- **`public/robots.txt`** — change the `Sitemap:` URL.
- **`public/sitemap.xml`** — change the `<loc>` and image `<loc>` URLs, and update `<lastmod>` when you make significant content changes.

### Experience content

The experience timeline is in `experience` inside `src/data/portfolioData.js`:

1. **EpixxAi Institute of Intelligence, Jaipur** — Technical Trainer, Sep 2026 – Present
2. **Groot Software** — Technical Trainer, 2024 – Aug 2026

Update the dates, descriptions, locations, or tags there. The UI automatically marks an entry as “Current” when its period contains `Present`.

---

## 4. Contact form behaviour

By default there is **no backend**. On submit, after validation, the form opens WhatsApp with a pre-filled message containing the visitor’s name, email, selected service, and message.

- Set `siteConfig.formEndpoint` to a Formspree (or compatible) endpoint to send submissions by email instead.
- The form validates name, email, service, and message length, shows inline errors, has a sending state, and renders a success/error panel.
- No form data is stored by this website.

All WhatsApp CTAs use centralised pre-filled messages in `whatsappMessages` — edit them in one place.

---

## 5. Light and dark mode

- Follows the visitor’s OS preference on first visit.
- A sun/moon toggle is available in the navbar on desktop and mobile.
- The choice is saved in `localStorage` under `suman-portfolio-theme`.
- A small inline script in `index.html` applies the theme before first paint to prevent a flash.
- Dark palette and semantic tokens live in `src/index.css` (`:root` and `.dark` blocks); Tailwind maps them in `tailwind.config.js`.
- Theme state is managed by `src/lib/theme.jsx`; the toggle is `src/components/ThemeToggle.jsx`.
- The browser `theme-color` meta tag updates automatically.

To change the dark palette, edit the `.dark` CSS variables (values are RGB triplets):

```css
.dark {
  --canvas: 10 15 24;     /* page background */
  --surface: 18 24 36;    /* cards and alternating sections */
  --ink: 244 247 252;     /* primary text */
  /* …remaining ink scale */
}
```

---

## 6. Project preview images

The four project previews (PreWise AI, Luxury Hotel, Bus Agency, FreshCart) are **CSS/SVG-built browser mockups**, so there are no external image dependencies and no fake client screenshots.

To use a real screenshot instead, add an image path to the project object:

```js
{
  id: 'prewise-ai',
  // …
  image: '/projects/prewise-ai.png',
}
```

Place the file in `public/projects/`. The preview component will render the image inside the browser frame. Recommended ratio: 16:10.

---

## 7. Project structure

```text
portfolio/
├─ index.html                  # meta, theme boot script, loading state
├─ public/                     # favicon, OG image, icons, robots, sitemap, manifest
├─ src/
│  ├─ components/              # Navbar, Footer, Button, cards, theme toggle, SEO…
│  ├─ data/portfolioData.js    # ← all editable content and configuration
│  ├─ lib/                     # theme provider, hooks, helpers
│  ├─ pages/                   # Home, NotFound
│  ├─ sections/                # Hero, About, Services, Projects, Skills, Training…
│  ├─ assets/fonts/            # self-hosted woff2 files
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css                # fonts, theme tokens, global styles
├─ tailwind.config.js
├─ vercel.json                 # SPA rewrites + security/cache headers
└─ vite.config.js
```

---

## 8. Deploy to Vercel

### Option A — Dashboard (recommended)

1. Push the project to GitHub/GitLab/Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel should detect Vite automatically. Confirm:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Install command:** `npm install`
4. Click **Deploy**.
5. Every push to the main branch redeploys automatically.

`vercel.json` already handles SPA routing (so `/404`-style routes load the custom NotFound page instead of a server 404), immutable asset caching, and basic security headers.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

---

## 9. Connect your own domain

1. Buy/obtain a domain (e.g. `sumanpatidar.com`).
2. In Vercel: **Project → Settings → Domains → Add**.
3. Add both:
   - `yourdomain.com` (apex)
   - `www.yourdomain.com` (redirect to apex or vice versa)
4. At your domain registrar, create the DNS records Vercel shows:
   - **Apex:** `A` record → `76.76.21.21`
   - **www:** `CNAME` → `cname.vercel-dns.com`
   - (If Vercel gives you different values, always use the values shown in your dashboard.)
5. Wait for DNS propagation. Vercel issues an SSL certificate automatically.
6. Update `siteConfig.url`, `public/robots.txt`, and `public/sitemap.xml` with the final domain, then redeploy.

---

## 10. Google Search Console

1. Open [Google Search Console](https://search.google.com/search-console) and add a **URL-prefix** property for your domain.
2. Verify ownership using the **HTML tag** method:
   - Copy the `content` value from the meta tag Google provides.
   - Paste it into `siteConfig.seo.googleSiteVerification`.
   - Redeploy, then click **Verify** in Search Console.
3. Submit your sitemap:
   - Go to **Indexing → Sitemaps**.
   - Enter `sitemap.xml` (full URL: `https://yourdomain.com/sitemap.xml`).
   - Submit.
4. Use **URL Inspection** on your homepage to request indexing.
5. Check back in a few days for indexing status. Sitemap processing can take time.

The site already includes:

- Page title and meta description.
- Canonical URL.
- Open Graph and Twitter card metadata.
- JSON-LD `Person` and `ProfessionalService` structured data.
- `robots.txt`, `sitemap.xml`, favicon, web manifest, and a custom 404 page (`noindex`).

---

## 11. Accessibility and performance notes

- Semantic landmarks, labelled form fields, visible focus rings, and a skip-to-content link.
- `prefers-reduced-motion` is respected by CSS and Framer Motion.
- No horizontal overflow at desktop and mobile widths.
- Self-hosted subset fonts with `font-display: swap`.
- No third-party scripts, trackers, or analytics by default.

---

## 12. Common edits

| Change | File |
| --- | --- |
| Hero headline, stats, code card | `src/data/portfolioData.js` → `hero` |
| About paragraphs and profile facts | `src/data/portfolioData.js` → `about` |
| Services | `src/data/portfolioData.js` → `services` |
| Projects and tech tags | `src/data/portfolioData.js` → `projects` |
| Skills | `src/data/portfolioData.js` → `skills` |
| Training modules and programs | `src/data/portfolioData.js` → `training` |
| Learning roadmap | `src/data/portfolioData.js` → `roadmap` |
| Experience timeline | `src/data/portfolioData.js` → `experience` |
| Work process | `src/data/portfolioData.js` → `process` |
| Contact copy / service options | `src/data/portfolioData.js` → `contact` |
| Navigation links | `src/data/portfolioData.js` → `navigation` |
| Colours and theme tokens | `tailwind.config.js`, `src/index.css` |
| SEO defaults and structured data | `src/data/portfolioData.js` → `siteConfig.seo`, `structuredData` |

---

Built with care. Replace the placeholder contact details before sharing the site publicly.
