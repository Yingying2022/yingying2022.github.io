# Yingying Han — Personal Homepage Design

**Date:** 2026-07-02
**Reference site:** https://jaydu1.github.io/dujinhong/
**Source material:** `myhomepage.md` (owner-provided bio)

## 1. Goal

Build a single-page English personal homepage for Yingying Han (Research Assistant at Peking University, He Aibin Lab) that mirrors the layout language of the reference site (sticky author sidebar + top masthead + main content) while adopting its own visual identity (forest green + cream palette). The site must be deployable as static files (e.g., GitHub Pages) and editable by hand without build tooling.

## 2. Audience and Tone

- Primary audience: international academic readers (potential PhD advisors, collaborators, peer researchers).
- Tone: restrained, evidence-led, technically precise. Avoid marketing language.
- Language: English only. Source material is Chinese; English copy will be written fresh from the source, not machine-translated verbatim.

## 3. Site Identity

- **Subject:** Yingying Han (韩莹莹)
- **Current role:** Research Assistant, He Aibin Lab, Peking University (since 2025)
- **Prior role:** Research Assistant, Lin Jie Group, Peking University (2024–2025)
- **Education:** B.S. Biology (State Base), Nanjing Agricultural University (2017–2021, GPA 90.32/100, rank 5/29); M.S. Biophysics, Nanjing University (2021–2024)
- **Test scores:** TOEFL 90/120 (Reading 27/30, 2026)
- **Contact:** yingyinghan@smail.nju.edu.cn · https://github.com/Yingying2022
- **Avatar (placeholder):** `https://avatars.githubusercontent.com/u/100991892?v=4` (replaced by a local `profile.jpg` when the owner supplies one)

## 4. Information Architecture

Single page. No secondary pages. Sections, in order:

1. About — one paragraph bio anchored on the through-line "pursuing core questions in the life sciences with quantitative and computational methods," weaving GAN-based gRNA design (undergrad) → ODE/PDE biophysics modeling (M.S. and Lin Jie lab) → multimodal imaging analysis (current lab).
2. Research Interests — four emoji bullets:
   - 🧬 Computational Biology & Quantitative Biology
   - 🌡️ Biophysics Modeling (ODE / PDE for cell-population dynamics)
   - 🤖 Deep Learning for Bioimaging (nnU-Net, SAM)
   - 🗺️ Multimodal Data Fusion (light-sheet imaging + spatial transcriptomics)
3. Research Trajectory — vertical timeline of four entries (2025–now He Aibin Lab; 2024–2025 Lin Jie Lab; 2021–2024 NJU M.S.; 2017–2021 NJAU B.S.). Year on the left, role + one-sentence research summary on the right.
4. Current Projects — three project cards:
   - **3D Germ-Layer Segmentation.** Distance Field guidance added to nnU-Net for stable interface segmentation at gastrulation-stage boundaries between adjacent germ layers.
   - **3D Foreground Segmentation for Light-Sheet Data.** SAM encoder paired with an nnU-Net decoder to remove complex background and enable reliable long-term cell tracking.
   - **Cross-Modal 3D Registration via Optimal Transport.** Landmark-anchored OT mapping aligns light-sheet fluorescence data with spatial transcriptomics, cross-validating imaging-based markers against transcriptomic ground truth.
5. Publications — single inline entry, formatted as a quote block with a green left bar and an "*Under review*" badge:
   - Author list TBD; title TBD; venue TBD. Topic: a computational pipeline integrating Distance-Field–guided nnU-Net, SAM-encoder foreground extraction, and OT-based cross-modal registration for long-term imaging of embryonic germ-layer formation. Status: *Under review*.
   - Section structure must make adding future papers trivial (repeat the quote-block pattern).
6. Skills & Tools — chips grouped by category:
   - **Languages:** Python, MATLAB
   - **Mathematical Modeling:** ODE, PDE, Transport Equations, Oscill8
   - **Deep Learning:** PyTorch, nnU-Net, SAM
   - **Domain:** Cell Biology, Genetics, Bioinformatics
7. Education — three entries (NJAU B.S. with GPA and rank; NJU M.S.; TOEFL score).
8. Updates — four short items, newest first:
   - 2026 — Paper on embryo imaging pipeline submitted.
   - 2025 — Joined He Aibin Lab at Peking University.
   - 2024 — Joined Lin Jie Group at Peking University as Research Assistant.
   - 2024 — Received M.S. in Biophysics from Nanjing University.
9. Contact — restate email and GitHub for bottom-of-page convenience (mirrors the sidebar).

## 5. Layout

Desktop (≥ 1024 px):

```
┌──────────────────────────────────────────────────────────────────┐
│ masthead: brand left · anchor nav right                           │
├──────────────────┬───────────────────────────────────────────────┤
│ sticky sidebar   │  main content (max-width 760px)                │
│ (~280px)         │                                                │
│ avatar (circle)  │   About / Research / Trajectory /              │
│ Yingying Han     │   Projects / Publications /                    │
│ one-line role    │   Skills / Education / Updates / Contact       │
│ location         │                                                │
│ email · github   │                                                │
└──────────────────┴───────────────────────────────────────────────┘
```

