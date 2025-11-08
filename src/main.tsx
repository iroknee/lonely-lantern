import { App, Art, Row, Column, Text, PerfMonitor, State, Keybind } from 'asciitorium';

// State for counter demo
const count = new State(0);

// State for PerfMonitor visibility toggle
const showPerfMonitor = new State(false);

// toggle PerfMonitor
const togglePerfMonitor = () => {
  showPerfMonitor.value = !showPerfMonitor.value;
};

const app = (
  <App align="top-center">
    <Keybind keyBinding="p" action={togglePerfMonitor} />
    <Row height={28} align="center">
      <Column align="center">
        <Art src="flame" position={{ x: 12, y: 13 }} />
        <Art src="lantern" />
      </Column>
      <Column gap={{ left: 5 }}>
        <Art font="marker" text="The" letterSpacing={1} />
        <Art font="marker" text="Lonely" letterSpacing={1} />
        <Art font="marker" text="Lantern" letterSpacing={1} />
        <Art font="marker" text="Inn" letterSpacing={1} />
      </Column>
    </Row>
    <Text>Press [Enter] to start</Text>

    <PerfMonitor visible={showPerfMonitor} />
  </App>
);

await app.start();
