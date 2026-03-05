# SITE TREE GUIDELINES

**Status:** Active
**Applies To:** All page creation, navigation structure, and URL routing

---

## Purpose

The site tree defines the complete page hierarchy. Every page must be planned here before it's built. This prevents orphan pages, broken navigation, duplicate content, and messy URL structures.

---

## 1. Site Tree Rules

### Structure Rules
- **Max depth: 3 levels** - Homepage > Category > Page (deeper nesting hurts SEO and UX)
- **Every page must have a parent** - No orphan pages floating outside the tree
- **Every page must be reachable** from navigation, a parent page, or internal links
- **URL slugs match the tree** - `/services/custom-furniture` mirrors the hierarchy
- **One page per topic** - Never create two pages targeting the same keyword/intent

### Naming Rules
- **Slugs are lowercase, hyphenated** - `custom-furniture` not `CustomFurniture`
- **Short and descriptive** - `/about` not `/about-our-company-history-and-team`
- **Keyword-targeted** - Slug should contain the primary keyword for that page
- **No filler words in slugs** - `/services` not `/our-services`

---

## 2. Current Site Tree — Northstar Woodworks

```
/                                    ← Homepage
├── /about                           ← About (heritage story, image & bio)
├── /services                        ← Services hub / pillar page
│   ├── /services/custom-furniture   ← Custom Furniture (tables, chairs, beds, etc.)
│   ├── /services/cabinetry          ← Cabinetry & Built-Ins
│   ├── /services/shelving           ← Shelving & Storage Solutions
│   └── /services/restoration        ← Restoration & Refinishing
├── /gallery                         ← Portfolio / Gallery of completed work
├── /process                         ← Our Process (how we work, consultation to delivery)
├── /contact                         ← Contact page with form
├── /faq                             ← FAQ page
├── /privacy-policy                  ← Privacy Policy
└── /terms                           ← Terms of Service
```

**Total Pages:** 12

---

## 3. Page Definitions

### Homepage `/`
- **Purpose:** First impression, brand overview, drive to services/contact
- **Sections:** Hero, brief intro, services overview, stats/trust bar, featured work, testimonials, CTA banner
- **Primary CTA:** "Request a Consultation"
- **Keywords:** custom woodworking, premium furniture, Hyrum Utah

### About `/about`
- **Purpose:** Tell the heritage story, build trust and connection
- **Content:** Owner image & bio, Amish heritage background, 16 years experience, 40+ years family legacy, core values
- **Primary CTA:** "See Our Work" → /gallery
- **Keywords:** master craftsman, Amish woodworking, second generation

### Services Hub `/services`
- **Purpose:** Overview of all service categories, link to each
- **Content:** Brief description + card for each service, why choose us
- **Primary CTA:** "Request a Consultation"

### Custom Furniture `/services/custom-furniture`
- **Purpose:** Detail page for custom furniture building
- **Content:** Process, types of furniture (dining tables, coffee tables, beds, desks, chairs), materials, 5-year warranty
- **Primary CTA:** "Start Your Custom Piece"

### Cabinetry `/services/cabinetry`
- **Purpose:** Detail page for cabinet and built-in work
- **Content:** Kitchen cabinets, bathroom vanities, built-in bookshelves, entertainment centers, pantries
- **Primary CTA:** "Request a Consultation"

### Shelving `/services/shelving`
- **Purpose:** Detail page for shelving and storage solutions
- **Content:** Floating shelves, wall units, closet systems, garage storage, display shelving
- **Primary CTA:** "Request a Consultation"

### Restoration `/services/restoration`
- **Purpose:** Detail page for furniture restoration and refinishing
- **Content:** Antique restoration, refinishing, repair, re-staining, hardware replacement
- **Primary CTA:** "Get a Restoration Estimate"

### Gallery `/gallery`
- **Purpose:** Showcase completed work, build desire
- **Content:** Photo grid of projects, filterable by category
- **Primary CTA:** "Start Your Project"

### Process `/process`
- **Purpose:** Explain how working with Northstar Woodworks works, reduce uncertainty
- **Content:** Step-by-step (Consultation → Design → Build → Delivery), timeline expectations, what to expect
- **Primary CTA:** "Begin Your Consultation"

### Contact `/contact`
- **Purpose:** Convert visitors — form submission or phone call
- **Content:** Contact form (name, email, phone, service, message), phone, email, address, hours, map
- **Primary CTA:** Form submission

### FAQ `/faq`
- **Purpose:** Answer common questions, reduce objections
- **Content:** Accordion FAQ organized by category (Process, Pricing, Materials, Warranty, Service Area)
- **Primary CTA:** "Still Have Questions? Contact Us"

### Privacy Policy `/privacy-policy`
- **Purpose:** Legal compliance
- **Linked from:** Footer only

### Terms of Service `/terms`
- **Purpose:** Legal compliance
- **Linked from:** Footer only

---

## 4. Navigation Mapping

### Primary Navigation (Header)

```
[Logo]  Home  About  Services ▼  Gallery  Process  Contact  [Request a Quote]
                       ├── Custom Furniture
                       ├── Cabinetry
                       ├── Shelving
                       └── Restoration
```

**7 items** including CTA button (within the 6-7 max guideline).

### Footer Navigation

```
Column 1: Company          Column 2: Services           Column 3: Contact
├── About                  ├── Custom Furniture          ├── (719) 398-3955
├── Our Process            ├── Cabinetry                 ├── amconstruction959@gmail.com
├── Gallery                ├── Shelving                  ├── 1160 Tule Dr
├── FAQ                    └── Restoration               │   Hyrum, UT 84319
└── Contact                                              └── Mon-Fri 8am-5pm

Bottom Bar: © 2025 Northstar Woodworks | Privacy Policy | Terms
```

### Mobile Navigation

Same pages as desktop, in a sheet drawer from the right:
- Services section collapsible with sub-pages
- Phone number tap-to-call at top
- "Request a Quote" button prominent at bottom of drawer

---

## 5. Adding New Pages

### Before Creating Any Page:

1. **Check the site tree above** - Does this page already exist or overlap?
2. **Define the parent** - Where does it sit in the hierarchy?
3. **Define the URL** - Follow slug rules
4. **Define navigation placement** - Header dropdown? Footer only?
5. **Update the site tree** in this document
6. **Update the sitemap**
7. **Add internal links** from parent and sibling pages

---

## 6. Route Groups (Next.js App Router)

```
app/
├── (marketing)              ← Marketing pages
│   ├── about/
│   ├── gallery/
│   ├── process/
│   ├── contact/
│   └── faq/
├── (services)               ← Service pages
│   ├── services/
│   │   ├── custom-furniture/
│   │   ├── cabinetry/
│   │   ├── shelving/
│   │   └── restoration/
├── (legal)                  ← Legal pages
│   ├── privacy-policy/
│   └── terms/
├── layout.tsx               ← Root layout (Header + Footer)
└── page.tsx                 ← Homepage
```

---

## Rules for Agents

### NEVER:
- Create a page without updating this site tree document
- Create pages deeper than 3 levels
- Create duplicate/overlapping content targets
- Delete pages without handling link cleanup

### ALWAYS:
- Check this document before creating or deleting any page
- Update this document when pages change
- Follow URL naming rules
- Ensure every new page is linked from at least one other page
- Update navigation (header/footer) when pages are added/removed
