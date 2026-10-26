# Valentina Precious — SEO & Search Architecture Guide

This document outlines the technical, on-page, GEO/AEO, and off-page search engine optimisation architecture implemented for **Valentina Precious** (`https://valentinaprecious.com/`), founded by Amol Naresh.

---

## 1. Technical SEO Audit & Implementation

- [x] **Canonical Configuration**: Verified absolute canonical URL pointing to `https://valentinaprecious.com/` without trailing path discrepancies or duplicate domains.
- [x] **Crawl Directives (`robots.txt`)**: Search engine crawlers are explicitly allowed to discover and render styling (`/assets/css/`), scripts (`/assets/js/`), images (`/assets/images/`), and icons (`/assets/icons/`), with a reference to the XML sitemap.
- [x] **XML Sitemap (`sitemap.xml`)**: Clean XML sitemap adhering to standard protocols, listing the indexable canonical homepage. Anchor fragments (`#about`, `#brand`, etc.) are deliberately excluded per Google Sitemaps specification.
- [x] **Semantic HTML5 Landmarks**: Implemented `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` landmarks, enabling assistive technologies and search bots to understand document structure.
- [x] **Heading Hierarchy**: Exactly one primary `<h1>` per view context, with structured `<h2>` and `<h3>` tags that reflect the content hierarchy.
- [x] **Mobile-First & Viewport**: Configured `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">` with full support for safe-area insets.
- [x] **Asset Optimization**: Responsive imagery with explicit aspect ratios (`16:9`, `21:9`, `4:5`) preventing Cumulative Layout Shifts (CLS).
- [x] **Security & Link Attributes**: All external hyperlinks utilize `target="_blank" rel="noopener noreferrer"` to eliminate tab-napping vulnerabilities and preserve referral integrity.

---

## 2. On-Page SEO & Content Architecture

- [x] **Brand Consistency**: Accurate, consistent spelling of **Valentina Precious** and founder **Amol Naresh** across titles, meta tags, and headings.
- [x] **Metadata**:
  - `title`: `Valentina Precious — Activewear & Lifestyle` (dynamically updated per route to reflect view context).
  - `meta name="description"`: Informative, concise, and non-stuffed summary (155 characters) emphasizing movement, versatility, and founder leadership.
  - `meta property="og:*"`: Complete Open Graph suite (title, description, URL, image, site_name).
  - `meta name="twitter:*"`: Twitter card summary large image.
- [x] **Product Category Clarity**: Clearly presents the four core pillars:
  - Sports Bras
  - Tops
  - Jackets
  - Bottoms
  With signature collections (`Contour` and `Drift`) and authentic colourways (`Noir`, `Minuit`, `Framboise`, `Bordeaux`).
- [x] **Authentic Copy**: Avoided fabricated awards, fake reviews, or unverified claims. Clearly documented where biographical and product assets await verified owner supply.

---

## 3. GEO & AEO Readiness (Generative & Answer Engines)

Generative AI search engines (Google AI Overviews, Perplexity, ChatGPT Search) index websites based on clear entity definition, factual attribution, and concise content answers.

### Entity Clarifications
1. **What is Valentina Precious?**
   > Valentina Precious is an activewear and lifestyle brand designed to move with the wearer from workouts to everyday life, combining comfort, confidence, and style.
2. **Who is the founder?**
   > Valentina Precious is founded and led by Amol Naresh.
3. **What collections are offered?**
   > The collection includes sports bras, tops, jackets, and bottoms, featuring signature sets such as Contour and Drift, crafted in a focused palette of Noir, Minuit, Framboise, and Bordeaux.
4. **Where can products be purchased?**
   > Direct consumer orders, sizing, and international dispatch live on the official boutique: `https://valentinaprecious.com/`.

---

## 4. JSON-LD Structured Data Schema

The site implements Schema.org JSON-LD structured data representing:
- **`Organization`**: Brand name, verified URL, logo, founder connection, and official social links (`sameAs`).
- **`WebSite`**: Canonical root URL, brand title, and organization publisher link.
- **`Person`**: Amol Naresh, Founder of Valentina Precious, directly linked via `@id` reference.

### Schema Validation Checklist
- [x] Validated against Schema.org standards.
- [x] No fabricated ratings, offers, or review schema.
- [x] Verified `sameAs` links pointing only to official social media channels.

---

## 5. Off-Page SEO & Brand Authority Checklist

1. **Social Profile Verification & Cross-Linking**:
   - Official Instagram: `https://www.instagram.com/valentina.precious.lifestyle/`
   - Official Facebook: `https://www.facebook.com/people/Valentina-Precious`
   - Ensure both social profiles link back to the canonical homepage `https://valentinaprecious.com/`.
2. **Google Search Console**:
   - Verify domain ownership via DNS TXT record or HTML verification file.
   - Submit `https://valentinaprecious.com/sitemap.xml`.
   - Monitor Core Web Vitals (LCP, INP, CLS) and mobile indexing status.
3. **Brand Citations & Directory Listings**:
   - When listing on high-authority business directories (Crunchbase, LinkedIn Company page), use the exact legal brand name, founder name (Amol Naresh), and website URL.
   - Avoid automated low-quality directory submission tools.

---

## 6. How to Add Future Pages & Expand Sitemaps

When the website expands beyond a single HTML document to dedicated pages (e.g., `/about.html`, `/founder.html`, `/press.html`):

1. **Create the HTML file**: Maintain the existing `assets/css/` and `assets/js/` references.
2. **Update Metadata**:
   - Set unique `<title>` and `<meta name="description">`.
   - Set the `<link rel="canonical" href="https://valentinaprecious.com/about">`.
3. **Update `sitemap.xml`**:
   Add the new `<url>` block with `<lastmod>` and appropriate `<priority>`.
4. **Update Breadcrumb & Schema**:
   Add `BreadcrumbList` schema linking the homepage to the subpage.
