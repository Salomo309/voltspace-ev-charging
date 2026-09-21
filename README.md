# VOLTIX — VoltSpace EV Infrastructure Platform

Company profile web untuk EV Charging, dibangun dengan React + Three.js + Framer Motion, mengikuti desain Stitch.

## Sumber Desain (Stitch MCP)
- Project: **VoltSpace EV Infrastructure Platform**
- Project ID: `15753018976447506990`
- Screens:
  - `bc8af56382c542e6bf8edb513721f79c` — VOLTIX | Enterprise EV Charging Solutions (main)
  - `2a4cb8a7f5da4c89b1b3d1542e73d088` — VOLTIX variant
  - `27fd622cd905454485477bf9c76ccd2f` — Three.js ANIMATION_1 (ABB Terra Wallbox 3D)
- Design tokens: lihat `DESIGN.md` (Precision Industrial Electrification, dark `#0B0F17`, primary `#00e699`, fonts Plus Jakarta Sans / Inter / JetBrains Mono)
- Referensi HTML mentah: `stitch-reference.html`

Diakses via MCP `stitch-mcp-server` + `@google/stitch-sdk` dengan `STITCH_API_KEY`.

## Tech Stack
- Vite + React 19 + TypeScript
- TailwindCSS v4 (`@tailwindcss/vite`)
- Three.js via `@react-three/fiber` + `@react-three/drei` — model ABB Terra AC Wallbox 7kW interaktif (port dari Stitch Three.js ANIMATION_1: pedestal, pillar, wallbox, LED pulse, RFID ring, cable tube, particles, mouse/OrbitControls)
- Framer Motion — scroll reveal + micro-interactions
- Sections sesuai Stitch: Hero + 3D viewport, Market Outlook 2025, 6 Property Sectors, Hardware Specs Bento, Turnkey Pricing Calculator (Rp 15.500.000 + add-ons), Implementation Timeline, Booking Form, Footer

## Jalankan
```bash
npm install
npm run dev
npm run build
npm run preview
```

## Repo
- Folder ini adalah git repo (`master`). Initial commit mencakup scaffold + implementasi VoltSpace.
- Belum ada remote. Untuk push:
```bash
git remote add origin <url>
git push -u origin master
```
