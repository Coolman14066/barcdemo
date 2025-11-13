import React from 'react';
import { useDemoContext } from '../context/DemoContext';
import Icon, { type IconName } from './Icon';

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const getNextTransferDate = () => {
  const next = new Date();
  next.setMonth(next.getMonth() + 1);
  next.setDate(15);
  return next.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
};

type ActiveStep = {
  icon: IconName;
  name: string;
  description: string;
};

const activeSteps: ActiveStep[] = [
  { icon: 'safety-buffer', name: 'Safety Buffer', description: 'Keep £3k emergency fund' },
  { icon: 'wedding-fund', name: 'Wedding Fund', description: 'Auto-save £550/month' },
  { icon: 'home-seed', name: 'Future Home Seed', description: 'Round-ups + £50/month' },
  { icon: 'home-growth', name: 'Home Investment', description: 'Low-risk growth sleeve' },
  { icon: 'retirement', name: 'Pension Boost', description: '+1% on next raise' },
];

const PlanProgressWidget: React.FC = () => {
  const { profile } = useDemoContext();

  const monthsToWedding = profile.weddingGoalYears * 12; // 48 months
  const totalMonthlyCommitment = 600; // £550 wedding + £50 home
  const currentMonthSaved = 0; // Just activated
  const annualTarget = totalMonthlyCommitment * 12; // £7,200
  const nextTransferDate = getNextTransferDate();

  return (
    <div className="space-y-3">
      {/* Card 1: Your Active Plan (Status Hero) */}
      <section className="rounded-3xl border border-gray-100 bg-white px-5 py-4 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-[10px] font-medium uppercase tracking-[0.4em] text-gray-400">
            YOUR BUDDI PLAN
          </h2>
          <span className="rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
            5/5 ACTIVE
          </span>
        </div>

        <div className="mt-4">
          <p className="text-2xl font-bold text-slate-900">Month 1 of {monthsToWedding}</p>
        </div>

        {/* Progress bar - currently at 0% (just activated) */}
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-barclays-cerulean to-barclays-ocean transition-all duration-500 ease-out"
            style={{ width: '0%' }}
          />
        </div>

        <div className="mt-4 space-y-1">
          <p className="text-sm font-semibold text-slate-900">
            {formatCurrency(totalMonthlyCommitment)}/month committed
          </p>
          <p className="text-xs text-slate-500">
            {formatCurrency(currentMonthSaved)} saved this month · {formatCurrency(annualTarget)} target
          </p>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-500" />
          <p className="text-sm text-slate-600">Auto-transfers start {nextTransferDate}</p>
        </div>
      </section>

      {/* Card 2: Active Steps (All 5 Steps) */}
      <section className="rounded-3xl border border-gray-100 bg-white px-5 py-4 shadow-sm">
        <h2 className="text-[10px] font-medium uppercase tracking-[0.4em] text-gray-400">
          ACTIVE STEPS
        </h2>

        <div className="mt-4 space-y-3">
          {activeSteps.map((step, index) => (
            <div key={index} className="flex items-start gap-3">
              {/* Icon with gradient background */}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-barclays-cerulean to-barclays-ocean">
                <Icon name={step.icon} className="h-5 w-5 text-white" />
              </div>

              {/* Step info */}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-900">{step.name}</p>
                  <span className="rounded-full border border-green-200 bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-700">
                    Active
                  </span>
                </div>
                <p className="mt-0.5 text-xs leading-relaxed text-slate-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PlanProgressWidget;
