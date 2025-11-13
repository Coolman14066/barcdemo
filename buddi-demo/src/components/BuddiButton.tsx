import React from 'react';
import { useDemoContext } from '../context/DemoContext';

const BuddiButton: React.FC = () => {
  const { state, setState } = useDemoContext();

  const handleClick = () => {
    if (state === 'pre-plan' || state === 'post-plan') {
      setState('chat-open');
    }
  };

  // Always show button, but disable when modal is open
  const isDisabled = state === 'plan-modal';
  const isHidden = state === 'chat-open';

  return (
    <button
      onClick={handleClick}
      disabled={isDisabled}
      className={`fixed bottom-6 right-5 z-30 flex items-center gap-3 rounded-pill bg-gradient-to-r from-barclays-cerulean to-barclays-ocean px-5 py-3 text-white shadow-buddi hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70 active:scale-[0.98] transition-opacity duration-300 ${
        isHidden ? 'opacity-0 pointer-events-none' : 'opacity-100'
      } ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      aria-label="Ask Buddi"
    >
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </div>
      <div className="text-left">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
          Buddi
        </p>
        <p className="text-sm font-semibold leading-tight">Ask anything</p>
      </div>
    </button>
  );
};

export default BuddiButton;
