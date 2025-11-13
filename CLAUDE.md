# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project Goal

Build a **production-quality mobile banking UI demo** for "Buddi", a Barclays AI money coach.

This is NOT a casual prototype. It must:
- Look indistinguishable from a real Barclays mobile app
- Work perfectly when opened via QR code on a phone (390×844px portrait)
- Be stakeholder-ready: clean, professional, zero layout bugs
- Complete demo flow in 20-30 seconds

**This is a static demo** (no backend, no auth, no real LLM), but the UI must feel production-grade.

---

## Core Constraints

### Technical
- **Framework**: Vite + React + TypeScript
- **Styling**: Tailwind CSS (already configured)
- **Deployment**: Static hosting (QR code access)
- **No backend, no authentication, no real API calls**

### Design Philosophy
- **Mobile-first ruthlessly**: 390×844px is the ONLY viewport that matters
- **Barclays-authentic**: Study real Barclays mobile app screenshots
- **Zero layout bugs**: No horizontal scroll, no mid-screen stops, no floating shells
- **Production-quality polish**: Tight spacing, consistent typography, smooth animations

---

## Persona Data (Hard-coded)

**Bella Roxas**, 24, Charlotte, NC (British expat)
- **Current Account**: £2,300
- **Everyday Saver**: £8,000 (not invested)
- **Goals**:
  - Wedding: £40,000 in 4 years
  - Home: Buy in ~12 years
- **Monthly capacity**: £600 after essentials
- **Risk tolerance**: Low-medium

---

## Architecture

### File Structure
```
src/
  App.tsx                 - Shell + routing
  components/
    HomeScreen.tsx        - Main Barclays dashboard
    BuddiChat.tsx         - Bottom sheet (90-100% height)
    ConversationFlow.tsx  - Scripted 4-turn conversation
    ChatComposer.tsx      - Input + quick-reply chips
    PlanModal.tsx         - 5-step plan wizard
    Icon.tsx              - Barclays-style SVG icons
  data/
    bellaProfile.ts       - Hard-coded user data
  types/
    index.ts              - TypeScript definitions
```

### State Management
- Simple React state (no Redux/Zustand needed)
- Two states: **pre-plan** (default dashboard) and **post-plan** (shows active goals)

---

## Critical Layout Rules (MUST FOLLOW)

### Mobile Shell Behavior

**On phones (<640px):**
- Full-bleed app, NO borders, NO rounded corners
- `min-h-screen` on outer shell, `min-h-full` on inner layouts
- No dark background should ever peek through on scroll

**On desktop (≥640px):**
- Centered phone shell with `max-w-[420px]`
- Rounded corners (`rounded-shell`) and shadow OK
- **BUT NO BORDERS** (no `sm:border` or `border-white/10` anywhere)

**File: `src/index.css`**
```css
.app-stage {
  @apply min-h-screen flex items-start justify-center px-0 py-0 sm:px-4 sm:py-8;
}

.mobile-shell {
  @apply relative w-full max-w-none min-h-screen overflow-hidden bg-barclays-mist
         sm:max-w-[420px] sm:rounded-shell sm:shadow-shell;
  /* NO border classes here */
}
```

### Buddi Chat Sheet (CRITICAL)

**Must behave like a native bottom sheet:**
- On mobile: **90-100% of phone height** (not 65-78%!)
- Handle sits near TOP of phone, not mid-screen
- Uses `h-[92%]` on mobile, `h-[80%]` on desktop
- Content scrolls INSIDE the sheet (using `h-[calc(100%-140px)]`)
- Backdrop covers entire screen with blur

**File: `src/components/BuddiChat.tsx`**
```tsx
<section
  className={`absolute inset-x-0 bottom-0 z-40 rounded-t-[38px] bg-white shadow-sheet transition-transform duration-500
    h-[92%] sm:h-[80%] ${visible ? 'translate-y-0' : 'translate-y-full'}`}
>
```

**DO NOT use inline `minHeight/maxHeight` styles** - use Tailwind classes.

### Home Screen Layout

