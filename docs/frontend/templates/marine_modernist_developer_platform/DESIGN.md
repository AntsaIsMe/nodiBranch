---
name: Marine Modernist Developer Platform
colors:
  surface: '#faf8ff'
  surface-dim: '#d4d9f5'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f2ff'
  surface-container: '#ebedff'
  surface-container-high: '#e3e7ff'
  surface-container-highest: '#dce1fe'
  on-surface: '#151b2f'
  on-surface-variant: '#3f4849'
  inverse-surface: '#2a2f45'
  inverse-on-surface: '#eff0ff'
  outline: '#6f7979'
  outline-variant: '#bfc8c8'
  surface-tint: '#27676a'
  primary: '#004749'
  on-primary: '#ffffff'
  primary-container: '#1d5f62'
  on-primary-container: '#99d7da'
  inverse-primary: '#94d1d4'
  secondary: '#476643'
  on-secondary: '#ffffff'
  secondary-container: '#c5e9bd'
  on-secondary-container: '#4b6a47'
  tertiary: '#1d481c'
  on-tertiary: '#ffffff'
  tertiary-container: '#346031'
  on-tertiary-container: '#a7d99e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#afedf0'
  primary-fixed-dim: '#94d1d4'
  on-primary-fixed: '#002021'
  on-primary-fixed-variant: '#014f52'
  secondary-fixed: '#c8ecc0'
  secondary-fixed-dim: '#add0a6'
  on-secondary-fixed: '#042106'
  on-secondary-fixed-variant: '#304e2d'
  tertiary-fixed: '#bdf0b3'
  tertiary-fixed-dim: '#a2d399'
  on-tertiary-fixed: '#002203'
  on-tertiary-fixed-variant: '#255023'
  background: '#faf8ff'
  on-background: '#151b2f'
  surface-variant: '#dce1fe'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
  code-inline:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  code-block:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 22px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes a high-performance, developer-first documentation environment that balances technical rigor with organic elegance. Inspired by marine biology and structural modularity, the aesthetic combines the discipline of enterprise architectures (such as Symfony and Nest) with the velocity and light-handed styling of contemporary TypeScript toolchains.

The visual style is **Minimalist-Precision with Low-Contrast Technical Boundaries**. It relies on crisp typographic hierarchy, disciplined information density, and precise hairline boundaries (`#E2E8F0`) rather than heavy dropshadows or skeuomorphism. Clean, expansive negative space creates sustained legibility across multi-column documentation layouts, while targeted teal and mint accents anchor interactive states, active tree nodes, and syntax landmarks.

## Colors

The color palette captures an oceanic, deep-water tonal foundation calibrated for intense code reading and structural navigation:

- **Primary (`#1D5F62`)**: Deep ocean teal. Used for primary branding, active navigation links, focused interactive states, and top-tier headers.
- **Secondary (`#C6EABE`)**: Soft sea-mint tint. Utilized for high-visibility highlights, active pill backgrounds, subtle hover fills, and badge foundations.
- **Tertiary / Accent (`#8ABA82`)**: Balanced sage green. Applied to terminal prompts, inline success confirmations, git additions, and verified version badges.
- **Neutral Primary (`#191F34`)**: Deep midnight slate. The baseline for body text, headers, and core interfaces to ensure maximum legibility against pure white.
- **Neutral Surface & Canvas (`#FFFFFF`)**: Pure crisp white canvas for documentation content, paired with `#F8FAFC` for secondary sidebars and panel backdrops.
- **Dividers & Structural Borders (`#E2E8F0` and `#EDF2F7`)**: Hairline dividers defining navigation trees, table rows, and panel separations without visual clutter.
- **Code Engine Tier (`#0F172A` & `#1E293B`)**: Rich slate obsidian surfaces reserved exclusively for terminal outputs, interactive code snippets, and CLI playground blocks.

## Typography

Typography prioritizes clarity, precise vertical rhythm, and seamless context switching between explanatory documentation and technical code strings.

- **Primary Interface & Prose**: `Inter` handles all navigation elements, document titles, body text, and prose explanations with tight tracking (`-0.02em` to `-0.03em`) on larger headings to reinforce a modern, compact silhouette.
- **Monospace Code & Technical Labels**: `JetBrains Mono` handles all CLI prompts, TypeScript code listings, API endpoints, inline tags, and keyboard shortcuts (`<kbd>`).
- **Inline Code Handling**: Inline code strings are rendered at `13px` on a muted background (`#F1F5F9`) with a 1px soft border (`#E2E8F0`) and 4px lateral padding to maintain uniform line-height within standard prose.

