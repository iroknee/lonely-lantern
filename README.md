# 🕯️ Lonely Lantern

**An ASCII bard adventure game built with [asciitorium](https://github.com/zluigon/asciitorium)**

> _When Heroes Fall, Legends Rise._

## What is this?

**Lonely Lantern** is a narrative RPG where you play as a bard chronicling the deeds (and frequent deaths) of adventurers in a forgotten tavern. Unlike typical RPGs, **you're not the hero** — you document them, compose songs about their exploits, and perform for the crowd.

This game serves as a **reference implementation** for building games with **asciitorium**, a framework for creating ASCII art-based applications that run in both web browsers and CLI terminals.

## Features

- **Dual Runtime**: Runs in browser (`npm run web`) or terminal (`npm run cli`)
- **TSX/JSX Syntax**: Build ASCII apps using familiar React-like components
- **Art Pipeline**: Generate ASCII art from text, create procedural dungeon maps
- **Reactive State**: Simple state management with asciitorium's `State` class
- **Layered Assets**: ASCII Sprite, material, and font systems

## Quick Start

```bash
# Install dependencies
npm install

# Run in browser (recommended)
npm run web

# Or run in terminal
npm run cli
```

Visit `http://localhost:5173` to play in your browser.

## Game Concept

In the ruins of an old mining settlement, you're a bard at the Lonely Lantern Inn. Heroes come, venture into cursed dungeons, and often don't return. Your job:

1. **Converse** with heroes and the innkeeper
2. **Follow** heroes into dungeons (The Graveditch, The Mine, The Tomb)
3. **Observe** their triumphs or deaths
4. **Compose** songs based on what you witnessed
5. **Perform** for the crowd, earning gold and reputation

Better performances unlock new instruments, attract stronger heroes, and reveal hidden lore.

## Why This Repo Matters for Developers

If you want to learn how to build ASCII games with **asciitorium**, this project demonstrates:

- **Component patterns**: How to use `<App>`, `<Text>`, `<Button>`, `<Art>`, etc.
- **State management**: Reactive state with the `State` class
- **Asset workflows**: Scripts for generating figlet art and procedural maps
- **Dual runtime**: Supporting both web and CLI with the same codebase
- **Art metadata**: Advanced sprite/material systems with animation and sound triggers

See [ASCIITORIUM_REFERENCE.md](ASCIITORIUM_REFERENCE.md) for detailed component usage examples.

## Asset Generation

```bash
# Generate ASCII art from text
npm run figlet
node scripts/gen-figlet-art.js pencil "Your Text Here"

# Generate dungeon maps (with optional Unicode smoothing)
npm run map-builder
node scripts/map-builder.js 10 10 dungeon-level-1 --smooth

# List available figlet fonts
npm run figlet:fonts
```

## Project Structure

```
src/
  main.tsx              # Entry point
  components/           # Game components
scripts/
  gen-figlet-art.js     # ASCII art generator
  map-builder.js        # Procedural dungeon maps
public/art/
  sprites/              # Animated ASCII art
  materials/            # Layered perspective art
  maps/                 # Generated dungeons
```

## Documentation

- [CONCEPT_AND_VISION.md](CONCEPT_AND_VISION.md) - Game design, themes, and narrative vision
- [GAME_LOOP_FLOW.md](GAME_LOOP_FLOW.md) - Scene transitions and gameplay systems
- [ASCIITORIUM_REFERENCE.md](ASCIITORIUM_REFERENCE.md) - Component usage guide
- [CLAUDE.md](CLAUDE.md) - Development guidance for AI assistants

## Tech Stack

- **Framework**: [asciitorium](https://github.com/zluigon/asciitorium)
- **Language**: TypeScript
- **Build**: Vite
- **Runtime**: Node.js (CLI) / Browser (Web)

## Inspirations

- _Darkest Dungeon_ (tone & structure)
- _The Bard's Tale_ (theme)
- _Rogue_ / _Dwarf Fortress_ (ASCII storytelling)
- _Hades_ (reactive character dynamics)

## License

This project is a reference implementation and educational example for asciitorium development.

---

_"In a half-empty tavern at the edge of a cursed valley, a nameless bard records the tales of heroes and monsters. What they say — and what you write — becomes the song that outlives them all."_
