import { Art, Column, Row, Text } from 'asciitorium';

/**
 * Title Screen
 */
export const TitleScreen = () => {
  return (
    <Column align="center" width="fill" height="fill" gap={{ bottom: 1 }}>
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
      <Text>"When Heros Fall, Legends Rise"</Text>
      <Art gap={3} src="enter" />
    </Column>
  );
};
