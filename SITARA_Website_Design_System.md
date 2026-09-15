# SITARA Beer & Wines --- Website Design System & React UI Specification

**Version:** 1.0\
**Platform:** React.js + Vite\
**Design Reference:** Provided SITARA logo + Wine Park reference
screenshot\
**Design Goal:** Premium Indian wine & beer ecommerce experience with an
editorial luxury aesthetic.

------------------------------------------------------------------------

# 1. Brand Direction

## Brand

**SITARA**\
**BEER & WINES**

### Visual personality

-   Premium
-   Sophisticated
-   Warm
-   Editorial
-   Modern
-   Indian luxury
-   Confident
-   Minimal but expressive

The website should feel like a combination of:

> **Luxury wine magazine + premium bottle shop + modern Indian lifestyle
> brand**

Do not clone the reference website. Use its visual language and section
rhythm as inspiration while creating an original SITARA experience.

------------------------------------------------------------------------

# 2. Design Principles

1.  Use large editorial typography.
2.  Use warm ivory instead of pure white.
3.  Use deep burgundy as the primary brand accent.
4.  Use champagne gold only for premium details.
5.  Use high-quality product photography.
6.  Keep cards mostly square or subtly rounded.
7.  Use generous whitespace.
8.  Use asymmetrical editorial layouts where appropriate.
9.  Keep animations subtle and slow.
10. Never make the interface look like a generic Bootstrap ecommerce
    template.

------------------------------------------------------------------------

# 3. Color System

## Primary Palette

  Token                 HEX         Usage
  --------------------- ----------- -------------------------------
  `--color-ivory`       `#F5E9DD`   Main page background
  `--color-cream`       `#FFF9F3`   Cards and light sections
  `--color-burgundy`    `#5A1717`   Main brand color
  `--color-wine`        `#7A1F1F`   Buttons and strong accents
  `--color-gold`        `#B88A32`   Logo/details/decorative lines
  `--color-soft-gold`   `#D2AA62`   Secondary decorative accents
  `--color-charcoal`    `#242020`   Primary text
  `--color-beige`       `#E8D7C7`   Borders and muted backgrounds
  `--color-muted`       `#756A63`   Secondary text

## Recommended usage ratio

-   Ivory / cream: **55--65%**
-   Photography: **20--25%**
-   Burgundy / wine red: **8--12%**
-   Charcoal: **5--8%**
-   Gold: **1--3%**

Gold must remain an accent, not the dominant color.

------------------------------------------------------------------------

# 4. Typography

## Primary Display Font

### Bebas Neue

Use for:

-   Hero headings
-   Section headings
-   Collection titles
-   Large promotional text
-   Navigation labels when appropriate

Recommended characteristics:

-   Uppercase
-   Tight visual hierarchy
-   Strong editorial appearance

## Body Font

### Manrope

Use for:

-   Product information
-   Paragraphs
-   Buttons
-   Navigation
-   Forms
-   Prices
-   Metadata

## Editorial Accent

### Cormorant Garamond

Use sparingly for:

-   Wine quotes
-   Short editorial phrases
-   Special campaign statements
-   Premium storytelling

Do not use Cormorant Garamond for the complete interface.

------------------------------------------------------------------------

# 5. Typography Scale

## Desktop

  Element                  Size   Weight   Line Height
  ----------------- ----------- -------- -------------
  Hero Display        96--132px      400     0.82--0.9
  Hero Secondary       28--36px      500           1.0
  Section Heading      64--88px      400    0.88--0.95
  Large Editorial      52--68px      400           0.9
  Page Heading         48--64px      400          0.95
  Product Name         16--18px      600          1.25
  Body Large           18--20px      400          1.55
  Body                 14--16px      400          1.55
  Caption              11--13px      600           1.3
  Button               12--14px      700             1

## Tablet

-   Hero: 72--96px
-   Section heading: 52--68px
-   Large editorial: 44--56px
-   Body: 15--17px

