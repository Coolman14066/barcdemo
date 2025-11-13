You are an AI coding copilot building a world‑class, static demo web app for a Barclays‑style agentic assistant called Buddi.

This is not production code. The goal is a flawless, deterministic demo people can open from a QR code on their phones and experience in ~20–30 seconds.

1. Overall concept

Build a single‑page, mobile‑first web app that:

Visually mimics the Barclays mobile app (logo, header style, card layout, colour palette, typography).

Shows a fake “home” dashboard for a 24‑year‑old persona, Bella Roxas, including her balances and goals. 

barclays final presentation

Has a floating “Buddi” chat button at the bottom‑right.

When tapped, opens a ** warm, human‑sounding AI chat**.

After two short back‑and‑forth messages, Buddi presents a 5‑step plan for saving for a home and wedding.

Each step in the plan maps to a Barclays product / revenue lever:

Current/checking

Savings

Investments / ISA

Retirement / pension

Card / payments

When the user accepts the plan and confirms each step, the home dashboard updates to show new goal tiles and “challenge” states.

This is a static demo: you can hard‑code Bella’s data and the conversation. LLM calls, if any, are optional and must not break the script.

2. Tech stack and project structure

Use a single‑page React app with TypeScript, styled to look native‑mobile:

Use Vite + React + TypeScript or a similarly simple setup.

Use CSS modules or TailwindCSS for styling (whichever you prefer), but keep styles clean and readable.

No backend. All data is in front‑end state.

No authentication. The “Biometric login” is just visual, not functional.

Project structure (suggested):

src/App.tsx – main router/state container

src/components/HomeScreen.tsx – fake Barclays home view

src/components/BuddiChat.tsx – floating chat bubble + conversation panel

src/components/PlanModal.tsx – 5‑step plan UI + step confirmations

src/components/DashboardTiles.tsx – goal cards/chips on home

src/state/demoState.ts – Bella’s persona & plan parameters

3. Brand & visual style

Use your web browsing / image tools to research Barclays mobile app screenshots and the marketing images that show:

Biometric login

“View all your accounts in one place”

“Rewards and benefits”

Then:

Use a Barclays blue gradient in header areas and CTAs.

Use white cards on dark navy / blue backgrounds for account tiles.

Typography: a clean, sans serif font (system sans or something like Inter).

Rounded rectangles for cards; light shadows; lots of white space.

Keep it modern, minimal, and legible. Avoid clutter.

All UI must look like it could be a real Barclays app screen.

4. Persona & data (hard‑code this)

Hard‑code a bellaProfile object:

const bellaProfile = {
  name: "Bella Roxas",
  age: 24,
  location: "Charlotte, NC",
  currentSavings: 8000,
  weddingGoalAmount: 40000,
  weddingGoalYears: 4,
  houseGoalYears: 12,
  riskComfort: "low_to_medium"
};


She has:

Current savings balance: $8,000 in a regular savings account (not invested).

Short‑term goal: $40,000 wedding fund in 4 years.

Long‑term goal: buy a house in ~12 years.

Pain points: low financial literacy, low motivation, unclear milestones, fear of risk, lifestyle temptations.

Desires: easy‑to‑use app, clear milestones, rewards to stay motivated, safe options. 

barclays final presentation

You can derive simple numbers:

Suggested “comfortable” monthly save amount (for demo): $600/month.

Wedding monthly target ≈ (weddingGoalAmount - currentSavings) / (weddingGoalYears * 12) – round to a nice number (e.g. $550).

Home “seed” monthly amount: $50/month (habit‑building challenge).

5. Home screen layout

The only real screen is the home dashboard. It must look like a Barclays account overview:

Viewport: phone‑sized, centered on desktop, full‑screen on mobile.

Sections:

Top bar

Barclays logo and wordmark

Profile icon (small circle with “BR”)

Simple text “Good afternoon, Bella”

Accounts summary cards (scrollable)

Current Account tile

Balance: $2,300 (fake)

Savings – Everyday Saver

Balance: $8,000

Subtitle: “General savings”

Credit Card

Balance and available credit

Pension / Retirement

Small summary line, e.g. “Pension balance: $12,000”

Goals / Challenges section

Before Buddi plan:

Show a card: “No active goals yet. Start a plan with Buddi.”

After Buddi plan:

Show two cards:

