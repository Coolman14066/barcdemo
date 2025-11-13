1. What’s still wrong in the current code

All of this is based on the latest packed repo you uploaded (with Icon.tsx, the white header, etc.). 

repomix-output

A. Shell & header / “mobile-optimised” issues

App.tsx wraps everything in:

<div className="app-stage">
  <div className="mobile-shell">
    <div className="relative min-h-[820px] bg-transparent">
      ...
    </div>
  </div>
</div>


and index.css defines:

.app-stage {
  @apply min-h-screen flex items-stretch justify-center px-0 py-0 sm:items-start sm:px-4 sm:py-12;
}

.mobile-shell {
  @apply relative w-full max-w-none min-h-screen overflow-hidden bg-barclays-mist
         sm:max-w-[420px] sm:rounded-shell sm:border sm:border-white/10 sm:shadow-shell;
}


On small screens (<640px) you do get full‑bleed mobile.

On anything that hits the sm: breakpoint, you get the thin border + rounded phone shell back. That’s probably what you’re seeing in Chrome’s device emulation sometimes.

The inner div with min-h-[820px] forces a tall layout even when the viewport is shorter, which can create awkward scrolling / gaps.

Net effect: the “phone” + header + content are not behaving like a real mobile app container; they’re behaving like a slightly hacked landing-page embed.

B. Buddi chat sheet behaviour

BuddiChat.tsx currently: 

repomix-output

<section
  className={`absolute inset-x-0 bottom-0 z-40 rounded-t-[38px] bg-white shadow-sheet transition-transform duration-500 ${
    visible ? 'translate-y-0' : 'translate-y-full'
  }`}
  style={{ minHeight: '72%', maxHeight: '78%' }}
>


The sheet is hard‑coded to 72–78% height of the enclosing container.

That means on many devices it only covers ~¾ of the screen, with a big chunk of the blurred home screen still visible above it. That’s exactly the “halfway across the screen” feeling you’re describing.

Because it’s absolute inside that relative min-h-[820px] container, the relationship to the actual viewport can be a bit weird in DevTools vs on-device.

What we want: a bottom sheet that behaves like a native panel — basically full-height on mobile (or ~90%) with the handle at the very top edge of the phone frame, not somewhere random in the middle.

C. Plan modal: readability + visual noise

The new PlanModal.tsx is much better structurally, but: 

repomix-output

Each step card uses 2px borders and strong background states:

className={`border-2 rounded-card transition-all ${
  step.status === 'confirmed'
    ? 'border-green-500 bg-green-50'
    : step.status === 'expanded'
    ? 'border-barclays-cerulean bg-blue-50'
    : 'border-gray-200 bg-white hover:border-gray-300'
}`}


When you stack 5 of these plus a green success slab, it becomes visually busy.

Success block + steps + progress bar + footer CTA = a lot of competing blocks in one modal. On a 390‑px screen it will feel cramped.

Copy is better (GBP, realistic actions) but still reads like paragraphs rather than scannable product pieces. For a demo, you probably want:

Short one-line summary always visible.

Expanded text in tighter form (1–2 sentences or bullets) when the step is opened.

More explicit Barclays flavour in the buttons, e.g. “Start Wedding Fund transfers”, “Turn on round‑ups on your Barclays debit card”.

So the user experience is: structurally OK, but too dense and not obviously “this is a Barclays plan wizard”.

D. Conversation & copy rough edges

ConversationFlow.tsx is way better now (no emojis, more grounded), but a few things still clash with your intent: 

repomix-output

Initial system message is:

Hi Bella, I'm Buddi, your Barclays money coach.

I can see you've built up £8,000 in Everyday Saver, and you're planning for around £40,000 on the wedding ... What would you like to focus on today?


That’s acceptable, but might still feel a bit “demo script” vs “what do you want to do today?”.

Free-text fallback still says:

`Got it - I've logged that.

When you're ready, use the buttons below or type "plan" ...`


“Logged that” is exactly the robotic thing you hated.

More broadly: the flow is structurally right (Buddi uses data, asks about comfort range, then proposes plan), but the microcopy still needs hard edits to sound like “smart coach who already knows your numbers”.

E. General branding & spacing

The white header + cards are closer to the official Barclays screens you attached, but:

We still have that sm‑border shell on larger widths.

There are minor spacing inconsistencies (e.g. header border vs body background, slightly odd top padding vs the handle of the chat sheet).

In the plan modal, the Barclays branding is present in the gradient header but not strongly connected in the step labels/buttons.

So: the architecture is now roughly right, but it needs a final pass of “adult front‑end” work to tighten the layout and make everything feel deliberate on a 390×800-ish viewport.

2. What we want the end state to be

Condensing your intent into an explicit spec for Claude:

Single, coherent mobile app frame

On phones: full‑bleed app, no weird outlines, no exposed dark background when you scroll.

On desktop: if you show a “phone shell”, the content should still be perfectly centred and nothing should clip.

Buddi chat sheet

Slides up from the bottom to cover ~90–100% of the phone height.