## Mobile

  Element                   Size
  ------------------- ----------
  Hero Display          58--76px
  Section Heading       44--58px
  Page Heading          38--48px
  Editorial Heading     36--46px
  Product Name          15--17px
  Body                  14--16px
  Button                11--13px

Never allow large headings to create horizontal overflow.

------------------------------------------------------------------------

# 6. Spacing System

Use an 8px base spacing system.

``` text
4px   — micro
8px   — xs
12px  — small
16px  — sm
24px  — md
32px  — medium-large
48px  — lg
64px  — xl
80px  — section-small
96px  — section
120px — section-large
160px — hero/editorial
```

## Section spacing

### Desktop

-   Standard section: **96--120px**
-   Large editorial section: **120--160px**
-   Hero vertical padding: **100--140px**

### Tablet

-   Standard section: **72--96px**
-   Large section: **96--120px**

### Mobile

-   Standard section: **56--72px**
-   Large section: **72--96px**
-   Hero: **56--80px**

------------------------------------------------------------------------

# 7. Container System

## Desktop

``` text
Maximum width: 1440px
Content width: 1280–1360px
Side padding: 40px
```

## Large desktop

``` text
Viewport: 1440px+
Container: 1360px
```

## Laptop

``` text
Viewport: 1024–1279px
Side padding: 32px
```

## Tablet

``` text
Viewport: 768–1023px
Side padding: 24px
```

## Mobile

``` text
Viewport: 320–767px
Side padding: 16–20px
```

Recommended CSS:

``` css
.container {
  width: min(100% - 40px, 1360px);
  margin-inline: auto;
}

@media (min-width: 768px) {
  .container {
    width: min(100% - 48px, 1360px);
  }
}

@media (min-width: 1280px) {
  .container {
    width: min(100% - 80px, 1360px);
  }
}
```

------------------------------------------------------------------------

# 8. Grid System

## Desktop

Use a 12-column grid.

``` text
12 columns
24px gap
```

Typical layouts:

``` text
6 / 6
5 / 7
4 / 8
3 / 3 / 3 / 3
```

## Tablet

Use:

``` text
8-column grid
20px gap
```

## Mobile

Use:

``` text
4-column grid
12–16px gap
```

------------------------------------------------------------------------

# 9. Border Radius

Keep the website editorial rather than overly rounded.

``` text
Buttons: 0–2px
Product cards: 2–4px
Images: 0–4px
Input fields: 2–4px
Large promotional cards: 0–6px
```

Avoid:

``` text
border-radius: 20px+
```

unless intentionally used for a special UI element.

------------------------------------------------------------------------

# 10. Shadows

Use very subtle shadows.

Preferred:

``` css
box-shadow:
  0 8px 30px rgba(36, 32, 32, 0.06);
```

Avoid heavy floating-card shadows.

The visual weight should come from:

-   Typography
-   Photography
-   Color blocks
-   Spacing
-   Borders

------------------------------------------------------------------------

# 11. Header

## Desktop height

**76--88px**

## Mobile height

**64px**

### Desktop structure

``` text
┌──────────────────────────────────────────────────────────────┐
│ SITARA     SHOP  WINES  BEER  COLLECTIONS  GIFTING  JOURNAL │
│                                            SEARCH  ♡  BAG    │
└──────────────────────────────────────────────────────────────┘
```

### Header specifications

-   Background: `#F5E9DD`
-   Bottom border: `#E8D7C7`
-   Logo height: **32--42px**
-   Navigation gap: **24--32px**
-   Icons: **18--20px**
-   Sticky on scroll
-   Backdrop blur only if it does not reduce readability

### Mobile

``` text
┌────────────────────────────┐
│ ☰       SITARA        BAG  │
└────────────────────────────┘
```

Do not use emoji icons. Use Lucide React icons.

------------------------------------------------------------------------

# 12. Announcement Bar