## Layout & Spacing

This design system uses a responsive 3-column sticky documentation architecture:

1. **Left Navigation Sidebar (260px fixed)**: Sticky vertical layout containing nested framework modules, architecture directories, and component tree items.
2. **Center Reading Canvas (Max 768px width)**: Dedicated long-form markdown layout with structured 16px vertical margins between paragraphs, code blocks, and callouts.
3. **Right Table of Contents (220px fixed)**: Minimal secondary jump-list highlighting in-page headers (`H2`, `H3`) with active scroll-spy indicators.

### Breakpoint Strategy
- **Desktop (>= 1280px)**: Complete 3-column layout. Sidebar and on-this-page outlines are permanently anchored with internal scrolling.
- **Tablet (768px - 1279px)**: The right Table of Contents collapses into a discreet expandable header trigger. Left navigation collapses into a slide-over sheet.
- **Mobile (< 768px)**: Single-column flow with a fixed top header (height `56px`), mobile drawer navigation, edge margins reduced from `2rem` to `1rem`, and horizontal scrolling for wide tables and terminal outputs.

## Elevation & Depth

Visual hierarchy is maintained through subtle tonal surfaces and hairline outlines rather than heavy blurred drop shadows.

- **Level 0 (Base Canvas)**: Flat `#FFFFFF` surface for primary markdown prose.
- **Level 1 (Docked Sidebars & Utility Panels)**: `#F8FAFC` surface framed with a 1px solid `#E2E8F0` border.
- **Level 2 (Dropdowns, Popovers & Search Modals)**: Elevated white surface with a crisp outline (`1px solid #CBD5E1`) supported by a clean ambient shadow (`0 10px 25px -5px rgba(25, 31, 52, 0.08)`).
- **Code Block Tier**: Deep slate (`#0F172A`) container with an inner header divider (`#1E293B`) creating a clean window aesthetic for CLI and TypeScript examples.

## Shapes

The design uses a clean, architectural corner radius (Soft, `4px` base) to reflect the structure of backend TypeScript frameworks and code tooling.

- **Inputs, Buttons, and Badges**: `4px` radius (`rounded-sm`).
- **Code Containers, Cards, and Callout Boxes**: `6px` to `8px` radius (`rounded-md` / `rounded-lg`).
- **Filter Tags & Version Chips**: `9999px` (`rounded-full`) for high-contrast scanning of package versions and feature tags.

## Components

### Code Blocks & Terminal Emulators
- **Container**: Dark background (`#0F172A`) with a top chrome bar (`#1E293B`) showing language identifiers, active file path tab (`e.g., src/controllers/user.controller.ts`), and a copy action button.
- **Terminal Variant**: Displays an active prompt indicator (`$` or `>`) in accent sage (`#8ABA82`) with syntax coloring for commands, arguments, and flags.
- **Copy Action**: Placed in the top right of the code container. Displays a subtle clipboard icon, transitioning to a checkmark with secondary mint (`#C6EABE`) feedback text on click.

### Alert Callouts
- **Tip**: Light mint background (`rgba(198, 234, 190, 0.25)`), left border (3px solid `#8ABA82`), with deep teal text and an inline icon.
- **Info / Architecture**: Light teal wash (`rgba(29, 95, 98, 0.08)`), left border (3px solid `#1D5F62`), paired with a technical info glyph.
- **Warning**: Soft amber wash (`#FFFBEB`), left border (3px solid `#F59E0B`), displaying caveat instructions.

### Navigation Tree Items
- Nested unordered lists connected with subtle 1px guide lines (`#E2E8F0`).
- Interactive links show a hover fill of `#F1F5F9`. The active route is highlighted in deep teal (`#1D5F62`) with a medium font weight (`500`) and a subtle left indicator bar.

### Buttons & Inputs
- **Primary Action**: Solid `#1D5F62` fill, pure `#FFFFFF` text, `4px` border-radius, transitioning to `#154648` on hover.
- **Secondary / Ghost**: Transparent fill, 1px border (`#E2E8F0`), `#191F34` text, hovering to `#F8FAFC`.
- **Search Command Bar (Cmd + K)**: Pill or soft-square input styled with `#F1F5F9` surface, `#64748B` placeholder, and an inline keyboard shortcut badge (`JetBrains Mono`, `11px`).

### Version & Status Badges
- Small inline indicators using secondary mint (`#C6EABE`) or sage (`#8ABA82`) with deep teal text (`#1D5F62`), displaying tags like `npm v1.2.0`, `TypeScript 5.x`, or `Middleware`.