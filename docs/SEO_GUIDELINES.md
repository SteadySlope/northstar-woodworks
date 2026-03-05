# SEO GUIDELINES

**Status:** Active
**Applies To:** All pages, components, and content

---

## Core Principles

1. **Every page is a landing page** - Treat each page as if it's the first thing a visitor sees
2. **Search intent first** - Match content to what users are actually searching for
3. **Technical + Content** - Both must be excellent; one without the other fails

---

## 1. On-Page SEO

### Meta Tags (Required Per Page)

| Tag | Rule | Example |
|-----|------|---------|
| `<title>` | Unique, 50-60 characters, primary keyword first | TBD |
| `meta description` | Unique, 150-160 characters, include CTA language | TBD |
| `canonical` | Absolute URL, non-www or www (pick one, be consistent) | TBD |
| `og:title` | Match or slightly vary from `<title>` | TBD |
| `og:description` | Match or slightly vary from meta description | TBD |
| `og:image` | 1200x630px minimum, branded | TBD |
| `og:type` | `website` for pages, `article` for blog posts | - |

### Title Tag Formula

```
[Primary Keyword] - [Secondary Keyword] | [Brand Name]
```

**Rules:**
- Primary keyword as close to the front as possible
- Keep under 60 characters (Google truncates after ~60)
- Never duplicate title tags across pages
- Include location if local SEO matters

### Meta Description Formula

```
[Value proposition with primary keyword]. [Supporting detail]. [CTA verb] today!
```

**Rules:**
- Include primary keyword naturally
- Include a call to action (call, schedule, learn more)
- Make it compelling - this is your ad copy in search results
- Unique per page - NEVER duplicate

---

## 2. Heading Hierarchy

### Rules

| Rule | Detail |
|------|--------|
| One H1 per page | Descriptive, contains primary keyword |
| H2s for sections | Each major section gets an H2 |
| H3s for subsections | Nested under H2s only |
| Never skip levels | No H1 → H3 (must go H1 → H2 → H3) |
| No keyword stuffing | Natural language, not forced repetition |

### Heading Template

```
H1: [Primary keyword + page topic]
  H2: [Section topic with secondary keyword]
    H3: [Subsection detail]
    H3: [Subsection detail]
  H2: [Section topic with related keyword]
    H3: [Subsection detail]
  H2: [FAQ / Common Questions] (if applicable)
```

---

## 3. URL Structure

### Rules
- **Lowercase only** - `/services/roof-repair` not `/Services/Roof-Repair`
- **Hyphens for spaces** - `/gutter-installation` not `/gutter_installation`
- **Short and descriptive** - `/about` not `/about-our-company-and-team`
- **No trailing slashes** - Be consistent (pick one pattern)
- **No dates in non-blog URLs** - `/services/page` not `/2025/services/page`
- **Keyword in URL** - The slug should contain the target keyword

### URL Depth
- Aim for max **3 levels deep**: `/category/subcategory/page`
- Deeper nesting hurts crawlability and dilutes authority

---

## 4. Internal Linking

### Rules
- **Every page links to at least 2-3 other pages** on the site
- **Use descriptive anchor text** - "our gutter installation services" not "click here"
- **Link to related services/content** from within body copy
- **Pillar pages link down** to sub-pages and sub-pages link back up
- **No orphan pages** - Every page must be reachable from navigation or another page
- **Breadcrumbs** - Include on all pages below the homepage level

### Linking Structure

```
Homepage
├── links to all pillar/category pages
├── Pillar Page (e.g., /services)
│   ├── links to all sub-service pages
│   ├── Sub-Service Page
│   │   ├── links back to pillar page
│   │   ├── links to 2-3 related sub-services
│   │   └── links to contact/quote page
│   └── ...
├── Blog Hub
│   ├── links to all blog posts
│   └── Blog Post
│       ├── links to related services
│       ├── links to 2-3 related posts
│       └── links to contact/quote page
└── Contact / Quote Page
    └── linked from every service page
```

---

## 5. Schema Markup (Structured Data)

### Required Schema Types

| Page Type | Schema | Priority |
|-----------|--------|----------|
| All pages | `Organization` or `LocalBusiness` | High |
| Service pages | `Service` | High |
| FAQ sections | `FAQPage` | High |
| Blog posts | `Article` or `BlogPosting` | Medium |
| Contact page | `ContactPoint` | Medium |
| Reviews/Testimonials | `AggregateRating`, `Review` | Medium |
| Breadcrumbs | `BreadcrumbList` | Medium |

### Implementation
- Use JSON-LD format (preferred by Google)
- Place in `<head>` or at the top of the page component
- Validate with Google Rich Results Test before deployment
- Keep schema data consistent with visible page content

---

## 6. Image SEO

### Rules