Height:

**32--36px**

Background:

`#5A1717`

Text:

`#FFF9F3`

Example:

``` text
FREE SHIPPING ON SELECT ORDERS  •  DISCOVER OUR LATEST COLLECTION
```

Typography:

-   Manrope
-   10--12px
-   Uppercase
-   Letter spacing: 0.08em

------------------------------------------------------------------------

# 13. Hero Section

## Desktop dimensions

Minimum:

``` text
Height: 680px
Maximum: 820px
```

Recommended:

``` text
min-height: calc(100vh - 88px)
```

## Layout

``` text
Left: 45%
Right: 55%
```

### Left content

Eyebrow:

``` text
SITARA PRESENTS
```

Main heading:

``` text
THE ART
OF A GOOD
POUR.
```

Supporting text:

``` text
Discover wines and beers selected
for moments worth remembering.
```

Buttons:

``` text
[ EXPLORE WINES ]   [ DISCOVER BEER ]
```

### Right

Use a large premium bottle photograph.

Image should occupy approximately:

``` text
width: 70–85%
height: 85–95%
```

Use transparent-background bottle photography when available.

Add subtle gold decorative star elements inspired by the SITARA logo.

------------------------------------------------------------------------

# 14. Hero Typography

Desktop:

``` text
Font: Bebas Neue
Size: 110–132px
Line-height: 0.82
Letter-spacing: -0.015em
Color: #5A1717
```

Mobile:

``` text
Size: 64–76px
Line-height: 0.85
```

Do not use a paragraph wider than:

``` text
480px
```

------------------------------------------------------------------------

# 15. Featured Categories

Section spacing:

``` text
Top: 96px
Bottom: 96px
```

Heading:

``` text
DISCOVER
YOUR POUR
```

Four categories:

``` text
WINE
BEER
SPARKLING
GIFTING
```

Desktop:

``` text
4 columns
Gap: 16–24px
```

Mobile:

``` text
2 columns
Gap: 12px
```

Image ratio:

``` text
4:5
```

Card hover:

``` text
Image scale: 1.04
Duration: 500ms
Overlay: subtle burgundy
```

------------------------------------------------------------------------

# 16. Section Heading Component

Create one reusable component:

``` jsx
<SectionHeading
  eyebrow="CURATED FOR YOU"
  title="OUR PICKS FOR YOU"
  description="Thoughtfully selected bottles for every occasion."
/>
```

### Design

Eyebrow:

-   10--12px
-   Manrope
-   Uppercase
-   Burgundy
-   Letter spacing: 0.12em

Title:

-   Bebas Neue
-   64--88px desktop
-   Burgundy

Description:

-   Manrope
-   15--18px
-   Charcoal
-   Max-width: 520px

------------------------------------------------------------------------

# 17. Our Picks For You

Section background:

`#FFF9F3`

Heading:

``` text
OUR PICKS
FOR YOU
```

Create a horizontal product carousel.

## Desktop

Show:

``` text
4 products
```

## Large desktop

Show:

``` text
4–5 products
```

## Mobile

Show:

``` text
1.25–1.4 cards
```

This intentionally shows part of the next product to communicate
horizontal scrolling.

------------------------------------------------------------------------

# 18. Product Card

Recommended desktop width:

``` text
260–300px
```

Mobile width:

``` text
240–280px
```

### Image area

Ratio:

``` text
4:5
```

Background:

`#F5E9DD`

Product image:

``` text
max-width: 82%
max-height: 88%
object-fit: contain
```

### Content

``` text
BRAND
Product Name
★★★★★
₹1,250
```

### Wishlist

Position:

``` text
top: 14px
right: 14px
```

Icon:

``` text
18px
```

### Add button

Height:

``` text
42–46px
```

Background:

`#7A1F1F`

Text:

`#FFF9F3`

------------------------------------------------------------------------

# 19. Explore The Cellar

Background:

`#F5E9DD`

