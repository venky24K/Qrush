---
name: Queens Rush
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#44474d'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#75777e'
  outline-variant: '#c5c6cd'
  surface-tint: '#515f78'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#0d1c32'
  on-primary-container: '#76849f'
  inverse-primary: '#b9c7e4'
  secondary: '#206393'
  on-secondary: '#ffffff'
  secondary-container: '#90c9ff'
  on-secondary-container: '#035584'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#091c33'
  on-tertiary-container: '#7485a1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b9c7e4'
  on-primary-fixed: '#0d1c32'
  on-primary-fixed-variant: '#39475f'
  secondary-fixed: '#cee5ff'
  secondary-fixed-dim: '#96ccff'
  on-secondary-fixed: '#001d32'
  on-secondary-fixed-variant: '#004a75'
  tertiary-fixed: '#d5e3ff'
  tertiary-fixed-dim: '#b6c7e6'
  on-tertiary-fixed: '#091c33'
  on-tertiary-fixed-variant: '#374761'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: 0.05em
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: 0.02em
  headline-sm:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.08em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  margin-mobile: 24px
  gutter: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  card-padding: 20px
---

## Brand & Style

The design system is anchored in a philosophy of **Sophisticated Strategy**. It reimagines the classic game of chess through a lens of modern luxury and high-tech minimalism. The UI aims to evoke a sense of calm focus, high-stakes intelligence, and premium craftsmanship.

The visual style is a blend of **Glassmorphism** and **Corporate Modernism**. It utilizes expansive white space, subtle background textures (inspired by the tactical geometry of a chessboard), and translucent layers to create depth without clutter. The interface feels airy and light, allowing the weight of the strategic decisions to take center stage. Every interaction should feel intentional, smooth, and high-end.

## Colors

The palette is dominated by **Deep Dark Blue** (#0A192F), used for primary actions and key structural elements to provide a grounded, authoritative feel. This is contrasted against a **Soft White** (#F8F9FA) background which keeps the application feeling fresh and breathable.

**Steel Blue** (#4682B4) serves as the secondary accent for interactive elements like toggles and active states. For feedback, we use a **subtle red tint** for errors and **soft blue glows** for victory states or highlighted move suggestions. Translucency plays a vital role: surfaces use a 70-80% opacity white with a high backdrop-blur (20px+) to achieve the signature glass effect.

## Typography

This design system utilizes **Montserrat** for all headlines to convey confidence and energy. A generous **letter-spacing (tracking)** is applied to uppercase labels and display text to enhance the luxury aesthetic.

**Inter** is the workhorse font for body text and functional labels, chosen for its exceptional readability on mobile screens. We maintain a clear vertical rhythm by strictly adhering to the defined line heights. For mobile-specific gameplay views, headlines scale down slightly but retain their weight to ensure the UI remains legible during fast-paced strategy sessions.

## Layout & Spacing

The layout follows a **fluid mobile-first grid** based on an 8px square system. Margins are intentionally wide (24px) to reinforce the "airy" feel of the design.

Elements are grouped in **Cards** that float above the background texture. Content within these cards uses a 20px internal padding. We utilize a **stacking logic** where related elements are separated by 8px or 16px, while distinct sections are separated by 32px or more to maintain a clear visual hierarchy. The chessboard itself should be centered with a minimum of 16px padding from the screen edges.

## Elevation & Depth

Hierarchy is established through **Glassmorphic layers** and **Ambient Shadows**. 

1.  **Base Layer:** The soft white background, often featuring a low-contrast chessboard watermark.
2.  **Surface Layer:** Large cards with a 0.5 opacity white background, a 1px solid white border (inner glow effect), and a 20px backdrop blur.
3.  **Elevation Layer:** Interactive elements like buttons and active cards use a highly diffused, low-opacity shadow (Color: #0A192F at 8% opacity, Offset: 0 10, Blur: 30).
4.  **Highlight Layer:** Active pieces or selected tiles use a soft blue glow (#E0F2FE) rather than a hard stroke to indicate selection.

## Shapes

The shape language is characterized by **large, friendly radii**. This design system uses a primary corner radius of **24px** for standard components, which softens the "serious" nature of chess and makes the UI feel modern and approachable.

- **Main Cards:** 32px radius for a distinct, pill-like container feel.
- **Buttons:** 16px radius to distinguish them from the larger containers.
- **Inputs & Chips:** 12px radius.
- **Chessboard Squares:** Subtle 4px radius to avoid harsh points, maintaining the premium feel even in the game grid.

## Components

### Buttons
Primary buttons are large and impactful, featuring a **Deep Dark Blue** background with **White** Montserrat text. They should have a subtle 1px top-border highlight to give a tactile, "premium plastic" feel. Secondary buttons use the Glassmorphic style with a Steel Blue text color.

### Segmented Controls
Used for switching between game modes (e.g., "Classic" vs "Blitz"). These feature a pill-shaped container with a sliding background highlight. The background is a soft gray, and the active segment is White with a soft shadow.

### Cards
Cards are the primary container for player stats, move history, and settings. They must use the **Glassmorphism** style: semi-transparent white, backdrop blur, and large 32px rounded corners.

### Input Fields
Inputs are minimalist: a simple 1px bottom border in Steel Blue, or a fully enclosed glass container with 12px roundedness. Focus states are indicated by a soft blue outer glow.

### Chessboard
The board should use alternating squares of #F8F9FA and #E9ECEF (very light gray). Pieces are rendered in high-contrast Deep Dark Blue and a warm, premium White. Selected tiles are highlighted with a Steel Blue (#4682B4) inner glow.

### Chips & Tags
Small, 12px rounded badges used for "Online," "Your Turn," or "ELO Rating." These use high-transparency backgrounds with bold Deep Blue text for readability.