# Yingying Han Personal Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page English personal homepage for Yingying Han at `E:/data/python_code/myhomepage/` matching the design in `docs/superpowers/specs/2026-07-02-homepage-design.md`.

**Architecture:** Static HTML/CSS/JS, no build tooling, no framework. One `index.html`, one `main.css`, one `main.js`, one `README.md`. Sticky sidebar layout on desktop, collapsing to top header on tablet, hamburger menu on mobile. Forest-green + cream palette, system font stack only.

**Tech Stack:** HTML5 (semantic landmarks), CSS (custom properties, grid, flexbox), vanilla JS (IntersectionObserver, no libraries).

**Verification model:** This is a static site without unit tests. Each task ends with a manual render check in a browser. The acceptance criteria for each task IS the "test" — verification steps describe what to look for.

---

## File Structure

| File | Responsibility |
|------|----------------|
| `index.html` | Semantic HTML structure with all content sections, inline SVG icons |
| `assets/css/main.css` | All styling — CSS variables, layout, components, responsive breakpoints |
| `assets/js/main.js` | Hamburger toggle, smooth scroll, masthead shadow, scroll reveal |
| `assets/images/profile.jpg` | (placeholder) Local profile photo — not created in this plan; spec Section 12 says use the GitHub avatar URL until supplied |
| `README.md` | How to preview locally and deploy to GitHub Pages |
| `docs/superpowers/specs/2026-07-02-homepage-design.md` | (already exists) Design spec |
| `docs/superpowers/plans/2026-07-02-homepage-implementation.md` | (this file) Implementation plan |

---

## Task 1: Initialize project and scaffold directories

**Files:**
- Create: `E:/data/python_code/myhomepage/.gitignore`
- Create directory tree under `assets/`

- [ ] **Step 1: Initialize git repo**

The environment reports `Is a git repository: false`. Initialize one so subsequent tasks can commit.

Run:
```bash
cd /e/data/python_code/myhomepage
git init
git branch -M main
```

Expected output: `Initialized empty Git repository in E:/data/python_code/myhomepage/.git/`

- [ ] **Step 2: Create directory structure**

Run:
```bash
mkdir -p assets/css assets/js assets/images
```

Verify with `ls -la` — should show `assets/`, `docs/`, `.claude/`.

- [ ] **Step 3: Write `.gitignore`**

Create `E:/data/python_code/myhomepage/.gitignore`:

```
# OS
.DS_Store
Thumbs.db

# Editor
.vscode/
.idea/
*.swp

# Claude / superpowers local state (keep specs and plans tracked;
# only ignore the per-machine local settings file)
.claude/settings.local.json

# Logs
*.log
```

- [ ] **Step 4: Commit the scaffold and existing spec/plan**

```bash
git add .gitignore docs/ .claude
git commit -m "chore: scaffold project, add design spec and implementation plan"
```

Expected: commit succeeds; `git log --oneline` shows one commit.

---

## Task 2: Write `index.html` — semantic structure with all content

**Files:**
- Create: `E:/data/python_code/myhomepage/index.html`

- [ ] **Step 1: Write the complete HTML file**

Write to `E:/data/python_code/myhomepage/index.html`:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Yingying Han — Research Assistant, Peking University</title>
  <meta name="description" content="Yingying Han — Research Assistant at Peking University. Computational biology, biophysics modeling (ODE/PDE), and deep learning for bioimaging.">
  <meta name="author" content="Yingying Han">
  <link rel="canonical" href="https://yingying2022.github.io/">
  <link rel="stylesheet" href="assets/css/main.css">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='14' fill='%232d5a3d'/><text x='16' y='22' font-size='18' text-anchor='middle' fill='%23faf7f0' font-family='sans-serif'>Y</text></svg>">