Heading:

``` text
EXPLORE
THE CELLAR
```

Create horizontally scrollable filters.

``` text
RED WINE
WHITE WINE
ROSÉ
SPARKLING
INDIAN WINE
FRENCH WINE
ITALIAN WINE
MERLOT
```

Filter dimensions:

``` text
Height: 38–42px
Padding: 0 18px
Border: 1px solid #B88A32
```

Active:

``` text
Background: #5A1717
Text: #FFF9F3
Border: #5A1717
```

------------------------------------------------------------------------

# 20. Editorial Collection Banner

This should be one of the strongest visual sections.

## Desktop

``` text
Height: 620–720px
```

## Mobile

``` text
Height: 520–620px
```

Use full-bleed photography.

Overlay content:

``` text
OUR CHOICEST
SELECTIONS

Curated bottles for
moments worth remembering.

[ SHOP COLLECTION ]
```

Text color:

`#FFF9F3`

Add a subtle dark overlay to maintain readability.

------------------------------------------------------------------------

# 21. Best Sellers

Heading:

``` text
BEST
SELLERS
```

Layout:

``` text
4-column desktop
2-column tablet
1.2-column mobile carousel
```

Add product ranking badges where useful:

``` text
#01
#02
#03
```

Keep badges minimal.

------------------------------------------------------------------------

# 22. Gifting Section

Background:

`#FFF9F3`

Heading:

``` text
GIFTING
FOR EVERY OCCASION
```

Categories:

``` text
FOR HER
FOR HIM
COUPLES
BIRTHDAYS
WEDDINGS
CORPORATE
FESTIVALS
```

Use editorial image cards rather than ordinary ecommerce cards.

Recommended image ratio:

``` text
3:4
```

------------------------------------------------------------------------

# 23. Testimonials

Background:

`#F5E9DD`

Heading:

``` text
HAPPY TALES
FROM HAPPY CUSTOMERS
```

Three cards desktop.

Each testimonial:

``` text
“
Beautiful selection,
excellent packaging,
and a great experience.

— Customer Name
  City
```

Card:

``` text
Background: #FFF9F3
Border: 1px solid #E8D7C7
Padding: 28–36px
```

No excessive shadows.

------------------------------------------------------------------------

# 24. Wine Club

Use a full-width lifestyle photograph.

Recommended height:

``` text
560–700px desktop
480–560px mobile
```

Overlay:

``` text
THE BEST WAY TO LEARN
ABOUT WINE IS BY OPENING
A BOTTLE.

WINE CLUB

[ JOIN THE CLUB ]
```

Benefits below or beside:

``` text
EXCLUSIVE BOTTLES
EARLY ACCESS
CURATED SELECTIONS
MEMBER PRICING
WINE EDUCATION
```

------------------------------------------------------------------------

# 25. Wine Journal

Background:

`#F5E9DD`

Heading:

``` text
KNOW
EVERYTHING
ABOUT WINE
```

Article grid:

``` text
3 columns desktop
2 columns tablet
1 column mobile
```

Article card:

``` text
Image: 16:10
Category
Title
Short excerpt
Read article →
```

Example articles:

-   How to choose your first red wine
-   5 wines perfect for Indian food
-   Understanding Cabernet Sauvignon
-   Wine serving temperature explained

------------------------------------------------------------------------

# 26. Newsletter CTA

Use a Burgundy block.

Background:

`#5A1717`

Heading:

``` text
STAY IN THE
SITARA CIRCLE
```

Text:

``` text
New arrivals, curated bottles,
wine stories and exclusive offers.
```

Input:

``` text
YOUR EMAIL ADDRESS
```

Button:

``` text
JOIN
```

Input height:

``` text
48–52px
```

------------------------------------------------------------------------

# 27. Footer

Background:

`#5A1717`

Text:

`#F5E9DD`

Gold details:

`#D2AA62`

## Desktop layout

