# Svādotsava™ Design System

> **A Celebration of Taste** — South Indian food, specialty coffee & artisan teas. Opening Summer 2027.

---

## About the Brand

**Svādotsava™** (pronounced *Svaad-ot-sa-va*) is a South Indian restaurant and cafe concept rooted in ancient Shastraic philosophy. The name fuses *Svāda* (the soulful relishing of life's essence) with *Utsava* (a celebration that removes worldly sorrow). The brand's mission: make every meal a sacred festival.

The three pillars of the brand are:
- 🌾 **Golden Grains** — Heritage-sourced rice, millets and wholesome South Indian trad food
- ☕ **Heart of Coffee** — Specialty coffee with reverence for craft and origin
- 🍃 **Spirit of Tea** — Artisan teas and calming ritual

**Domain:** https://cmnaveen.github.io (also CNAME'd to svadotsava domain)  
**Contact:** svadotsava.cafe@gmail.com  
**Instagram:** @svadotsava  
**Status:** Coming Soon — Opening Summer 2027

### Source Materials
- **GitHub Repo:** https://github.com/cmnaveen/cmnaveen.github.io (branch: `main`)
- Pages: `index.html`, `menu.html`, `cafe.html`, `millets.html`, `story.html`, `farmers.html`
- CSS: `assets/css/styles.css`, `assets/css/festivals.css`

---

## CONTENT FUNDAMENTALS

### Voice & Tone
- **Sacred, reverent, warm.** Copy reads like an invitation to something meaningful, not a casual food blog.
- **First-person plural ("We")** — "We believe that a meal should be a transformative experience."
- **Second-person address ("You")** for direct CTAs — "Be the first to know when we open our doors."
- **No emoji in body copy** — Sanskrit/Devanagari symbols are used decoratively (ॐ, श्री) but never emoji in prose.
- **Italics used for Sanskrit/Telugu words** — *Svāda*, *Utsava*, *Annapūrṇā*, *Utsava*
- **ALL CAPS used sparingly** for divider labels and eyebrows: `— A CELEBRATION OF TASTE —`
- **Trademark (™)** always follows "Svādotsava" in rendered UI using `<sup class="tm">&trade;</sup>`

### Casing
- Section headings: Title Case
- Nav links: Title Case
- Eyebrows/divider labels: ALL CAPS with wide letter-spacing
- Body text: Sentence case

### Specific Copy Examples
- Headline: *"Svādotsava™ — A Celebration of Taste"*
- Tagline: *"A Celebration of Taste"*
- CTA: *"Join the Inner Circle →"*
- Sub-CTA: *"Be the first to know when we open our doors"*
- Brand trinity footer: *"Golden Grains · Heart of Coffee · Spirit of Tea"*
- Pull quote style: *"At Svādotsava™, we don't just serve food—we invite you to a celebration…"*
- Telugu script present: *"స్వాదోత్సవ"*
- Sanskrit mantra appears in overlay: *"ॐ ऐं ह्रीं श्रीं श्री मात्रे नमः"*

### Writing Rules
- Use em-dashes (—) not hyphens for parenthetical breaks
- Avoid slang, contractions in brand-facing statements
- Poetic, spiritual language is encouraged: "sanctuary," "sacred," "transformative," "nourishes the soul"
- Food described in terms of purity, tradition, heritage — never "delicious" or "yummy"

---

## VISUAL FOUNDATIONS

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#f5f0e8` | Page background — warm cream parchment |
| `--bg-muted` | `#ede8de` | Alternating section backgrounds |
| `--card` | `#ffffff` | Card surfaces |
| `--primary` | `#7c3a10` | Brand primary — deep terracotta brown |
| `--primary-dark` | `#8b4a1c` | CTA backgrounds, hover darken |
| `--accent` | `#c8874a` | Warm amber — links, icons, accents |
| `--hero` | `#0a0d14` | Hero section backgrounds — near black |
| `--text` | `#1a1a1a` | Body text |
| `--muted` | `#5a5a5a` | Secondary text, captions |
| `--border` | `#ddd0bc` | Card borders, dividers |
| Gold shimmer | `#c09050`, `#e1b46b`, `#f7e090` | Countdown overlay, festival UI |
| Gold gradient | `linear-gradient(135deg, #f7e090, #c09050, #f7e090)` | Brand name text fill on dark bg |

### Typography

| Role | Font | Weight | Usage |
|---|---|---|---|
| Display / Headings | Playfair Display | 900 | h1, h2, h3, brand name, card titles |
| Display Italic | Playfair Display Italic | 400–700 | Pull quotes, Sanskrit word em |
| Body | Open Sans | 400, 600 | Body text, nav, buttons, labels |
| Festival/Serif accent | Merriweather | 400 | Festival modal overlay only |
| Devanagari | System fallback (rendered via Unicode) | — | ॐ, श्री, Sanskrit text |

**Scale:**
- h1 hero: `clamp(34px, 5vw, 72px)`, Playfair Display 900
- h2 section: `clamp(26px, 3.2vw, 36px)`, Playfair Display 900, color `--primary`
- Body lead: `1rem`, Open Sans, color `--muted`
- Eyebrow: `0.7rem`, 0.35em letter-spacing, uppercase
- Nav links: `0.85rem`, Open Sans
- Brand tagline: `0.65rem`, 0.15em tracking, uppercase, color `#e1b46b`

### Backgrounds
- **Light pages:** warm cream parchment `#f5f0e8`, alternating muted `#ede8de`
- **Hero sections:** near-black `#0a0d14` with a radial amber/brown gradient overlay
- **CTA sections:** deep `--primary-dark` background, white text
- **Floating symbol field:** fixed Devanagari glyphs (ॐ, श्री, 卐) at 12% primary opacity behind every page
- **Hero watermark:** brand logo circle at 15% opacity behind hero content
- **No full-bleed photography in backgrounds** — photos are contained in card/photo frames

### Spacing
- Container: `min(1060px, calc(100% - 40px))`
- Section vertical padding: `72px 0`
- Card padding: `26–28px`
- Grid gap: `18–22px`
- Nav height: `60px` (fixed)

### Corner Radii
- Cards: `16px` (standard), `18–22px` (menu/story cards)
- Buttons: `12px` (standard), `999px` (pill/tag/social)
- Photo: `14px`
- Cart drawer items: `12px`

### Shadows
- Card default: `0 10px 24px rgba(0,0,0,0.04)`
- Card hover: `0 18px 40px rgba(0,0,0,0.1)`
- Story/highlight boxes: `0 14px 34px rgba(0,0,0,0.06)`
- Photo: `0 16px 34px rgba(0,0,0,0.06)`
- Floating cart btn: `0 10px 25px rgba(124,58,16,0.4)`

### Borders
- Card borders: `1px solid var(--border)` — `#ddd0bc`
- Nav bottom: `1px solid rgba(0,0,0,0.08)`
- Social link: `1px solid rgba(124,58,16,0.2)`
- Input (hero): `1px solid rgba(255,255,255,0.18)`
- Outline button: `1.5px solid var(--primary)`

### Animations
- **Reveal:** opacity 0→1 + translateY(24px→0), `0.7s ease`, driven by IntersectionObserver with per-element data-delay
- **Mandala spin forward:** `22s linear infinite` (chakra disc)
- **Mandala spin reverse:** `40s linear infinite` (outer ring)
- **Orbit drift:** `42s linear infinite` (symbol ring around mandala)
- **Gold shine:** background-position shimmer on festival title, `4s linear infinite`
- **Pulse:** opacity 0.6↔1, `1s ease infinite` (countdown separator)
- **Gentle float:** translateY(0↔-8px), `50%` keyframe — festival modal image
- Easing: mostly `ease`, with `cubic-bezier(0.175,0.885,0.32,1.275)` for spring/scale effects
- `prefers-reduced-motion` respected — all durations set to `0.001ms`

### Hover / Press States
- Nav links: `translateY(-1px)` + `rgba(primary, 0.08)` bg tint + color → primary
- Cards: `translateY(-5px)` + deeper shadow
- Buttons (primary): `translateY(-1px)` + `brightness(1.05)`
- Outline button: fills solid primary bg, white text
- Social links: fills primary bg, white text + `translateY(-2px)`
- Trinity icons: `scale(1.12)` + lighter bg + gold glow `box-shadow`
- Add to cart: color to accent + `translateY(-2px)` + amber shadow
- Cart toggle: `scale(1.08) translateY(-4px)`
- Nav link hover arrow: `translateX(4px)`

### Backdrop / Blur
- Nav bar: `backdrop-filter: blur(10px)` over cream background at 85% opacity
- Mobile nav drawer: `backdrop-filter: blur(12px)`
- Cart overlay: `backdrop-filter: blur(4px)` dark overlay
- Festival modal: `backdrop-filter: blur(8px)` dark overlay
- Countdown hero unit: `backdrop-filter: blur(6px)` on timer boxes

### Imagery
- **Food photography:** natural, warm-lit, top-down or close-up; JPGs from South Indian dishes
- **Brand photos:** warm, lifestyle-style, cozy tones — no stark white backgrounds
- **Logo on dark:** white/transparent circle logo at low opacity as watermark
- **Festival cards:** illustrated/artistic PNG per Hindu festival (15+ festival images)
- **Grain:** not present; clean photography
- **Color vibe:** warm, amber-brown tones; not cool or blue

### Cards
- White bg, `1px solid --border`, `border-radius: 16px`, subtle `box-shadow`
- Icon circle centered above: `60px`, `rgba(accent, 0.18)` bg, accent-colored icon
- Title in Playfair Display, body in Open Sans muted
- Hover lifts `translateY(-5px)` with deeper shadow

### Festival UI (special)
- Dark mandala countdown overlay on first visit (dark radial gradient `#1a0a00 → #000`)
- Gold gradient text, animated spinning SVG Sri Chakra mandala
- Festival modal: dark card `linear-gradient(145deg, #2a0b00, #140500)`, gold border, gold text
- Triggered by `festivals.js` based on Hindu calendar

---

## ICONOGRAPHY

### Approach
- **No icon font** — all icons are inline SVGs drawn with stroke (not fill)
- **Stroke weight:** `stroke-width="1.5"` (standard UI icons), `stroke-width="2"` (social/footer)
- **Style:** Feather-icon style — thin, clean, rounded line icons
- **Color:** inherits `currentColor` from parent — adapts to dark/light contexts
- **Size:** typically `24×24` viewBox
- **No emoji** used in icon positions

### Sacred / Brand Symbols
- Sanskrit Devanagari: **ॐ** (Om), **श्री** (Shri), **卐** (Swastika auspicious) — used as decorative field elements at low opacity
- All rendered as Unicode text characters with `font-family: "Playfair Display", serif`
- Gold diamond: **✦** used as decorative inline element in pillar sections

### Common Icon Patterns
| Context | Icon |
|---|---|
| Food/grains | Branching stalks SVG |
| Coffee | Cup with steam handle SVG |
| Tea | Leaf/plant SVG |
| Calendar | Rect with lines SVG |
| Location | Pin with circle SVG |
| Email | Envelope polyline SVG |
| Instagram | Rounded rect + circle + dot SVG |
| Cart | Shopping bag SVG |
| Close | ✕ character or SVG |
| Hamburger menu | ☰ Unicode character |
| Success checkmark | Path SVG inside circle |

### Key Assets (in assets/)
- `assets/images/brand/black_logo_circle_nobg.png` — Circular logo on transparent, dark ink
- `assets/images/brand/NameLogoTM.png` — Name wordmark with TM
- `assets/images/brand/stamp_logo.png` — Stamp/seal version of logo
- `assets/images/brand/story_brand_photo.png` — Brand lifestyle photo (coffee + grains)
- `assets/images/menu/` — Food photography (JPG/PNG)
- `assets/images/festivals/` — Hindu festival illustrations (PNG, 15 festivals)

---

## FILE INDEX

```
README.md                    — This file; brand context & design rules
SKILL.md                     — Agent skill manifest
colors_and_type.css          — CSS custom properties (colors + typography)
assets/css/styles.css        — Source stylesheet from repo
assets/css/festivals.css     — Festival modal stylesheet from repo
assets/images/brand/         — Logos & brand photography
assets/images/menu/          — Food photography
preview/                     — Design system cards (registered in Design System tab)
  colors-brand.html
  colors-semantic.html
  type-display.html
  type-body.html
  type-scale.html
  spacing-radii.html
  spacing-shadows.html
  components-buttons.html
  components-cards.html
  components-nav.html
  components-inputs.html
  components-badges.html
  components-cart.html
  brand-logos.html
  brand-symbols.html
ui_kits/website/             — Website UI kit
  index.html                 — Full clickthrough prototype
  Nav.jsx
  Hero.jsx
  Cards.jsx
  Footer.jsx
  MenuCard.jsx
```