</head>
<body>
  <a class="skip-link" href="#main">Skip to main content</a>

  <header class="masthead" id="masthead">
    <div class="masthead__inner">
      <a class="masthead__brand" href="#top">Yingying Han</a>
      <button class="masthead__toggle" type="button"
              aria-label="Toggle navigation" aria-expanded="false" aria-controls="site-nav">
        <span></span><span></span><span></span>
      </button>
      <nav class="masthead__nav" id="site-nav" aria-label="Primary">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#research">Research</a></li>
          <li><a href="#trajectory">Trajectory</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#publications">Publications</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#updates">Updates</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <div class="layout" id="top">
    <aside class="sidebar" aria-label="Author">
      <div class="sidebar__avatar">
        <img src="https://avatars.githubusercontent.com/u/100991892?v=4"
             alt="Portrait of Yingying Han" width="160" height="160">
      </div>
      <h1 class="sidebar__name">Yingying Han</h1>
      <p class="sidebar__role">Research Assistant<br>Peking University</p>
      <ul class="sidebar__links">
        <li>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/></svg>
          Beijing, China
        </li>
        <li>
          <a href="mailto:yingyinghan@smail.nju.edu.cn" aria-label="Email Yingying Han">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            <span>Email</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/Yingying2022" rel="me" aria-label="Yingying Han on GitHub">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M12 .3a12 12 0 00-3.8 23.38c.6.12.83-.26.83-.57v-2.02c-3.34.72-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.08-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.66-.3-5.47-1.34-5.47-5.95 0-1.32.47-2.4 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 006 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.83 1.24 1.9 1.24 3.22 0 4.62-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .31.21.69.83.57A12 12 0 0012 .3"/></svg>
            <span>GitHub</span>
          </a>
        </li>
      </ul>
    </aside>

    <main id="main" class="content">

      <section id="about" class="section">
        <h2><span class="section__num">01</span> About</h2>
        <p>
          My research is united by a single thread: pursuing core questions in the
          life sciences with quantitative and computational methods. This thread has
          guided every stage of my training — from an early independent project that
          applied generative adversarial networks to <abbr title="single-guide RNA for CRISPR">gRNA</abbr>
          design as an undergraduate, through ordinary and partial differential-equation
          models of cancer-cell migration and asymmetric cell division during my
          master's thesis and my work in
          <a href="https://www.bio.pku.edu.cn/en/limlab/" target="_blank" rel="noopener">Lin Jie's group</a>,
          to my current focus at
          <a href="https://www.bio.pku.edu.cn/en/hlab/" target="_blank" rel="noopener">He Aibin's lab</a>
          on long-term imaging of embryonic development, deep-learning-based
          bioimage segmentation, and multimodal fusion of light-sheet microscopy
          with spatial transcriptomics.
        </p>
      </section>

      <section id="research" class="section">
        <h2><span class="section__num">02</span> Research Interests</h2>
        <ul class="interests">
          <li><span aria-hidden="true">🧬</span> Computational Biology &amp; Quantitative Biology</li>
          <li><span aria-hidden="true">🌡️</span> Biophysics Modeling (ODE / PDE for cell-population dynamics)</li>
          <li><span aria-hidden="true">🤖</span> Deep Learning for Bioimaging (nnU-Net, SAM)</li>
          <li><span aria-hidden="true">🗺️</span> Multimodal Data Fusion (light-sheet imaging + spatial transcriptomics)</li>
        </ul>
      </section>

      <section id="trajectory" class="section">
        <h2><span class="section__num">03</span> Research Trajectory</h2>
        <ol class="timeline">
          <li class="timeline__item">
            <div class="timeline__year">2025–now</div>
            <div class="timeline__body">
              <h3 class="timeline__title">Research Assistant</h3>
              <p class="timeline__org">He Aibin Lab, Peking University</p>
              <p class="timeline__desc">
                Long-term imaging of embryonic germ-layer formation; deep-learning
                segmentation and cross-modal registration of light-sheet and
                spatial-transcriptomics data.
              </p>
            </div>
          </li>
          <li class="timeline__item">
            <div class="timeline__year">2024–2025</div>
            <div class="timeline__body">
              <h3 class="timeline__title">Research Assistant</h3>
              <p class="timeline__org">Lin Jie Group, Peking University</p>
              <p class="timeline__desc">
                PDE / transport-equation models of asymmetric cell division and the
                adaptive role of volume-controlled damage segregation in aging.
              </p>
            </div>
          </li>
          <li class="timeline__item">
            <div class="timeline__year">2021–2024</div>
            <div class="timeline__body">
              <h3 class="timeline__title">M.S. in Biophysics</h3>
              <p class="timeline__org">Nanjing University</p>
              <p class="timeline__desc">
                ODE modeling of mutual feedback between cancer-cell migration and
                the immune microenvironment; parameter analysis and numerical
                simulation in Python and MATLAB.
              </p>
            </div>
          </li>
          <li class="timeline__item">
            <div class="timeline__year">2017–2021</div>
            <div class="timeline__body">
              <h3 class="timeline__title">B.S. in Biology (State Base)</h3>
              <p class="timeline__org">Nanjing Agricultural University</p>
              <p class="timeline__desc">
                First exploration of deep learning for biology, including an
                independent project applying generative adversarial networks to
                gRNA design — at the time a direction without precedent.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section id="projects" class="section">
        <h2><span class="section__num">04</span> Current Projects</h2>
        <div class="cards">
          <article class="card">
            <h3 class="card__title">3D Germ-Layer Segmentation</h3>
            <p class="card__desc">
              Added a distance-field term to nnU-Net to stabilize interface
              segmentation at gastrulation-stage boundaries between adjacent germ
              layers, providing a reliable structural basis for downstream
              quantitative analysis of germ-layer dynamics.
            </p>
          </article>
          <article class="card">
            <h3 class="card__title">3D Foreground Segmentation for Light-Sheet Data</h3>
            <p class="card__desc">
              Paired a SAM encoder with an nnU-Net decoder to remove complex
              background fluorescence from light-sheet volumes, enabling reliable
              long-term cell tracking across hours of imaging.
            </p>
          </article>
          <article class="card">
            <h3 class="card__title">Cross-Modal 3D Registration via Optimal Transport</h3>
            <p class="card__desc">
              Anchored by user-defined landmarks across embryos, an
              optimal-transport map aligns light-sheet fluorescence data with
              spatial transcriptomics, cross-validating imaging-based markers
              against transcriptomic ground truth in a shared 3D coordinate frame.
            </p>
          </article>
        </div>
      </section>

      <section id="publications" class="section">
        <h2><span class="section__num">05</span> Publications</h2>
        <blockquote class="pub">
          <span class="pub__badge">Under review</span>
          <p class="pub__title">
            A computational pipeline integrating distance-field-guided nnU-Net,
            SAM-encoder foreground extraction, and optimal-transport-based
            cross-modal registration for long-term imaging of embryonic
            germ-layer formation.
          </p>
          <p class="pub__meta">Author list, title, and venue to be added upon acceptance.</p>
        </blockquote>
      </section>

      <section id="skills" class="section">
        <h2><span class="section__num">06</span> Skills &amp; Tools</h2>
        <dl class="skills">
          <dt>Languages</dt>
          <dd>
            <span class="chip">Python</span>
            <span class="chip">MATLAB</span>
          </dd>
          <dt>Mathematical Modeling</dt>
          <dd>
            <span class="chip">ODE</span>
            <span class="chip">PDE</span>
            <span class="chip">Transport Equations</span>
            <span class="chip">Oscill8</span>
          </dd>
          <dt>Deep Learning</dt>
          <dd>
            <span class="chip">PyTorch</span>
            <span class="chip">nnU-Net</span>
            <span class="chip">SAM</span>
          </dd>
          <dt>Domain</dt>
          <dd>
            <span class="chip">Cell Biology</span>
            <span class="chip">Genetics</span>
            <span class="chip">Bioinformatics</span>
          </dd>
        </dl>
      </section>

      <section id="education" class="section">
        <h2><span class="section__num">07</span> Education</h2>
        <ul class="edu">
          <li>
            <div class="edu__period">2021 – 2024</div>
            <div class="edu__body">
              <h3>M.S. in Biophysics</h3>
              <p>Nanjing University</p>
            </div>
          </li>
          <li>
            <div class="edu__period">2017 – 2021</div>
            <div class="edu__body">
              <h3>B.S. in Biology <small>(State Base)</small></h3>
              <p>Nanjing Agricultural University</p>
              <p class="edu__stat">GPA 90.32 / 100 · Class rank 5 / 29</p>
            </div>
          </li>
          <li>
            <div class="edu__period">2026</div>
            <div class="edu__body">
              <h3>TOEFL</h3>
              <p>90 / 120 (Reading 27 / 30)</p>
            </div>
          </li>
        </ul>
      </section>

      <section id="updates" class="section">
        <h2><span class="section__num">08</span> Updates</h2>
        <ul class="updates">
          <li><time datetime="2026">2026</time> — Paper on the embryo imaging pipeline submitted.</li>
          <li><time datetime="2025">2025</time> — Joined He Aibin Lab at Peking University.</li>
          <li><time datetime="2024">2024</time> — Joined Lin Jie Group at Peking University as Research Assistant.</li>
          <li><time datetime="2024">2024</time> — Received M.S. in Biophysics from Nanjing University.</li>
        </ul>
      </section>

      <section id="contact" class="section">
        <h2><span class="section__num">09</span> Contact</h2>
        <p class="contact">
          Best reached by email at
          <a href="mailto:yingyinghan@smail.nju.edu.cn">yingyinghan@smail.nju.edu.cn</a>.
          Code lives at
          <a href="https://github.com/Yingying2022" target="_blank" rel="noopener">github.com/Yingying2022</a>.
        </p>
      </section>

    </main>
  </div>

  <footer class="footer">
    <p>© 2026 Yingying Han · Last updated July 2026</p>
  </footer>

  <script src="assets/js/main.js" defer></script>
