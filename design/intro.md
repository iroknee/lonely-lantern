# Bard's Tale Game - Narrative Design Document

## Game Concept Overview

A top-down ASCII-based adventure game where the player controls a bard who accompanies heroes on dungeon expeditions. The bard witnesses their triumphs and failures, then composes songs about their adventures to earn coin at the local tavern. Gameplay involves traveling between locations (similar to early Legend of Zelda overworld), observing heroes in dungeons (FPV ASCII), and a memory-based song composition mechanic.

## Core Gameplay Loop

1. Meet heroes at the Lonely Tavern Inn
2. Join a hero and select a dungeon to attempt
3. Travel with them and witness their adventure (success or death)
4. Compose a song honoring the hero (accuracy determines earnings)
5. Perform nightly at the tavern for coin
6. "Strong" songs can be performed in dungeons to buff heroes

---

## Setting: The Bleakreach

The most dangerous region in the tri-kingdoms, where desperate heroes come to test themselves against legendary dungeons. The Bleakreach is a desolate valley containing:

- **The Lonely Tavern Inn** - Last bastion of civilization
- **Three deadly dungeons** within a day's walk
- A cursed landscape that draws glory-seekers and the desperate

---

## Main Characters

### The Bard (Player Character)

- Fresh graduate from the Bardic College
- Came to the Bleakreach by choice to make a name for themselves
- True motivation kept mysterious (revealed later in game)
- Educated background contrasts with harsh reality

### Innkeeper Gareth

- Grizzled proprietor of the Lonely Tavern Inn
- Missing two fingers (untold story)
- Pragmatic and business-minded
- Knows the value of a good bard for his establishment

### Stella the Shield-Maiden

- Tutorial NPC
- Survived The Echoing Cave but lost her bard
- Drinking away her sorrows
- Opportunity for first memorial song

---

## The Three Dungeons

### 1. The Echoing Cave [EASY]

- Deceptively simple appearance
- First-timers' typical choice
- ~50% survival rate
- Gateway dungeon for new heroes

### 2. The Burrows [MEDIUM]

- Maze of underground tunnels
- Contains "things that used to be human"
- Tests navigation and resource management
- More complex than The Cave

### 3. The Tomb of Tahara [HARD]

- Also known as The Catacombs
- Uncleared for three years
- Last expedition only left behind a bard's lute
- Tahara: A sorceress who turned the good in the land to evil (lore withheld initially)
- Created/cursed the Bleakreach region (revealed later)

---

## Opening Scene Script

### Scene: Interior of the Lonely Tavern Inn

_[ASCII art of a modest common room with bar]_

**Innkeeper Gareth** (grizzled, missing two fingers, wiping a mug): "Another College boy, eh? Let me guess - top of your class in Epic Verse Composition, perfect marks in Heroic Meter?"

**[Player dialogue options]:**

1. "Actually, I barely graduated..." [Humble start]
2. "Top three, actually. And I won the Laureate's Prize." [Confident]
3. "The College teaches theory. I'm here for truth." [Philosophical]
4. "How did you know I'm from the College?" [Curious]

**Gareth**: "Ha! Well, your fancy certificates won't mean much when you're watching a hero's intestines spill onto dungeon stone. But... I could use a bard. The regulars are tired of Old Henrik's three songs about his lost sheep."

### The Deal

"Here's the deal, College boy. You sing every night - FRESH material, mind you. These folks have heard every recycled ballad from here to the capital. You document the heroes that pass through, you follow them if they'll have you, and you turn their stories into songs."

"In exchange: a room (leak in the corner, but it's dry enough), two meals a day, and breakfast ale. Plus, you keep a third of whatever coins the patrons throw. Rest goes to the house."

**[Player dialogue options]:**

1. "A third? That seems harsh..." [Negotiate]
2. "Deal. When do I start?" [Accept]
3. "What happened to the last bard?" [Investigate]
4. "Tell me about this place - the Bleakreach." [Learn about region]
5. "What kind of heroes come through here?" [Learn about clientele]

