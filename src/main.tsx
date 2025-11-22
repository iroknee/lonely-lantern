import {
  App,
  PerfMonitor,
  State,
  Keybind,
  Switch,
  Case,
  Default,
} from 'asciitorium';

import { TitleScreen } from './TitleScreen.js';
import { Prologue } from './Prologue.js';
import { Conversation } from './Conversation.js';

// Top-level game modes
type ScreenState =
  | 'title'
  | 'prologue'
  | 'innConversation'
  | 'overworld'
  | 'songWriting'
  | 'songPerformance'
  | 'dungeon';

// Single source of truth
const currentScreen = new State<ScreenState>('title');

// Perf monitor toggle
const showPerfMonitor = new State(true);

// Transition helpers
const screen = {
  goToTitle: () => (currentScreen.value = 'title'),
  goToPrologue: () => (currentScreen.value = 'prologue'),
  goToInnConversation: () => (currentScreen.value = 'innConversation'),
  goToOverworld: () => (currentScreen.value = 'overworld'),
  goToSongWriting: () => (currentScreen.value = 'songWriting'),
  goToSongPerformance: () => (currentScreen.value = 'songPerformance'),
  goToDungeon: () => (currentScreen.value = 'dungeon'),
} as const;

// App root
const app = (
  <App align="top">
    {/* Global perf toggle */}
    <Keybind
      keyBinding="F12"
      action={() => {
        showPerfMonitor.value = !showPerfMonitor.value;
      }}
    />

    {/* Screen state machine */}
    <Switch width="fill" height="fill" condition={currentScreen}>
      {/* Splash / title */}
      <Case when="title" create={TitleScreen} with={{ onComplete: screen.goToPrologue }} />

      {/* Story intro */}
      <Case when="prologue" create={Prologue} with={{ onComplete: screen.goToInnConversation }} />

      {/* Innkeeper + NPC conversation hub */}
      <Case when="innConversation" create={Conversation} with={{
        onComplete: screen.goToOverworld,
        onWriteSong: screen.goToSongWriting,
        onPerformSong: screen.goToSongPerformance,
        onEnterDungeon: screen.goToDungeon,
      }} />

      <Default create={TitleScreen} with={{ onComplete: screen.goToPrologue }} />
    </Switch>

    <PerfMonitor visible={showPerfMonitor} />
  </App>
);

await app.start();