Tablet (768–1023 px): sidebar collapses into a top header block (avatar + name + social row), main content flows full width below.

Mobile (< 768 px): masthead nav collapses into a hamburger toggle; everything else single-column.

## 6. Visual System

### Colors (CSS variables)

- `--bg: #faf7f0` (warm cream)
- `--surface: #ffffff` (cards, masthead)
- `--surface-alt: #f3efe2` (subtle alt blocks)
- `--primary: #2d5a3d` (forest green — links, headings accents, timeline bar)
- `--primary-dark: #1f4029` (hover, brand mark)
- `--accent: #c29d2b` (muted gold — used sparingly for the *Under review* badge and section numerals)
- `--text: #2a2a2a`
- `--text-muted: #6b6b6b`
- `--border: #e8e2d0`

### Typography

- System font stack only: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`.
- Mono (for skill chips and code-like labels): `ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", monospace`.
- Base: 16 px / line-height 1.7. h1 2 rem, h2 1.5 rem, h3 1.15 rem.
- No web fonts loaded.

### Shape and Depth

- Card radius: 8 px. Avatar: 50% (circle). Buttons and chips: 4 px.
- Card shadow: `0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)` — restrained.
- Sticky masthead gains a hairline shadow on scroll.

## 7. Interaction

- **Smooth-scroll** for masthead anchor links (respects `prefers-reduced-motion`).
- **Masthead shadow on scroll** (toggle a class once `scrollY > 4`).
- **Mobile hamburger toggle** (accessible: `aria-expanded`, focusable, closes on link click and on Escape).
- **Section reveal on scroll** via IntersectionObserver — a subtle 8 px upward translate + opacity 0 → 1, duration 400 ms. Disabled entirely when `prefers-reduced-motion: reduce`.
- **Card and link hover** — slight lift on project cards; underline reveal on text links.
- **No client-side search, no theme toggle, no analytics.**

## 8. Accessibility

- Semantic landmarks: `header.masthead`, `nav`, `main`, `aside.sidebar`, `section` per chapter, `footer`.
- Avatar has `alt="Portrait of Yingying Han"`.
- Icon-only links (email, GitHub) carry descriptive `aria-label`.
- Visible focus ring (`:focus-visible` outline using `--primary`).
- Color contrast: forest-green body text on cream background ≥ 4.5:1 (WCAG AA). Muted text (#6b6b6b on #faf7f0) verified ≥ 4.5:1.
- Skip-link at the top of `<body>` pointing to `#main`.

## 9. Performance

- No CSS framework. One hand-written `main.css`. Inline critical above-the-fold rules optionally in a `<style>` block in `index.html`.
- One small `main.js` (~1 KB) for nav toggle + smooth scroll + IntersectionObserver reveal.
- Total page weight (excluding avatar): under 30 KB.
- First render meaningful without JS — content is in static HTML; JS only enhances.

## 10. File Structure

```
E:/data/python_code/myhomepage/
├── index.html
├── assets/
│   ├── css/
│   │   └── main.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       └── profile.jpg       # owner-supplied later; placeholder uses GitHub avatar URL
├── README.md                 # how to preview locally + deploy to GitHub Pages
└── docs/
    └── superpowers/
        └── specs/
            └── 2026-07-02-homepage-design.md   # this file
```

## 11. Out of Scope (YAGNI)

The following are intentionally **not** included in v1:

- A separate Publications page (a single inline Publications section is enough — the owner has one paper under review).
- A People/Lab page (the owner is a research assistant, not a PI).
- A Teaching page (no teaching record to surface).
- A Software page (no released software to surface yet).
- A CV PDF download (will be added later if the owner asks).
- Bilingual mode (English only at v1; can be revisited).
- Google Analytics or any third-party tracking.
- Build tooling (no bundler, no preprocessor, no npm dependencies).
- Dark mode toggle.

## 12. Open Items (placeholders to fill at implementation time)

- **Profile photo**: use the GitHub avatar URL until the owner provides a local `profile.jpg`.
- **Paper metadata** for the Publications section: author list, exact title, target venue — all marked "TBD" in copy but rendered with sensible placeholder text so the section never looks broken.
- **Optional social links** (Google Scholar, ORCID, ResearchGate): render the slot only if the owner supplies URLs; otherwise omit silently.

## 13. Success Criteria

- `index.html` opens directly from the filesystem (`file://`) with no console errors and renders all sections with correct styling.
- Layout passes the three target breakpoints (≥ 1024, 768–1023, < 768).
- Lighthouse (mobile, throttled) reports Performance ≥ 95, Accessibility ≥ 95, Best Practices = 100.
- All copy reads as natural English; no raw Chinese source material surfaces on the page.
- The owner can add a new publication by duplicating one block in `index.html` and editing text — no other files touched.
