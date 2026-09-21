---
name: Precision Industrial Electrification
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353942'
  surface-container-lowest: '#0a0e16'
  surface-container-low: '#181c24'
  surface-container: '#1c2028'
  surface-container-high: '#262a33'
  surface-container-highest: '#31353e'
  on-surface: '#dfe2ee'
  on-surface-variant: '#bacbbe'
  inverse-surface: '#dfe2ee'
  inverse-on-surface: '#2c3039'
  outline: '#849589'
  outline-variant: '#3b4a40'
  surface-tint: '#00e296'
  primary: '#76ffbb'
  on-primary: '#003822'
  primary-container: '#00e699'
  on-primary-container: '#00613e'
  inverse-primary: '#006c46'
  secondary: '#a5e7ff'
  on-secondary: '#003543'
  secondary-container: '#00d2ff'
  on-secondary-container: '#00566a'
  tertiary: '#ffdedc'
  on-tertiary: '#68000e'
  tertiary-container: '#ffb8b4'
  on-tertiary-container: '#ad001f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#4dffb1'
  primary-fixed-dim: '#00e296'
  on-primary-fixed: '#002112'
  on-primary-fixed-variant: '#005233'
  secondary-fixed: '#b6ebff'
  secondary-fixed-dim: '#47d6ff'
  on-secondary-fixed: '#001f28'
  on-secondary-fixed-variant: '#004e60'
  tertiary-fixed: '#ffdad8'
  tertiary-fixed-dim: '#ffb3af'
  on-tertiary-fixed: '#410006'
  on-tertiary-fixed-variant: '#930019'
  background: '#0f131c'
  on-background: '#dfe2ee'
  surface-variant: '#31353e'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
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
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  metric-display:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 36px
  label-mono-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  label-mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an architectural, high-precision aesthetic tailored for industrial B2B energy management, property-technology developments, and mission-critical fleet infrastructure. The visual language merges heavy-industry engineering with high-performance digital telemetry.

### Core Visual Metaphors
- **Sub-surface Illumination:** Interfaces simulate matte architectural carbon panels energized by internal power currents.
- **Engineered Rigor:** Mathematical data alignment, structural bento grids, and high-visibility status indicators emulate industrial hardware command consoles.
- **Cold Industrial Premium:** Tactile dark-mode foundations paired with razor-sharp electric accents evoke technical mastery, institutional reliability, and cutting-edge clean energy deployment.

### Audience & Mood
Engineered for C-suite real estate developers, asset directors, commercial fleet operators, and industrial EPC contractors. The UI commands trust, operational readiness, and high-throughput technological sophistication.

## Colors

The palette operates on a calibrated dark-field system designed for continuous monitoring consoles, operations dashboards, and specification showcases without eye fatigue.

### Color Tokens & Assignments
- **Background Root (`#0B0F17`):** Deep Obsidian Slate canvas anchor.
- **Surface Container Base (`#111827`):** Foundation containers, sidebars, and nested data decks.
- **Surface Card Tier (`#151D2E`):** Standard interactive panels and modular grid cells.
- **Surface Elevated Tier (`#1E293B`):** Hover states, active layers, flyout drawers, and modals.
- **Primary Energy Accent (`#00E699`):** Represents dynamic power delivery, active charging status, and optimal grid equilibrium.
- **Secondary Telemetry Accent (`#00D2FF`):** Represents cloud handshake, OCPP telemetry streams, and hardware network health.
- **Tertiary Signature Accent (`#FF0033`):** Dedicated exclusively to authorized partnership verification, high-voltage warnings, and critical hardware cutoff.
- **Text Layers:** 
  - Pure White (`#FFFFFF`) for key metrics and headlines.
  - Light Slate (`#E2E8F0`) for readable body copy.
  - Muted Gray (`#94A3B8`) for telemetry units, secondary specs, and metadata.
- **Structural Outlines:** Neutral borders run at `rgba(255, 255, 255, 0.08)`. Focused states and energized chargers activate gradient borders blending `#00E699` and `#00D2FF`.

## Typography

Typography unifies architectural headlines, hyper-legible operational documentation, and numerical data precision.

### Typographic Hierarchy Rules
- **Display & Headings (Plus Jakarta Sans):** Geometric, solid, authoritative. Use negative tracking (`-0.02em` to `-0.03em`) on scales above 24px to enforce an engineered, lock-up presentation.
- **Narrative & System Body (Inter):** Highly legible neutral grotesque with micro-spacing calibrated for reading technical specs and operational runbooks.
- **Telemetry & Hardware Status (JetBrains Mono):** Reserved for technical readouts, terminal diagnostics, power wattage (kW/MW), live amperage, station IDs, and network protocol designations. Set letter-spacing to `0.02em` for clear legibility in data-dense layouts.

## Layout & Spacing

The structural layout relies on an asymmetrical 12-column responsive grid built for dashboard modules, telemetry grids, and hardware specification sheets.

### Grid & Breakpoints
- **Desktop (1280px+):** 12 columns, 1.5rem (24px) gutters, 2rem (32px) outer margins. Maximum layout constraint: 1440px centered.
- **Tablet (768px – 1279px):** 8 columns, 1.5rem (24px) gutters, 1.5rem (24px) outer margins.
- **Mobile (Below 768px):** 4 columns, 1rem (16px) gutters, 1rem (16px) outer margins.