- Use `min-h-full` (not `min-h-screen`) on main container
- No horizontal scroll at 375px width
- Consistent spacing (gap-4 or gap-6) between sections
- Header has subtle bottom border, no double borders

---

## Barclays Brand Specs

### Colors (from `tailwind.config.js`)
```js
colors: {
  'barclays-cerulean': '#00AEEF',    // Primary blue
  'barclays-navy': '#00395D',        // Dark navy
  'barclays-mist': '#F4F7F9',        // Light background
  'barclays-success': '#00A862',     // Green
}
```

### Visual Style
- **Backgrounds**: White cards on `barclays-mist` background
- **Headers**: Gradient from `barclays-cerulean` to darker blue
- **Borders**: Minimal (1px `border-gray-200` on cards), never thick
- **Shadows**: Subtle (`shadow-sm` on cards, `shadow-sheet` on modals)
- **Typography**: System sans-serif or Inter, 16px base, 1.5 line-height
- **Shapes**: `rounded-card` (12px), generous padding (p-4 to p-6)

---

## The 4-Turn Conversation Flow

**Turn 0** (Auto-greeting):
```
"Hi Bella, I'm Buddi, your Barclays money coach.

I'm connected to your accounts, so I can see your £8,000 in Everyday Saver, your £40,000 wedding goal, and your long-term plans for a home.

What would you like to focus on today?"
```
**Chips**: "Saving for a home" | "Funding my wedding" | "Staying motivated"

**Turn 1** (User taps chip or types):
- Any input maps to: "How do I save for a house while I'm also paying for my wedding?"

**Turn 2** (Buddi clarifies monthly capacity):
```
"Got it — let's build a plan that covers both.

Looking at your spending, you usually have around £600 left each month after essentials. How much would you feel comfortable committing to your goals?"
```
**Chips**: "£400/month" | "£600/month" | "£800/month" | "Not sure"

**Turn 3** (User selects amount):
- Maps to: "Probably around £600 a month if I'm careful."

**Turn 4** (Buddi proposes 5-step plan):
```
"Thanks — with £600, I can set up an automatic plan that:
– Keeps a £3k safety buffer in your current account
– Sends £550/month to your Wedding Fund
– Builds a small Future Home pot with round-ups
– Starts a low-risk investment sleeve (£50/month)
– Nudges you to +1% pension on your next raise

Want to see the full plan?"
```
**Buttons**: "See my 5-step plan" (opens modal) | "Not now"

---

## The 5-Step Plan Structure

**Full-screen modal with:**
- Gradient header: "Your Barclays Plan"
- Progress bar: "0 of 5 steps activated" → "5 of 5"
- 5 collapsible step cards (expand → confirm → checkmark)
- Fixed bottom bar: "Activate all steps" (disabled until all confirmed)
- Success state: "Plan activated" → returns to home

### Step Cards (Revenue Levers)

**Step 1 - Current Account**: "Lock in your safety buffer"
- Keep £3k emergency cushion
- Icon: `shield`
- Buddi warns before balance drops below threshold

**Step 2 - Savings**: "Put your Wedding Fund on autopilot"
- Auto-transfer £550/month to dedicated pot
- Icon: `heart`
- On track for £40k in 4 years

**Step 3 - Debit Card**: "Build a 'Future Home Seed' with round-ups"
- Round up card purchases to nearest £1
- Cap at £50/month
- Icon: `home`
- Revenue: Card spend ↑ + interchange fees

**Step 4 - Investments**: "Add a small 'Home Growth' investment sleeve"
- £50/month into low-risk diversified portfolio
- 10+ year horizon
- Icon: `trending-up`
- Revenue: AUM/advisory fees

**Step 5 - Pension**: "Don't forget future-you"
- +1% pension increase on next raise
- Buddi reminder when appropriate
- Icon: `calendar`
- Revenue: Long-term AUM

### Card Styling (De-cluttered)
```tsx
// Pending
border border-gray-200 bg-white hover:border-gray-300

// Expanded
border border-barclays-cerulean bg-white

// Confirmed
border border-green-500 bg-green-50
```

