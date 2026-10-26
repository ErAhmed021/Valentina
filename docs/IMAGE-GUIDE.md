# Valentina Precious — Image & Asset Management Guide

This guide details the specifications, formats, dimensions, and replacement instructions for photography and brand assets across the **Valentina Precious** website.

---

## 1. Core Visual Aesthetics & Direction

- **Style**: Premium editorial minimalism, luxury activewear and lifestyle aesthetic.
- **Lighting**: Soft natural light, refined contrast, neutral undertones complementing the ivory (`#F6F3EE`) and obsidian (`#171513`) palette.
- **Authenticity Policy**: No generic AI-generated portraits or artificial stock models. Only approved photography reflecting genuine craftsmanship and real fabrics.

---

## 2. Image Specifications & Dimensions

| Location | Identifier | Recommended Dimensions | Aspect Ratio | Target Format | Max File Size |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Portrait** | `assets/images/hero/hero-image.webp` | `1200 × 1500 px` | 4:5 | WebP / AVIF | `< 180 KB` |
| **Brand Showcase** | `assets/images/collections/brand-feature.webp` | `1600 × 900 px` | 16:9 | WebP / AVIF | `< 160 KB` |
| **Founder Portrait** | `assets/images/founder/founder-portrait.webp` | `1000 × 1250 px` | 4:5 | WebP / AVIF | `< 150 KB` |
| **Panorama Banner**| `assets/images/brand-story/editorial-banner.webp`| `1920 × 820 px` | 21:9 | WebP / AVIF | `< 220 KB` |
| **Product Cards** | `assets/images/collections/[product-name].webp` | `800 × 1000 px` | 4:5 | WebP / AVIF | `< 90 KB` |
| **Brand Monogram** | `assets/images/brand/monogram.svg` | Scalable Vector | 100:131 | SVG / PNG | `< 15 KB` |
| **Brand Wordmark** | `assets/images/brand/logo.svg` | Scalable Vector | 1024:64 | SVG / PNG | `< 25 KB` |

---

## 3. How to Replace Placeholder Elements (`.ph`)

Currently, editorial imagery is marked with `.ph` (luxury shimmer placeholder boxes). To insert authentic photographs without altering layout or causing Cumulative Layout Shift (CLS):

### Example: Replacing Hero Image Placeholder
Replace:
```html
<div class="ph r45" role="img" aria-label="Editorial visual placeholder for hero activewear collection">
  <span class="ph-caption">hero.webp · Editorial Portrait</span>
</div>
```

With:
```html
<picture class="r45">
  <source srcset="assets/images/hero/hero-image.avif" type="image/avif">
  <source srcset="assets/images/hero/hero-image.webp" type="image/webp">
  <img 
    src="assets/images/hero/hero-image.jpg" 
    alt="Valentina Precious Activewear Collection Editorial" 
    width="600" 
    height="750" 
    fetchpriority="high"
    style="width: 100%; height: 100%; object-fit: cover; border: 1px solid var(--line);">
</picture>
```

### Key Image Loading Rules
1. **LCP Hero Image**: Use `fetchpriority="high"` and avoid `loading="lazy"`.
2. **Below-the-fold Images**: Always include `loading="lazy"` and `decoding="async"`.
3. **Dimensions**: Always supply explicit `width` and `height` attributes to preserve aspect ratio calculations before download.

---

## 4. Brand Logos & Colorway Standards

### Official Activewear Colorways
- **Noir**: `#191919` (Signature Deep Carbon Black)
- **Minuit**: `#1B222E` (Midnight Blue-Black)
- **Framboise**: `#7A1F3D` (Deep Couture Berry Accent)
- **Bordeaux**: `#4A1224` (Rich Wine Undertone)

### Logo Variants
- Light Mode: `assets/images/brand/wordmark-dark.png` & `monogram-dark.png` (ink on ivory background).
- Dark Mode: `assets/images/brand/wordmark-light.png` & `monogram-light.png` (light stone on obsidian background).
