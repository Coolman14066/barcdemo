import React, { useEffect, useMemo, useRef, useState } from 'react';
import ChatComposer from './ChatComposer';
import { useDemoContext } from '../context/DemoContext';
import type { BellaProfile } from '../types';

interface QuickReply {
  text: string;
  value: string;
  userText?: string | ((profile: BellaProfile) => string);
  emphasis?: 'primary' | 'secondary';
}

const initialReplies: QuickReply[] = [
  {
    text: 'Keep the wedding on track',
    value: 'wedding',
    userText: () => "Let's keep the wedding on track.",
  },
  {
    text: 'Start a Future Home pot',
    value: 'home',
    userText: () => "I want to start saving for a future home.",
  },
  {
    text: 'Balance both goals',
    value: 'both',
    userText: () => "I'd like to balance the wedding and a future home.",
  },
];

const monthlyReplies: QuickReply[] = [
  { text: '£400 per month', value: '400', userText: () => '£400 per month feels comfortable.' },
  { text: '£600 per month', value: '600', userText: () => '£600 per month is doable.' },
  { text: '£800 per month', value: '800', userText: () => "Let's model £800 per month." },
  { text: 'Not sure yet', value: 'unsure', userText: () => "I'm not sure - help me pick an amount." },
];

const planReplies: QuickReply[] = [
  {
    text: 'Preview the 5-step plan',
    value: 'see-plan',
    userText: () => 'Yes, show me how it works.',
    emphasis: 'primary',
  },
  {
    text: 'Fine-tune the budget first',
    value: 'tune-budget',
    userText: () => "Let's fine-tune the budget again.",
  },
];

