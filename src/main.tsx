import { App, PerfMonitor, State, Keybind, Switch } from 'asciitorium';
import { TitleScreen } from './TitleScreen.js';
import { Prologue } from './Prologue.js';

// Game state machine - holds the current screen component
const currentScreen = new State<any>(() => <TitleScreen />);

// State for PerfMonitor visibility toggle
const showPerfMonitor = new State(false);

// toggle PerfMonitor
const togglePerfMonitor = () => {
  showPerfMonitor.value = !showPerfMonitor.value;
};

// Transition to Prologue screen
const goToPrologue = () => {
  currentScreen.value = () => (
    <Prologue onComplete={() => {
      // TODO: Transition to next screen
      console.log('Prologue complete');
    }} />
  );
};

const app = (
  <App align="top-center" border>
    <Keybind keyBinding="p" action={togglePerfMonitor} />

    {/* Title Screen: Enter key transitions to Prologue */}
    <Keybind keyBinding="Enter" action={goToPrologue} />

    {/* State machine - renders current screen */}
    <Switch width="fill" height="fill" component={currentScreen} />

    <PerfMonitor visible={showPerfMonitor} />
  </App>
);

await app.start();
