# Valentina Precious — Image & Asset Management Guide

This guide details the specifications, formats, dimensions, and integration status for photography and brand assets across the **Valentina Precious** website.

---

## 1. Core Visual Aesthetics & Direction

- **Style**: Premium editorial minimalism, luxury activewear and lifestyle aesthetic.
- **Lighting**: Soft natural light, refined contrast, neutral undertones complementing the ivory (`#F6F3EE`) and obsidian (`#171513`) palette.
- **Authenticity Policy**: No generic AI-generated portraits or artificial stock models. Only approved photography reflecting genuine craftsmanship and real fabrics.

---

## 2. Integrated Product Photography (from Official Store)

All product photographs have been retrieved directly from the official store catalog (`valentinaprecious.com`) and stored locally in `assets/images/collections/`:

| Product | Local Image File | Dimensions | Aspect Ratio | Colorways |
| :--- | :--- | :--- | :--- | :--- |
| **The Contour Jacket** | `assets/images/collections/the-contour-jacket.jpg` | 1200 × 1260 px | 4:5 | Noir, Minuit, Framboise |
| **The Contour Bra** | `assets/images/collections/the-contour-bra.jpg` | 1200 × 1260 px | 4:5 | Noir, Minuit, Framboise |
| **The Contour Legging**| `assets/images/collections/the-contour-legging.jpg` | 1200 × 1260 px | 4:5 | Noir, Minuit, Framboise |
| **The Contour Short** | `assets/images/collections/the-contour-short.jpg` | 1200 × 1260 px | 4:5 | Noir, Minuit, Framboise |
| **The Wide-Leg Pant** | `assets/images/collections/the-wide-leg-pant.jpg` | 1200 × 1260 px | 4:5 | Noir, Minuit, Bordeaux |
| **The Drift Bra** | `assets/images/collections/the-drift-bra.jpg` | 1200 × 1260 px | 4:5 | Noir, Minuit, Framboise |
| **The Drift Tee** | `assets/images/collections/the-drift-tee.jpg` | 1200 × 1260 px | 4:5 | Noir, Minuit, Framboise |
| **The Drift Vest** | `assets/images/collections/the-drift-vest.jpg` | 1200 × 1260 px | 4:5 | Noir, Minuit, Framboise |
| **The Drift Short** | `assets/images/collections/the-drift-short.jpg` | 1200 × 1260 px | 4:5 | Noir, Minuit, Framboise |
| **The Studio Legging**| `assets/images/collections/the-studio-legging.jpg` | 1200 × 1260 px | 4:5 | Noir, Minuit, Bordeaux, Moka |
| **The Pocket Flare** | `assets/images/collections/the-pocket-flare.jpg` | 1200 × 1260 px | 4:5 | Noir, Minuit, Bordeaux |

---

## 3. Campaign & Editorial Imagery (WebP)

Supporting editorial campaign visuals generated to exact brand specifications and converted to modern, highly compressed WebP format:

| File & Placement | Source Prompt & Ratio | Dimensions | Size | Alt Text Standard |
| :--- | :--- | :--- | :--- | :--- |
| **`assets/images/hero/hero-image.webp`**<br>(Homepage Hero) | Prompt A<br>16:9 Landscape | 1672 × 941 px | ~125 KB | `"Women in premium activewear in a minimal architectural setting"` |
| **`assets/images/brand-story/philosophy.webp`**<br>(Home & About Showcase) | Prompt B<br>4:5 Portrait | 1122 × 1402 px | ~129 KB | `"Woman in a fitted navy activewear set in a minimal interior"` |
| **`assets/images/brand-story/banner.webp`**<br>(Home Interlude & Contact Banner) | Prompt C<br>21:9 Panorama | 1916 × 821 px | ~115 KB | Decorative: `alt=""` and `aria-hidden="true"` |
| **Founder Portrait**<br>(Home & Founder View) | *Do not generate*<br>4:5 Portrait | Pending | — | Retained as neutral editorial placeholder pending authentic photography supplied by Amol Naresh. |

---

## 4. Brand Logos & Colorway Standards

### Official Activewear Colorways
- **Noir**: `#191919` (Signature Deep Carbon Black)
- **Minuit**: `#1B222E` (Midnight Blue-Black)
- **Framboise**: `#7A1F3D` (Deep Couture Berry Accent)
- **Bordeaux**: `#4A1224` (Rich Wine Undertone)

### Logo Variants
- Light Mode: `assets/images/brand/wordmark-dark.png` & `monogram-dark.png` (dark ink on ivory background).
- Dark Mode: `assets/images/brand/wordmark-light.png` & `monogram-light.png` (light stone on obsidian background).