</body>
</html>
```

- [ ] **Step 2: Open in browser and verify structure**

Run on bash:
```bash
start index.html      # Windows: opens default browser
# OR explorer.exe index.html
```

If `start` is unavailable, open `file:///E:/data/python_code/myhomepage/index.html` manually.

Expected:
- Page renders unstyled (browser default) but all content is readable from top to bottom.
- All 9 sections visible in order.
- Avatar image loads (GitHub avatar URL — requires internet).
- No content overflow or broken characters.

- [ ] **Step 3: Verify no console errors**

Open browser DevTools (F12) → Console tab. Expected: no red errors. A missing-stylesheet 404 for `assets/css/main.css` is expected and acceptable at this step (will be created in Task 3).

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: add HTML structure with all content sections"
```

---

## Task 3: Write `assets/css/main.css` — complete styling

**Files:**
- Create: `E:/data/python_code/myhomepage/assets/css/main.css`

- [ ] **Step 1: Write the complete CSS file**

Write to `E:/data/python_code/myhomepage/assets/css/main.css`:

```css
/* =========================================================================
   Yingying Han — personal homepage
   Forest green + cream palette · system font stack · no external assets
   ========================================================================= */

/* ---------- 1. Design tokens ---------- */
:root {
  /* Colors */
  --bg: #faf7f0;
  --surface: #ffffff;
  --surface-alt: #f3efe2;
  --primary: #2d5a3d;
  --primary-dark: #1f4029;
  --accent: #c29d2b;
  --text: #2a2a2a;
  --text-muted: #6b6b6b;
  --border: #e8e2d0;

  /* Typography */
  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
               "Helvetica Neue", Arial, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Consolas, "Liberation Mono",
               "Courier New", monospace;
  --base-size: 16px;
  --line-height: 1.7;

  /* Spacing */
  --gap: 2rem;
  --section-gap: 3.5rem;
  --radius-card: 8px;
  --radius-pill: 4px;

  /* Layout */
  --sidebar-w: 280px;
  --content-max: 760px;
  --masthead-h: 60px;

  /* Shadows */
  --shadow-card: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-sticky: 0 2px 8px rgba(0, 0, 0, 0.08);
}