### Bento-Grid Architectural Logic
Hardware showcases and telemetry boards organize content into clustered, self-contained bento tiles. Bento layouts pair wide cells (spanning 8 columns) for visual hardware diagnostics with compact metric stacks (spanning 4 columns) for live throughput telemetry. Internal module padding remains rigidly uniform at `space-lg` (1.5rem / 24px).

## Elevation & Depth

Visual hierarchy does not use soft diffuse drop-shadows typical of consumer software. Instead, it relies on layered dark surfaces, frosted glass filters, and perimeter lumen glow.

### Structural Depth Architecture
- **Layer 0 (Canvas Base):** Solid `#0B0F17` background with subtle micro-dot grid alignment matrices.
- **Layer 1 (Recessed/Dock Panels):** `#111827` container fill, bounded by 1px solid `rgba(255, 255, 255, 0.06)`.
- **Layer 2 (Bento Tiles & Floating Cards):** Glassmorphic treatment with `background: rgba(21, 29, 46, 0.75)`, `backdrop-filter: blur(20px)`, and a 1px inner boundary of `rgba(255, 255, 255, 0.08)`.
- **Layer 3 (Modals, Dropdowns, Hardware Floating HUDs):** High surface `#1E293B` elevated with an ambient dark halo: `box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7)`.

### Photon Luminescence (Glow States)
- **Active Current Stream:** Cards housing live charging stations project an inner rim lighting: `box-shadow: inset 0 0 16px rgba(0, 230, 153, 0.12), 0 0 24px rgba(0, 230, 153, 0.08)`.
- **Telemetry Connection Active:** Signal tags project a concentrated cyan pulse: `box-shadow: 0 0 12px rgba(0, 210, 255, 0.35)`.
- **Critical Alert / ABB Certified:** Badges display a crimson highlight: `box-shadow: 0 0 14px rgba(255, 0, 51, 0.25)`.

## Shapes

The design system employs a soft industrial radius profile (`roundedness: 1`). Radii stay tight, controlled, and mechanical to maintain a precision hardware feel rather than an ultra-rounded consumer finish.

### Corner Radius System
- **Micro Elements (Badges, Checkboxes, Micro-tags):** `4px` (`0.25rem`).
- **Standard Controls (Inputs, Buttons, Segmented Selectors):** `6px` (`0.375rem`).
- **Surface Cards, Bento Grid Cells, Modals:** `8px` (`0.5rem`).
- **Outer Shell Containers & Hero Visual Panels:** `12px` (`0.75rem`).
- **Prohibited:** Full pill shapes are forbidden for data cards and metric panels; they are reserved strictly for high-visibility dynamic status pills.

## Components

### Buttons & Action Controls
- **Primary Energy Button:** High-visibility `#00E699` background, `#0B0F17` font weight 700 text, 6px radius. Hover: `#00FFAA` with a cyan-emerald perimeter corona (`box-shadow: 0 0 20px rgba(0, 230, 153, 0.4)`).
- **Secondary Telemetry Button:** Frosted card background `rgba(21, 29, 46, 0.8)`, 1px border `rgba(0, 210, 255, 0.3)`, text `#00D2FF`. Hover: Border shifts to full `#00D2FF`, surface shifts to `rgba(0, 210, 255, 0.08)`.
- **Ghost/Tertiary Action:** Borderless, `#94A3B8` text, hover: `#FFFFFF` with background `rgba(255, 255, 255, 0.04)`.

### Data Counters & Telemetry Gauges
- Structured with high-contrast JetBrains Mono figures (`metric-display`) at `#FFFFFF`.
- Accompanying unit labels (e.g., `kW`, `kWh`, `V`, `A`, `OCPP 2.0.1`) appear in `label-mono-sm` at `#94A3B8`.
- Includes an integrated micro pulse ring: an active green dot with an expanding concentric circle animation denoting uninterrupted data streaming.

### Status Chips & Partner Badges
- **ABB Authorized Partner Badge:** Rigid 4px rounded badge, background `rgba(255, 0, 51, 0.1)`, 1px solid `rgba(255, 0, 51, 0.4)`, text `#FF0033`, leading dot in solid Crimson.
- **Charging Active Chip:** Background `rgba(0, 230, 153, 0.1)`, 1px solid `rgba(0, 230, 153, 0.3)`, text `#00E699`.
- **Network Standby Chip:** Background `rgba(0, 210, 255, 0.1)`, 1px solid `rgba(0, 210, 255, 0.3)`, text `#00D2FF`.

### Bento Grid Cards & Hardware Spec Cells
- Built on `rgba(21, 29, 46, 0.75)` with `backdrop-filter: blur(20px)` and 1px border `rgba(255, 255, 255, 0.08)`.
- Cards feature top-right technical coordinates (e.g., `SEC_01 // 22KW_AC`) in 11px JetBrains Mono at `rgba(255, 255, 255, 0.35)`.
- Interactive state: Subdued cyan border glow and `transform: translateY(-2px)` elevation.

### Form Inputs & Telemetry Fields
- Background `#111827`, 1px border `rgba(255, 255, 255, 0.12)`, text `#FFFFFF`, placeholder `#94A3B8`.
- Focus state: Border transitions to `#00E699`, with an active inner glow of `0 0 0 1px #00E699`.

### Interactive Hardware Showcase Component
- Dual-zone interface: The left 60% viewport displays a 3D/rendered hardware chassis with interactive telemetry hotspots; the right 40% bento stack displays real-time hardware status (cable temperature, active phase balancing, RFID authentication status, and current throughput load).