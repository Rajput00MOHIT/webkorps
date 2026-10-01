export interface ChatAction {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

export interface ChatMessageData {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: number;
  actions?: ChatAction[];
}

export interface ExamplePromptItem {
  id: string;
  text: string;
}

export interface AiResponseResult {
  text: string;
  actions?: ChatAction[];
}
