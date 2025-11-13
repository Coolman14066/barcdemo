import React, { useState, useEffect } from 'react';
import { useDemoContext } from '../context/DemoContext';

const PlanStepIcon: React.FC<{ name: string }> = ({ name }) => {
  const iconClass = "h-6 w-6";

  switch (name) {
    case 'safety-buffer':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case 'wedding-fund':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}>
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    case 'home-seed':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case 'home-growth':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}>
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      );
    case 'retirement':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      );
  }
};

const PlanModal: React.FC = () => {
  const { state, setState, planSteps, updateStepStatus, allStepsConfirmed, setShowRewardsModal } = useDemoContext();
  const [isVisible, setIsVisible] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const confirmedCount = planSteps.filter((step) => step.status === 'confirmed').length;
  const progressPercentage = (confirmedCount / planSteps.length) * 100;

  // Helper to render text with **bold** markdown
  const renderTextWithBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  useEffect(() => {
    if (state === 'plan-modal') {
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
    }
  }, [state]);

  useEffect(() => {
    if (allStepsConfirmed && !showSuccess) {
      setShowSuccess(true);
    }
  }, [allStepsConfirmed, showSuccess]);

  const handleStepExpand = (stepId: number) => {
    const step = planSteps.find((s) => s.id === stepId);
    if (step && step.status === 'pending') {
      updateStepStatus(stepId, 'expanded');
    }
  };

  const handleStepConfirm = (stepId: number) => {
    updateStepStatus(stepId, 'confirmed');
  };

  const handleReturnHome = () => {
    setIsVisible(false);
    setTimeout(() => {
      setState('pre-plan'); // Close plan modal first
      setShowRewardsModal(true); // Then show rewards modal
    }, 300);
  };

  if (state !== 'plan-modal') {
    return null;
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Modal */}
      <div
        className={`fixed inset-0 z-50 flex items-end sm:items-center justify-center transition-all duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className={`bg-white w-full max-w-md h-full sm:h-auto sm:max-h-[90vh] rounded-t-modal sm:rounded-modal shadow-2xl flex flex-col transition-transform duration-300 ${
            isVisible ? 'translate-y-0' : 'translate-y-full sm:translate-y-0 sm:scale-95'
          }`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-barclays-cerulean to-barclays-astronaut text-white px-6 py-6 rounded-t-modal">
            <h2 className="text-xl font-bold mb-2">
              Bella's Wedding + Home Plan
            </h2>
            <p className="text-sm opacity-90">powered by Buddi</p>
            <p className="text-xs opacity-75 mt-2">
              You can tweak amounts later. For now, tap through each step to activate it.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-700">
                {confirmedCount} of {planSteps.length} steps activated
              </span>
              <span className="text-sm font-bold text-barclays-cerulean">
                {Math.round(progressPercentage)}%
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-barclays-cerulean to-barclays-astronaut transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Success Message */}
          {showSuccess && (
            <div className="mx-6 mt-4 bg-green-50 border border-green-200 rounded-card p-4">
              <div className="flex items-start gap-3">
                <svg className="h-8 w-8 text-green-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                <div>
                  <h3 className="text-base font-bold text-green-900 mb-1">
                    Plan activated!
                  </h3>
                  <p className="text-sm text-green-700">
                    Your Wedding Fund and Future Home Seed are now on autopilot. You'll see them pinned to your home screen.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Steps Container */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
            {planSteps.map((step) => (
              <div
                key={step.id}
                className={`border rounded-card transition-all ${
                  step.status === 'confirmed'
                    ? 'border-green-500 bg-green-50'
                    : step.status === 'expanded'
                    ? 'border-barclays-cerulean bg-white'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => handleStepExpand(step.id)}
                  disabled={step.status === 'confirmed'}
                  className="w-full p-4 text-left"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 text-gray-700">
                      <PlanStepIcon name={step.icon} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="text-sm font-semibold text-gray-900">
                          {step.id}. {step.title}
                        </h3>
                        {step.status === 'confirmed' && (
                          <svg
                            className="w-6 h-6 text-green-600 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {step.summary}
                      </p>

                      {/* Expanded Content */}
                      {(step.status === 'expanded' || step.status === 'confirmed') && (
                        <div className="mt-3 pt-3 border-t border-gray-200">
                          <p className="text-xs text-gray-700 leading-relaxed mb-3">
                            {renderTextWithBold(step.expandedText)}
                          </p>
                          {step.status === 'expanded' && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleStepConfirm(step.id);
                              }}
                              className="w-full bg-barclays-cerulean hover:bg-barclays-astronaut text-white font-semibold py-2 px-4 rounded-full transition-all active:scale-95"
                            >
                              {step.buttonText}
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-modal">
            {allStepsConfirmed ? (
              <button
                onClick={handleReturnHome}
                className="w-full bg-gradient-to-r from-barclays-cerulean to-barclays-astronaut hover:shadow-lg text-white font-bold py-3 px-6 rounded-full transition-all active:scale-95"
              >
                Return to home
              </button>
            ) : (
              <button
                disabled
                className="w-full bg-gray-300 text-gray-500 font-bold py-3 px-6 rounded-full cursor-not-allowed"
              >
                Activate all steps ({confirmedCount}/{planSteps.length})
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanModal;
