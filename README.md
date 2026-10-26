# Valentina Precious — Corporate Website

Official corporate website and brand showcase for **Valentina Precious** (`https://valentinaprecious.com/`), an activewear and lifestyle brand founded and led by **Amol Naresh**.

This repository provides a modular, lightweight, zero-dependency static architecture crafted with premium editorial minimalism, accessible navigation, technical SEO, and mobile-first responsive performance.

---

## 1. Project Directory Structure

```
valentina-precious/
├── index.html               # Main semantic HTML5 markup & JSON-LD schema
├── robots.txt               # Search engine crawler permissions & sitemap reference
├── sitemap.xml              # Canonical XML sitemap for search engines
├── site.webmanifest         # Web application manifest for PWA & mobile bookmarking
├── favicon.ico              # Multi-resolution favicon icon
├── favicon.svg              # Scalable SVG brand crest favicon
├── apple-touch-icon.png     # 180x180 iOS / mobile touch icon with authentic monogram
├── README.md                # Project documentation
├── .gitignore               # Ignored local files & system logs
│
├── assets/
│   ├── css/
│   │   ├── main.css         # Tokens, typography, reset, grid & layout foundations
│   │   ├── components.css   # Buttons, cards, pills, forms, footer & headers
│   │   └── responsive.css   # Viewport breakpoints (320px to 1920px)
│   │
│   ├── js/
│   │   ├── main.js          # App bootstrap, year updater & theme synchronization
│   │   ├── navigation.js    # Hash routing, mobile drawer, focus & accessibility
│   │   ├── interactions.js  # Header scroll elevation & reveal observers
│   │   └── contact-form.js  # Validation, honeypot anti-spam & truthful submission
│   │
│   ├── images/
│   │   ├── brand/
│   │   │   ├── logo.svg               # Scalable wordmark (light theme)
│   │   │   ├── logo-dark.svg          # Scalable wordmark (dark theme)
│   │   │   ├── monogram.svg           # Scalable Halo 'V' brand crest
│   │   │   ├── wordmark-dark.png      # High-DPI transparent dark ink wordmark
│   │   │   ├── wordmark-light.png     # High-DPI transparent light stone wordmark
│   │   │   ├── monogram-dark.png      # High-DPI transparent dark ink monogram
│   │   │   └── monogram-light.png     # High-DPI transparent light stone monogram
│   │   ├── hero/                      # Hero activewear photography
│   │   ├── founder/                   # Verified portrait of Amol Naresh
│   │   ├── brand-story/               # Editorial panoramas & lookbooks
│   │   ├── collections/               # Product category photography
│   │   └── social/                    # Campaign & lookbook assets
│   │
│   └── icons/
│       ├── email.svg                  # Accessible envelope icon
│       ├── phone.svg                  # Accessible phone icon
│       ├── external.svg               # External hyperlink indicator
│       ├── menu.svg                   # Navigation drawer trigger
│       ├── close.svg                  # Navigation drawer close trigger
│       └── social/
│           ├── instagram.svg          # Official Instagram glyph
│           └── facebook.svg           # Official Facebook brand icon
│
└── docs/
    ├── SEO-CHECKLIST.md     # Technical, On-Page, GEO/AEO & Off-Page optimization guide
    ├── IMAGE-GUIDE.md       # Asset dimensions, aspect ratios & replacement guide
    └── DEPLOYMENT.md        # Static hosting, server headers & form backend guide
```

---

## 2. Core Features & Architecture

- **Brand Authenticity**: Integrated authentic brand assets (Halo 'V' Monogram and Outline Typography Wordmark) with automatic light and dark mode adaptation.
- **Hash-Routed Editorial Views**: Smooth progressive transitions across `#home`, `#about`, `#founder`, `#brand`, `#contact`, `#privacy`, and `#terms`.
- **Keyboard & Screen Reader Accessibility**: Fully compliant landmark hierarchy, `skip-link`, `aria-expanded`, `aria-current`, and Escape key drawer dismissal.
- **Technical SEO & Structured Data**: Canonical URL declarations, comprehensive Open Graph & Twitter meta tags, and verified Schema.org JSON-LD structured data (`Organization`, `WebSite`, `Person`).
- **Responsive Architecture**: Fluid layout scaling with `clamp()`, grid auto-fitting, touch-friendly targets ($\ge 44\text{px}$), and zero horizontal overflow across 320px–1920px viewports.
- **Truthful Corporate Enquiries**: Contact form features client-side validation, anti-spam honeypot, and transparent status feedback explaining live endpoint requirements without fake delivery confirmations.

---

## 3. Local Development & Preview

You can preview the website locally using any standard static file server:

### Python 3
```bash
python -m http.server 8000
```
Then navigate to `http://localhost:8000`.

### Node.js (npx serve)
```bash
npx serve .
```

---

## 4. Deploying to Production

Refer to [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for step-by-step instructions for Hostinger, cPanel, Cloudflare Pages, Netlify, and custom Nginx/Apache servers.

---

## 5. Official References

- **Boutique & Store**: [https://valentinaprecious.com/](https://valentinaprecious.com/)
- **Instagram**: [https://www.instagram.com/valentina.precious.lifestyle/](https://www.instagram.com/valentina.precious.lifestyle/)
- **Facebook**: [https://www.facebook.com/people/Valentina-Precious](https://www.facebook.com/people/Valentina-Precious)
