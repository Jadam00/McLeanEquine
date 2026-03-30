# McLean Equine — Website

Professional website for **McLean Equine**, an equestrian coaching and horse care business based in Wantage, Oxfordshire, run by Sarah McLean.

**Live site (once deployed):** [mclean-equine.com](https://mclean-equine.com)

---

## 1. Project Overview

A complete multi-page static brochure site built with pure HTML5, CSS3 and vanilla JavaScript. No frameworks, no build steps, no backend dependencies.

### Pages

| File | Description |
|---|---|
| `index.html` | Home — hero, brand intro, services overview, trust pillars, case study previews, CTA |
| `about.html` | About Sarah — background, qualifications, approach and values |
| `services.html` | Six detailed service sections with descriptions, who it's for, examples and CTAs |
| `case-studies.html` | Four example client scenarios with full narrative and outcomes |
| `contact.html` | Contact methods, FAQ accordion, location coverage |
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
├── case-studies.html       # Example client outcomes
├── contact.html            # Contact & FAQ
├── CNAME                   # Custom domain for GitHub Pages
├── css/
│   └── style.css           # Complete stylesheet
├── js/
│   └── main.js             # Navigation, FAQ, animations
└── assets/
    └── images/
        ├── .gitkeep        # Keeps folder in git
        ├── logo.png        # ← ADD: McLean Equine logo
        ├── hero-bg.jpg     # ← ADD: Hero background image
        ├── sarah-portrait.jpg  # ← ADD: Photo of Sarah
        └── og-image.jpg    # ← ADD: Social sharing image (1200×630px)
```

---

## 5. GitHub Pages Deployment

1. Push the repository to GitHub (or ensure it is already pushed)
2. Go to the repository on GitHub
3. Click **Settings** → **Pages** (left sidebar)
4. Under **Source**, select **Deploy from a branch**
5. Choose the branch (e.g. `main`) and folder (`/ (root)`)
6. Click **Save**
7. GitHub Pages will build and serve the site — the URL will appear at the top of the Pages settings page

The site will be live at `https://[your-github-username].github.io/McLeanEquine/` within a minute or two.

---

## 6. Custom Domain Setup: mclean-equine.com

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

**Option A: Apex domain (mclean-equine.com) — use A records**

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

**Option B: www subdomain — add a CNAME record**

| Type | Name | Value |
|---|---|---|
| CNAME | www | Jadam00.github.io |

It is recommended to set up **both** the A records (for the apex domain) and the CNAME (for www), so both `mclean-equine.com` and `www.mclean-equine.com` work.

---

## 7. DNS Propagation

DNS changes can take anywhere from a few minutes to **48 hours** to fully propagate globally. During this time the site may not be reachable at the custom domain. This is normal.

To check propagation status: [https://dnschecker.org](https://dnschecker.org)

---

## 8. HTTPS / SSL Certificate

Once the custom domain is connected and DNS has propagated, GitHub Pages will **automatically provision a free HTTPS certificate** via Let's Encrypt. This typically takes 10–30 minutes after DNS propagates.

In **Settings → Pages**, check the **Enforce HTTPS** checkbox once it becomes available. This ensures all traffic is redirected to `https://`.

---

## 9. Content Assumptions

### Confirmed from public research
- Owner: **Sarah McLean**
- Location: **Wantage, Oxfordshire** (also covering Berkshire)
- Qualification: **BSc (Hons) Equine Science**
- Qualification: **PhD in Equine Science (in progress)**
- Qualification: **BHS Stage 2 Coach**
- Qualification: **Level 3 Senior Equine Groom (Diploma)**
- Qualification: **Diploma in Racehorse Care & Management**
- Competition experience: up to **Novice dressage and 1m showjumping**
- Racing experience: **exercising and race preparation**
- Prior experience: **managing a large riding school and livery yard**
- Social handles: **@mcleanequine** on Instagram and Facebook

### Inferred carefully (commercially sound, not fabricated)
- Service offerings and descriptions — based on qualifications and known background
- Case study scenarios — clearly labelled as illustrative examples
- Values and brand positioning — consistent with publicly available information
- Coverage area references — based on confirmed Oxfordshire/Berkshire mentions

### Should be replaced / updated by the business owner
- **Email address** — `hello@mclean-equine.com` is a placeholder; update in all 5 HTML files
- **Phone number** — not confirmed publicly; add to contact.html if desired
- **Logo** — add `assets/images/logo.png` (ideally transparent PNG, ~200px height)
- **Hero background** — add `assets/images/hero-bg.jpg` (landscape, ideally 1920×1080px+)
- **Portrait photo** — add `assets/images/sarah-portrait.jpg` for About and Home pages
- **OG/social image** — add `assets/images/og-image.jpg` (1200×630px) for social sharing
- **Testimonials** — replace the placeholder section in `index.html` with real client quotes
- **Canonical URLs** — all pages use `https://mclean-equine.com/` — verify this is correct once live

---

## 10. Post-Deployment Checklist

Run through these checks after the site is live at mclean-equine.com:

- [ ] Domain resolves correctly: `https://mclean-equine.com` loads the homepage
- [ ] `https://www.mclean-equine.com` redirects to the apex domain (or also works)
- [ ] HTTPS padlock appears in the browser — no mixed content warnings
- [ ] Logo displays correctly (or text fallback shows if logo file not yet added)
- [ ] Hero background image loads
- [ ] All internal links work: Home, About, Services, Case Studies, Contact
- [ ] All service anchor links work (e.g. `services.html#coaching`)
- [ ] All case study anchor links work (e.g. `case-studies.html#confidence`)
- [ ] Email link opens correctly: `mailto:hello@mclean-equine.com`
- [ ] Instagram link opens `@mcleanequine`
- [ ] Facebook link opens McLean Equine page
- [ ] Mobile nav opens and closes correctly
- [ ] FAQ accordion works on contact page
- [ ] Site is readable and usable on mobile (375px), tablet (768px) and desktop
- [ ] Page titles are correct in browser tab for each page
- [ ] No broken images or 404 errors in browser console

---

## 11. Notes on Approach

- **No Lorem Ipsum** — all copy is written specifically for McLean Equine
- **No fabricated testimonials** — the testimonials section uses a transparent placeholder
- **No fabricated credentials** — all qualifications are from publicly confirmed sources
- **Accessibility** — semantic HTML, skip links, ARIA labels, keyboard navigation, focus-visible styles
- **SEO** — unique meta titles and descriptions, Open Graph tags, canonical URLs on every page
- **Performance** — no external JS dependencies; Google Fonts loaded with `preconnect`; CSS transitions hardware-accelerated where possible
- **prefers-reduced-motion** — all animations and transitions respect this user preference
- **Reduced motion fallback** — scroll reveal elements become immediately visible if motion is reduced

---

*McLean Equine website — built for GitHub Pages, ready for mclean-equine.com*
