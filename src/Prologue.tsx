import { Art, Column, Keybind, State, Switch, Text } from 'asciitorium';

/**
 * Prologue - Opening narrative that sets up the game world
 * Shows background on Pickwick, Hollowreach valley, and the bard's arrival
 * Displays in two timed sequences
 */

interface PrologueProps {
  onComplete: () => void;
}

const Part1 = () => {
  return (
    <Text width={75} textAlign="top-left">
      The ruins of an old mining settlement cling to the rim of Hollowreach. ¶ Once prosperous the
      valley now leaks horrors through the earth like a broken sewer no one wants to claim
      responsibility for. ¶¶ Three fissures scar the landscape: ¶¶ • The Graveditch ¶ • The Mine ¶ •
      The Tomb ¶¶ Adventurers claim these places promise treasure and glory. Mostly, they just
      deliver death.
    </Text>
  );
};

const Part2 = () => {
  return (
    <Column align="center" gap={1}>
      <Text width={75} textAlign="top-left">
        Into this bleak landscape wanders a bard — recently unemployed, abandoned by fortune and
        creditors alike,¶ and carrying a strain of optimism best classified as a medical concern. ¶¶
        They arrive at the Lonely Lantern Inn. It leans slightly, as if trying to distance itself
        from its own reputation. Nailed to the door is a sign:
      </Text>

      <Art src="lonely-lantern-sign" />

      <Text width={75} textAlign="top-left">
        An unusual policy for a place with no visible guests, no commerce, and a regrettable
        survival rate. They say every career begins at the bottom. This inn, through great effort,
        has positioned itself several layers beneath that.
      </Text>
    </Column>
  );
};

export const Prologue = ({ onComplete }: PrologueProps) => {
  const currentPart = new State<any>(Part1);

  // Transition to Part2 after 10 seconds
  setTimeout(() => {
    currentPart.value = Part2;
  }, 2000);

  return (
    <Column align="center" width="fill" height="fill" gap={{ top: 2 }}>
      <Keybind keyBinding="Enter" action={onComplete} />

      <Art font="pencil" text="Prologue" />

      <Switch component={currentPart} />

      <Text textAlign="bottom" gap={1}>
        Press [Enter] to enter the Lonely Lantern...
      </Text>
    </Column>
  );
};