const ConversationFlow: React.FC = () => {
  const { conversationTurn, setConversationTurn, messages, addMessage, setState, profile } =
    useDemoContext();
  const [composerValue, setComposerValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [quickReplies, setQuickReplies] = useState<QuickReply[]>([]);
  const [showReplies, setShowReplies] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const selectedAmountDisplay = useMemo(() => {
    const lastUser = [...messages].reverse().find((m) => m.sender === 'bella');
    return lastUser?.text?.match(/£(\d+)/)?.[1] ?? profile.monthlyBudget.toString();
  }, [messages, profile.monthlyBudget]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, showReplies]);

  useEffect(() => {
    if (conversationTurn === 0 && messages.length === 0) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setIsTyping(false);
        const firstName = profile.name.split(' ')[0];
        addMessage({
          sender: 'buddi',
          text: `Hi ${firstName}, I'm Buddi, your Barclays money coach.\n\nI can see you've built up £${profile.currentSavings.toLocaleString()} in Everyday Saver, and you're planning for around £${profile.weddingGoalAmount.toLocaleString()} on the wedding over the next ${profile.weddingGoalYears} years, with a future home a bit further out.\n\nWhat would you like to focus on today?`,
        });
        setQuickReplies(initialReplies);
        setShowReplies(true);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [conversationTurn, messages.length, addMessage, profile]);

  const pushUserMessage = (reply: QuickReply) => {
    const text =
      typeof reply.userText === 'function'
        ? reply.userText(profile)
        : reply.userText || reply.text;
    addMessage({ sender: 'bella', text });
  };

  const handleQuickReply = (reply: QuickReply) => {
    pushUserMessage(reply);
    setShowReplies(false);

    if (conversationTurn === 0) {
      const focusLabel =
        reply.value === 'wedding'
          ? 'keep the wedding on track'
          : reply.value === 'home'
          ? 'start a Future Home pot'
          : 'balance the wedding and a future home';
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        addMessage({
          sender: 'buddi',
          text: `Got it - we'll ${focusLabel}.\n\nLooking at your recent spending, you usually have around £${profile.monthlyBudget} left each month after essentials. How much of that would you feel comfortable committing to your long-term goals?`,
        });
        setQuickReplies(monthlyReplies);
        setShowReplies(true);
        setConversationTurn(1);
      }, 900);
      return;
    }

    if (conversationTurn === 1) {
      const friendlyAmount =
        reply.value === 'unsure'
          ? 'a flexible amount we can adjust together'
          : `£${reply.value} per month`;
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        addMessage({
          sender: 'buddi',
          text: `Thanks, that helps.\n\nWith ${friendlyAmount}, I can set up an automatic plan that:\n• keeps a safety buffer in your current account\n• sends a regular transfer into a Wedding Fund pot\n• builds a small "Future Home" pot from round-ups and a monthly top-up.\n\nWould you like to preview a 5-step plan before you switch it on?`,
        });
        setQuickReplies(planReplies);
        setShowReplies(true);
        setConversationTurn(2);
      }, 1000);
      return;
    }

    if (conversationTurn === 2) {
      if (reply.value === 'see-plan') {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          addMessage({
            sender: 'buddi',
            text: "Great - I'll pull your latest balances into a 5-step Wedding + Home plan.",
          });
          setTimeout(() => {
            setState('plan-modal');
            setConversationTurn(3);
          }, 400);
        }, 600);
        setQuickReplies([]);
        return;
      }

      if (reply.value === 'tune-budget') {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          addMessage({
            sender: 'buddi',
            text: "No problem. Let's revisit the monthly amount until it feels right.",
          });
          setQuickReplies(monthlyReplies);
          setShowReplies(true);
          setConversationTurn(1);
        }, 800);
        return;
      }
    }
  };

  const handleComposerSend = () => {
    const trimmed = composerValue.trim();
    if (!trimmed) return;
    addMessage({ sender: 'bella', text: trimmed });
    setComposerValue('');
    setShowReplies(false);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMessage({
        sender: 'buddi',
        text: `Got it — I've taken that into account.\n\nWhen you're ready, pick one of the options below and I'll adjust the plan around roughly £${selectedAmountDisplay} per month.`,
      });
      if (conversationTurn > 0 && quickReplies.length) {
        setShowReplies(true);
      }
    }, 900);
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
        {messages.map((message) => {
          const isBuddi = message.sender === 'buddi';
          return (
            <div
              key={message.id}
              className={`flex w-full ${isBuddi ? 'justify-start' : 'justify-end'}`}
            >
              {isBuddi && (
                <div className="mr-3 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-barclays-cerulean to-barclays-ocean text-white shadow-chip">
                  B
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-3xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                  isBuddi
                    ? 'rounded-tl-md bg-slate-50 text-slate-800'
                    : 'rounded-tr-md bg-gradient-to-br from-barclays-cerulean to-barclays-ocean text-white'
                }`}
              >
                <p className="whitespace-pre-line">{message.text}</p>
              </div>
            </div>
          );
        })}

        {isTyping && (
          <div className="flex items-center gap-2 rounded-3xl rounded-tl-md bg-slate-50 px-4 py-3 text-slate-500 shadow-sm">
            <div className="flex items-center gap-1">
              <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" />
              <span
                className="h-2 w-2 animate-bounce rounded-full bg-slate-400"
                style={{ animationDelay: '0.15s' }}
              />
              <span
                className="h-2 w-2 animate-bounce rounded-full bg-slate-400"
                style={{ animationDelay: '0.3s' }}
              />
            </div>
            Buddi is drafting…
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {showReplies && quickReplies.length > 0 && (
        <div className="px-5 pb-3">
          <div className="flex flex-wrap gap-2">
            {quickReplies.map((reply) => (
              <button
                key={reply.value}
                onClick={() => handleQuickReply(reply)}
                className={`rounded-pill px-4 py-2 text-sm font-semibold shadow-sm transition-all ${
                  reply.emphasis === 'primary'
                    ? 'bg-gradient-to-r from-barclays-cerulean to-barclays-ocean text-white'
                    : 'border border-slate-200 bg-white text-slate-600 hover:border-barclays-cerulean hover:text-barclays-cerulean'
                }`}
              >
                {reply.text}
              </button>
            ))}
          </div>
        </div>
      )}

      <ChatComposer
        value={composerValue}
        onChange={setComposerValue}
        onSend={handleComposerSend}
        disabled={isTyping}
      />
    </div>
  );
};

export default ConversationFlow;
