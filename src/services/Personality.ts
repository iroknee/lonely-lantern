/**
 * Personality - NPC personality engine for dialogue generation
 *
 * This class manages NPC personalities and generates contextual responses.
 * Currently uses mock responses, designed for future LLM integration.
 */

export interface PersonalityConfig {
  name: string;
  role: string; // e.g., "Innkeeper", "Merchant", "Guard"
  traits: string[]; // e.g., ["grumpy", "helpful", "cynical"]
  backstory?: string; // Brief character background
  greeting?: string; // Initial greeting message
}

export interface ConversationMessage {
  speaker: 'npc' | 'player';
  text: string;
  timestamp: number;
}

export class Personality {
  private config: PersonalityConfig;
  private history: ConversationMessage[] = [];
  private responseIndex = 0; // For cycling through mock responses

  // Mock responses that reflect personality
  private mockResponses: string[] = [];

  constructor(config: PersonalityConfig) {
    this.config = config;
    this.generateMockResponses();

    // Add greeting to history if provided
    if (config.greeting) {
      this.history.push({
        speaker: 'npc',
        text: config.greeting,
        timestamp: Date.now(),
      });
    }
  }

  /**
   * Generate contextual mock responses based on personality
   * TODO: Replace with LLM integration
   */
  private generateMockResponses(): void {
    const { name, role, traits } = this.config;
    const isGrumpy = traits.includes('grumpy');
    const isHelpful = traits.includes('helpful');
    const isCynical = traits.includes('cynical');

    // Generate personality-appropriate responses
    if (isGrumpy) {
      this.mockResponses = [
        "What do you want? I'm busy.",
        "Another adventurer? Great. Just what I needed.",
        "Make it quick, I haven't got all day.",
        "You're still here? Fine, what is it?",
        "If you're not buying anything, move along.",
      ];
    } else if (isHelpful) {
      this.mockResponses = [
        "Of course! I'd be happy to help with that.",
        "Let me tell you what I know about that...",
        "Ah yes, I've heard tales about such things!",
        "That's a great question! Let me think...",
        "I'm glad you asked. Here's what you need to know.",
      ];
    } else if (isCynical) {
      this.mockResponses = [
        "Ha! You think it'll be that easy? Think again.",
        "Everyone says that. Then they never come back.",
        "Sure, sure. I've heard it all before.",
        "Good luck with that. You'll need it.",
        "Another dreamer. This valley eats dreamers for breakfast.",
      ];
    } else {
      // Generic friendly responses
      this.mockResponses = [
        `I'm ${name}, the ${role.toLowerCase()} here. How can I help you?`,
        "That's an interesting thought.",
        "I see what you mean.",
        "Tell me more about that.",
        "Is there anything else you'd like to know?",
      ];
    }
  }

  /**
   * Get NPC's response to a player message
   * @param playerMessage - The player's message
   * @returns Promise<string> - The NPC's response
   */
  async respond(playerMessage: string): Promise<string> {
    // Add player message to history
    this.history.push({
      speaker: 'player',
      text: playerMessage,
      timestamp: Date.now(),
    });

    // TODO: Replace with actual LLM API call
    // For now, cycle through mock responses
    const response = this.mockResponses[this.responseIndex % this.mockResponses.length];
    this.responseIndex++;

    // Add NPC response to history
    this.history.push({
      speaker: 'npc',
      text: response,
      timestamp: Date.now(),
    });

    // Simulate async API call delay
    await new Promise((resolve) => setTimeout(resolve, 300));

    return response;
  }

  /**
   * Get the full conversation history
   */
  getHistory(): ConversationMessage[] {
    return [...this.history];
  }

  /**
   * Get NPC configuration
   */
  getConfig(): PersonalityConfig {
    return { ...this.config };
  }

  /**
   * Clear conversation history
   */
  clearHistory(): void {
    this.history = [];
    this.responseIndex = 0;
  }

  /**
   * Get initial greeting (if any)
   */
  getGreeting(): string | undefined {
    return this.config.greeting;
  }
}

// Example usage:
// const innkeeper = new Personality({
//   name: "Greta",
//   role: "Innkeeper",
//   traits: ["grumpy", "cynical"],
//   backstory: "Runs the Lonely Lantern Inn. Has seen too many bards come and go.",
//   greeting: "Another bard? *sighs* Fine, come in. Don't touch anything."
// });
//
// const response = await innkeeper.respond("Hello! I'm looking for work.");
