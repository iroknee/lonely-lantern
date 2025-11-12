# 🕯️ Lonely Lantern – Concept & Vision

## 1. Overview

**Lonely Lantern** is a retro ASCII **RPG / Simulation** built on the **Asciitorium** platform using **TypeScript on Node**.
You play as an unnamed bard chronicling the deeds (and frequent deaths) of adventurers who pass through a fading tavern in Bleakrock, a small town at the edge of a forboding valley.

Unlike typical RPGs, you’re **not the hero** — you document them.  
Your songs, accuracy, and wit become the true measure of success.

---

## 2. Core Concept

> _In a half-empty tavern in Bleakrock, a nameless bard records the tales of heroes and monsters.
> What they say — and what you write — becomes the song that outlives them all._

### Genre & Style

- Narrative RPG / Chronicle Sim
- ASCII art presentation
- Alternates between story-driven dialogue and procedural dungeon observation

### Unique Hook

- The bard is a **projection of the player**, not a written protagonist.
- All dialogue uses **LLM-driven natural conversation** — no static menus.
- NPCs react to tone, memory, and context, creating an open, emergent story.

---

## 3. Player Experience

### Role

You are _the Bard_ — a blank slate observer.  
You shape the world through conversation, songs, and how you portray others.

### Interactions

- **Innkeeper Gareth**: gruff mentor, tutorial, and lore anchor.
- **Heroes**: rotating characters with varying temperaments and backstories.
- **Patrons / Crowd**: respond dynamically to performances; remember past songs and gossip.

### Loop Summary

1. **Converse** with Gareth and heroes at the inn.
2. **Follow** a hero into one of three dungeons:
   - _The Cave_ (easy)
   - _The Burrows_ (medium)
   - _The Tomb_ (hard, mysterious)
3. **Observe** the hero’s fate (success or death).
4. **Compose** a song based on accuracy and melody.
5. **Perform** it for the crowd; earn bardic points and gold.
6. **Upgrade** instruments and reputation to influence future runs.

---

## 4. Narrative Vision

### Tone

Dark humor mixed with quiet melancholy — “if Monty Python wrote _Darkest Dungeon_.”

### Themes

- Art vs. mortality
- Truth through retelling
- The economy of memory (stories as currency)

### Structure

Episodic — each hero’s run becomes a vignette.  
Over time, the bard’s growing renown unlocks new instruments, reactions, and lore.

### Setting Highlights

- **The Lonely Tavern Inn**: the central hub for dialogue and story.
- **Bleakrock**: a small town (the inn and a handful of houses) at the valley's edge.
- **The Forboding Valley**: a cursed expanse containing three dungeons — The Cave, The Burrows, and The Tomb.

---

## 5. Core Systems

### 🗣️ LLM Dialogue

- Replaces branching menus with natural language input.
- NPCs use lightweight personality models (backstory, mood, relationship state).
- Persistent memory across sessions — NPCs recall past conversations.
- Tone and phrasing affect trust, humor, and opportunities.

### 🎵 Song Composition

- Hybrid mini-game + creative writing.
- Scored on:
  1. **Melody** (mathematical structure)
  2. **Accuracy** (how true to the hero’s actual run)
  3. **Performance** (instrument quality and tone)

### 💰 Progression

- **Gold**: earned through performances, used to buy/upgrade instruments.
- **Bardic Points**: earned from song quality, used to instill magic buffs in songs during creation.
- Better instruments = higher melody potential, new types of buffs.

### 🧠 NPC Memory & Gossip

- Patrons and heroes spread rumors based on your actions.
- Poor performances or inaccuracies can affect reputation (stronger heroes less likey to take you on).
- New opportunities can emerge from tavern gossip or offended heroes.

---

## 6. Design Pillars

1. **Language is gameplay.**  
   Words drive progress, reputation, and discovery.
2. **The bard reflects the player.**  
   The world has voice and color; the bard mirrors the player’s choices.
3. **Failure is funny.**  
   A bad verse or insulted hero makes a better story than perfection.

---

## 7. Technical Vision

- **Engine:** Asciitorium
- **Language:** TypeScript on Node
- **AI Layer:** Local or API-based LLM wrapper (context-aware dialogue + memory)
- **Target:**
  - Playable, replayable open-source RPG
  - Demonstration of AI-assisted narrative systems for indie developers
  - Serves as an educational example on Asciitorium integration

---

## 8. Inspirations

- _Darkest Dungeon_ (tone & structure)
- _The Bard’s Tale_ (theme)
- _Rogue_ / _Dwarf Fortress_ (ASCII storytelling)
- _Hades_ (reactive character dynamics)

---

## 9. Current Scene Example

**Opening Scene – The Lonely Tavern**

> **Gareth:** “Another college boy, eh? Let me guess — top of your class in Epic Verse Composition?”
>
> _[Player responds freely]_
>
> **Gareth:** “Ha! Fancy certificates won’t mean much when you’re watching a hero’s intestines spill onto dungeon stone. But I could use a bard…”

This dynamic, LLM-driven exchange establishes tone, teaches the basics, and introduces the world naturally through conversation rather than menus.

---

## 10. Next Steps

- Define **core loop state transitions** (Inn → Dungeon → Song → Performance → Upgrade).
- Design **LLM Dialogue Framework**:
  - NPC memory model
  - Context and world-state scoping
  - Conversation triggers and data logging
- Prototype the **inn scene** using LLM dialogue as proof of concept.

---

_“Heroes die. Songs don’t.”_
