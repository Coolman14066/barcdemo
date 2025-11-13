import React, { useEffect, useState } from 'react';
import { useDemoContext } from '../context/DemoContext';
import ConversationFlow from './ConversationFlow';

const BuddiChat: React.FC = () => {
  const { state, setState } = useDemoContext();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (state === 'chat-open') {
      const timer = setTimeout(() => setVisible(true), 15);
      return () => clearTimeout(timer);
    }
    setVisible(false);
    return undefined;
  }, [state]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => setState('pre-plan'), 250);
  };

  if (state !== 'chat-open') {
    return null;
  }

  return (
    <>
      <div
        className={`absolute inset-0 z-30 bg-slate-900/50 backdrop-blur-md transition-opacity duration-300 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />

      <section
        className={`absolute inset-x-0 bottom-0 z-40 rounded-t-[38px] bg-white shadow-sheet transition-transform duration-500 h-[92vh] sm:h-[80vh] flex flex-col ${
          visible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex items-center justify-center py-3">
          <div className="h-1 w-10 rounded-full bg-slate-200" />
        </div>

        <header className="px-6 pb-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-barclays-cerulean to-barclays-ocean text-white shadow-chip flex items-center justify-center">
                B
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Buddi</p>
                <h3 className="text-lg font-semibold text-slate-900">Buddi, your Barclays money coach</h3>
                <p className="text-xs text-slate-500">Helping you line up your wedding and future home goals.</p>
              </div>
            </div>
            <button
              className="h-9 w-9 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200"
              aria-label="Close chat"
              onClick={handleClose}
            >
              <svg className="mx-auto h-4 w-4" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-3 rounded-2xl bg-slate-50 px-4 py-3 text-xs text-slate-500">
            Buddi can open accounts, automate transfers, or tee up human advisors — all with your permission.
          </div>
        </header>

        <div className="flex-1 min-h-0">
          <ConversationFlow />
        </div>
      </section>
    </>
  );
};

export default BuddiChat;
