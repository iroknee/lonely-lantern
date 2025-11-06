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
  <App>
    <Keybind keyBinding="p" action={togglePerfMonitor} />
    <Row align="center" height="fill">
      <Column align="center" gap={{ top: 7 }}>
        <Art src="flame" position={{ x: 12, y: 8 }} align="center" />
        <Art src="lantern" align="center" />
      </Column>
      <Column align="center" gap={{ left: 5 }}>
        <Art font="pencil" text="The" align="center"/>
        <Art font="pencil" text="Lonely Lantern" align="center" />
        <Art font="pencil" text="Inn" align="center" />
      </Column>
    </Row>
    <Text align="center">Press [Enter] to start</Text>

    <PerfMonitor visible={showPerfMonitor} />
  </App>
);

await app.start();
