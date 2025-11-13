import React from 'react';

interface ChatComposerProps {
  disabled?: boolean;
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

const ChatComposer: React.FC<ChatComposerProps> = ({ disabled, value, onChange, onSend }) => {
  return (
    <div className="px-5 pb-safe pt-3">
      <div className="rounded-3xl border border-slate-100 bg-white px-4 py-3 shadow-[0_12px_30px_rgba(1,31,61,0.12)] focus-within:border-barclays-cerulean/60">
        <div className="flex items-end gap-3">
          <button
            className="h-9 w-9 flex-shrink-0 rounded-full bg-slate-50 text-slate-500 hover:bg-slate-100"
            aria-label="More options"
            type="button"
          >
            <svg className="mx-auto h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14M5 12h14" />
            </svg>
          </button>
          <textarea
            className="h-16 flex-1 resize-none border-none bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
            placeholder="Type a message"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
          />
          <button
            className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-r from-barclays-cerulean to-barclays-ocean text-white shadow-buddi disabled:opacity-50"
            aria-label="Send"
            type="button"
            onClick={onSend}
            disabled={disabled || value.trim().length === 0}
          >
            <svg className="mx-auto h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatComposer;
