import React, { createContext, useContext, useState, useCallback } from 'react';
import type { DemoContextType, DemoState, ConversationTurn, Message, PlanStep, StepStatus } from '../types';
import { bellaProfile, initialPlanSteps } from '../data/bellaProfile';

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export const DemoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<DemoState>('pre-plan');
  const [conversationTurn, setConversationTurn] = useState<ConversationTurn>(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [planSteps, setPlanSteps] = useState<PlanStep[]>(initialPlanSteps);
  const [showRewardsModal, setShowRewardsModal] = useState(false);

  const addMessage = useCallback((message: Omit<Message, 'id' | 'timestamp'>) => {
    const newMessage: Message = {
      ...message,
      id: Date.now().toString() + Math.random(),
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  }, []);

  const updateStepStatus = useCallback((stepId: number, status: StepStatus) => {
    setPlanSteps((prev) =>
      prev.map((step) => (step.id === stepId ? { ...step, status } : step))
    );
  }, []);

  const allStepsConfirmed = planSteps.every((step) => step.status === 'confirmed');

  return (
    <DemoContext.Provider
      value={{
        state,
        setState,
        conversationTurn,
        setConversationTurn,
        messages,
        addMessage,
        planSteps,
        updateStepStatus,
        allStepsConfirmed,
        profile: bellaProfile,
        showRewardsModal,
        setShowRewardsModal,
      }}
    >
      {children}
    </DemoContext.Provider>
  );
};

export const useDemoContext = () => {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error('useDemoContext must be used within DemoProvider');
  }
  return context;
};