/* ---------- 2. Reset & base ---------- */
*, *::before, *::after { box-sizing: border-box; }

html { scroll-behavior: smooth; }
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
}

body {
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--base-size);
  line-height: var(--line-height);
  color: var(--text);
  background: var(--bg);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

img { max-width: 100%; display: block; }

a {
  color: var(--primary);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 150ms ease, color 150ms ease;
}
a:hover { border-bottom-color: var(--primary); }
a:focus-visible {
  outline: 3px solid var(--primary);
  outline-offset: 2px;
  border-radius: 2px;
}

h1, h2, h3, h4 { color: var(--primary-dark); margin: 0 0 0.6em; line-height: 1.25; }
h1 { font-size: 1.5rem; }
h2 { font-size: 1.5rem; }
h3 { font-size: 1.15rem; }
p  { margin: 0 0 1em; }
ul, ol { margin: 0 0 1em; padding-left: 1.25rem; }

.skip-link {
  position: absolute;
  left: -9999px;
  top: 0;
  background: var(--primary);
  color: #fff;
  padding: 0.5rem 1rem;
  z-index: 1000;
}
.skip-link:focus { left: 0; }

/* ---------- 3. Masthead ---------- */
.masthead {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  transition: box-shadow 200ms ease;
}
.masthead.is-scrolled { box-shadow: var(--shadow-sticky); }

.masthead__inner {
  max-width: calc(var(--sidebar-w) + var(--content-max) + var(--gap) + 2rem);
  margin: 0 auto;
  padding: 0 1.5rem;
  height: var(--masthead-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.masthead__brand {
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--primary-dark);
  border-bottom: none;
  letter-spacing: 0.01em;
}
.masthead__brand:hover { color: var(--primary); }

.masthead__nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 1.4rem;
}
.masthead__nav a {
  color: var(--text);
  font-size: 0.92rem;
  border-bottom: none;
  padding: 0.25rem 0;
}
.masthead__nav a:hover { color: var(--primary); border-bottom-color: var(--primary); }

/* Hamburger — hidden on desktop */
.masthead__toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: 0;
  cursor: pointer;
  padding: 8px;
}
.masthead__toggle span {
  width: 22px;
  height: 2px;
  background: var(--primary-dark);
  transition: transform 200ms ease, opacity 200ms ease;
}
.masthead__toggle.is-open span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
.masthead__toggle.is-open span:nth-child(2) { opacity: 0; }
.masthead__toggle.is-open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