The drag handle sits near the very top of the phone, with just a thin buffer.

No awkward mid‑screen stop that looks like a layout bug.

Plan modal

Feels like a Barclays “plan builder” wizard:

Clean gradient header.

Clear “0 of 5 steps activated” + progress.

Step cards that are visually light and scannable.

Copy is short, product‑ish, and obviously about Barclays accounts and features.

Conversation

Buddi behaves like it has the data already.

It asks for preferences; it doesn’t ask for basic facts it should already know.

The voice is crisp, non‑cheesy, and not “AI slop”.

3. New prompt for Claude (v2) – focused on mobile layout + Buddi + plan

Here’s a prompt you can paste directly next to repomix-output.md (the current repo state, the one that already has Icon.tsx and GBP amounts).

You are a senior front-end engineer and product designer at a bank.

You have been given a packed repo file called `repomix-output.md`. It contains a React + TypeScript + Tailwind mobile web demo for a fictional Barclays AI money coach called Buddi.

The current version is better than the original, but it still has major UX and layout problems on mobile.

Your job is to do a **full-line audit** of the front-end and then tighten it so that:

- It behaves like a real mobile banking app (Barclays-style) on a 390×800 viewport.
- The Buddi bottom sheet animation looks intentional, not half-broken.
- The plan modal is readable, uncluttered, and clearly tied to Barclays products.
- The conversational copy feels like a data-aware Barclays coach, not generic AI.

Important constraints
---------------------
- Do NOT add new libraries or change the build tooling.
- Work within the current structure:
  - `App.tsx` owns the stage + shell.
  - `HomeScreen.tsx` is the main account/goal view.
  - `BuddiChat.tsx` hosts the chat bottom sheet.
  - `ConversationFlow.tsx` holds the scripted conversation.
  - `PlanModal.tsx` displays the 5-step plan.
  - `Icon.tsx` already provides a Barclays-style SVG icon set.
