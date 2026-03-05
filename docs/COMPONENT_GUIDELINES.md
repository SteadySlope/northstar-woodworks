# COMPONENT GUIDELINES

**Status:** Active
**Applies To:** All UI components, layouts, and page sections

---

## Core Rules

### 1. Responsive-First Design (NON-NEGOTIABLE)

**Every component MUST work on all device sizes. No exceptions.**

| Breakpoint | Device | Width | Priority |
|------------|--------|-------|----------|
| Default (mobile-first) | Mobile phones | < 640px | Build this FIRST |
| `sm:` | Large phones / small tablets | 640px+ | Second |
| `md:` | Tablets | 768px+ | Third |
| `lg:` | Laptops / small desktops | 1024px+ | Fourth |
| `xl:` | Desktops | 1280px+ | Fifth |
| `2xl:` | Large desktops | 1536px+ | Last |

**Build mobile-first, then scale up.** Write the base styles for mobile, then add `sm:`, `md:`, `lg:` overrides.

```tsx
// CORRECT: Mobile-first
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">

// WRONG: Desktop-only, hoping mobile works
<div className="grid grid-cols-4 gap-8">
```

#### Responsive Checklist (Per Component)

- [ ] Renders correctly at 320px width (smallest phones)
- [ ] Readable text at all sizes (no text smaller than 14px on mobile)
- [ ] Touch targets minimum 44x44px on mobile
- [ ] No horizontal scroll at any breakpoint
- [ ] Images scale proportionally
- [ ] Spacing adjusts for smaller screens
- [ ] Navigation is usable on mobile (drawer, sheet, or collapsible)
- [ ] Forms are usable on mobile (inputs don't overflow, labels visible)
- [ ] Tables scroll horizontally OR reformat for mobile
- [ ] Modals/dialogs are full-width on mobile

---

### 2. Reusability (NON-NEGOTIABLE)

**Components MUST be built for reuse. Sitewide changes should require editing ONE file, not fifty.**

#### Rules

| Rule | Detail |
|------|--------|
| **Single Responsibility** | Each component does one thing well |
| **Props-driven** | Behavior and content passed via props, not hardcoded |
| **No hardcoded content** | Text, images, links, colors all come from props or data files |
| **No hardcoded colors** | Use Tailwind classes tied to CSS variables (see STYLE_GUIDE.md) |
| **Shared components for shared patterns** | If 2+ pages use the same layout, extract it into a component |
| **Centralized data** | Company info, contact details, nav links live in `lib/` files |

#### When to Extract a Component

```
Is this pattern used on 2+ pages?
  └─ YES → Extract into a shared component
  └─ NO → Is it likely to be used on future pages?
      └─ YES → Extract into a shared component
      └─ NO → Keep it inline (but keep it clean)
```

#### Component Props Pattern

```tsx
// CORRECT: Reusable, props-driven
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

export function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <Card>
      {icon}
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={href}>Learn More</Link>
    </Card>
  );
}

// WRONG: Hardcoded, single-use
export function RoofingCard() {
  return (
    <div className="bg-[#1B1B1B]">
      <h3>Roofing Services</h3>
      <p>We do roofing in Seattle.</p>
      <a href="/services/roofing">Learn More</a>
    </div>
  );
}
```

---

### 3. Component Organization

```
components/
├── ui/              ← Shadcn UI primitives (button, card, input, etc.)
├── layout/          ← Sitewide layout (Header, Footer, Breadcrumb)
├── sections/        ← Reusable page sections (Hero, CTA Banner, FAQ Section)
├── forms/           ← Form components (ContactForm, QuoteForm)
├── blog/            ← Blog-specific components (PostCard, RelatedArticles)
├── gallery/         ← Image/gallery components
└── [feature]/       ← Feature-specific components as needed
```

#### File Naming
- **PascalCase** for component files: `ServiceCard.tsx`
- **One component per file** (unless tightly coupled sub-components)
- **Index exports** for directories with 3+ components: `index.ts`
- **Max 450 lines per file** - Split if larger

---

### 4. Component Quality Standards

#### TypeScript
- **All props must be typed** with an interface
- **No `any` or `unknown` types**
- **Export prop interfaces** so parent components can reference them
- **Use React.ReactNode** for children/slot props, not `string`

#### Accessibility
- **Semantic HTML** - Use `<button>`, `<nav>`, `<main>`, `<section>`, `<article>` correctly
- **ARIA labels** where semantic HTML isn't enough
- **Keyboard navigable** - All interactive elements reachable via Tab
- **Focus indicators** - Visible focus rings on all interactive elements
- **Screen reader text** for icon-only buttons: `<span className="sr-only">Close</span>`

#### Performance
- **Lazy load** below-the-fold images and heavy components
- **Use Next.js `<Image>`** for all images (automatic optimization)
- **Avoid unnecessary re-renders** - Memoize where appropriate
- **Keep bundle size small** - Don't import entire libraries for one function

---

### 5. Shadcn UI Usage

**Shadcn UI is the ONLY UI component library allowed.**

| Rule | Detail |
|------|--------|
| Use Shadcn components first | Before building custom UI, check if Shadcn has it |
| Customize via props + Tailwind | Don't modify Shadcn source files directly |
| Keep Shadcn up to date | Use `npx shadcn@latest add [component]` for new components |
| Style: New York | Project uses the "new-york" Shadcn style variant |

#### Common Shadcn Components

| Need | Shadcn Component |
|------|-----------------|
| Buttons | `Button` |
| Cards | `Card`, `CardHeader`, `CardContent`, `CardFooter` |
| Forms | `Input`, `Textarea`, `Label`, `Select` |
| Modals | `Dialog` |
| Dropdowns | `DropdownMenu` |
| Tabs | `Tabs` |
| Accordion/FAQ | `Accordion` |
| Side drawer | `Sheet` |
| Alerts | `Alert` |
| Badges | `Badge` |
| Tooltips | `Tooltip` |

---

### 6. Layout Patterns

#### Page Layout Template

```tsx
export default function ServicePage() {
  return (
    <>
      {/* Hero - Full width */}
      <HeroSection />

      {/* Content - Contained width */}
      <section className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        {/* Content here */}
      </section>

      {/* Alternating background */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          {/* Content here */}
        </div>
      </section>

      {/* CTA Banner - Full width */}
      <CTABanner />
    </>
  );
}
```

#### Grid Patterns

```tsx
// 2-column (text + image)
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

// 3-column cards
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

// 4-column features
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
```

---

### 7. Data Centralization

**Content that appears on multiple pages MUST live in `lib/` files, not hardcoded in components.**

| Data | File Location | Example |
|------|--------------|---------|
| Company name, phone, address | `lib/company.ts` | Used in Header, Footer, Contact, Schema |
| Navigation links | `lib/navigation.ts` | Used in Header, Footer, Mobile Menu |
| Service definitions | `lib/services.ts` | Used in service pages, cards, navigation |
| Social media links | `lib/company.ts` | Used in Footer, About, Contact |
| Business hours | `lib/company.ts` | Used in Footer, Contact, Schema |
| Review/testimonial data | `lib/reviews.ts` | Used in review components, Schema |

**Why:** If the phone number changes, you edit ONE file. Not 15 pages.

---

## Rules for Agents

### NEVER:
- Build a component that only works on desktop
- Hardcode text, colors, or links inside components
- Duplicate component logic across pages (extract it instead)
- Use a UI library other than Shadcn
- Create files longer than 450 lines
- Use `any` or `unknown` types
- Skip mobile testing

### ALWAYS:
- Build mobile-first, add responsive breakpoints up
- Test at 320px, 768px, 1024px, and 1440px widths
- Use props and interfaces for all component inputs
- Centralize shared data in `lib/` files
- Use Shadcn UI components as the foundation
- Keep components focused and single-responsibility
- Export TypeScript interfaces for props