/* ---------- 4. Layout grid ---------- */
.layout {
  max-width: calc(var(--sidebar-w) + var(--content-max) + var(--gap) + 2rem);
  margin: 0 auto;
  padding: 2.5rem 1.5rem 4rem;
  display: grid;
  grid-template-columns: var(--sidebar-w) 1fr;
  gap: var(--gap);
  align-items: start;
}

/* ---------- 5. Sidebar ---------- */
.sidebar {
  position: sticky;
  top: calc(var(--masthead-h) + 1.5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem 1rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);
}
.sidebar__avatar {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--primary);
  margin-bottom: 1rem;
}
.sidebar__avatar img { width: 100%; height: 100%; object-fit: cover; }

.sidebar__name { font-size: 1.25rem; margin-bottom: 0.25rem; }
.sidebar__role {
  font-size: 0.88rem;
  color: var(--text-muted);
  margin: 0 0 1.25rem;
  line-height: 1.45;
}

.sidebar__links {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  border-top: 1px solid var(--border);
}
.sidebar__links li {
  width: 100%;
  padding: 0.45rem 0.5rem;
  font-size: 0.9rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-bottom: 1px solid var(--border);
}
.sidebar__links li:last-child { border-bottom: 0; }
.sidebar__links a {
  color: var(--text);
  border-bottom: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.sidebar__links a:hover { color: var(--primary); }
.sidebar__links svg { color: var(--primary); }

/* ---------- 6. Main content & sections ---------- */
.content {
  max-width: var(--content-max);
  width: 100%;
}

.section {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: var(--section-gap);
  scroll-margin-top: calc(var(--masthead-h) + 1rem);
}
.section:last-child { margin-bottom: 0; }

.section h2 {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--primary);
  margin-bottom: 1.5rem;
}
.section__num {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--accent);
  letter-spacing: 0.05em;
}

/* ---------- 7. About ---------- */
#about p { font-size: 1.02rem; }

/* ---------- 8. Research Interests ---------- */
.interests {
  list-style: none;
  padding: 0;
}
.interests li {
  padding: 0.6rem 0;
  border-bottom: 1px dashed var(--border);
  font-size: 1rem;
}
.interests li:last-child { border-bottom: 0; }
.interests span {
  margin-right: 0.6rem;
  font-size: 1.15rem;
}

/* ---------- 9. Timeline ---------- */
.timeline {
  list-style: none;
  padding: 0;
  margin: 0;
  border-left: 2px solid var(--primary);
}
.timeline__item {
  position: relative;
  padding: 0 0 1.75rem 1.5rem;
}
.timeline__item:last-child { padding-bottom: 0; }
.timeline__item::before {
  content: "";
  position: absolute;
  left: -7px;
  top: 6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--primary);
  border: 2px solid var(--bg);
}
.timeline__year {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--accent);
  margin-bottom: 0.2rem;
  letter-spacing: 0.03em;
}
.timeline__title { font-size: 1.05rem; margin-bottom: 0.15rem; }
.timeline__org { color: var(--primary); margin: 0 0 0.4rem; font-weight: 500; font-size: 0.95rem; }
.timeline__desc { color: var(--text); margin: 0; font-size: 0.95rem; }

/* ---------- 10. Project cards ---------- */
.cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-left: 4px solid var(--primary);
  border-radius: var(--radius-card);
  padding: 1.1rem 1.25rem;
  box-shadow: var(--shadow-card);
  transition: transform 200ms ease, box-shadow 200ms ease;
}
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}
.card__title {
  font-size: 1.05rem;
  margin-bottom: 0.5rem;
  color: var(--primary-dark);
}
.card__desc { margin: 0; font-size: 0.95rem; }

/* ---------- 11. Publications ---------- */
.pub {
  margin: 0;
  padding: 1rem 1.25rem;
  background: var(--surface-alt);
  border-left: 4px solid var(--primary);
  border-radius: var(--radius-pill);
  position: relative;
}
.pub__badge {
  display: inline-block;
  background: var(--accent);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 2px 8px;
  border-radius: var(--radius-pill);
  margin-bottom: 0.5rem;
}
.pub__title { font-size: 1rem; margin: 0 0 0.5rem; }
.pub__meta { font-size: 0.85rem; color: var(--text-muted); margin: 0; font-style: italic; }

