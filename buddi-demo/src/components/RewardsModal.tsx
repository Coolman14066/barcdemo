import React, { useState, useEffect } from 'react';
import { useDemoContext } from '../context/DemoContext';
import lululemonLogo from '../assets/lululemon-logo.png';
import netflixLogo from '../assets/netflix-logo.png';

type RewardOption = 'netflix' | 'lululemon';

const RewardsModal: React.FC = () => {
  const { showRewardsModal, setShowRewardsModal, setState, profile } = useDemoContext();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedReward, setSelectedReward] = useState<RewardOption | null>(null);

  useEffect(() => {
    if (showRewardsModal) {
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
    }
  }, [showRewardsModal]);

  const handleRewardSelect = (reward: RewardOption) => {
    setSelectedReward(reward);
    // Animate out after selection
    setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        setShowRewardsModal(false);
        setState('post-plan');
      }, 300);
    }, 800);
  };

  if (!showRewardsModal) {
    return null;
  }

  const firstName = profile.name.split(' ')[0];

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
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className={`bg-white w-full max-w-[390px] rounded-3xl shadow-2xl overflow-hidden transition-transform duration-300 ${
            isVisible ? 'scale-100' : 'scale-95'
          }`}
        >
          {/* Header - Clean Barclays Blue */}
          <div className="bg-gradient-to-r from-barclays-cerulean to-barclays-ocean text-white px-6 py-6 text-center">
            {/* Trophy Icon - Clean SVG */}
            <div className="flex justify-center mb-3">
              <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" fill="#FCD34D" stroke="#FCD34D"/>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" fill="#FCD34D" stroke="#FCD34D"/>
                  <path d="M4 22h16" stroke="white"/>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" stroke="white"/>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" stroke="white"/>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" fill="#FCD34D" stroke="#FCD34D"/>
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-bold mb-1">
              Congrats, {firstName}!
            </h2>
            <p className="text-sm opacity-90">
              You've activated your £{profile.weddingGoalAmount.toLocaleString()} wedding plan
            </p>
          </div>

          {/* Content - Solid White Background */}
          <div className="px-4 py-5">
            {/* Milestone Text */}
            <p className="text-sm font-semibold text-center text-slate-700 mb-4">
              Milestone reached! Pick your reward:
            </p>

            {/* Reward Cards */}
            <div className="space-y-3">
              {/* Netflix Card */}
              <button
                onClick={() => handleRewardSelect('netflix')}
                disabled={selectedReward !== null}
                className={`w-full bg-white border rounded-2xl p-4 text-left transition-all ${
                  selectedReward === 'netflix'
                    ? 'border-barclays-cerulean shadow-md'
                    : selectedReward === null
                    ? 'border-gray-200 hover:border-gray-300 hover:shadow-sm active:scale-[0.98]'
                    : 'border-gray-200 opacity-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  {/* Netflix Logo */}
                  <div className="flex-shrink-0 h-14 w-14 bg-black rounded-xl flex items-center justify-center overflow-hidden p-2">
                    <img src={netflixLogo} alt="Netflix" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-bold text-slate-900">6 Months Free</p>
                    <p className="text-xs text-gray-600">Netflix Premium subscription</p>
                  </div>
                  {selectedReward === 'netflix' && (
                    <svg className="h-6 w-6 text-barclays-cerulean flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                  )}
                </div>
              </button>

              {/* Lululemon Card */}
              <button
                onClick={() => handleRewardSelect('lululemon')}
                disabled={selectedReward !== null}
                className={`w-full bg-white border rounded-2xl p-4 text-left transition-all ${
                  selectedReward === 'lululemon'
                    ? 'border-barclays-cerulean shadow-md'
                    : selectedReward === null
                    ? 'border-gray-200 hover:border-gray-300 hover:shadow-sm active:scale-[0.98]'
                    : 'border-gray-200 opacity-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  {/* Lululemon Logo */}
                  <div className="flex-shrink-0 h-14 w-14 rounded-xl flex items-center justify-center overflow-hidden">
                    <img src={lululemonLogo} alt="Lululemon" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-bold text-slate-900">£10 Gift Card</p>
                    <p className="text-xs text-gray-600">Lululemon store credit</p>
                  </div>
                  {selectedReward === 'lululemon' && (
                    <svg className="h-6 w-6 text-barclays-cerulean flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                  )}
                </div>
              </button>
            </div>

            {/* Footer Text */}
            <p className="text-xs text-gray-500 text-center mt-4">
              Tap a reward to claim it
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RewardsModal;
