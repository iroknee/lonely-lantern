# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Lonely Lantern** is a bard adventure game built with **asciitorium** (created via `npm create asciitorium`). The player controls a bard who accompanies heroes into dungeons, witnesses their triumphs and failures, then composes songs about their adventures to perform at the Lonely Tavern Inn.

For detailed game concept, vision, and narrative design, see:

- [CONCEPT_AND_VISION.md](CONCEPT_AND_VISION.md) - Core concept, themes, and design pillars
- [GAME_LOOP_FLOW.md](GAME_LOOP_FLOW.md) - Gameplay loop, scene transitions, and systems

### Technical Foundation

Asciitorium is a framework for building ASCII art-based applications that run in both web browsers and CLI terminals. The project uses TSX/JSX syntax with a custom JSX runtime (`jsxImportSource: "asciitorium"`).

**IMPORTANT**: For detailed component usage, patterns, and examples, see [ASCIITORIUM_REFERENCE.md](ASCIITORIUM_REFERENCE.md). Always consult this reference when implementing asciitorium components to ensure correct usage patterns.

## Development Commands

### Running the Application

- **Web mode**: `npm run web` - Starts Vite dev server on port 5173
- **CLI mode**: `npm run cli` - Runs the app in terminal using tsx
- **Build**: `npm run build` - Creates production build with Vite
- **Preview**: `npm run preview` - Preview production build

### Asset Generation Scripts

- **Generate ASCII art from text**: `npm run figlet` or `node scripts/gen-figlet-art.js <font> <phrase>`
  - Example: `node scripts/gen-figlet-art.js pencil "Hello World"`
  - Saves to `public/art/<phrase>.art`
- **List available figlet fonts**: `npm run figlet:fonts`
- **Generate dungeon maps**: `npm run map-builder` or `node scripts/map-builder.js <width> <height> <directory-name> [--smooth]`
  - Example: `node scripts/map-builder.js 10 10 dungeon-level-1 --smooth`
  - Uses recursive backtracking maze algorithm
  - `--smooth` flag enables Unicode box drawing characters
  - Saves to `public/art/maps/<directory-name>/map.art`

## Architecture

### JSX Runtime

The project uses asciitorium's custom JSX runtime. All components use JSX syntax but render to ASCII art instead of DOM elements:

- `jsxImportSource` is set to `"asciitorium"` in both [tsconfig.json](tsconfig.json) and [vite.config.ts](vite.config.ts)
- Import components from `'asciitorium'`: `App`, `Art`, `Button`, `Column`, `Text`, `PerfMonitor`, `State`, `Keybind`, etc.

### State Management

Asciitorium uses a reactive `State` class:

```tsx
const count = new State(0);
// Access: count.value
// Update: count.value = newValue
```

### Dual Runtime Support

The app can run in two modes:

1. **Web**: Vite bundles the app for browsers with Node built-in shims (see `nodeBuiltinsShim()` plugin in [vite.config.ts](vite.config.ts:4-26))
2. **CLI**: Direct execution via tsx for terminal rendering

### Art Asset System

Art assets live in `public/art/` with a sophisticated metadata format defined in [public/art/ART-DESIGN-SPEC.md](public/art/ART-DESIGN-SPEC.md):

**Three asset types:**

1. **Sprites**: Animated ASCII art with frames
   - File header: `§ {"kind":"sprite","loop":true/false,"default-frame-rate":ms}`
   - Frame separator: `¶ {"duration":ms,"sound":"file.mp3","event":"name"}`
2. **Materials**: Layered perspective art for first-person/side-scroller/top-down views
   - Layers: `here`, `near`, `middle`, `far`
   - Positions: `left`, `center`, `right`
   - Sound triggers: `onEnterSound`, `onExitSound`, `ambientSound`
3. **Fonts**: ASCII art character glyphs
   - Character separator: `¶ {"character":"a"}`

**Format rules:**

- Section header `§` defines global asset properties
- Layer/frame separator `¶` defines section-specific metadata
- Metadata must be flat JSON (no nested objects/arrays)
- All values must be primitives (string, number, boolean)
- Single-frame sprites without `§` header are valid (assumed sprite with no metadata)

### Map Builder Algorithm

The [map-builder.js](scripts/map-builder.js) script uses recursive backtracking to generate perfect mazes:

1. Starts from random cell
2. Carves paths by removing walls to unvisited neighbors
3. Backtracks when no unvisited neighbors remain
4. Adds doors at dead ends with north/south openings
5. Optional Unicode smoothing converts ASCII box characters to Unicode equivalents

## Project Structure

- `src/main.tsx` - Entry point with App component
- `scripts/` - Asset generation utilities
- `public/art/` - ASCII art assets (sprites, materials, fonts, maps)
  - `sprites/` - Animated ASCII art
  - `materials/` - Layered perspective art
  - `font/` - Custom ASCII fonts
  - `maps/` - Generated dungeon maps
  - `sounds/` - Audio files referenced by assets