/* ---------- 12. Skills ---------- */
.skills { margin: 0; }
.skills dt {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent);
  font-weight: 600;
  margin-top: 1rem;
}
.skills dt:first-child { margin-top: 0; }
.skills dd {
  margin: 0.3rem 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.chip {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  background: var(--surface);
  color: var(--primary-dark);
  border: 1px solid var(--border);
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-pill);
}

/* ---------- 13. Education ---------- */
.edu { list-style: none; padding: 0; margin: 0; }
.edu li {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 1rem;
  padding: 0.85rem 0;
  border-bottom: 1px solid var(--border);
}
.edu li:last-child { border-bottom: 0; }
.edu__period {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--accent);
}
.edu__body h3 { font-size: 1rem; margin: 0 0 0.15rem; }
.edu__body p { margin: 0; font-size: 0.92rem; color: var(--text-muted); }
.edu__stat { font-size: 0.85rem !important; color: var(--primary) !important; margin-top: 0.2rem !important; }

/* ---------- 14. Updates ---------- */
.updates { list-style: none; padding: 0; margin: 0; }
.updates li {
  padding: 0.55rem 0;
  border-bottom: 1px dashed var(--border);
  font-size: 0.95rem;
}
.updates li:last-child { border-bottom: 0; }
.updates time {
  font-family: var(--font-mono);
  color: var(--accent);
  font-size: 0.88rem;
  margin-right: 0.5rem;
}

/* ---------- 15. Contact ---------- */
.contact { font-size: 1rem; }

/* ---------- 16. Footer ---------- */
.footer {
  border-top: 1px solid var(--border);
  background: var(--surface);
  text-align: center;
  padding: 1.5rem 1rem;
  font-size: 0.85rem;
  color: var(--text-muted);
}
.footer p { margin: 0; }

