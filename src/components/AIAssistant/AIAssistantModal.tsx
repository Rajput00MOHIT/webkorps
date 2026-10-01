'use client';

import React, { useState, useEffect, useRef } from 'react';
import type { ChatMessageData } from './types';
import { mockAiResponse } from './mockAiEngine';
import { AIWelcome } from './AIWelcome';
import { ChatWindow } from './ChatWindow';
import './AIAssistant.css';

interface AIAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AIAssistantModal: React.FC<AIAssistantModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessageData[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSendMessage = (text: string) => {
    const userMsg: ChatMessageData = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // Realistic typing duration (750ms)
    setTimeout(() => {
      const response = mockAiResponse(text);
      const aiMsg: ChatMessageData = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: response.text,
        timestamp: Date.now(),
        actions: response.actions,
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 800);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="wk-ai-modal"
      role="dialog"
      aria-modal="true"
      aria-label="Webkorps AI Assistant"
    >
      <div className="wk-ai-modal__card">
        {messages.length === 0 ? (
          <AIWelcome onSendMessage={handleSendMessage} disabled={isTyping} />
        ) : (
          <ChatWindow
            messages={messages}
            isTyping={isTyping}
            onSendMessage={handleSendMessage}
            onClose={onClose}
            onActionClick={() => onClose()}
          />
        )}
      </div>
    </div>
  );
};