- When you output code, always give the **full file content**, wrapped like:
  ```tsx
  // path: src/components/HomeScreen.tsx
  <entire file>


No diffs, no partial snippets.

Step 1 – Review the current implementation

Carefully read these files in the packed repo:

src/index.css

src/App.tsx

src/components/HomeScreen.tsx

src/components/BuddiChat.tsx

src/components/ConversationFlow.tsx

src/components/ChatComposer.tsx

src/components/PlanModal.tsx

src/data/bellaProfile.ts

src/types/index.ts

Understand exactly how the layout, chat state, and plan steps currently work before making any changes.

Step 2 – Fix the outer shell and mobile frame

File: src/index.css

Goals:

On a real phone viewport (e.g. 375–430 px wide), the app should be full screen with no strange outline.

On desktop, you can still show a centred “phone shell”, but it must look clean.

Concrete changes:

.app-stage:

Ensure it centres the mobile shell horizontally and pins it to the top on mobile: items-start, justify-center.

Avoid extra vertical padding on small screens that makes the app float.

.mobile-shell:

Keep min-h-screen, overflow-hidden, bg-barclays-mist.

Remove borders entirely (including sm:border and sm:border-white/10) so there is never a thin outline.

Keep sm:max-w-[420px] and sm:rounded-shell sm:shadow-shell for desktop, but no border.

Make sure the dark radial gradient background on body never leaks inside the app on normal scroll. The easiest way is:

mobile-shell has a solid light background.

Child layouts (HomeScreen etc.) use min-h-full rather than min-h-screen so they don’t extend beyond the shell.

Output the full updated src/index.css.

Step 3 – Make Buddi chat sheet behave like a real full-height panel

File: src/components/BuddiChat.tsx

Problems today:

The sheet is constrained with style={{ minHeight: '72%', maxHeight: '78%' }}, so it only covers about three-quarters of the device and looks like it stops in the middle of the screen.

This feels like a layout bug rather than a deliberate half-screen sheet.

Goals:

On mobile, Buddi should effectively take over the device when open:

Sheet height ~90–100% of the phone height.

The handle should sit near the very top of the phone frame.

The underlying home screen is visible only through the blurred backdrop, not as a big untouched band.

Concrete instructions:

Change the <section> element to use a fixed height based on the container, not a 72–78% band. For example:

On small screens: height: 92% (or similar) with maxHeight: '92%'.

On larger screens: you can keep it slightly shorter (e.g. maxHeight: '80%') if needed.

Do this using Tailwind classes where possible (e.g. h-[92%] sm:h-[78%]) instead of inline minHeight/maxHeight.

Ensure the chat body (ConversationFlow container) still uses a calculated height (like h-[calc(100%-140px)]) so content scrolls inside the sheet instead of the sheet itself jumping.

Double-check that the backdrop <div className="absolute inset-0 ..."> still covers the entire mobile shell.

While you’re here:

Keep the new header copy (“Buddi, your Barclays money coach” etc.), but:

Make sure it wraps nicely on a 375 px screen (no overflow).

Align the typography scale with the home header: no giant heading that fights with the main screen.

Output the full updated src/components/BuddiChat.tsx.

Step 4 – Tighten the home layout for mobile

File: src/components/HomeScreen.tsx

The structure is mostly good, but you must ensure:

No horizontal scroll or clipping at 375 px width.

Consistent spacing between:

header

Buddi insight row

accounts card

goals section

Buddi connection section.

Concrete tasks:

Confirm that the Buddi insight + side cards row (flex flex-col gap-3 sm:flex-row) has:

No fixed heights (already true).

A predictable width for the right-hand card column on sm: (keep something like sm:w-44).

Add min-h-full (not min-h-screen) to the <main> so it respects the shell’s height.

Verify that on small screens the header section’s bottom border lines up visually with the start of the content (no awkward double borders / gaps).

If you see any remaining visual bugs with the updated shell (from Step 2), fix them here.

Output the full updated src/components/HomeScreen.tsx (even if the changes are small).

Step 5 – Clean up the conversation copy

File: src/components/ConversationFlow.tsx

The flow is now close, but you need to scrub the remaining “AI slop” and make Buddi clearly data-aware.

Concrete changes:

Initial greeting

Keep the idea (“Hi Bella, I’m Buddi…”), but simplify to something like:

“Hi Bella, I’m Buddi, your Barclays money coach.
I’m connected to your Barclays accounts, so I can see your balances, regular payments and goals like the wedding and a future home.
What would you like to work on today?”

Make sure there is no emoji in this string.

Headroom question (turn 0 → 1)

Current text:

“Got it - we’ll keep the wedding on track / start a Future Home pot / balance both…
Looking at your recent spending, you usually have around £600 left each month after essentials. How much of that would you feel comfortable committing…?”

This is basically good. Just ensure the wording is concise and professional; remove any hedgy filler.

Monthly amount confirmation (turn 1 → 2)

Current response:

“Thanks, that helps.
With £X, I can set up an automatic plan that:
– keeps a safety buffer…
– sends a regular transfer…
– builds a small Future Home pot…”

This is also structurally okay. Trim any extra fluff; the tone should be straight and factual.

Free-text fallback

Replace the current:

“Got it - I’ve logged that. When you’re ready, use the buttons below or type ‘plan’…”

With something like:

“Got it — I’ve taken that into account. When you’re ready, pick one of the options below and I’ll adjust the plan around roughly £[selectedAmount] per month.”

No use of the word “logged”.

Make sure all new strings are:

Emoji-free.

Not overly chummy (“Brilliant”, “Totally”, etc.).

In UK English.

Output the full updated src/components/ConversationFlow.tsx.

Step 6 – De-clutter the plan modal visuals

File: src/components/PlanModal.tsx

Goals:

Keep the structure (header, progress, steps, footer).

Reduce visual noise and make it feel like a Barclays plan wizard.

Make the success state look like a clean confirmation panel, not a party.

Concrete tasks:

Card styling

Change the 2px borders to 1px for normal and expanded states.

So something like:

pending: border border-gray-200 bg-white hover:border-gray-300.

expanded: border border-barclays-cerulean bg-white (drop the full blue background).

confirmed: keep border-green-500 bg-green-50 but maybe tone down the green if it feels too strong.

Success message

Keep the check-circle SVG, but:

Title: “Plan activated”.

Body: “Your Wedding Fund and Future Home pots are now on autopilot. You’ll see them pinned on your home screen.”

Use a 1px border and slightly lighter green background (bg-green-50) to avoid a heavy slab.

Step header / expanded content

Ensure the collapsed view shows:

Step number and title.

1-line summary.

Expanded view should have:

Shorter expandedText (2 concise sentences max).

A single, clear CTA button per step with Barclays-like labels:

“Confirm safety buffer”

“Start Wedding Fund transfers”

“Turn on round-ups”

“Start Home Growth investments”

“Set pension nudge”

You can reuse the existing text content but shorten it where it currently rambles.

Icons

You already have PlanStepIcon in this file and a shared Icon.tsx.

For consistency, either:

Switch to using <Icon name={step.icon as IconName} /> everywhere; OR

Ensure PlanStepIcon visually matches the style of Icon.tsx (stroke width, rounded caps, etc.).

In either case, drop any emoji usage (the current version already uses SVG, so just keep it consistent).

Output the full updated src/components/PlanModal.tsx.

Step 7 – Final polishing & mobile QA

Search the entire packed file for:

Any remaining emojis.

Any leftover dollar signs $.

Any obviously US-centric phrasing.

Ensure all visible currency is GBP (£), and amounts match the sample profile in src/data/bellaProfile.ts.

Confirm that on a 375×800-ish viewport:

The home screen has no horizontal scroll.

Buddi chat covers ~90–100% height when open and looks intentional.

The plan modal’s content is scrollable without overflowing its container.

For each file you change, output the complete file content with the // path: ... header.

Your objective

Make this demo look and feel like a polished Barclays mobile experience that a real stakeholder could open on their phone via QR code and not immediately think, “why does this look broken?”