/* ---------- 17. Scroll reveal ---------- */
@media (prefers-reduced-motion: no-preference) {
  .reveal {
    opacity: 0;
    transform: translateY(8px);
    transition: opacity 400ms ease, transform 400ms ease;
  }
  .reveal.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ---------- 18. Responsive ---------- */

/* Tablet: sidebar moves above content */
@media (max-width: 1023px) {
  .layout {
    grid-template-columns: 1fr;
    padding-top: 2rem;
  }
  .sidebar {
    position: static;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: left;
    gap: 1rem 1.5rem;
    padding: 1.25rem 1.5rem;
  }
  .sidebar__avatar { width: 96px; height: 96px; margin-bottom: 0; border-width: 2px; }
  .sidebar__name { margin: 0; font-size: 1.15rem; }
  .sidebar__role { margin: 0; }
  .sidebar__links {
    width: auto;
    border-top: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem 1.25rem;
  }
  .sidebar__links li { width: auto; border-bottom: 0; padding: 0; }
}

/* Mobile: hamburger nav */
@media (max-width: 767px) {
  .masthead__toggle { display: flex; }
  .masthead__nav {
    position: absolute;
    top: var(--masthead-h);
    left: 0;
    right: 0;
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    box-shadow: var(--shadow-sticky);
    /* hidden by default */
    max-height: 0;
    overflow: hidden;
    transition: max-height 250ms ease;
  }
  .masthead__nav.is-open { max-height: 70vh; }
  .masthead__nav ul {
    flex-direction: column;
    padding: 0.5rem 1.5rem 1rem;
    gap: 0.25rem;
  }
  .masthead__nav a { display: block; padding: 0.55rem 0; }

  .layout { padding: 1.5rem 1rem 3rem; }

  .sidebar {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }
  .sidebar__avatar { width: 120px; height: 120px; }
  .sidebar__links { width: 100%; flex-direction: column; gap: 0; }
  .sidebar__links li {
    width: 100%;
    border-bottom: 1px solid var(--border);
    padding: 0.4rem 0;
  }
  .sidebar__links li:last-child { border-bottom: 0; }

  .edu li { grid-template-columns: 1fr; gap: 0.15rem; }
  .edu__period { margin-bottom: 0.25rem; }
}
```

- [ ] **Step 2: Refresh the browser and verify desktop layout**

Refresh `index.html`. Verify:
- Top masthead sticky with brand on left, nav links on right.
- Two-column layout: sidebar (avatar + name + role + 3 social items) on left, main content on right.
- Section headings show green underline + gold section number.
- Forest green accent throughout; cream background; readable text.
- No horizontal scroll bar at ≥ 1024 px width.

- [ ] **Step 3: Verify tablet layout (768–1023 px)**

Open DevTools → toggle device emulation. Set width to 900 px. Verify:
- Sidebar moves above main content as a horizontal card (avatar left, name/role middle, social links right).
- Main content is full width below.

- [ ] **Step 4: Verify mobile layout (< 768 px)**

Set width to 375 px. Verify:
- Hamburger icon visible at top right.
- Click hamburger — menu expands downward with all 8 anchor links.
- Click hamburger again — menu collapses.
- Sidebar becomes a centered column (avatar top, name, role, social links stacked).
- All text remains readable; no horizontal scroll.

- [ ] **Step 5: Verify accessibility basics**

In DevTools:
- Run Lighthouse (Accessibility). Expected score ≥ 95.
- Tab through the page. Verify visible focus rings on every interactive element.
- Click the avatar URL area — it should NOT be a link (no broken navigation).
- Verify the "Skip to main content" link appears when Tab is pressed from the very top.

- [ ] **Step 6: Commit**

```bash
git add assets/css/main.css
git commit -m "feat: add main stylesheet with responsive layout and theme"
```

---

## Task 4: Write `assets/js/main.js` — interactivity

**Files:**
- Create: `E:/data/python_code/myhomepage/assets/js/main.js`

- [ ] **Step 1: Write the complete JS file**

Write to `E:/data/python_code/myhomepage/assets/js/main.js`:

```javascript
/* Yingying Han — personal homepage interactivity
 * Vanilla JS, no dependencies. Three behaviors:
 *   1. Sticky masthead gains a shadow after scrolling 4px.
 *   2. Hamburger toggle (mobile only) opens/closes the nav, updates aria-expanded,
 *      closes on link click and on Escape.
 *   3. Section reveal: .reveal elements get .is-visible when they enter the viewport.
 *      Disabled when prefers-reduced-motion: reduce.
 */
(function () {
  "use strict";

  // ----- 1. Sticky masthead shadow -----
  var masthead = document.getElementById("masthead");
  function onScroll() {
    if (!masthead) return;
    if (window.scrollY > 4) {
      masthead.classList.add("is-scrolled");
    } else {
      masthead.classList.remove("is-scrolled");
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ----- 2. Hamburger toggle -----
  var toggle = document.querySelector(".masthead__toggle");
  var nav = document.getElementById("site-nav");

  function setNav(open) {
    if (!toggle || !nav) return;
    toggle.classList.toggle("is-open", open);
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setNav(!nav.classList.contains("is-open"));
    });

    // Close after clicking a link (mobile)
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") setNav(false);
    });

    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        setNav(false);
        toggle.focus();
      }
    });

    // Reset state when leaving mobile breakpoint
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 768) setNav(false);
    });
  }

  // ----- 3. Section reveal on scroll -----
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  var sections = document.querySelectorAll(".section");
  sections.forEach(function (s) { s.classList.add("reveal"); });

  if (!("IntersectionObserver" in window)) {
    // Fallback: just show everything
    sections.forEach(function (s) { s.classList.add("is-visible"); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 });

  sections.forEach(function (s) { observer.observe(s); });
})();
```

- [ ] **Step 2: Refresh browser and verify behaviors**

Refresh `index.html`. Verify:
- **Scroll shadow**: scroll down 10 px — masthead gains a subtle shadow. Scroll back to top — shadow disappears.
- **Hamburger (mobile only)**: at < 768 px, click hamburger — it animates into an X, menu expands. Click again — collapses. The `aria-expanded` attribute on the button toggles between `"true"` and `"false"` (verify in DevTools Elements panel).
- **Escape closes menu**: open the menu, press Escape — menu closes, focus returns to the hamburger button.
- **Link click closes menu**: at mobile width, open the menu, click any anchor — menu closes, page scrolls to section.
- **Section reveal**: at desktop width, reload the page. As you scroll, sections fade in from 8 px below. Reload with `prefers-reduced-motion: reduce` (DevTools → Rendering → Emulate CSS) — sections appear instantly, no fade.
- **No console errors** in DevTools.

- [ ] **Step 3: Commit**

```bash
git add assets/js/main.js
git commit -m "feat: add interactive behaviors (sticky shadow, hamburger, scroll reveal)"
```

---

## Task 5: Write `README.md` — preview and deploy

**Files:**
- Create: `E:/data/python_code/myhomepage/README.md`

- [ ] **Step 1: Write the README**

Write to `E:/data/python_code/myhomepage/README.md`:

```markdown
# Yingying Han — Personal Homepage

Single-page English personal homepage. Static HTML/CSS/JS, no build tooling.

## Preview locally

Open `index.html` directly in a browser, or serve the folder with any static server:

```bash
# Python 3
python -m http.server 8000
# then visit http://localhost:8000

# Node (if installed)
npx serve .
```

## Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `yingying2022.github.io` for a user-site, or any name for a project page).
2. From this folder:

   ```bash
   git remote add origin https://github.com/Yingying2022/<repo>.git
   git push -u origin main
   ```

3. In the GitHub repo settings → **Pages** → set **Source** to `main` branch / root.
4. Wait ~1 minute. The site will be live at `https://yingying2022.github.io/<repo>/` (or `https://yingying2022.github.io/` for a user-site).

## Edit content

All copy lives in `index.html` — no templating, no CMS. To add a new publication, duplicate the `<blockquote class="pub">…</blockquote>` block in the Publications section and edit the text.

## Replace the avatar

The sidebar currently pulls the GitHub avatar by URL. To use a local photo, drop a square image at `assets/images/profile.jpg` and change the `src` attribute of the avatar `<img>` in `index.html` to `assets/images/profile.jpg`.

## Files

| Path | Purpose |
|------|---------|
| `index.html` | Page content and structure |
| `assets/css/main.css` | All styling (theme tokens, layout, components, responsive) |
| `assets/js/main.js` | Hamburger toggle, sticky masthead shadow, scroll-reveal |
| `docs/superpowers/specs/` | Design spec |
| `docs/superpowers/plans/` | Implementation plan |
```

- [ ] **Step 2: Commit**

```bash
git add README.md
git commit -m "docs: add README with preview and deploy instructions"
```

---

## Task 6: Final acceptance verification

This task has no code to write — it is the final pass against the spec's Section 13 Success Criteria.

- [ ] **Step 1: Filesystem verification**

Run:
```bash
ls -R /e/data/python_code/myhomepage
```

Expected tree (excluding `.git/`):
```
.
├── .gitignore
├── README.md
├── assets
│   ├── css
│   │   └── main.css
│   ├── images
│   └── js
│       └── main.js
├── docs
│   └── superpowers
│       ├── plans
│       │   └── 2026-07-02-homepage-implementation.md
│       └── specs
│           └── 2026-07-02-homepage-design.md
└── index.html
```

- [ ] **Step 2: Spec coverage walk-through**

Open the spec (`docs/superpowers/specs/2026-07-02-homepage-design.md`) and verify each section:

- **§3 Site Identity** — name, role, education, contact all rendered correctly. ✅
- **§4 Information Architecture** — all 9 sections present in order. ✅
- **§5 Layout** — desktop two-column, tablet header-collapse, mobile hamburger. ✅
- **§6 Visual System** — CSS variables match the spec's color palette. ✅
- **§7 Interaction** — smooth scroll, masthead shadow, hamburger, scroll reveal all working. ✅
- **§8 Accessibility** — semantic HTML, skip-link, aria-label on icon links, focus rings, contrast. ✅
- **§9 Performance** — no framework, total payload under 30 KB. ✅

If any item fails, file a follow-up task to address it before declaring done.

- [ ] **Step 3: Cross-browser smoke test**

Open the page in:
1. Chrome or Edge (primary)
2. Firefox
3. (If available) Safari

Verify in each: layout looks correct, hamburger works, no console errors.

- [ ] **Step 4: Lighthouse pass**

In Chrome DevTools → Lighthouse → Mobile → Throttled → Generate report.

Expected:
- Performance ≥ 95
- Accessibility ≥ 95
- Best Practices = 100
- SEO ≥ 90

If any score is below threshold, address before declaring done.

- [ ] **Step 5: Final commit (if any fixes were needed)**

If Steps 2–4 surfaced fixes, commit them. Otherwise skip.

```bash
git add -A
git commit -m "chore: acceptance fixes from final verification pass"
```

- [ ] **Step 6: Report completion**

The plan is complete when all checkboxes are ticked and the spec's success criteria are met. The owner can now optionally run Task 5's GitHub Pages deployment.

---

## Self-Review Notes (resolved during planning)

- **Spec coverage:** All 13 spec sections mapped to tasks. §12 Open Items are explicitly handled in `index.html` (placeholder avatar URL, "Under review" badge, omitted optional socials) and `README.md` (how to replace avatar / add papers).
- **Type/name consistency:** CSS class names (`masthead__toggle`, `is-scrolled`, `is-open`, `reveal`, `is-visible`, `section__num`, `pub__badge`, etc.) are used identically across `index.html`, `main.css`, and `main.js`. Verified by visual cross-check.
- **Placeholders:** Every step contains concrete code or commands — no "TBD" or "implement appropriate handling" anywhere.
- **Frequent commits:** Each task ends with a commit, in line with the brainstorming/writing-plans defaults.
- **No external dependencies:** No CDN link, no Font Awesome, no web font, no JS library — consistent with spec §9 Performance.
