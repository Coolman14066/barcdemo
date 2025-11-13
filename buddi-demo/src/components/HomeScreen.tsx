import React from 'react';
import { useDemoContext } from '../context/DemoContext';
import Icon, { type IconName } from './Icon';
import barclaysLogo from '../assets/barclays-eagle.png';
import PlanProgressWidget from './PlanProgressWidget';

type AccountCard = {
  name: string;
  balance: number;
  subtitle: string;
  accent: 'cerulean' | 'dusk' | 'midnight' | 'ocean';
  icon: IconName;
};

type QuickAction = {
  label: string;
  detail: string;
  icon: IconName;
};

const quickActions: QuickAction[] = [
  { label: 'Your cards', detail: 'Manage credit & debit', icon: 'cards' },
  { label: 'Rewards', detail: 'View offers', icon: 'rewards' },
  { label: 'Spending', detail: 'Track in real time', icon: 'spending' },
  { label: 'Payments', detail: 'Send or schedule', icon: 'payments' },
  { label: 'Insight', detail: 'Tailored nudges', icon: 'insight' },
  { label: 'Support', detail: 'Speak to an expert', icon: 'support' },
];

const accentMap: Record<AccountCard['accent'], string> = {
  cerulean: 'from-barclays-cerulean to-barclays-ocean',
  dusk: 'from-barclays-dusk to-barclays-midnight',
  midnight: 'from-barclays-midnight to-barclays-dusk',
  ocean: 'from-barclays-ocean to-barclays-cerulean',
};

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const HomeScreen: React.FC = () => {
  const { profile, state } = useDemoContext();
  const projectedHomeSeedFiveYears = profile.homeSeedMonthly * 12 * 5;

  const accountCards: AccountCard[] = [
    {
      name: 'Barclays Current Account',
      balance: 2300,
      subtitle: 'Available today',
      accent: 'cerulean',
      icon: 'current-account',
    },
    {
      name: 'Everyday Saver',
      balance: profile.currentSavings,
      subtitle: 'General savings',
      accent: 'ocean',
      icon: 'saver',
    },
    {
      name: 'Barclays Credit Card',
      balance: 1500,
      subtitle: 'Available credit: £8,500',
      accent: 'midnight',
      icon: 'credit-card',
    },
  ];

  const weddingProgress = Math.min(
    100,
    (profile.currentSavings / profile.weddingGoalAmount) * 100
  );
  const futureHomeProgress = Math.min(100, (profile.homeSeedMonthly * 12 * 2) / 2000 * 100);

  const goalCards = [
    {
      title: 'Wedding Fund',
      helper: `£${profile.weddingMonthlyTarget}/month · ${profile.weddingGoalYears} years out`,
      progress: weddingProgress,
      copy: `Currently at ${formatCurrency(profile.currentSavings)} of ${formatCurrency(
        profile.weddingGoalAmount
      )} goal.`,
    },
    {
      title: 'Future Home Seed',
      helper: `Round-ups & £${profile.homeSeedMonthly}/month`,
      progress: futureHomeProgress,
      copy: `Seed £${profile.homeSeedMonthly} monthly to catch the next opportunity.`,
    },
  ];

  return (
    <main className="min-h-full bg-gray-50">
      {/* Light header */}
      <header className="bg-white px-6 pt-safe pb-4 border-b border-gray-100">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <img
                src={barclaysLogo}
                alt="Barclays Eagle"
                className="h-8 w-8"
              />
              <span className="text-sm uppercase tracking-[0.35em] text-gray-500 font-semibold">BARCLAYS</span>
            </div>
            <h1 className="text-2xl font-semibold text-slate-900">
              Good afternoon, {profile.name.split(' ')[0]}
            </h1>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-barclays-cerulean text-white text-lg font-semibold shadow-sm">
              {profile.name[0]}
            </div>
          </div>
        </div>
      </header>

      <div className="px-4 py-6 space-y-4">
        {/* Progress Widget - Only shown after plan activation */}
        {state === 'post-plan' && <PlanProgressWidget />}

        {/* Accounts Section */}
        <div className="rounded-3xl bg-white p-5 shadow-sm border border-gray-100">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-400">
              Accounts
            </h2>
            <span className="text-xs font-semibold text-barclays-cerulean">View all</span>
          </div>
          <div className="space-y-3">
            {accountCards.map((account) => (
              <div
                key={account.name}
                className="rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-11 w-11 rounded-xl bg-gradient-to-br ${accentMap[account.accent]} flex items-center justify-center text-white shadow-sm`}
                    >
                      <Icon name={account.icon} className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{account.name}</p>
                      <p className="text-xs text-slate-500">{account.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-slate-900">{formatCurrency(account.balance)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            {quickActions.slice(0, 4).map((action) => (
              <button
                key={action.label}
                className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3 text-left text-sm font-semibold text-slate-700 hover:border-barclays-cerulean hover:bg-white transition"
              >
                <Icon name={action.icon} className="h-5 w-5 flex-shrink-0 mt-0.5 text-barclays-cerulean" />
                <div>
                  <p>{action.label}</p>
                  <p className="text-xs font-normal text-slate-500">{action.detail}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Goals Section */}
        <section className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-medium">Goals & challenges</p>
              <h3 className="text-lg font-semibold text-slate-900 mt-1">Buddi is plotting your next steps.</h3>
            </div>
            <span className="text-xs font-semibold text-barclays-cerulean">Edit goals</span>
          </div>
          <div className="grid gap-3">
            {goalCards.map((goal) => (
              <div
                key={goal.title}
                className="rounded-3xl border border-gray-100 bg-white px-5 py-4 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-medium">{goal.title}</p>
                    <p className="text-base font-semibold text-slate-900 mt-1">{goal.helper}</p>
                  </div>
                  <span className="text-sm font-bold text-barclays-cerulean">
                    {Math.round(goal.progress)}%
                  </span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-barclays-cerulean to-barclays-ocean"
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
                <p className="mt-3 text-sm text-slate-600">{goal.copy}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Buddi Connection Info */}
        <section className="rounded-3xl border border-dashed border-gray-200 bg-white px-5 py-4 text-sm text-slate-600 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-medium">Connection</p>
              <p className="text-base font-semibold text-slate-900 mt-1">Your Barclays money coach</p>
            </div>
            <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs font-semibold text-green-700">
              Buddi live
            </span>
          </div>
          <p className="mt-3 leading-relaxed text-slate-600">
            Buddi can suggest plans, open accounts, or nudge you when balances change. Tap the Buddi button
            to continue the conversation.
          </p>
        </section>
      </div>
    </main>
  );
};

export default HomeScreen;