**1px borders only** (not 2px). No heavy blue backgrounds when expanded.

### Success State
```
✓ Plan activated

Your Wedding Fund and Future Home pots are now on autopilot.
You'll see them pinned on your home screen.
```
Green checkmark, `bg-green-50`, 1px border.

---

## Post-Plan Dashboard

After activation, HomeScreen shows new goal tiles:

**Wedding Fund tile:**
- Progress ring: £8,000 → £40,000 (20%)
- "Auto-saving £550/month · On track"
- Tag: "Buddi plan · Active"

**Future Home Seed tile:**
- Progress: £0 → £1,000 (0% initially)
- "Round-ups + £50/month · Month 1 of 6"
- Tag: "Bronze · 0/6 month streak"

---

## Buddi's Voice (Critical Rules)

### DO:
- Be warm, professional, factual
- Reference Bella's exact numbers ("your £8,000 in Everyday Saver")
- Ask for preferences, not basic data (it already knows her goals)
- Use UK English (£, "current account", "pots", "round-ups")
- Keep sentences short (1-3 per bubble)
- End with clear question or CTA

### DON'T (BANNED PHRASES):
- ❌ "I've logged that"
- ❌ "Brilliant!" / "Amazing!" / "Totally!"
- ❌ Any emojis
- ❌ "$" or US spellings ("checking account", "401k")
- ❌ "As an AI..." or "I'm here to help"
- ❌ Promising specific returns ("you'll earn 7%")
- ❌ Being pushy or sales-y

**Example of good Buddi copy:**
> "Looking at your spending, you usually have around £600 left each month after essentials. How much would you feel comfortable committing to your goals?"

**Example of bad AI slop:**
> "Brilliant! I've totally logged that. Let me know when you're ready to chat more about your amazing goals! 🎉"

---

## Development Guidelines

### Code Quality
- Components must be readable and well-commented
- Keep state flat and simple (no over-abstraction)
- Make text/amounts easy to tweak (constants in `bellaProfile.ts`)
- All files must export full TypeScript types

### Mobile-First Testing
- Test at 390×844px (iPhone 12/13) and 375×667px (iPhone SE)
- No horizontal scroll
- Touch targets ≥44×44px
- Readable font sizes (≥16px body text)

### Animations & Timing
- Typing indicator: 700-1200ms before Buddi messages
- Bottom sheet transition: 500ms ease
- Modal transitions: 300ms ease
- Buddi button: subtle pulse animation (2s loop)
- Keep total demo under 30 seconds

### No Real AI
- Buddi is scripted (no LLM calls)
- Quick-reply chips keep flow on rails
- Custom text input maps to "closest chip" (see `ConversationFlow.tsx`)

---

## Common Mistakes to Avoid

1. **Adding borders to mobile shell** → Makes it look like a broken embed
2. **Chat sheet at 65-78% height** → Looks like a layout bug
3. **Using `min-h-screen` on inner layouts** → Creates awkward scrolling
4. **2px borders on plan cards** → Too heavy/busy
5. **AI slop in copy** ("logged that", "brilliant!") → Kills credibility
6. **Dollar signs** → This is Barclays UK
7. **Emojis** → Not in a banking app

---

## Optional: Presenter Mode

Press "P" to toggle translucent overlay showing revenue levers:
- Steps 1-2: "Deposits / NII"
- Step 3: "Cards / Interchange"
- Step 4: "Investments / AUM"
- Step 5: "Retirement / Long-term AUM"

Only responds to keyboard, never appears on mobile.

---

## When Making Changes

1. **Always read existing files first** (use Read tool)
2. **Output full file contents** (no diffs or snippets)
3. **Test mobile layout** (390×844px viewport)
4. **Check for banned patterns** (borders, emojis, AI slop)
5. **Verify Barclays branding** (colors, typography, spacing)

---

## Summary

This is a **stakeholder-ready mobile banking demo**. Every pixel must look intentional. The chat sheet must feel native. The copy must sound like a real Barclays product team wrote it.

If something looks like a layout bug, *it is a bug* — fix it.
