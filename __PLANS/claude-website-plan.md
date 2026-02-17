# Walsh Maths Works - Complete Website Rebuild Plan

> **Status:** DRAFT - Awaiting review
> **Author:** Claude (Opus 4.6)
> **Date:** 17 February 2026
> **Stack:** Next.js 16 (App Router) + TypeScript + Tailwind CSS v4

---

## Table of Contents

1. [Design System & Brand Identity](#1-design-system--brand-identity)
2. [Project Architecture](#2-project-architecture)
3. [Data Layer & Configuration](#3-data-layer--configuration)
4. [Page-by-Page Build Spec](#4-page-by-page-build-spec)
5. [Shared Components](#5-shared-components)
6. [Cart & Booking System](#6-cart--booking-system)
7. [Stripe Integration](#7-stripe-integration)
8. [SEO & Performance](#8-seo--performance)
9. [Implementation Order](#9-implementation-order)

---

## 1. Design System & Brand Identity

### Philosophy

The current site feels like a WordPress template with content dropped in. The new site should feel like it was **designed specifically for Tom Walsh** - a seasoned engineer-turned-tutor who brings rigour, warmth, and a proven track record to Leaving Cert maths. The tone is: **confident, approachable, results-driven**.

### Colour Palette

Starting from the existing brand blues and greens, but refined for better contrast, hierarchy, and a more premium feel:

| Token | Hex | Usage |
|---|---|---|
| `navy` | `#0B1D3A` | Primary headings, hero backgrounds, navbar |
| `blue` | `#1A6FB5` | Primary buttons, links, interactive accents |
| `blue-light` | `#E8F4FD` | Card backgrounds, subtle highlights |
| `green` | `#22C55E` | Success states, "book now" CTAs, trust badges |
| `green-dark` | `#16A34A` | Green button hover states |
| `gold` | `#F59E0B` | Star ratings, premium accents, urgency badges |
| `slate-900` | `#0F172A` | Body text |
| `slate-600` | `#475569` | Secondary text |
| `slate-200` | `#E2E8F0` | Borders, dividers |
| `white` | `#FFFFFF` | Backgrounds |
| `off-white` | `#F8FAFC` | Alternating section backgrounds |

### Typography

- **Headings:** `Inter` (700, 600 weights) - clean, modern, highly legible
- **Body:** `Inter` (400, 500) - excellent readability at all sizes
- **Accent/Numbers:** `JetBrains Mono` or tabular figures from Inter - for prices, dates, session numbers (gives an engineering/precision feel that reinforces Tom's background)

### Spacing & Layout

- Max content width: `1200px`
- Section padding: `py-20` (desktop), `py-12` (mobile)
- Card border-radius: `rounded-2xl`
- Consistent `gap-8` grid spacing
- Mobile-first responsive breakpoints: `sm:640px`, `md:768px`, `lg:1024px`, `xl:1280px`

### Motion & Micro-interactions

- Subtle fade-in-up on scroll for sections (CSS `@starting-style` or intersection observer, no heavy library)
- Button hover: slight scale + shadow lift
- Card hover: gentle shadow expansion
- Keep it minimal - no parallax, no heavy animations. Speed and clarity are king.

---

## 2. Project Architecture

```
app/
  layout.tsx                  # Root layout (navbar, footer, cart provider)
  page.tsx                    # Home page
  itinerary/
    page.tsx                  # Full syllabus breakdown
  book/
    group-a/
      page.tsx                # Group A session selector + add to cart
    group-b/
      page.tsx                # Group B session selector + add to cart
  cart/
    page.tsx                  # Cart summary page
  checkout/
    page.tsx                  # Pre-checkout details collection
  success/
    page.tsx                  # Payment success confirmation
  cancel/
    page.tsx                  # Payment cancelled/abandoned
  contact/
    page.tsx                  # Contact form + details
  privacy/
    page.tsx                  # Privacy policy
  terms/
    page.tsx                  # Terms & conditions
  api/
    checkout/
      route.ts                # Creates Stripe checkout session
    webhook/
      route.ts                # Stripe webhook handler
    contact/
      route.ts                # Contact form submission handler

components/
  layout/
    Navbar.tsx                # Sticky nav with cart badge
    Footer.tsx                # Site footer
    MobileMenu.tsx            # Slide-out mobile nav
  home/
    Hero.tsx                  # Hero section
    ValueProp.tsx             # Why Walsh Maths Works
    AboutTom.tsx              # Tom's background & credentials
    HowItWorks.tsx            # 3-step process
    SchedulePreview.tsx       # Upcoming sessions teaser
    Testimonials.tsx          # Social proof carousel/grid
    FinalCTA.tsx              # Bottom conversion block
  booking/
    SessionCard.tsx           # Individual session select card
    SessionGrid.tsx           # Grid of selectable sessions
    GroupSelector.tsx         # Group A vs B comparison
    CartSidebar.tsx           # Sticky cart summary on booking pages
  cart/
    CartItem.tsx              # Individual cart line item
    CartSummary.tsx           # Subtotal, discount, total
    CouponInput.tsx           # Coupon code entry + validation
  ui/
    Button.tsx                # Reusable button variants
    Badge.tsx                 # Status/info badges
    Card.tsx                  # Base card component
    SectionHeading.tsx        # Consistent section titles
    Container.tsx             # Max-width wrapper

lib/
  data/
    sessions.ts              # All 12 session topics, dates, descriptions
    site-config.ts            # Contact info, business details, policies
    testimonials.ts           # Testimonial content
    faq.ts                    # FAQ items
  cart-context.tsx            # React context for cart state
  stripe.ts                   # Stripe client helpers
  utils.ts                    # Formatters, helpers
  types.ts                    # Shared TypeScript types
```

---

## 3. Data Layer & Configuration

### `lib/data/sessions.ts`

All 12 sessions defined in a single typed array. Each session object:

```ts
type Session = {
  id: string;                  // e.g. "algebra-1"
  topic: string;               // "Algebra 1"
  paper: 1 | 2;               // Which LC paper
  sessionNumber: number;       // 1-12
  date: string;                // "19th March 2026"
  isoDate: string;             // "2026-03-19"
  description: string;         // Short syllabus description
  groupA: { price: number; time: string; duration: string };
  groupB: { price: number; time: string; duration: string };
};
```

### `lib/data/site-config.ts`

Single source of truth for all editable business content:

```ts
{
  tutor: {
    name: "Tom Walsh",
    phone: "087 236 5324",
    email: "walshwpm@gmail.com",
  },
  venue: {
    name: "Talbot Hotel",
    town: "Carlow",
    mapUrl: "https://maps.google.com/...",
  },
  groups: {
    a: { label: "Group A", time: "Saturday 10:00am - 1:00pm", duration: "3 hours", pricePerSession: 45, description: "Comprehensive 3-hour deep dive..." },
    b: { label: "Group B", time: "Saturday 1:30pm - 3:30pm", duration: "2 hours", pricePerSession: 30, description: "Focused 2-hour targeted revision..." },
  },
  coupons: {
    RQGXEKET: { discount: 90, requiresGroup: "a", requiresAll: true },
    "7UCCPFBV": { discount: 60, requiresGroup: "b", requiresAll: true },
  },
  policies: {
    minStudents: 5,
    refundPolicy: "Full refund or alternative date if minimum class size not met.",
    dateChangePolicy: "Dates may change with advance notice.",
  }
}
```

### `lib/data/testimonials.ts`

Array of testimonial objects (placeholder content to be replaced with real quotes):

```ts
{
  quote: string;
  name: string;
  role: string;         // "LC Student 2025" or "Parent"
  result?: string;      // "H2 in Higher Level Maths"
}
```

---

## 4. Page-by-Page Build Spec

---

### 4.1 HOME PAGE (`/`)

The homepage is the primary conversion funnel entry point. Every section has one job: build confidence and drive the visitor toward booking.

#### Section 1: Hero

- **Layout:** Full-width, navy background with subtle geometric pattern (think graph paper / coordinate grid motif - ties into maths theme without being cheesy)
- **Content:**
  - Small eyebrow badge: `"Leaving Cert Maths 2026 | Carlow"`
  - Main headline: `"Get the Leaving Cert Maths Results You Deserve"`
  - Subheadline: `"Join 25+ years of proven exam preparation with Tom Walsh. Engineering precision meets clear, patient teaching."`
  - Two CTA buttons side by side:
    - Primary (green): `"Book Your Sessions"` -> scrolls to schedule preview or links to `/book/group-a`
    - Secondary (outline white): `"View Full Itinerary"` -> `/itinerary`
  - Trust strip below CTAs: `"100% Success Rate"` | `"25+ Years Experience"` | `"Engineer & Educator"` | `"Talbot Hotel, Carlow"`
- **Mobile:** Stack buttons vertically, trust strip wraps to 2x2 grid

#### Section 2: The Problem / Empathy Hook

- **Layout:** White background, centered text with icon accents
- **Headline:** `"Mocks Didn't Go as Planned?"`
- **Body:** 2-3 short paragraphs acknowledging the stress of mock results, the pressure of the Leaving Cert, and that it's not too late to turn things around. Empathetic but action-oriented.
- **Subtle CTA:** `"Here's exactly how we fix that ↓"` (scrolls to next section)

#### Section 3: How It Works (3-Step Process)

- **Layout:** Off-white background, 3 cards in a row (stacks on mobile)
- **Cards:**
  1. **Choose Your Group** - Icon: calendar. "Select Group A (3hr deep-dive) or Group B (2hr focused revision) based on your needs."
  2. **Pick Your Sessions** - Icon: checklist. "Book individual topics or save with the full bundle. 12 sessions covering Paper 1 & Paper 2."
  3. **Show Up & Succeed** - Icon: trophy. "Saturday sessions at the Talbot Hotel, Carlow. Walk in with questions, walk out with clarity."

#### Section 4: Why Walsh Maths Works (Value Proposition)

- **Layout:** White background, two-column on desktop (content left, visual right)
- **Left column - 4 value points with icons:**
  1. **Engineering Precision** - "Tom's engineering career means he doesn't just teach formulas - he teaches you *why* they work and *how* to apply them under exam pressure."
  2. **No Stupid Questions** - "An open, interactive approach where every question is welcomed. If you're confused, you're in the right place."
  3. **100% Success Rate** - "Every student who has completed the programme has passed. That's not marketing - that's 25 years of results."
  4. **Exam-Focused Preparation** - "Every session is mapped directly to Leaving Cert exam topics. No wasted time, no off-syllabus tangents."
- **Right column:** Placeholder for a professional photo of Tom or the teaching environment. For now, a styled placeholder card with the quote: *"I adopt an open and interactive approach where there is no such thing as a 'Stupid Question'"* - Tom Walsh

#### Section 5: Schedule Preview / Two Groups Comparison

- **Layout:** Off-white background, two prominent cards side by side
- **Group A Card:**
  - Header badge: `"Most Popular"` (gold)
  - Title: `"Group A - Deep Dive"`
  - Time: `"Saturdays 10:00am - 1:00pm"`
  - Price: `"€45 per session"` with small note `"or book all 12 and save €90"`
  - Duration: `"3 hours per session"`
  - Brief description of who this is for (struggled with mocks, need comprehensive coverage)
  - CTA button: `"Browse Group A Sessions"` -> `/book/group-a`
- **Group B Card:**
  - Title: `"Group B - Targeted Revision"`
  - Time: `"Saturdays 1:30pm - 3:30pm"`
  - Price: `"€30 per session"` with note `"or book all 12 and save €60"`
  - Duration: `"2 hours per session"`
  - Brief description (did okay in mocks but want to solidify weaker areas)
  - CTA button: `"Browse Group B Sessions"` -> `/book/group-b`
- **Below cards:** Small text: `"Not sure which group? Tom is happy to advise - call 087 236 5324"`

#### Section 6: Testimonials

- **Layout:** White background, 3 testimonial cards in a row (carousel on mobile)
- **Each card:**
  - Large quotation mark icon (decorative)
  - Quote text
  - Student/parent name
  - Role (e.g. "LC Student 2025")
  - Optional result badge (e.g. "Achieved H2")
- **Note:** Use compelling placeholder testimonials. Flag to client that these need replacing with real ones.

#### Section 7: FAQ Preview

- **Layout:** Off-white background, accordion style
- **Show 4-5 most important FAQs:**
  1. "What if I can only attend some sessions?" -> You can book individual sessions or the full bundle.
  2. "Where are classes held?" -> Talbot Hotel, Carlow. [Map link]
  3. "What if the minimum class size isn't reached?" -> Full refund or alternative date.
  4. "What level is this for?" -> Higher Level and Ordinary Level Leaving Cert Maths.
  5. "Can I switch between Group A and Group B?" -> Yes, you can mix sessions from both groups.

#### Section 8: Final CTA Block

- **Layout:** Navy background (mirrors hero), centered
- **Headline:** `"Places Are Limited - Secure Your Spot Today"`
- **Subtext:** `"12 sessions. 12 topics. Everything you need for Paper 1 and Paper 2."`
- **CTA button (green, large):** `"Book Your Sessions Now"`
- **Below button:** `"Questions? Call Tom on 087 236 5324 or email walshwpm@gmail.com"`

---

### 4.2 ITINERARY PAGE (`/itinerary`)

The full syllabus breakdown - this is where serious prospects come to understand exactly what they'll learn.

#### Section 1: Page Header

- **Headline:** `"Your 12-Week Leaving Cert Maths Masterplan"`
- **Subtext:** `"Every topic. Every technique. Mapped directly to what the examiners are looking for."`

#### Section 2: Paper 1 Sessions (Sessions 1-8)

- **Section heading:** `"Paper 1"` with badge showing `"8 Sessions | March - May"`
- **Layout:** Vertical list of session cards, each containing:
  - Session number badge (e.g. `"01"`)
  - Topic name (large, bold)
  - Date (right-aligned on desktop)
  - Description paragraph (the syllabus content breakdown)
  - Two small inline CTAs: `"Add to Group A"` | `"Add to Group B"`
- **Sessions:**
  1. **Algebra 1** - 19th March - "Basics, evaluation, solving & rearranging. The foundation everything else builds on."
  2. **Number Systems** - 26th March - "Number sets (N, Z, Q, R, R\Q), standard notation, surds, indices, HCF & LCM."
  3. **Algebra 2** - 2nd April - "Simultaneous equations, factorising, algebraic fractions."
  4. **Complex Numbers** - 9th April - "Plotting, adding, modulus, multiplying, conjugates."
  5. **Arithmetic** - 16th April - "VAT, compound interest, ratio, currency, income tax & pay, speed."
  6. **Sequences** - 23rd April - "Arithmetic, geometric & other sequences."
  7. **Functions & Graphs** - 30th April - "Linear, quadratic, cubic, exponential functions and transformations."
  8. **Calculus** - 7th May - "Slope and rate of change, rules for differentiation, the second derivative."

#### Section 3: Paper 2 Sessions (Sessions 9-12)

- **Section heading:** `"Paper 2"` with badge showing `"4 Sessions | May - June"`
- **Same card layout as Paper 1**
- **Sessions:**
  9. **The Line & Circle** - 14th May - "Length, slope and equation of a line. Area of a triangle. Two forms of circle equation."
  10. **Trigonometry** - 21st May - "Solving right-angled and non-right-angled triangles. Pythagoras theorem, sine & cosine rules."
  11. **Length, Area & Volume** - 26th May - "Plane figures, area formulae, nets, surface area & volume."
  12. **Probability** - 4th June - "Basic concepts, probability scale, factorials & permutations."

#### Section 4: Group Comparison + Booking CTA

- Same two-card comparison as homepage Section 5, but with a stronger CTA since they've now read all the content.
- Headline above: `"Ready to Secure Your Place?"`

---

### 4.3 BOOKING PAGE - GROUP A (`/book/group-a`)

#### Section 1: Group Header

- **Badge:** `"Group A"`
- **Headline:** `"Group A - Saturday Morning Deep Dive"`
- **Details strip:** `"10:00am - 1:00pm | 3 Hours | €45 per session | Talbot Hotel, Carlow"`
- **Policy note:** Small text about minimum 5 students, refund policy, date changes.

#### Section 2: Session Selector Grid

- **Layout:** Grid of 12 session cards (3 columns desktop, 2 tablet, 1 mobile)
- **Each card contains:**
  - Checkbox/toggle (prominent, top-right)
  - Session number
  - Topic name
  - Paper badge (Paper 1 / Paper 2)
  - Date
  - Price: `"€45"`
  - Brief 1-line description
- **Visual states:**
  - Default: white card, slate border
  - Selected: blue-light background, blue border, checkmark visible
  - Hover: subtle shadow lift
- **"Select All" toggle** at the top of the grid with bundle savings callout:
  - `"Select All 12 Sessions"` with badge: `"Save €90 with code RQGXEKET"`

#### Section 3: Sticky Cart Summary (Sidebar on desktop, bottom bar on mobile)

- Shows number of selected sessions
- Running subtotal
- `"Add to Cart"` button (disabled if 0 selected)
- When items added: `"View Cart"` or `"Continue to Group B"` secondary link
- Coupon hint: `"Booking all 12? Use code RQGXEKET at checkout to save €90"`

---

### 4.4 BOOKING PAGE - GROUP B (`/book/group-b`)

Identical layout to Group A with these differences:
- Badge: `"Group B"`
- Headline: `"Group B - Saturday Afternoon Focused Revision"`
- Details: `"1:30pm - 3:30pm | 2 Hours | €30 per session"`
- Prices: `€30` per session
- Bundle coupon: `7UCCPFBV` for `€60` off

---

### 4.5 CART PAGE (`/cart`)

#### Section 1: Cart Header

- **Headline:** `"Your Booking Summary"`
- **Breadcrumb:** `Cart > Checkout > Confirmation`

#### Section 2: Cart Items List

- **Each line item displays:**
  - Session topic name
  - Group badge (A or B)
  - Paper badge (1 or 2)
  - Date
  - Price (right-aligned)
  - Remove button (X icon)
- **Empty state:** Friendly message: `"Your cart is empty. Browse sessions to get started."` with links to both group pages.

#### Section 3: Coupon & Totals

- **Coupon input:** Text field + "Apply" button
  - Success state: Green checkmark, discount line shown
  - Error state: Red text explaining why coupon is invalid (e.g. "This coupon requires all 12 Group A sessions")
- **Totals breakdown:**
  - Subtotal: `€XXX`
  - Discount (if coupon applied): `-€XX`
  - **Total: `€XXX`** (bold, larger)

#### Section 4: Actions

- Primary CTA: `"Proceed to Checkout"` (green, full-width on mobile)
- Secondary: `"Continue Browsing"` link

---

### 4.6 CHECKOUT PAGE (`/checkout`)

#### Section 1: Student & Contact Details Form

Collect before redirecting to Stripe:

- **Student Name** (required)
- **Parent/Guardian Name** (required)
- **Email Address** (required)
- **Phone Number** (required)
- **Any additional notes** (optional textarea)

#### Section 2: Order Review

- Compact summary of cart items (read-only)
- Total amount
- Applied discount (if any)

#### Section 3: Payment

- `"Pay €XXX with Stripe"` button
- Clicking this calls our API to create a Stripe Checkout Session and redirects
- Small trust badges: "Secure payment powered by Stripe" with lock icon
- Stripe logo

---

### 4.7 SUCCESS PAGE (`/success`)

- **Green checkmark animation** (CSS only)
- **Headline:** `"Booking Confirmed!"`
- **Body:** `"Thank you for booking with Walsh Maths Works. You'll receive a confirmation email shortly."`
- **Summary card:** Shows what was booked (sessions, group, dates, total paid)
- **Next steps:**
  - `"Save the dates to your calendar"` (optional: .ics download link)
  - `"If you have any questions, contact Tom on 087 236 5324 or walshwpm@gmail.com"`
- **CTA:** `"Return to Home"` button

---

### 4.8 CANCEL PAGE (`/cancel`)

- **Headline:** `"Booking Not Completed"`
- **Body:** `"Your payment was cancelled. No charges have been made."`
- **Reassurance:** `"Your selected sessions are still in your cart if you'd like to try again."`
- **CTAs:**
  - `"Return to Cart"` (primary)
  - `"Contact Tom for Help"` (secondary)

---

### 4.9 CONTACT PAGE (`/contact`)

#### Section 1: Header

- **Headline:** `"Get in Touch"`
- **Subtext:** `"Have a question about sessions, booking, or anything else? Tom is happy to help."`

#### Section 2: Two-column layout

**Left column - Contact Form:**
- Name (required)
- Email (required)
- Phone (optional)
- Subject dropdown: "General Enquiry", "Booking Question", "Group Advice", "Other"
- Message textarea (required)
- Submit button: `"Send Message"`
- Success state: `"Thanks! Tom will get back to you shortly."`

**Right column - Direct Contact:**
- **Phone card:** Click-to-call link, `087 236 5324`
- **Email card:** Click-to-email, `walshwpm@gmail.com`
- **Location card:** Talbot Hotel, Carlow + embedded Google Maps (small)
- **Hours note:** `"Classes run every Saturday. For enquiries, Tom is available weekdays."`

---

### 4.10 PRIVACY PAGE (`/privacy`)

- Clean, readable legal page
- Standard privacy policy covering:
  - What data is collected (name, email, phone, payment via Stripe)
  - How data is used (booking management, communication)
  - Third parties (Stripe for payments)
  - Data retention
  - Contact for data requests
- Professional but not overly legalistic

### 4.11 TERMS PAGE (`/terms`)

- Terms of service covering:
  - Booking and cancellation policy
  - Minimum class size policy
  - Refund policy
  - Date change policy
  - Payment terms
  - Liability limitations

---

## 5. Shared Components

### Navbar (`components/layout/Navbar.tsx`)

- **Desktop:** Logo (left) | Home, Itinerary, Book Sessions (dropdown: Group A, Group B), Contact | Cart icon with item count badge (right)
- **Mobile:** Logo (left) | Cart icon + Hamburger (right) -> slide-out drawer menu
- **Sticky** with backdrop blur on scroll
- **Style:** White background, navy text, subtle bottom border
- Active page indicator (blue underline or text color)

### Footer (`components/layout/Footer.tsx`)

- **Three columns:**
  1. **Brand:** Walsh Maths Works logo/name, one-line description, Tom's quote
  2. **Quick Links:** Home, Itinerary, Book Group A, Book Group B, Contact, Privacy, Terms
  3. **Contact:** Phone, Email, Location
- **Bottom bar:** Copyright 2026, "Leaving Cert Maths Tuition in Carlow"
- **Style:** Navy background, white/light text

### Button (`components/ui/Button.tsx`)

Variants:
- `primary` - Green background, white text (for booking/conversion CTAs)
- `secondary` - Blue background, white text (for navigation/info CTAs)
- `outline` - Transparent with border (for secondary actions)
- `ghost` - No background, subtle hover (for tertiary actions)

Sizes: `sm`, `md`, `lg`

---

## 6. Cart & Booking System

### State Management

- **React Context** (`lib/cart-context.tsx`) wrapping the app
- Cart persisted to `localStorage` for cross-navigation stability
- Cart state shape:

```ts
type CartItem = {
  sessionId: string;
  group: "a" | "b";
  topic: string;
  paper: 1 | 2;
  date: string;
  price: number;
};

type CartState = {
  items: CartItem[];
  couponCode: string | null;
  couponDiscount: number;
};
```

### Cart Operations

- `addItem(item)` - Prevents duplicates (same session + group combo)
- `removeItem(sessionId, group)` - Remove specific item
- `addMultiple(items)` - Bulk add (for "Select All")
- `clearCart()` - Empty cart
- `applyCoupon(code)` - Validates and applies discount
- `removeCoupon()` - Removes applied coupon
- `getSubtotal()` - Sum of all item prices
- `getTotal()` - Subtotal minus discount

### Coupon Validation Logic

```
RQGXEKET:
  - Valid only if cart contains ALL 12 sessions from Group A
  - Applies €90 discount
  - Rejected with message if criteria not met

7UCCPFBV:
  - Valid only if cart contains ALL 12 sessions from Group B
  - Applies €60 discount
  - Rejected with message if criteria not met
```

---

## 7. Stripe Integration

### Checkout Flow

1. User fills in contact details on `/checkout`
2. Client POSTs to `/api/checkout` with cart items + customer details
3. API creates a Stripe Checkout Session:
   - Line items mapped from cart (each session as a line item with metadata)
   - Currency: EUR
   - Customer email pre-filled
   - Success URL: `/success?session_id={CHECKOUT_SESSION_ID}`
   - Cancel URL: `/cancel`
   - Metadata: student name, parent name, phone, session IDs, group, coupon used
4. Client redirected to Stripe hosted checkout
5. On success: Stripe redirects to `/success`, webhook fires

### Webhook (`/api/webhook`)

- Listens for `checkout.session.completed`
- Verifies Stripe signature
- Records order to database (or JSON file as MVP)
- Order record includes: all metadata, amount paid, Stripe session ID, timestamp

### Environment Variables

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
SITE_URL=https://walshmathsworks.com
```

---

## 8. SEO & Performance

### Per-Page Metadata

| Page | Title | Description |
|---|---|---|
| `/` | Walsh Maths Works - Leaving Cert Maths Tuition in Carlow | Expert Leaving Cert Maths tuition with Tom Walsh. 25+ years experience, 100% success rate. Saturday sessions at the Talbot Hotel, Carlow. |
| `/itinerary` | Full 12-Week Itinerary - Walsh Maths Works | Complete Paper 1 and Paper 2 topic breakdown for Leaving Cert Maths. 12 Saturday sessions covering everything you need. |
| `/book/group-a` | Book Group A Sessions - Walsh Maths Works | Book your 3-hour Saturday morning Leaving Cert Maths sessions. €45 per session. Talbot Hotel, Carlow. |
| `/book/group-b` | Book Group B Sessions - Walsh Maths Works | Book your 2-hour Saturday afternoon revision sessions. €30 per session. Talbot Hotel, Carlow. |
| `/contact` | Contact Tom Walsh - Walsh Maths Works | Get in touch about Leaving Cert Maths tuition in Carlow. Call 087 236 5324 or email walshwpm@gmail.com. |

### Technical SEO

- Open Graph tags on all pages
- Semantic HTML: proper heading hierarchy, `<main>`, `<section>`, `<nav>`, `<footer>`
- All images with alt text
- `robots.txt` and `sitemap.xml` (Next.js built-in)
- Canonical URLs

### Performance

- No heavy JS libraries (no Framer Motion, no animation libraries)
- Images optimized via `next/image`
- Font loading via `next/font/google` (subset, swap)
- Minimal client-side JS - most pages can be static or server-rendered

---

## 9. Implementation Order

### Phase 1: Foundation (Build First)
1. Design system setup (Tailwind config, fonts, global styles)
2. Data files (`sessions.ts`, `site-config.ts`, `testimonials.ts`, `faq.ts`)
3. Type definitions (`types.ts`)
4. Shared UI components (`Button`, `Badge`, `Card`, `Container`, `SectionHeading`)
5. Layout components (`Navbar`, `Footer`, `MobileMenu`)
6. Root layout wiring

### Phase 2: Content Pages
7. Home page (all 8 sections)
8. Itinerary page
9. Contact page (form + details)
10. Privacy & Terms pages

### Phase 3: Booking System
11. Cart context + localStorage persistence
12. Group A booking page (session selector grid)
13. Group B booking page
14. Cart page (items, coupon, totals)
15. Checkout page (details form + Stripe redirect)

### Phase 4: Payments & Backend
16. Stripe checkout API route
17. Stripe webhook handler
18. Success page
19. Cancel page
20. Contact form API route

### Phase 5: Polish
21. Mobile responsiveness audit
22. Scroll animations (subtle fade-ins)
23. SEO metadata on all pages
24. Accessibility audit (keyboard nav, screen reader, contrast)
25. Final design review and tweaks

---

## Open Questions for Client Review

1. **Testimonials:** Do we have real student/parent testimonials? I'll use compelling placeholders but these should be replaced with genuine quotes ASAP.
2. **Tom's Photo:** Do we have a professional photo of Tom for the About section? This significantly impacts trust.
3. **Google Maps:** Should we embed a map for the Talbot Hotel location, or just link to it?
4. **Email Confirmations:** Should booking confirmations be sent via email (requires Resend or similar)? Or is the Stripe receipt sufficient for now?
5. **Database:** The prompt mentions Prisma + SQLite for order persistence. For MVP, shall I use a simpler approach (JSON file / Stripe dashboard as source of truth) or go straight to Prisma?
6. **Year/Dates:** The current site shows dates without years. Should I assume these are for 2026 (starting 19th March 2026)?
7. **Ordinary vs Higher Level:** The current site mentions "O/L" on the itinerary. Does Tom teach both Higher and Ordinary level, or just one?

---

*This plan is ready for your review. Mark it up, add comments, change anything you want - then I'll build it exactly to spec.*