``` text
SITARA

SHOP
Wines
Beer
Sparkling
Collections
Gifting

EXPLORE
Wine Journal
Wine Club
About
Contact

HELP
Shipping
Returns
Privacy
Terms

SOCIAL
Instagram
Facebook
```

Bottom:

``` text
© SITARA Beer & Wines
```

Footer padding:

``` text
80–120px desktop
56–72px mobile
```

------------------------------------------------------------------------

# 28. Buttons

## Primary

``` text
Background: #7A1F1F
Text: #FFF9F3
Height: 46–52px
Padding: 0 24–32px
Radius: 0–2px
```

Hover:

``` text
Background: #5A1717
```

## Secondary

``` text
Background: transparent
Border: 1px solid #5A1717
Text: #5A1717
```

Hover:

``` text
Background: #5A1717
Text: #FFF9F3
```

Typography:

``` text
Manrope
11–13px
700
Uppercase
Letter-spacing: 0.08em
```

------------------------------------------------------------------------

# 29. Icons

Use:

**Lucide React**

Recommended:

``` text
Search
User
Heart
ShoppingBag
Menu
X
ChevronLeft
ChevronRight
ArrowUpRight
Instagram
Facebook
```

Icon sizes:

``` text
Desktop: 18–20px
Mobile: 20–22px
```

Use consistent stroke width.

------------------------------------------------------------------------

# 30. Image Rules

Use premium photography.

## Product photography

``` text
Object-fit: contain
Background: warm ivory
```

## Lifestyle photography

``` text
Object-fit: cover
```

## Editorial banners

``` text
Aspect ratio: approximately 2:1
```

## Category cards

``` text
Aspect ratio: 4:5
```

## Journal

``` text
Aspect ratio: 16:10
```

Images should use:

``` text
WebP
AVIF where supported
```

Use:

``` html
loading="lazy"
```

for below-the-fold images.

Do not lazy-load the main hero image.

------------------------------------------------------------------------

# 31. Animation System

Use **Framer Motion**.

Animation philosophy:

> Quiet luxury --- not flashy motion.

## Fade-up

``` text
opacity: 0 → 1
translateY: 24px → 0
duration: 0.6–0.8s
```

## Image reveal

``` text
scale: 1.03 → 1
opacity: 0 → 1
duration: 0.8–1.2s
```

## Product hover

``` text
image scale: 1 → 1.04
duration: 0.4–0.5s
```

## Gold line animation

``` text
width: 0 → 100%
duration: 0.7s
```

Do not animate every section simultaneously.

Respect:

