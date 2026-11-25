import { Helmet } from 'react-helmet-async'
import { siteConfig } from '../data/portfolioData'

/**
 * Central SEO component: title, description, canonical, Open Graph,
 * Twitter cards, robots directives and JSON-LD structured data.
 */
export default function Seo({
  title = siteConfig.seo.title,
  description = siteConfig.seo.description,
  keywords = siteConfig.seo.keywords,
  path = '/',
  image = siteConfig.seo.ogImage,
  type = 'website',
  noindex = false,
  jsonLd,
}) {
  const baseUrl = siteConfig.url.replace(/\/$/, '')
  const canonical = `${baseUrl}${path === '/' ? '' : path}`
  const imageUrl = image?.startsWith('http') ? image : `${baseUrl}${image}`

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords?.length ? <meta name="keywords" content={keywords.join(', ')} /> : null}
      <link rel="canonical" href={canonical} />
      <meta
        name="robots"
        content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'}
      />
      {siteConfig.seo.googleSiteVerification ? (
        <meta
          name="google-site-verification"
          content={siteConfig.seo.googleSiteVerification}
        />
      ) : null}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={`${siteConfig.name} — Portfolio`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Suman Patidar — Full Stack Developer and Technical Trainer" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      {siteConfig.seo.twitterHandle ? (
        <meta name="twitter:site" content={siteConfig.seo.twitterHandle} />
      ) : null}

      {jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      ) : null}
    </Helmet>
  )
}
