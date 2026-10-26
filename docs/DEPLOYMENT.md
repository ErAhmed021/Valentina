# Valentina Precious — Static Deployment & Hosting Guide

This guide details instructions for deploying the **Valentina Precious** website to static web hosting environments (such as Hostinger, Cloudflare Pages, Netlify, Vercel, or Apache/Nginx).

---

## 1. Hosting Architecture Overview

The site is built as a zero-dependency, framework-free static application:
- **Root Directory**: `index.html`, `robots.txt`, `sitemap.xml`, `site.webmanifest`, `favicon.ico`, `favicon.svg`, `apple-touch-icon.png`.
- **Assets**: `assets/css/`, `assets/js/`, `assets/images/`, `assets/icons/`.
- **Backend Requirements**: None required for presentation. Contact form operates client-side with configurable endpoint.

---

## 2. Shared Hosting & Hostinger Deployment

1. **Log in to Hostinger hPanel** (or cPanel).
2. Navigate to **File Manager** -> `public_html/`.
3. If deploying to the primary domain root (`https://valentinaprecious.com/`), upload all contents of the project directory directly into `public_html/`:
   ```
   public_html/
   ├── index.html
   ├── robots.txt
   ├── sitemap.xml
   ├── site.webmanifest
   ├── favicon.ico
   ├── favicon.svg
   ├── apple-touch-icon.png
   ├── assets/
   └── docs/
   ```
4. Verify file permissions:
   - Directories: `755` (`drwxr-xr-x`)
   - Files: `644` (`-rw-r--r--`)
5. Enable **Force HTTPS / SSL** in your domain management dashboard.

---

## 3. Server Configuration & Recommended Security Headers

If using Apache (via `.htaccess`) or Nginx, deploy the following headers to maximize security and performance:

### Apache (`.htaccess`)
```apache
<IfModule mod_headers.c>
  # Enforce HTTPS
  Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
  
  # Prevent MIME type sniffing
  Header set X-Content-Type-Options "nosniff"
  
  # Clickjacking defense
  Header set X-Frame-Options "SAMEORIGIN"
  
  # Referrer protection
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  
  # Permissions Policy
  Header set Permissions-Policy "geolocation=(), camera=(), microphone=(), payment=()"
</IfModule>

# Caching directives for static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/x-icon "access plus 1 year"
</IfModule>
```

---

## 4. Contact Form Backend Integration

The corporate enquiry form in `index.html` connects through `assets/js/contact-form.js`.

### How to Connect a Submission Endpoint
In `assets/js/contact-form.js`, locate line 9:
```javascript
var FORM_ACTION = '';
```

Replace `''` with your verified service endpoint:
- **Formspree**: `https://formspree.io/f/{your_form_id}`
- **Web3Forms**: `https://api.web3forms.com/submit`
- **Cloudflare Worker / Custom Endpoint**: `https://api.valentinaprecious.com/enquiries`

Once set, the form will submit via standard JSON POST, display genuine success or failure notifications, and automatically reset form fields.

---

## 5. Analytics & Google Search Console Setup

### Google Search Console
1. Visit [search.google.com/search-console](https://search.google.com/search-console).
2. Add Property -> Domain -> `valentinaprecious.com`.
3. Add DNS TXT record at your domain registrar.
4. Once verified, submit your sitemap URL:
   `https://valentinaprecious.com/sitemap.xml`

### Google Analytics 4 (Optional)
When analytics consent is established, add the GA4 snippet to `<head>` in `index.html`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', { anonymize_ip: true });
</script>
```
*Note: Replace `G-XXXXXXXXXX` with your verified measurement ID. Do not commit fake tracking IDs.*