``` css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

------------------------------------------------------------------------

# 32. Responsive Breakpoints

Use:

``` text
xs: 360px
sm: 480px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1440px
```

Important testing widths:

``` text
360px
390px
414px
768px
1024px
1280px
1440px
1920px
```

------------------------------------------------------------------------

# 33. Mobile Experience

Mobile is not a reduced desktop version.

Prioritize:

1.  Hero
2.  Product discovery
3.  Categories
4.  Cellar filters
5.  Collections
6.  Gifting
7.  Wine Club
8.  Journal

Product grids should become horizontal carousels when appropriate.

Avoid tiny text.

Minimum body text:

``` text
14px
```

Minimum tap target:

``` text
44 × 44px
```

------------------------------------------------------------------------

# 34. Page Architecture

``` text
src/
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── logo/
│
├── components/
│   ├── Header/
│   ├── Footer/
│   ├── Button/
│   ├── ProductCard/
│   ├── CategoryCard/
│   ├── SectionHeading/
│   ├── Container/
│   ├── Rating/
│   ├── Badge/
│   └── Carousel/
│
├── sections/
│   ├── Hero/
│   ├── FeaturedCategories/
│   ├── CuratedPicks/
│   ├── Cellar/
│   ├── Collections/
│   ├── BestSellers/
│   ├── Gifting/
│   ├── Testimonials/
│   ├── WineClub/
│   ├── Journal/
│   └── Newsletter/
│
├── pages/
│   ├── Home/
│   ├── Shop/
│   ├── Product/
│   ├── Collection/
│   ├── Cart/
│   ├── Checkout/
│   ├── Journal/
│   └── Contact/
│
├── data/
│   ├── products.js
│   ├── categories.js
│   ├── collections.js
│   └── articles.js
│
├── hooks/
│
├── utils/
│
├── styles/
│   ├── variables.css
│   ├── typography.css
│   ├── globals.css
│   └── responsive.css
│
├── App.jsx
└── main.jsx
```

------------------------------------------------------------------------

# 35. CSS Variables

``` css
:root {
  --color-ivory: #F5E9DD;
  --color-cream: #FFF9F3;
  --color-burgundy: #5A1717;
  --color-wine: #7A1F1F;
  --color-gold: #B88A32;
  --color-soft-gold: #D2AA62;
  --color-charcoal: #242020;
  --color-beige: #E8D7C7;
  --color-muted: #756A63;

  --font-display: "Bebas Neue", sans-serif;
  --font-body: "Manrope", sans-serif;
  --font-editorial: "Cormorant Garamond", serif;

  --container: 1360px;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 80px;
  --space-10: 96px;
  --space-11: 120px;
  --space-12: 160px;

  --radius-sm: 2px;
  --radius-md: 4px;

  --transition-fast: 250ms cubic-bezier(.22, 1, .36, 1);
  --transition-normal: 450ms cubic-bezier(.22, 1, .36, 1);
  --transition-slow: 800ms cubic-bezier(.22, 1, .36, 1);
}
```

------------------------------------------------------------------------

# 36. Home Page Order

The exact homepage sequence should be:

``` text
01  Announcement Bar
02  Header
03  Hero
04  Featured Categories
05  Our Picks For You
06  Explore The Cellar
07  Our Choicest Selections
08  Best Sellers
09  Gifting
10  Happy Tales From Happy Customers
11  Wine Club
12  Wine Journal
13  Newsletter
14  Footer
```

This creates a strong visual rhythm:

``` text
LIGHT
↓
IMAGE
↓
LIGHT
↓
DARK
↓
LIGHT
↓
IMAGE
↓
LIGHT
↓
DARK
```

Do not make the entire page one continuous cream background.

------------------------------------------------------------------------

# 37. Visual Rhythm

Use alternating section types.

### Type A --- Product

Cream background + product cards.

### Type B --- Editorial

Large image + typography.

### Type C --- Dark Brand

Burgundy background + cream typography.

### Type D --- Content

Ivory background + article cards.

Recommended sequence:

``` text
Hero             → Editorial
Categories       → Image
Picks            → Product
Cellar           → Filter
Collections      → Editorial Image
Best Sellers     → Product
Gifting          → Image
Testimonials     → Content
Wine Club        → Dark Editorial
Journal          → Content
Newsletter       → Dark CTA
Footer           → Dark
```

------------------------------------------------------------------------

# 38. Ecommerce UX

The website should support:

``` text
Browse
Search
Filter
Sort
Product details
Wishlist
Add to cart
Cart
Checkout
Order confirmation
```

Product filters:

``` text
Category
Type
Region
Price
Brand
Grape
ABV
Rating
```

Product sorting:

``` text
Featured
Price: Low → High
Price: High → Low
Best Selling
Newest
Rating
```

------------------------------------------------------------------------

# 39. Product Page Design

Product page layout:

``` text
┌──────────────────────┬───────────────────────────┐
│                      │ Brand                     │
│                      │                           │
│   LARGE PRODUCT      │ Product Name              │
│      IMAGE           │                           │
│                      │ ★★★★★                     │
│                      │                           │
│                      │ ₹ PRICE                   │
│                      │                           │
│                      │ Quantity                  │
│                      │ [ ADD TO CART ]           │
│                      │                           │
│                      │ Product details           │
└──────────────────────┴───────────────────────────┘
```

Desktop:

``` text
Image: 55%
Information: 45%
```

Mobile:

``` text
Image
↓
Brand
↓
Name
↓
Price
↓
Quantity
↓
Add to Cart
↓
Description
↓
Details
```

------------------------------------------------------------------------

# 40. Accessibility

Required:

-   Semantic HTML
-   Proper heading hierarchy
-   Alt text
-   Keyboard navigation
-   Visible focus states
-   44px minimum interactive target
-   Accessible carousel controls
-   Form labels
-   ARIA only where needed
-   Respect reduced motion

Contrast should be checked especially for:

``` text
Gold text
Cream text
Burgundy text
```

Never use light gold as body text on ivory.

------------------------------------------------------------------------

# 41. Performance

Implement:

-   Lazy loading for non-critical images
-   Hero image preload
-   WebP/AVIF
-   Responsive image sizes
-   Width and height attributes
-   Code splitting for large pages
-   React lazy routes
-   Avoid unnecessary dependencies
-   Avoid oversized image files
-   Minimize layout shift

Target:

``` text
LCP < 2.5s
CLS < 0.1
INP < 200ms
```

where practical.

------------------------------------------------------------------------

# 42. SEO Structure

Homepage:

``` text
H1:
The Art of a Good Pour
```

Section headings should use:

``` text
H2
```

Product name:

``` text
H1 on product page
```

Use semantic:

``` html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Prepare the architecture for:

