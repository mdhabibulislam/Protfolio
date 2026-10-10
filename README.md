# MD Habibul Islam — Portfolio Website

A static personal portfolio site for a Business Analyst / Business Analytics
professional. Built with plain HTML5, CSS3, and vanilla JavaScript — no
build step, no framework, no backend. Works out of the box on GitHub Pages
or Vercel.

**Design:** near-black ground with a single electric-coral accent, an
oversized Syne display name overlapping the hero portrait, a scrolling
affiliations marquee, large interactive work rows, and a coral contact
section — all built from his real CV, real photos, and real certificates.

**Content model:** everything repeatable (experience, projects, numbers,
publications, education, skills, certifications) lives in the `DATA` object
at the top of `script.js`, so content updates never require touching HTML.

---

## 1. Folder structure

```
/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── images/
│   │   ├── hero-portrait.jpg       → hero name/portrait overlap
│   │   ├── bio-portrait.jpg        → About section photo
│   │   ├── avatar-graphic.jpg      → navbar/footer avatar, social preview
│   │   ├── headshot-gray.jpg       → Open Graph / social-share image
│   │   ├── work-anwar.jpg          → BI project case-study image
│   │   ├── campus-thesis.jpg       → research project case-study image
│   │   ├── personal-bike.jpg       → "Beyond the desk" aside
│   │   └── personal-detail.jpg     → "Beyond the desk" aside
│   ├── certifications/             → certificate images (lightbox gallery)
│   └── icons/favicon.svg
├── documents/CV.pdf
└── README.md
```

All paths are relative, so the site works identically on GitHub Pages,
Vercel, or opened locally.

---

## 2. How to update content

Open `script.js` and edit the `DATA` object:

- **`work`** — experience rows (role, org, dates, description, tools)
- **`projects`** — case-study cards; each has a `modal` object with the
  10-part case-study breakdown (Problem → Tools) shown in the project modal
- **`numbers`** — verified statistics shown in the Numbers strip
- **`publications`** — journal articles and manuscripts in preparation
- **`education`** — degrees, institutions, scores
- **`skills`** — categorized skill tags
- **`certifications`** — each entry needs `name`, `issuer`, `date`,
  `credential`, and an `image` path; clicking a card opens that image in a
  full-screen lightbox
- **`socialLinks`** — only real, verified accounts are listed

Static copy (hero headline, section intros, bio paragraphs) is edited
directly in `index.html`.

---

## 3. Replacing photos or the CV

Add a new image to `assets/images/` or `assets/certifications/` and update
its path in `script.js` (for data-driven content) or `index.html` (for
hero/bio/beyond-desk photos). To replace the CV, overwrite
`documents/CV.pdf`, keeping the same filename — it's referenced by the
"Download CV" buttons.

---

## 4. Deploying to GitHub Pages

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

Then in the repo: **Settings → Pages → Source: Deploy from a branch →
main / (root)**. The site goes live at
`https://YOUR-USERNAME.github.io/YOUR-REPO/`.

Afterward, update the placeholder canonical/Open Graph URLs in
`index.html` (search for `REPLACE-WITH-YOUR-USERNAME` and
`REPLACE-WITH-REPO-NAME`).

---

## 5. Deploying to Vercel

1. Push the project to a GitHub repo (steps above).
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, click
   **Add New → Project**, and import the repo.
3. Leave **Framework Preset** as `Other`, no build command, output
   directory as root. Click **Deploy**.
4. Live in about a minute at `https://your-repo-name.vercel.app`. Every
   future `git push` to `main` auto-redeploys.

---

## 6. Customizing colors

Color tokens are CSS custom properties at the top of `style.css`:

```css
:root {
  --background: #0f0f0f;   /* near-black ground */
  --foreground: #f0ede7;   /* off-white text */
  --primary: #f75d45;      /* electric coral accent */
  --muted-foreground: #948d85;
  --border: #292929;
  --card: #171717;
}
```

Light mode uses `:root[data-theme="light"]` with the same token names
inverted. Change the hex values to adjust the whole site consistently.

---

## Content policy

All content is sourced directly from the provided CV and certificate
files. No employers, projects, publications, certifications, statistics,
or social accounts have been invented. The pull-quote in the "Writing"
section is Habibul's own research-interest statement from his CV, clearly
attributed to him — not a third-party testimonial.

## Accessibility & performance

Semantic HTML, ARIA labels on interactive icons, visible focus states,
full keyboard support for the mobile menu, project modal, and certificate
lightbox (Tab / Enter / Escape / Arrow keys). Respects
`prefers-reduced-motion`. The cursor-dot effect and logo marquee are
automatically disabled for touch devices and reduced-motion users,
respectively.
