# Design System & Architectural Guidelines - Clikaa

## 1. Project Overview
**Goal:** Build a premium, high-performance agency website for "Clikaa" that bridges high-end aesthetics with strategic results.
**Aesthetic:** "Slayed" style (webflow) — Heavy typography, massive whitespace, fluid animations, and "Swiss Design" grid principles.
**Brand Core:** Modern, Strategic, Premium.

## 2. Tech Stack & Architecture
- **Framework:** Next.js 14+ (App Router).
- **Styling:** Tailwind CSS.
- **Animation:** - `framer-motion` (Component interactions, page transitions).
  - `lenis` (Smooth, weighty scrolling).
- **Fonts:** `next/font` (Inter as primary fallback, see Typography).
- **Icons:** Lucide-react.

## 3. Brand Identity (Strict Adherence)
*Source: Brand Guidelines for Clikaa.pdf*

### 3.1 Typography
**Primary Font:** BDO Grotesk (Custom).
**Fallback/Web Font:** **Inter** (Use `next/font/google`).
*Note: Since BDO Grotesk is custom, we will build using Inter to match the fallback guidelines on Page 17, ensuring a clean, professional look.*

**Hierarchy (Desktop):**
- **Headline 1:** `text-6xl` or `64px` (Bold/800) – Used for Hero sections.
- **Headline 2:** `text-5xl` or `48px` (SemiBold/600) – Section headers.
- **Headline 3:** `text-4xl` or `36px` (Medium/500) – Sub-headers.
- **Body:** `text-xl` or `24px` (Regular/400) – Standard text (larger than average for premium feel).

### 3.2 Color Palette
*Source: PDF Page 20-22*
- **Primary Background:** `#FFFFFF` (Likely Off-White or Deep Black).
- **Primary Text:** `#111111` (High contrast against background).
- **Accent:** `#091CCA` (Used sparingly for buttons/links).
- **Surface/Cards:** `#F6F4EF` (Slightly lighter/darker than bg).

### 3.3 Logo Usage
- **Minimum Size:** 172px width x 42px height.
- **Safe Zone:** Equal to the height of the symbol on all sides.
- **Placement:** Top-left for desktop, centered or top-left for mobile.

## 4. UI/UX Patterns & Animation ("The Slayed Feel")

### 4.1 Global Animation Rules
1.  **Smooth Scroll:** Global Lenis instance with `lerp: 0.1` for a "heavy/premium" scroll feel.
2.  **Text Reveal:** ALL major headings must use a "Mask Reveal":
    - Parent: `overflow-hidden`.
    - Child (Text): `y: "100%"` -> `y: "0%"` with `duration: 0.8, ease: [0.76, 0, 0.24, 1]`.
3.  **Magnetic Buttons:** All primary CTAs must use a physics-based magnetic effect (button moves slightly with cursor).

### 4.2 Component Behaviors
- **Navigation:**
  - Fixed top.
  - Links: Underline animation (left-to-right) on hover.
  - Mobile: Full-screen overlay menu with staggered text entry.
- **Images:**
  - Scale: 1.0 -> 1.05 on hover.
  - Parallax: Images should move slightly slower than scroll speed (parallax effect).
- **Cursor:** Custom circular cursor that blends (`mix-blend-mode: difference`) over text (Optional).

## 5. Page Specifications

### 5.1 Home (Landing)
- **Hero:** Big bold type ("Strategic Creativity"). Text reveal animation.
- **Section 2:** "Who we are" – Large typography, minimal layout.
- **Featured Projects:** Horizontal scroll or large vertical list with image hover reveals.

### 5.2 About
- **Story:** Scroll-triggered text color change (opacity 0.3 -> 1.0 as you read).
- **Team/Values:** Grid layout listing values (Strategic Creativity, Premium Quality, etc.) from PDF Page 5.

### 5.3 Services
- **Layout:** Accordion list or "Bento Grid".
- **Interaction:** Hovering a service reveals a relevant image following the cursor.

### 5.4 Projects (Work)
- **Grid:** 2-column masonry or large single-column list.
- **Details:** Minimal text, focus on large, high-res imagery.

### 5.5 Blog
- **Index:** Clean list view. Date + Title + Tag.
- **Post:** Narrow text container (prose), large featured image.

### 5.6 Contact
- **Form:** Minimal inputs (border-bottom only).
- **Focus State:** Label moves up or changes color (Material/floating label style).
- **Info:** "hello@clikaa.com" prominently displayed.

## 6. Implementation Checklist
- [ ] Setup `app/layout.tsx` with `Lenis` provider.
- [ ] Configure `tailwind.config.js` with Clikaa Brand Colors & Inter font.
- [ ] Create reusable `<MagneticButton />` component.
- [ ] Create reusable `<TextMask />` component for headlines.
- [ ] Build pages in order: Home -> About -> Services -> Projects -> Contact.