“Wedding Fund – $8,000 of $40,000 · On track”

“Home Seed Challenge – 0 of 6 months · Bronze → Silver”

Buddi floating button

Circular button bottom‑right: Buddi avatar (friendly icon) + a mini pill text like “Ask Buddi”.

Slight pulsing animation to draw attention.

6. Buddi chat UX
6.1 Opening

When the user taps the Buddi button:

Slide up a bottom sheet (~65% of screen height) with rounded top corners.

Top of sheet:

Buddi avatar

Text: “Hi Bella, I’m Buddi 👋 Your Barclays money coach.”

First Buddi message appears automatically after a brief typing animation.

6.2 Typing & timing

Use a simple typing indicator (three dots) whenever Buddi is “thinking”.

Delay: 700–1200 ms per Buddi message. Just set timeouts; no real computation delay needed.

Avoid long pauses; the entire interaction (from opening Buddi to starting the plan) should take ≤ 20 seconds for a confident tapper.

6.3 Interaction model

The chat should accept free typing, but for demo reliability:

Show quick‑reply chips that define the happy path.

If the user types anything custom, treat it as “closest chip” and continue along the scripted flow.

Store the transcript in React state and display it like a normal chat.

7. Buddi’s tone & micro‑copy

Buddi tone pillars:

Warm & respectful – never condescending.

Clear & concrete – no jargon (“ISA”, etc.) unless explained.

Agentic & capable – Buddi can propose actions inside Barclays (open pots, set rules, adjust contributions).

Human‑sized – 1–3 short sentences per bubble.

Language patterns:

Greet + affirm + reflect + question.

Explicitly reference Bella’s real data (8k savings, 40k wedding, 12‑year home).

End most messages with one simple question or a clear CTA.

Avoid:

Promising specific investment returns.

Product‑name soup.

Hard‑selling credit or investments.

You may include a small, subtle line under the chat:

“Buddi helps you make decisions and can set up Barclays products with your permission.”

No need to say “education only” in big text; this is a vision demo.

8. Scripted conversation (hard‑code this)

Implement this exact scripted flow, with quick‑reply chips matching the lines.

Turn 0 – Auto greeting (Buddi opens)

Buddi (auto):

“Hi Bella 👋 I’m Buddi, your Barclays money coach.

I can see you’ve built up $8,000 in savings and set big goals like a $40,000 wedding and buying a home in about 12 years.

What would you like help with today?”

Quick‑reply chips:

“Saving for a home”

“Funding my wedding”

“Staying motivated”

Turn 1 – Bella asks

User taps: “Saving for a home” (or types something similar).

Show Bella’s message bubble:

“How do I save for a house while I’m also paying for my wedding?”

Turn 2 – Buddi processes and clarifies

Buddi (with typing indicator first):

“Love that you’re planning ahead 🏡

Right now you’ve got $8,000 saved and you’re aiming for $40,000 for your wedding in about 4 years, plus a future home in roughly 12 years.

Roughly how much could you comfortably set aside each month without feeling miserable?”

Quick‑reply chips:

“$400 / month”

“$600 / month”

“$800 / month”

“Not sure”

Turn 3 – Bella chooses

User taps “$600 / month”.

Bella bubble:

“Probably around $600 a month if I’m careful.”

Turn 4 – Buddi does quick math + proposes plan

Buddi:

“Nice – $600/month is a strong starting point and still leaves room for life.

If we keep a safety cushion, we can keep your wedding on track and start a ‘Future Home’ fund in the background.

Want me to turn this into a simple 5‑step plan you can start in a few taps?”

Buttons:

“See my 5‑step plan” (primary)

“Not now” (secondary; for demo you can just close chat)

On “See my 5‑step plan”, close the bottom sheet chat and open the PlanModal.

9. 5‑step plan UI & content

The PlanModal is a full‑screen overlay with:

Title: “Bella’s Wedding + Home Plan · powered by Buddi”

Sub‑text: “You can tweak amounts later. For now, tap through each step to activate it.”

A big progress bar: 0/5 steps completed.

A vertical list of 5 collapsible step cards.

A fixed bottom bar with “Activate all steps” disabled until all 5 are individually confirmed.

Each step card:

Has an icon, short title, one‑sentence benefit, one‑sentence action.

Can expand to show 1–2 more sentences + a “Confirm” button.

