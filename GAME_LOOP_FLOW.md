# 🕯️ Lonely Lantern – Core Game Loop Flow

This document outlines the **main gameplay loop**, **scene transitions**, and **data/state flow** for _Lonely Lantern_ — an ASCII narrative RPG built with **TypeScript on Node** and **Asciitorium**.

---

## 1. Overview

Each play cycle follows this rhythm:

> **Inn → Hero Selection → Dungeon Observation → Song Composition → Performance → Upgrade → Back to Inn**

The player alternates between _narrative interaction_ and _light procedural gameplay_ phases.  
The bard (player avatar) acts as the connective tissue between them — recording, interpreting, and transforming hero stories into songs.

---

## 2. Scene Breakdown

### 🏚️ Scene 1: The Lonely Tavern Inn

**Purpose:** Social hub, narrative anchor, and entry point for each loop.

**Player Actions:**

- Talk with **Innkeeper Gareth** (tutorial, guidance, gossip)
- Meet new **heroes** who arrive randomly or procedurally
- Choose a **hero to follow** on their next expedition
- Optionally **perform old songs** for gold or crowd interaction
- Manage inventory (view instruments, bardic points, gold)

**Systems:**

- LLM-driven dialogue with Gareth, heroes, and patrons
- NPC personality models (tone, memory, attitude)
- Hero generator (class, stats, disposition, backstory)
- Reputation and gossip propagation

**Transition Trigger:**

> Player commits to follow a hero → move to _Travel Scene_

---

### 🛣️ Scene 2: Travel to the Dungeon

**Purpose:** Short transitional phase for pacing and world flavor.

**Player Actions:**

- Direct ASCII travel animation / events through a top down overworld map.
- Optional light interaction (random encounters)

**Systems:**

- Simple event queue (optional LLM chatter if the user pauses for more than 40 seconds, "lets get going, bard!")
- Bard can engage and ask NPC things "like where should we go?"
- Hero bonding events can slightly alter performance buffs

**Transition Trigger:**

> Party arrives at dungeon → enter _Dungeon Scene_

---

### ⚔️ Scene 3: Dungeon Observation

**Purpose:** Core gameplay phase. The player controls where they go, explore, or and if they fight or run.  The hero fights,and can follow verbal queues from the bard.  Bard can play a melody and if the melody is correct, it buffs the hero.

**Player Actions:**

- Observe hero actions (first person ASCII)
- Take **mental or written notes** for song composition
- Occasionally comment or intervene narratively ("hit it!", "you got this!")
- Once committed to a fight, there is no backing out.

**Systems:**

- Procedural dungeon generator (3 difficulty tiers: Cave / Burrows / Tomb)
- Basic combat AI for heroes and enemies
- Basic treasure finding
- Event logger (records all actions for song “accuracy” scoring)

**Transition Trigger:**

> Hero clears dungeon level _or_ dies → move to _Composition Scene_

---

### 🎵 Scene 4: Song Composition

**Purpose:** Transform observation into performance.

**Player Actions:**

- Compose a song via **melody mini-game** and optional **lyric input**
- Use **bardic points** to embed buffs (only allowed _during_ creation)
- Optionally co-write with LLM (suggest verses, structure, rhymes)

**Scoring Metrics:**

1. **Melody Score:** procedural generation + rhythm pattern success
2. **Accuracy Score:** how well lyrics match dungeon log data
3. **Performance Bonus:** based on instrument tier and audience tone match

**Transition Trigger:**

> Song completed → move to _Performance Scene_

---

### 🎭 Scene 5: Tavern Performance

**Purpose:** Audience feedback, reward loop, and narrative payoff.

**Player Actions:**

- Perform new song for the inn crowd
- Interact with audience reactions (LLM-driven: applause, heckling, gossip)
- Earn **gold** and **bardic points** based on overall score and delivery

**Systems:**

- LLM simulates audience personalities and tone-based reactions
- Reward calculation = `(melody + accuracy + instrument bonus) * crowd multiplier`
- Update player reputation and crowd sentiment memory

**Transition Trigger:**

> Performance complete → move to _Upgrade Scene_

---

### 🎸 Scene 6: Instrument & Reputation Upgrades

**Purpose:** Long-term progression and player expression.

**Player Actions:**

- Spend **gold** to buy or upgrade instruments
- Review and replay composed songs
- Read rumors / feedback from patrons about past performances
- Plan next run (choose next hero or revisit older ones in song form)

**Systems:**

- Shop inventory updates with reputation
- Instrument data defines new melody complexity & buff slots
- Persistent world state updated

**Transition Trigger:**

> Player chooses next hero → return to _Inn Scene_ (loop restarts)

---

## 3. State Data Flow

| System              | Input                                    | Output                         | Persisted?            |
| ------------------- | ---------------------------------------- | ------------------------------ | --------------------- |
| **Dialogue System** | Player text, NPC state                   | Responses, relationship deltas | ✅                    |
| **Hero Generator**  | Seed, world state                        | Hero object                    | No (per loop)         |
| **Dungeon**         | Hero object                              | Event log, hero outcome        | ✅ (for song scoring) |
| **Song Composer**   | Event log, melody pattern, player lyrics | Song object                    | ✅                    |
| **Performance**     | Song, crowd memory                       | Rewards, reputation delta      | ✅                    |
| **Upgrade Shop**    | Gold, reputation                         | New instrument, inventory      | ✅                    |

---

## 5. Design Goals for the Loop

- **Short episodic runs (10–15 minutes)** that each feel complete.
- **Emergent storytelling** from natural language interactions.
- **Replayability** through dynamic NPCs and song variety.
- **Low mechanical complexity, high narrative richness.**

---

## 6. Next Steps

- Implement **state machine** for scene transitions.
- Create **data logging system** in dungeon for song scoring.
- Build **LLM conversation controller** with context memory per NPC.
- Prototype **song composition** (melody + lyric + scoring).
- Connect **performance reactions** to crowd sentiment system.

---

_Loop complete → return to the firelight of the Lonely Tavern… until the next hero arrives._