---

## Branching Dialogue Trees

### If asked about the Bleakreach

**Gareth**: "You really don't know where you've landed, do you? The Bleakreach, boy. This whole cursed valley. Three dungeons within a day's walk, each one hungry for blood:

- **The Echoing Cave** - Looks simple enough. First-timers always pick it. About half come back.
- **The Burrows** - Maze of tunnels. Things in there that used to be human, they say.
- **The Tomb of Tahara** - _[he spits]_ No one's cleared that in three years. Last group? Found their bard's lute. Just the lute.

Heroes show up every few days. Some cocky, some desperate, some with death wishes. Your job? Make sure someone remembers them, either way."

### If asked about Tahara

**Gareth**: _[eyes narrow]_ "Not a story for your first day, boy. Sing well, keep the patrons happy, and maybe someone will tell you. Some stories you earn."

### If asked about the last bard

**Gareth**: "Smart question. They lasted two months. Good voice, terrible memory. Mixed up Sir Garrett's last stand with some fairy tale about a princess. Sir Garrett's brother was in the audience. Things got... messy. The bard left that night. Well, most of him did."

---

## Tutorial Introduction

### After accepting the deal

**Gareth**: "Tonight, you can warm up with the regulars. There's a hero in the corner - Stella the Shield-Maiden. Survived The Cave yesterday, but lost her partner. She's been drinking since noon. Maybe work up a memorial for her friend? Good practice for you.

And remember - details matter in the songs. Get the hero's weapon wrong, or forget how many goblins they fought? The crowd will know. These people stake their lives on accurate information about what's in those dungeons. Bad information kills heroes, and dead heroes don't pay for drinks."

**[Player options]:**

1. "I'll talk to Stella." [Begin tutorial]
2. "Let me see my room first." [Explore]
3. "Who are the regulars here?" [Learn more]
4. "Any heroes planning expeditions soon?" [Scout opportunities]

---

## Key Mechanics Introduction Through Narrative

### Song Accuracy System

- Crowd knows if details are wrong
- Accurate information saves lives
- Memory test determines coin earned
- Perfect songs unlock special abilities

### Economic System

- Nightly performances required
- Fresh material needed for regulars
- 1/3 of earnings kept, 2/3 to house
- Room and board included

### Reputation System (Implied)

- Better songs = better reputation
- Higher caliber heroes will accept accomplished bards
- Failed songs become cautionary tales
- Perfect songs become legendary

---

## World-Building Elements to Reveal Later

1. **Tahara's Full Story**
   - Sorceress Tahara
   - Created/cursed the Bleakreach
   - Her tomb is the hardest dungeon

2. **The Bard's True Motivation**
   - Keep mysterious initially
   - Player discovery through gameplay
   - Potentially tied to College backstory

3. **The Dungeon Cycle**
   - Why do the dungeons keep attracting heroes?
   - What maintains the danger?
   - Connection to Tahara's curse?

---

## Tone and Style Guidelines

- **Dark humor** mixed with genuine danger
- **Pragmatic fantasy** - glory-seeking meets harsh reality
- **Memory as gameplay** - accuracy matters narratively and mechanically
- **Economic survival** - art meets commerce
- **Documentary perspective** - bard as witness/chronicler, not hero

---

## Future Narrative Hooks

- Other bards competing for stories
- The previous bard's mysterious fate
- Heroes with hidden agendas
- The truth about Tahara's transformation
- Why the dungeons never stay cleared
- The bard's connection to events (to be revealed)
- Regular tavern patrons with their own stories

---

## Notes for Development

- Opening establishes tutorial naturally through Stella's story
- Multiple dialogue paths let players define their bard's personality
- Information drip-fed through conversation rather than exposition
- Tahara established as important but mysterious figure
- Economic pressure creates gameplay tension
- Song accuracy mechanic justified through world-building

---

_Last Updated: [Current Date]_
_Version: 1.0 - Initial Narrative Design_
