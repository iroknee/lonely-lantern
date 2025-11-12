import { Column, Keybind, Text } from 'asciitorium';

/**
 * Prologue - Opening narrative that sets up the game world
 * Shows background on Pickwick, Hollowreach valley, and the bard's arrival
 */

const prologueText =
  'The once-mining town of Pickwick sits at the edge of a cursed expanse known as ' +
  'Hollowreach. Once beautiful and prosperous, the valley now crawls with' +
  'malevolent evil that seem to originate from three fissures:¶¶' +
  '  • The Cave,¶' + 
  '  • The Graveditch, and¶' +  
  '  • The Tomb¶¶' +
  'Each promises glory. Mostly they deliver death on the daily.¶' +
  '¶' +
  'A lonely bard — recently unemployed, deeply in debt, and out of options —' +
  'arrives at the doorstep of the only remaining structure in Pickwick: ' +
  'The Lonely Lantern Inn. The only place in a hundred hectare radius hiring' +
  'bards these days. They say making a name for yourself starts at the bottom.' +
  '¶' +
  'This is worn down shack is definitely the bottom.¶' +
  '¶' +
  'Before opening the door, a grim thought surfaces: why exactly does¶' +
  'an inn in the middle of nowhere need so many bards?¶' +
  '¶' +
  '¶' +
  'Press [Enter] to continue...';

interface PrologueProps {
  onComplete: () => void;
}

export const Prologue = ({ onComplete }: PrologueProps) => {
  return (
    <Column align="center" width="fill" height="fill" gap={{ top: 5 }}>
      <Keybind keyBinding="Enter" action={onComplete} />

      <Text width={75} height={20} typewriter={true} typewriterSpeed={30} textAlign="top-left">
        {prologueText}
      </Text>
    </Column>
  );
};