-   Product structured data
-   Breadcrumbs
-   Open Graph metadata
-   SEO-friendly URLs
-   Sitemap
-   Canonical URLs

------------------------------------------------------------------------

# 43. Do Not Use

Never introduce these unless specifically requested:

``` text
❌ Purple gradients
❌ Neon colors
❌ Glassmorphism
❌ Huge rounded cards
❌ Excessive drop shadows
❌ Emoji as UI icons
❌ Generic Bootstrap appearance
❌ Excessive animations
❌ Full-screen popups immediately on load
❌ Tiny mobile text
❌ Random font combinations
❌ Inconsistent spacing
❌ Different button styles in every section
```

------------------------------------------------------------------------

# 44. Quality Checklist

Before considering the homepage complete, verify:

-   [ ] SITARA logo is correctly displayed
-   [ ] Brand colors are consistent
-   [ ] Bebas Neue is used for major headings
-   [ ] Manrope is used for body/UI
-   [ ] Cormorant Garamond is used only as an editorial accent
-   [ ] Hero looks premium
-   [ ] Product cards have consistent dimensions
-   [ ] Images do not stretch
-   [ ] Gold is used sparingly
-   [ ] Burgundy provides strong brand recognition
-   [ ] Desktop spacing is generous
-   [ ] Mobile spacing is comfortable
-   [ ] No horizontal overflow at 360px
-   [ ] Product carousel works on mobile
-   [ ] Header works on mobile
-   [ ] Buttons have consistent dimensions
-   [ ] Hover states are subtle
-   [ ] Reduced-motion preference works
-   [ ] Images have alt text
-   [ ] No section feels like a generic template
-   [ ] No section visually copies the reference exactly

------------------------------------------------------------------------

# 45. Final Design Target

The finished SITARA website should communicate:

``` text
SITARA

PREMIUM
        +
EDITORIAL
        +
WARM
        +
MODERN
        +
INDIAN LUXURY
        +
E-COMMERCE
```

The most important visual formula is:

``` text
WARM IVORY
     +
DEEP BURGUNDY
     +
CHAMPAGNE GOLD
     +
LARGE CONDENSED TYPOGRAPHY
     +
PREMIUM PRODUCT PHOTOGRAPHY
     +
GENEROUS WHITESPACE
```

The final result should look like a **real premium wine brand website**,
not a generic AI-generated ecommerce template.