When confirmed, show a green checkmark and update the progress bar.

Step 1 – Current / checking: “Protect your buffer”

Title: “1. Lock in your safety buffer”
Icon: small shield / umbrella.

Summary:

“Keep $3,000 in your everyday account so surprise bills don’t derail your plans.”

Expanded:

“We’ll ring‑fence $3,000 as an emergency cushion.
Buddi will warn you before any transfer drops you below that.”

Button: “Confirm safety buffer”

Step 2 – Savings: “Wedding autopilot”

Title: “2. Put your Wedding Fund on autopilot”
Icon: heart / ring.

Summary:

“Move $550/month into a labelled Wedding Fund from your current account.”

Expanded:

“Based on your $600/month budget, we’ll send $550 each month into a Wedding Fund savings pot.
That keeps you on track for ~$40,000 in 4 years assuming modest growth.”

Button: “Start Wedding autopay”

Step 3 – Cards: “Home Seed round‑ups”

Title: “3. Build a ‘Home Seed’ with card round‑ups”
Icon: house.

Summary:

“Round up your Barclays card purchases and send the spare change to a new ‘Future Home’ pot.”

Expanded:

“Each time you pay with your Barclays card, we’ll round up to the nearest dollar and move the difference into Future Home.
We’ll cap it at, say, $50/month so it never feels scary.”

Button: “Turn on round‑ups”

(Revenue lens for presenter: card spend ↑ + deposit balances ↑.)

Step 4 – Investments: “Safe growth sleeve”

Title: “4. Add a small ‘Home Growth’ investment sleeve”
Icon: graph.

Summary:

“Invest $50/month in a low‑risk diversified portfolio earmarked for your future home.”

Expanded:

“To gently grow your home fund over 10+ years, we’ll add $50/month into a low‑risk, diversified portfolio.
You can pause anytime or talk to a human advisor first.”

Button: “Start Home Growth sleeve”

(Presenter can call out AUM/advisory fees.)

Step 5 – Retirement: “Don’t forget future‑you”

Title: “5. Keep your retirement on track”
Icon: calendar / clock.

Summary:

“Increase your pension contribution by +1% next pay rise and let Buddi remind you.”

Expanded:

“To make sure saving for a home doesn’t hurt future‑you, Buddi will suggest a +1% pension increase when you get your next raise.
One tap to accept or snooze when the time comes.”

Button: “Set pension nudge”

10. Plan completion behavior

When all 5 step buttons have been pressed:

Set each step card to “Completed” with a green check.

Update the progress bar to “5 of 5 steps activated”.

Show a friendly success panel at the top of the modal:

“Plan activated 🎉

Your Wedding Fund and Future Home Seed are now on autopilot.
You’ll see them pinned to your home screen.”

Show a primary button: “Return to home”.

On click, close the modal and show the updated dashboard.

11. Updated home dashboard state

After the plan is active, the home screen must reflect the new reality:

Add a new “Goals & Challenges” section with two tiles:

Wedding Fund tile

Title: “Wedding Fund”

Progress: $8,000 → $40,000 (could show as 20% progress ring)

Subtitle: “Auto‑saving $550/month · On track”

Tag chip: “Buddi plan · Active”

Future Home Seed tile

Title: “Home Seed Challenge”

Progress: e.g. $0 → first $1,000 (0% initially)

Subtitle: “Round‑ups + $50/month · Month 1 of 6”

Tag chip: “Bronze · 0/6 month streak”

Optional: small text at top of home:

“Buddi is managing 2 active plans for you. Tap Buddi to review or edit.”

12. Optional “Presenter‑only” hints (not required, but nice)

If you want, add a tiny overlay toggled by a keyboard shortcut (e.g. press “P”) that shows a translucent label near each step:

Step 1,2: “Deposits / NII”

Step 3: “Cards / Interchange + Deposits”

Step 4: “Investments / AUM Fees”

Step 5: “Retirement / Long‑term AUM”

This overlay should never appear on mobile by accident; only respond to the keypress.

13. General UX / code quality expectations

Keep all copy short and readable on a phone.

Ensure good contrast for accessibility.

Make components responsive but optimise for portrait phone view (~390×844).

Avoid long nested state; keep logic simple and well‑commented so humans can tweak text/amounts.

No references to being an AI model; Buddi just appears as part of Barclays.