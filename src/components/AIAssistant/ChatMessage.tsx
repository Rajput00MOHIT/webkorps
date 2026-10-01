'use client';

import React from 'react';
import type { ChatMessageData } from './types';
import { AIAvatar } from './AIAvatar';

interface ChatMessageProps {
  message: ChatMessageData;
  onActionClick?: (href: string) => void;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, onActionClick }) => {
  const isUser = message.sender === 'user';

  const handleAction = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (onActionClick) {
      onActionClick(href);
    }
    if (href.startsWith('#')) {
      const targetId = href.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  if (isUser) {
    return (
      <div className="wk-ai-message wk-ai-message--user">
        <div className="wk-ai-message__bubble wk-ai-message__bubble--user">
          <p className="wk-ai-message__text">{message.text}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="wk-ai-message wk-ai-message--ai">
      <div className="wk-ai-message__avatar-col">
        <AIAvatar size="md" />
      </div>
      <div className="wk-ai-message__content">
        <div className="wk-ai-message__bubble wk-ai-message__bubble--ai">
          {message.text.split('\n\n').map((paragraph, pIdx) => (
            <p key={pIdx} className="wk-ai-message__text">
              {paragraph.split('\n').map((line, lIdx) => (
                <React.Fragment key={lIdx}>
                  {line}
                  {lIdx < paragraph.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          ))}
        </div>

        {/* Smart Quick Actions */}
        {message.actions && message.actions.length > 0 && (
          <div className="wk-ai-message__actions">
            {message.actions.map((act, aIdx) => (
              <a
                key={aIdx}
                href={act.href}
                className={`wk-ai-message__action-btn wk-ai-message__action-btn--${act.variant || 'primary'}`}
                onClick={(e) => handleAction(e, act.href)}
              >
                <span>{act.label}</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3.5 10.5L10.5 3.5M10.5 3.5H4.66667M10.5 3.5V9.33333" />
                </svg>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
