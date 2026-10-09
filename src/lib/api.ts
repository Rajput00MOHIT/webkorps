/**
 * Client-side local data & interaction handlers (Frontend Standalone).
 * Operates purely on client-side state without external backend dependencies.
 */

import { mockAiResponse } from '../components/AIAssistant/mockAiEngine';

export interface ChatApiResponse {
  conversationId: string;
  message: {
    id: string;
    sender: 'user' | 'ai';
    text: string;
    timestamp: number;
    actions?: Array<{
      label: string;
      href: string;
      variant?: 'primary' | 'secondary';
    }>;
    citations?: Array<{
      title: string;
      url: string;
      domain?: string;
      snippet?: string;
    }>;
    route?: string;
  };
}

export async function sendChatMessage(
  text: string,
  conversationId?: string
): Promise<ChatApiResponse> {
  const localResponse = mockAiResponse(text);
  const convId = conversationId || `conv-${Date.now()}`;

  return {
    conversationId: convId,
    message: {
      id: `ai-${Date.now()}`,
      sender: 'ai',
      text: localResponse.text,
      timestamp: Date.now(),
      actions: localResponse.actions,
    },
  };
}

export interface LeadSubmissionPayload {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export interface LeadSubmissionResponse {
  success: boolean;
  leadId: string;
  message: string;
}

export async function submitLead(
  payload: LeadSubmissionPayload
): Promise<LeadSubmissionResponse> {
  // Client-side local simulation
  if (process.env.NODE_ENV !== 'production') {
    console.log('[Contact Lead Received locally]:', payload);
  }

  // Artificial short delay for realistic UI state
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    success: true,
    leadId: `lead-${Date.now()}`,
    message: 'Message sent successfully.',
  };
}

export async function sendAnalyticsTelemetry(event: Record<string, unknown>): Promise<void> {
  // Purely client-side telemetry event
  if (process.env.NODE_ENV !== 'production') {
    console.log('[Telemetry]:', event);
  }
}
