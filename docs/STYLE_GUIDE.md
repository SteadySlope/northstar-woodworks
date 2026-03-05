# STYLE GUIDE

**Last Updated:** 2026-03-01
**Status:** Active
**Brand:** Northstar Woodworks

---

## 1. Brand Identity

### Company Info
- **Company Name:** Northstar Woodworks
- **Tagline / Slogan:** Crafted by Heritage, Built to Last
- **Industry / Niche:** Premium custom woodworking & furniture
- **Target Audience:** Homeowners seeking high-quality, handcrafted custom furniture and woodwork in Utah and surrounding states
- **Brand Voice / Tone:** Premium, warm, confident, honest — speaks like a master craftsman who takes pride in every piece
- **Brand Personality Keywords:** Trustworthy, premium, heritage-driven, meticulous, warm, authentic
- **Founded:** 2025
- **Heritage:** Second-generation craftsman with Amish background. 16 years personal experience, 40+ years family legacy in the furniture industry.

### Logo
- **Primary Logo File:** TBD (awaiting from client)
- **Secondary / Icon Logo:** TBD
- **Logo Format(s):** SVG preferred, PNG fallback
- **Logo on Dark Background:** TBD (white/light version needed)
- **Favicon:** TBD

---

## 2. Color Palette

### Primary Brand Colors

| Role | Color Name | Hex | CSS Variable | Tailwind Class | Usage |
|------|------------|-----|--------------|----------------|-------|
| Primary Dark | Walnut | `#3C2415` | `--color-walnut` | `bg-walnut`, `text-walnut` | Headers, footers, hero overlays, primary text |
| Accent | Honey Tan | `#C9A96E` | `--color-tan` | `bg-tan`, `text-tan` | CTAs, links, accents, highlights |
| Accent Hover | Aged Oak | `#A07D4F` | `--color-oak` | `bg-oak`, `text-oak` | Button hover, active states |

### Neutral Colors

| Role | Color Name | Hex | CSS Variable | Usage |
|------|------------|-----|--------------|-------|
| Dark Text | Heartwood | `#2A1F14` | `--color-dark` | Headings, primary body text |
| Muted Text | Driftwood | `#8B7355` | `--color-muted` | Secondary text, captions, labels |
| Light Background | Birch | `#FAF7F2` | `--color-birch` | Page backgrounds, cards |
| White | Linen | `#FFFFFF` | `--color-white` | Clean sections, overlays |
| Border | Sandstone | `#E5DDD0` | `--color-sand` | Borders, dividers, subtle lines |

### State Colors

| State | Hex | Usage |
|-------|-----|-------|
| Success | `#4A7C59` | Form success, confirmations |
| Error | `#B94A48` | Form errors, alerts |
| Warning | `#C9913E` | Warnings, caution messages |
| Info | `#5B7FA5` | Informational callouts |

### Color Usage Ratios

| Proportion | Color | Purpose |
|------------|-------|---------|
| ~60% | Birch `#FAF7F2` + White | Backgrounds, white space |
| ~25% | Walnut `#3C2415` + Heartwood `#2A1F14` | Text, headings |
| ~10% | Driftwood `#8B7355` + Sandstone `#E5DDD0` | Secondary elements, borders |
| ~5% | Honey Tan `#C9A96E` + Aged Oak `#A07D4F` | Accents, CTAs |

### Color Rules
- **Avoid:** Pure black `#000`, neon colors, cool blues/grays
- **Prefer warm tones** throughout — everything should feel like natural wood
- **Contrast Minimum:** WCAG AA (4.5:1 for text, 3:1 for large text)

---

## 3. Typography

### Font Families

| Role | Font Name | Google Fonts | Fallback Stack | Weight(s) |
|------|-----------|-------------|----------------|-----------|
| Headings | Playfair Display | Yes | Georgia, serif | 400, 700 |
| Body | DM Sans | Yes | system-ui, sans-serif | 400, 500, 600 |

### Type Scale

