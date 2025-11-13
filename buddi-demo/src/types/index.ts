export type DemoState = 'pre-plan' | 'chat-open' | 'plan-modal' | 'post-plan';

export type ConversationTurn = 0 | 1 | 2 | 3 | 4;

export type StepStatus = 'pending' | 'expanded' | 'confirmed';

export interface BellaProfile {
  name: string;
  age: number;
  location: string;
  currentSavings: number;
  weddingGoalAmount: number;
  weddingGoalYears: number;
  houseGoalYears: number;
  riskComfort: string;
  monthlyBudget: number;
  weddingMonthlyTarget: number;
  homeSeedMonthly: number;
}

export interface Message {
  id: string;
  sender: 'buddi' | 'bella';
  text: string;
  timestamp: Date;
  isTyping?: boolean;
}

export interface PlanStep {
  id: number;
  title: string;
  icon: string;
  summary: string;
  expandedText: string;
  buttonText: string;
  status: StepStatus;
  revenueCategory: string;
}

export interface DemoContextType {
  state: DemoState;
  setState: (state: DemoState) => void;
  conversationTurn: ConversationTurn;
  setConversationTurn: (turn: ConversationTurn) => void;
  messages: Message[];
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
  planSteps: PlanStep[];
  updateStepStatus: (stepId: number, status: StepStatus) => void;
  allStepsConfirmed: boolean;
  profile: BellaProfile;
  showRewardsModal: boolean;
  setShowRewardsModal: (show: boolean) => void;
}
