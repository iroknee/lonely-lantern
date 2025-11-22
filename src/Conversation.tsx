import { Art, Column, Row, Text, TextInput, Keybind, Button } from 'asciitorium';

/**
 * Conversation - Dialogue between the player and an NPC
 */

interface ConversationProps {
  onComplete?: () => void; // happy path (done talking)
  onWriteSong?: () => void; // branch: write a song
  onPerformSong?: () => void; // branch: perform
  onEnterDungeon?: () => void; // branch: dungeon
}

export const Conversation = ({
  onComplete,
  onWriteSong,
  onPerformSong,
  onEnterDungeon,
}: ConversationProps) => {
  return (
    <Row align="center" width="fill" height="fill">
      {/* Portrait */}
      <Art font="pencil" text="Portrait" />

      {/* Dialogue + Input */}
      <Column align="center" gap={2}>
        {/* NPC Dialogue */}
        <Text width={50} textAlign="top-left" height="fill" typewriter>
          Greetings, traveler! Welcome to the Lonely Lantern Inn. What brings you to these parts?
        </Text>

        {/* Player Input: pressing Enter = onComplete */}
        <TextInput
          placeholder="Speak..."
          onEnter={() => {
            if (onComplete) onComplete();
          }}
        />

        {/* Temporary action buttons (replace later with player-driven prompts) */}
        <Column gap={1}>
          {onWriteSong && (
            <Button onClick={onWriteSong}>
              ➤ Write a song
            </Button>
          )}
          {onPerformSong && (
            <Button onClick={onPerformSong}>
              ➤ Perform a song
            </Button>
          )}
          {onEnterDungeon && (
            <Button onClick={onEnterDungeon}>
              ➤ Enter dungeon
            </Button>
          )}
        </Column>
      </Column>

      {/* Optional global keybind (press Enter to continue) */}
      {onComplete && <Keybind keyBinding="Enter" action={onComplete} />}
    </Row>
  );
};
