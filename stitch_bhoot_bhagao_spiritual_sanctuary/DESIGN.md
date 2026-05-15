---
name: Aura of Protection
colors:
  surface: '#16130b'
  surface-dim: '#16130b'
  surface-bright: '#3d392f'
  surface-container-lowest: '#110e07'
  surface-container-low: '#1f1b13'
  surface-container: '#231f17'
  surface-container-high: '#2d2a21'
  surface-container-highest: '#38342b'
  on-surface: '#eae1d4'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#eae1d4'
  inverse-on-surface: '#343027'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#ffb77a'
  on-secondary: '#4c2700'
  secondary-container: '#d7790d'
  on-secondary-container: '#432100'
  tertiary: '#c3cbff'
  on-tertiary: '#002388'
  tertiary-container: '#9eaeff'
  on-tertiary-container: '#0033b9'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#ffdcc2'
  secondary-fixed-dim: '#ffb77a'
  on-secondary-fixed: '#2e1500'
  on-secondary-fixed-variant: '#6d3a00'
  tertiary-fixed: '#dde1ff'
  tertiary-fixed-dim: '#b8c3ff'
  on-tertiary-fixed: '#001356'
  on-tertiary-fixed-variant: '#0035be'
  background: '#16130b'
  on-background: '#eae1d4'
  surface-variant: '#38342b'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  container-padding-mobile: 24px
  container-padding-desktop: 80px
  gutter: 24px
  section-gap: 120px
---

## Brand & Style

The design system is anchored in a "Cinematic Spiritual" aesthetic—a high-end, meditative experience designed to evoke feelings of safety, transcendence, and premium quality. It targets an audience seeking peace and protection, balancing the ancient weight of spirituality with the sleekness of a modern technology startup.

The visual style is a fusion of **Glassmorphism** and **High-Contrast Minimalism**. By placing translucent, frosted glass containers against a near-infinite deep black void, we create a sense of depth and focus. Elements should feel like they are floating in an ethereal space, lit by internal glows and ambient "soul" light rather than harsh external sources. The emotional response is one of calm, authority, and mystical reassurance.

## Colors

The palette is rooted in the contrast between the **Deep Black (#050505)** background and radiant highlights. 

- **Primary Gold (#D4AF37):** Used for significant brand moments, premium CTAs, and protective boundaries. It represents enlightenment and value.
- **Saffron Highlight (#FF9933):** Used for energy, warmth, and active spiritual states. This is our primary "action" color.
- **Royal Blue & Emerald:** These are used sparingly for gradients and ambient background blurs (orbs) to represent calm and healing respectively.
- **Soft White (#F8F9FA):** Reserved for text and iconography to ensure maximum legibility against the dark void.

Color should be applied using "glow" logic—rather than flat fills, use subtle inner shadows and outer blurs to make elements appear illuminated from within.

## Typography

This design system utilizes a high-contrast typographic pairing to reinforce the "Ancient-meets-Modern" theme.

- **Headlines:** Playfair Display provides a literary, authoritative, and elegant feel. For the largest display sizes, use a slight negative letter-spacing to create a tighter, more cinematic look.
- **Body & UI:** Inter ensures that functional information is crystal clear and accessible. It grounds the spiritual aesthetic in professional utility.
- **Labels:** Use Inter in uppercase with increased letter spacing for navigation and small descriptors to maintain a clean, organized hierarchy.

## Layout & Spacing

The layout philosophy follows a **Fluid Grid** model with significant negative space. To achieve a premium feel, the design system avoids "cramming" content. 

- **Breathing Room:** Use large section gaps (120px+) to allow the ambient background orbs and particles to be visible.
- **Grid:** Use a 12-column grid for desktop with 24px gutters.
- **Floating Containers:** Content should be grouped in glassmorphic cards that do not always touch the edges of the screen, reinforcing the "floating" sensation.
- **Centricity:** Key information should often be center-aligned to create a sense of balance and focus, typical of meditative applications.

## Elevation & Depth

Depth is not created with traditional drop shadows, but through **Tonal Layering and Glassmorphism**.

1.  **Base Layer:** The Deep Black (#050505) void.
2.  **Ambient Layer:** Soft, large-radius blurs of Royal Blue and Emerald Green (#50C878) at 10-15% opacity, moving slowly behind the UI.
3.  **Surface Layer:** Semi-transparent containers (`rgba(255, 255, 255, 0.03)`) with a `backdrop-filter: blur(20px)`.
4.  **Edge Layer:** A 1px solid border with a linear gradient (Gold to Transparent) to give the glass a "caught light" effect.
5.  **Interaction Layer:** When an element is focused, increase the border opacity and add a subtle outer glow (0px 0px 15px) in Saffron.

## Shapes

The shape language is dominated by **extreme roundedness and pill shapes**. 

- **Containers:** All primary cards and modals use `rounded-2xl` (1.5rem) or higher to avoid "aggressive" sharp corners, contributing to the safe and soft atmosphere.
- **Interactive Elements:** Buttons, chips, and input fields should be fully rounded (pill-shaped). This mimics the organic shape of "auras" and protective shields.
- **Consistency:** Never use sharp 90-degree angles in the UI. Even iconography should lean towards rounded terminals and soft joints.

## Components

- **Buttons:** Primary buttons use a Saffron-to-Gold gradient. They should have a subtle outer glow that pulses slightly on hover. Text remains high-contrast white or deep black depending on the gradient intensity.
- **Cards:** Glassmorphic containers with 20px blur. The border should be a thin 1px Gold-to-Transparent gradient. Floating particles (small, low-opacity white dots) can be animated within the card background.
- **Input Fields:** Pill-shaped, dark translucent backgrounds (`rgba(0,0,0,0.4)`), with Gold borders that "light up" (glow) when focused.
- **Chips/Badges:** Small, fully rounded elements with Emerald Green or Royal Blue glass backgrounds to denote states or categories.
- **Lists:** Items should be separated by soft, fading horizontal lines (Gradients: transparent -> soft white -> transparent) to maintain the "airy" feel.
- **Modals:** Centered, heavy backdrop blur (80px), appearing as if they are emerging from a mist.