| Element | Size (Desktop) | Size (Mobile) | Weight | Line Height | Letter Spacing | Font |
|---------|---------------|---------------|--------|-------------|----------------|------|
| H1 | 3.5rem (56px) | 2.25rem (36px) | 700 | 1.1 | -0.02em | Playfair Display |
| H2 | 2.5rem (40px) | 1.75rem (28px) | 700 | 1.2 | -0.01em | Playfair Display |
| H3 | 1.75rem (28px) | 1.375rem (22px) | 700 | 1.3 | 0 | Playfair Display |
| H4 | 1.25rem (20px) | 1.125rem (18px) | 600 | 1.4 | 0 | DM Sans |
| Body Large | 1.125rem (18px) | 1rem (16px) | 400 | 1.7 | 0 | DM Sans |
| Body | 1rem (16px) | 1rem (16px) | 400 | 1.7 | 0 | DM Sans |
| Body Small | 0.875rem (14px) | 0.875rem (14px) | 400 | 1.6 | 0 | DM Sans |
| Caption | 0.75rem (12px) | 0.75rem (12px) | 500 | 1.5 | 0.02em | DM Sans |

### Typography Rules
- **Max line width:** 70 characters (for readability)
- **Paragraph spacing:** 1.5rem between paragraphs
- **Heading case:** Sentence case for headings (not ALL CAPS)
- **Link style:** Honey Tan color, underline on hover

---

## 4. Spacing & Layout

### Spacing Scale

| Name | Value | Usage |
|------|-------|-------|
| xs | 0.25rem (4px) | Tight internal spacing |
| sm | 0.5rem (8px) | Small gaps, icon padding |
| md | 1rem (16px) | Standard component padding |
| lg | 1.5rem (24px) | Card padding, element gaps |
| xl | 3rem (48px) | Between sections (mobile) |
| 2xl | 5rem (80px) | Between sections (desktop) |
| 3xl | 7rem (112px) | Major section separation |

### Layout

- **Max Content Width:** 1280px
- **Grid System:** CSS Grid / Flexbox (Tailwind utilities)
- **Section Padding (Desktop):** py-20 to py-28 (80px-112px)
- **Section Padding (Mobile):** py-12 to py-16 (48px-64px)
- **Container Padding (horizontal):** px-4 sm:px-6 lg:px-8
- **Card Padding:** p-6 md:p-8
- **Card Border Radius:** rounded-lg (0.5rem)
- **Card Shadow:** shadow-sm, hover:shadow-md

### Breakpoints

| Name | Width | Usage |
|------|-------|-------|
| sm | 640px | Mobile landscape |
| md | 768px | Tablet |
| lg | 1024px | Small desktop |
| xl | 1280px | Desktop |
| 2xl | 1536px | Large desktop |

---

## 5. Buttons & CTAs

### Button Variants

| Variant | Background | Text Color | Border | Hover State | Usage |
|---------|------------|------------|--------|-------------|-------|
| Primary | Honey Tan `#C9A96E` | White `#FFFFFF` | None | Aged Oak `#A07D4F` | Main CTAs |
| Secondary | Transparent | Walnut `#3C2415` | 1px Walnut | bg-walnut text-white | Secondary actions |
| Ghost | Transparent | Honey Tan `#C9A96E` | None | Underline | Inline links, subtle actions |

### Button Sizing

| Size | Padding | Font Size | Border Radius |
|------|---------|-----------|---------------|
| sm | px-4 py-2 | 0.875rem | rounded-md |
| md (default) | px-6 py-3 | 1rem | rounded-md |
| lg | px-8 py-4 | 1.125rem | rounded-md |

### Button Rules
- **Min touch target:** 44x44px (mobile)
- **CTA text style:** Action verbs — "Request a Consultation", "View Our Work"
- **Icon usage:** Arrow right on primary CTAs
- **Animation on hover:** Subtle background color shift + slight lift (translate-y-[-1px])

---

## 6. Images & Media

### Photography Style
- **Overall Feel:** Warm, natural light, showcasing wood grain and craftsmanship details
- **Subject Matter:** Finished furniture pieces, workshop process shots, wood detail close-ups, installed pieces in homes
- **Do's:** Show texture, warmth, natural settings, hands-on craftsmanship
- **Don'ts:** No cold/blue lighting, no stock-looking images, no cluttered backgrounds

### Image Treatments
- **Border Radius:** rounded-lg (0.5rem)
- **Overlay on Hero Images:** Dark 40-50% overlay with slight warm tint
- **Aspect Ratios:** Hero 16:9, cards 4:3, gallery 3:2, thumbnails 1:1
- **Placeholder / Fallback:** Birch background `#FAF7F2` with subtle wood grain pattern

