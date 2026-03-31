# McLean Equine — Website

Professional website for **McLean Equine**, an equestrian coaching and horse care business based in Wantage, Oxfordshire, run by Sarah McLean.

**Live site (once deployed):** [mclean-equine.com](https://mclean-equine.com)

---

## 1. What This Site Is

A complete, production-ready multi-page static website for McLean Equine. Built with pure HTML5, CSS3 and vanilla JavaScript — no frameworks, no build steps, no backend dependencies. Fully compatible with GitHub Pages and ready for custom domain connection to `mclean-equine.com`.

### Pages

| File | Description |
|---|---|
| `index.html` | Home — hero, brand intro, services overview, trust pillars, client outcome previews, social links, CTA |
| `about.html` | About Sarah — background, qualifications, approach and values |
| `services.html` | Six detailed service sections with descriptions, who it's for, and CTAs |
| `case-studies.html` | Four client outcome narratives covering coaching, horse care, schooling and competition support |
| `contact.html` | Contact methods, phone, email, social links, FAQ accordion |
| `CNAME` | Custom domain configuration for GitHub Pages |

---

## 2. Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic page structure, SEO, accessibility |
| CSS3 | Full design system — custom properties, grid, flexbox, transitions |
| Vanilla JavaScript | Nav toggle, FAQ accordion, scroll reveal, active states |
| [Google Fonts](https://fonts.google.com) | Playfair Display (headings) + Inter (body) |

No npm. No bundler. No framework. No build step.

---

## 3. Local Development

Open any `.html` file directly in a browser — or, to avoid any path resolution issues, run a local server:

```bash
# Python 3 (recommended)
cd /path/to/McLeanEquine
python3 -m http.server 8000
# Then open http://localhost:8000 in your browser
```

Alternatively, use the [VS Code Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

---

## 4. File Structure

```
McLeanEquine/
├── index.html              # Home page
├── about.html              # About Sarah
├── services.html           # All services
├── case-studies.html       # Client outcomes
├── contact.html            # Contact & FAQ
├── CNAME                   # Custom domain for GitHub Pages
├── css/
│   └── style.css           # Complete stylesheet
├── js/
│   └── main.js             # Navigation, FAQ, animations
└── assets/
    └── images/
        ├── logo.svg         # McLean Equine SVG logo (horse head + text)
        ├── favicon.svg      # SVG favicon
        ├── hero-bg.svg      # Hero background (SVG landscape/horse scene)
        └── og-image.jpg     # ← ADD for social sharing (1200×630px)
```

---

## 5. Brand Assets

### Logo
The logo (`assets/images/logo.svg`) is a custom SVG incorporating a horse head silhouette alongside the McLean Equine wordmark and location sub-text. It is used in the header, and a favicon variant (`favicon.svg`) is used in browser tabs.

**To replace the logo with a real brand logo file:**
- Place the new file at `assets/images/logo.svg` (SVG preferred) or `assets/images/logo.png`
- Update the `<img src="assets/images/logo.svg"` references in all 5 HTML files if changing the filename

### Photography
The hero background uses a bespoke SVG landscape scene (`hero-bg.svg`). The About and Home pages use styled SVG illustrations in place of photography.

**To add real photography:**
- **Hero image:** Save as `assets/images/hero-bg.jpg` (landscape, 1920×1080px or larger)
  - Update the CSS in `style.css` to reference `hero-bg.jpg` instead of `hero-bg.svg`
- **Sarah's portrait:** Save as `assets/images/sarah-portrait.jpg` (portrait orientation)
  - Replace the `<div class="about-image-visual">` block in `about.html` and `index.html` with `<img src="assets/images/sarah-portrait.jpg" alt="Sarah McLean, McLean Equine">`
- **Social sharing image:** Save as `assets/images/og-image.jpg` (1200×630px) — referenced in all `<meta property="og:image">` tags

### Updating Contact Details
All contact details are already set to the real business information. If these change:
- **Email:** Search and replace `mcleanequine@gmail.com` across all 5 HTML files
- **Phone:** Search and replace `07498 317305` (and `+447498317305`) across all 5 HTML files
- **Instagram/Facebook:** Update the `href` values in header, footer, and social links on each page

---

## 6. GitHub Pages Deployment

1. Push the repository to GitHub (or ensure it is already pushed)
2. Go to the repository on GitHub
3. Click **Settings** → **Pages** (left sidebar)
4. Under **Source**, select **Deploy from a branch**
5. Choose the branch (e.g. `main`) and folder (`/ (root)`)
6. Click **Save**
7. GitHub Pages will build and serve the site — the URL will appear at the top of the Pages settings page

The site will be live at `https://[your-github-username].github.io/McLeanEquine/` within a minute or two.

---

## 7. Custom Domain Setup: mclean-equine.com

### Step 1 — The CNAME file (already included)

The file `CNAME` at the root of this repository contains:

```
mclean-equine.com
```

This tells GitHub Pages to serve the site at `mclean-equine.com` once DNS is configured.

### Step 2 — Configure custom domain in GitHub

1. Go to **Settings → Pages** in the repository
2. Under **Custom domain**, enter `mclean-equine.com`
3. Click **Save**
4. GitHub will verify the domain once DNS is configured (see below)

### Step 3 — Configure DNS records at your domain registrar

Log in to where `mclean-equine.com` is registered and add the following records:

**Apex domain (mclean-equine.com) — use A records**

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

**www subdomain — add a CNAME record**

| Type | Name | Value |
|---|---|---|
| CNAME | www | Jadam00.github.io |

It is recommended to set up **both** the A records (for the apex domain) and the CNAME (for www), so both `mclean-equine.com` and `www.mclean-equine.com` work.

---

## 8. DNS Propagation

DNS changes can take anywhere from a few minutes to **48 hours** to fully propagate globally. During this time the site may not be reachable at the custom domain. This is normal.

To check propagation status: [https://dnschecker.org](https://dnschecker.org)

---

## 9. HTTPS / SSL Certificate

Once the custom domain is connected and DNS has propagated, GitHub Pages will **automatically provision a free HTTPS certificate** via Let's Encrypt. This typically takes 10–30 minutes after DNS propagates.

In **Settings → Pages**, check the **Enforce HTTPS** checkbox once it becomes available. This ensures all traffic is redirected to `https://`.

---

## 10. Updating Page Content

The site is plain HTML — all text, links, and contact details can be edited directly in any text editor or code editor.

**Key things the business owner may want to update:**
- **Services copy** — `services.html` — edit the content directly within each `<div class="service-section">` block
- **About text** — `about.html` — edit the `<p>` tags in the personal intro and background sections
- **Contact details** — search for `mcleanequine@gmail.com` and `07498 317305` across all files to update
- **Social links** — search for `mcleanequine` to find all social media href values
- **Footer year** — search for `© 2025 McLean Equine` and update the year if needed

---

## 11. Business Information (Confirmed)

| Item | Detail |
|---|---|
| Owner | Sarah McLean |
| Business | McLean Equine |
| Location | Wantage, Oxfordshire |
| Coverage | Oxfordshire and Berkshire |
| Email | mcleanequine@gmail.com |
| Phone | 07498 317305 |
| Instagram | @mcleanequine |
| Facebook | /mcleanequine |
| Qualification | BSc (Hons) Equine Science |
| Qualification | PhD in Equine Science (in progress) |
| Qualification | BHS Stage 2 Coach (working towards Stage 3) |
| Qualification | Level 3 Senior Equine Groom (Diploma) |
| Qualification | Diploma in Racehorse Care & Management |
| Experience | Up to Novice dressage and 1m showjumping |
| Experience | Exercising racehorses and race preparation |
| Experience | Managing a large riding school and livery yard |

---

## 12. Final Launch Checklist

Run through these checks before and after the site goes live:

### Content
- [ ] Logo displays correctly in header on all pages
- [ ] No placeholder or template wording remains anywhere
- [ ] Email address (`mcleanequine@gmail.com`) is correct on all pages
- [ ] Phone number (`07498 317305`) is correct on all pages
- [ ] Instagram link opens `https://www.instagram.com/mcleanequine/`
- [ ] Facebook link opens `https://www.facebook.com/mcleanequine/`
- [ ] All internal nav links work (Home, About, Services, Case Studies, Contact)
- [ ] All service anchor links work (e.g. `services.html#coaching`)
- [ ] All case study anchor links work (e.g. `case-studies.html#confidence`)
- [ ] Footer year is current

### Technical
- [ ] Hero background renders correctly
- [ ] Mobile navigation opens and closes correctly (hamburger menu)
- [ ] FAQ accordion works on contact page
- [ ] Scroll reveal animations work
- [ ] Page titles are correct in browser tab for each page
- [ ] No broken images or 404 errors in browser console
- [ ] Site is usable on mobile (375px), tablet (768px) and desktop

### SEO / Metadata
- [ ] Each page has a unique `<title>` tag
- [ ] Each page has a unique `<meta name="description">` tag
- [ ] Open Graph image is set (`og-image.jpg` added if available)
- [ ] Canonical URLs are correct (all point to `https://mclean-equine.com/...`)
- [ ] Favicon appears in browser tab

### Domain & HTTPS
- [ ] `https://mclean-equine.com` resolves and loads the homepage
- [ ] `https://www.mclean-equine.com` also works or redirects correctly
- [ ] HTTPS padlock appears — no mixed content warnings
- [ ] **Enforce HTTPS** is enabled in GitHub Pages settings
- [ ] CNAME file in repository contains `mclean-equine.com`

---

## 13. Notes on Approach

- **No Lorem Ipsum** — all copy is written specifically for McLean Equine
- **No fabricated testimonials** — removed in favour of a genuine social follow section
- **No fabricated credentials** — all qualifications are from publicly confirmed sources
- **Real contact details** — email and phone confirmed from public professional listings
- **Accessibility** — semantic HTML, skip links, ARIA labels, keyboard navigation, focus-visible styles
- **SEO** — unique meta titles and descriptions, Open Graph tags, canonical URLs on every page
- **Performance** — no external JS dependencies; Google Fonts loaded with `preconnect`
- **prefers-reduced-motion** — all animations respect this user preference

---

*McLean Equine website — built for GitHub Pages, ready for mclean-equine.com*