| Rule | Detail |
|------|--------|
| Alt text on ALL images | Descriptive, include keyword where natural |
| File names | Descriptive, hyphenated: `kitchen-remodel-seattle.jpg` |
| Format | WebP preferred, JPEG fallback, PNG for transparency |
| Lazy loading | All images below the fold |
| Responsive sizes | Use `sizes` attribute with Next.js `<Image>` |
| Max file size | Under 200KB for standard images, under 500KB for heroes |
| Dimensions | Always set `width` and `height` to prevent layout shift |

### Alt Text Formula
```
[What is shown] + [context/location if relevant]
```

**Good:** "Modern kitchen renovation with quartz countertops in Seattle home"
**Bad:** "image1" or "kitchen" or "kitchen kitchen remodel kitchen renovation SEO"

---

## 7. Technical SEO

### Required Files

| File | Purpose | Location |
|------|---------|----------|
| `sitemap.xml` | Lists all indexable pages | Auto-generated or `app/sitemap.ts` |
| `robots.txt` | Crawl directives | `app/robots.ts` or `public/robots.txt` |
| `manifest.json` | PWA / browser metadata | `public/manifest.json` |

### Sitemap Rules
- Include ALL public pages
- Exclude admin, auth, API routes, legal pages (optional)
- Update `lastmod` when page content changes
- Set `priority` and `changefreq` appropriately

### Robots.txt Rules
- Allow all public pages
- Disallow `/api/`, `/admin/`, `/account/`
- Reference sitemap URL

### Performance (Core Web Vitals)

| Metric | Target | How |
|--------|--------|-----|
| LCP (Largest Contentful Paint) | < 2.5s | Optimize hero images, fonts |
| FID (First Input Delay) | < 100ms | Minimize JS, defer non-critical |
| CLS (Cumulative Layout Shift) | < 0.1 | Set image dimensions, avoid layout shifts |
| INP (Interaction to Next Paint) | < 200ms | Optimize event handlers |

### Page Speed Rules
- **Defer non-critical scripts** (analytics, chat widgets, social embeds)
- **Preload critical fonts** with `<link rel="preload">`
- **Minimize third-party scripts** - every script costs performance
- **Use Next.js `<Image>`** for automatic optimization
- **Code split** - Only load JS needed for the current page

---

## 8. Local SEO (If Applicable)

### NAP Consistency
- **N**ame, **A**ddress, **P**hone must be identical everywhere
- Footer, Contact page, Schema markup, Google Business Profile

### Local Keywords
- Include city/region in:
  - Title tags
  - H1 headings
  - Meta descriptions
  - Image alt text
  - Body copy (naturally)

### Service Area Pages
- One page per primary service area / city
- Unique content per page (NOT duplicate with city name swapped)
- Include local landmarks, neighborhoods, or context
- Link to Google Maps embed or directions

---

## 9. Blog / Content SEO

### Blog Post Checklist

- [ ] Title tag with target keyword (under 60 chars)
- [ ] Meta description with CTA (under 160 chars)
- [ ] H1 matches search intent
- [ ] H2s break content into scannable sections
- [ ] Target keyword in first 100 words
- [ ] Internal links to 2-3 related services
- [ ] Internal links to 2-3 related posts
- [ ] At least 1 image with optimized alt text
- [ ] Schema markup (`Article` or `BlogPosting`)
- [ ] Word count: 800+ for standard, 1500+ for pillar/guide content
- [ ] CTA at end of post (and optionally mid-post)

### Content Quality Rules
- **No thin content** - Every page must provide genuine value
- **No duplicate content** - Unique copy on every page
- **E-E-A-T signals** - Experience, Expertise, Authoritativeness, Trustworthiness
- **Fresh content** - Update outdated pages, publish new content regularly

---

## 10. SEO Audit Checklist (Pre-Launch / Ongoing)

### Before Every Deployment
- [ ] All pages have unique title tags
- [ ] All pages have unique meta descriptions
- [ ] No broken internal links (404s)
- [ ] Sitemap.xml is generated and accurate
- [ ] Robots.txt allows proper crawling
- [ ] All images have alt text
- [ ] Schema markup validates (Google Rich Results Test)
- [ ] Canonical URLs are set correctly
- [ ] No duplicate H1 tags across pages
- [ ] Core Web Vitals within target thresholds
- [ ] Mobile-friendly (Google Mobile-Friendly Test)

---

## Rules for Agents

### NEVER:
- Remove existing meta tags without replacing them
- Duplicate title tags or meta descriptions across pages
- Use generic alt text ("image", "photo", "banner")
- Create orphan pages with no internal links
- Remove schema markup without replacement
- Stuff keywords unnaturally into content
- Create pages with < 300 words of unique content

### ALWAYS:
- Include meta tags on every new page created
- Add alt text to every image added
- Include internal links in every new page
- Add schema markup where applicable
- Validate schema after changes
- Test page speed after adding features/images
- Maintain heading hierarchy (H1 > H2 > H3)