### Icons
- **Icon Library:** Lucide React
- **Icon Size (default):** 24px (w-6 h-6)
- **Icon Color:** Match text color or Honey Tan for feature icons
- **Icon Stroke Width:** 1.5

---

## 7. Components

### Header / Navigation
- **Style:** Sticky, solid background, slight shadow on scroll
- **Height:** 4.5rem (72px) desktop, 4rem (64px) mobile
- **Background:** White
- **Mobile Menu Style:** Sheet drawer from the right
- **Logo Placement:** Left
- **CTA in Header:** Phone number (desktop) + "Request a Quote" button

### Footer
- **Background:** Walnut `#3C2415`
- **Text:** White / Birch
- **Columns:** 3-4 (Company, Services, Contact, Hours)
- **Social Icons:** Subtle, white, bottom row
- **CTA Banner Above Footer:** Yes — "Ready to bring your vision to life?"

### Hero Sections
- **Default Height:** 85vh (homepage), 50vh (interior pages)
- **Text Alignment:** Left-aligned on desktop, centered on mobile
- **Overlay Style:** Dark warm overlay 40-50%
- **CTA Placement:** Below headline and subheadline
- **Trust Indicators:** Stats bar below hero (years experience, warranty, family legacy)

### Cards
- **Background:** White
- **Border:** 1px Sandstone `#E5DDD0`
- **Shadow:** shadow-sm
- **Hover Effect:** shadow-md + slight lift (translate-y-[-2px])
- **Padding:** p-6 md:p-8
- **Border Radius:** rounded-lg

### Forms
- **Input Style:** Outlined with Sandstone border
- **Input Border Radius:** rounded-md
- **Label Position:** Above input
- **Error Display:** Below field, red text
- **Submit Button Style:** Full-width on mobile, right-aligned on desktop

### Section Dividers
- **Style:** Alternating backgrounds (White / Birch) for natural section separation
- **Between-section spacing:** py-20 md:py-28

---

## 8. Animations & Interactions

- **Page Transitions:** None (keep fast and clean)
- **Scroll Reveal:** Subtle fade-up on section entry (200ms delay stagger)
- **Hover Micro-interactions:** Cards lift, buttons color shift, links underline
- **Loading States:** Skeleton shimmer
- **Scroll Behavior:** Smooth scroll to anchors
- **Animation Speed:** 200ms for hover, 400ms for reveals, 300ms for transitions
- **Reduced Motion:** Respect `prefers-reduced-motion` (always)

---

## 9. SEO & Meta Defaults

- **Default Meta Title Format:** "Page Title | Northstar Woodworks — Premium Custom Furniture"
- **Default Meta Description Length:** 150-160 characters
- **OG Image Default:** TBD (branded share image)
- **Canonical URL Pattern:** TBD (e.g., https://northstarwoodworks.com/page)
- **Schema Markup Types:** LocalBusiness, Service, FAQPage, BreadcrumbList
- **H1 Rule:** One per page, descriptive, keyword-targeted

---

## 10. Accessibility Standards

- **Target:** WCAG 2.1 AA minimum
- **Focus Indicators:** Honey Tan ring (`ring-2 ring-tan ring-offset-2`)
- **Skip Navigation Link:** Yes
- **Alt Text Rule:** All images must have descriptive alt text
- **Keyboard Navigation:** All interactive elements must be reachable
- **Minimum Touch Target:** 44x44px
- **Color Independence:** Never rely on color alone to convey meaning

---

## Architecture (How Colors/Styles Are Applied)

```
1. CSS Variables (Single Source of Truth)
   File: app/globals.css

2. Tailwind Config (References CSS Variables)
   File: tailwind.config.ts

3. Shadcn UI (Aligned with brand variables)
   File: app/globals.css (HSL variables)

4. Components (Use Tailwind Classes)
   className="bg-tan hover:bg-oak text-walnut"
```

### File Locations

| File | Purpose | Edit Frequency |
|------|---------|----------------|
| `app/globals.css` | Define CSS variables + Shadcn theming | Edit here to change colors |
| `tailwind.config.ts` | Map variables to Tailwind classes | Rarely edit |
| Component files | Use Tailwind classes | Do NOT hardcode colors |
