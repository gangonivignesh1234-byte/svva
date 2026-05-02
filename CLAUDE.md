# SVVA — Full Project Brain & Context
> This file contains the complete memory, decisions, requirements, strategy, and architecture for the SVVA app. Read this fully before writing any code or making any decisions.

---

## What Is SVVA

SVVA is a Vedic + modern science health tracking app. It combines Ayurvedic wisdom (Soma protocols, herbal drinks, asanas, pranayama) with modern fitness tracking (gym, food logging, body fat, steps, sleep). It is being built as a full-scale consumer app targeting primarily Indian users aged 18–35.

**Tagline:** Your Vedic Health System  
**Core concept:** No other app combines Ayurvedic protocols with modern science tracking. SVVA owns an unoccupied market space.  
**Target:** India's ₹4.5 lakh crore wellness market, growing 20% YoY.

---

## Current App State

- Single HTML file (`app/index.html`) — 2386 lines
- Built with React 18 (CDN), Babel Standalone, Tailwind CSS (CDN), Lucide React icons
- All data stored in localStorage with `svva_` prefix
- No backend, no accounts, no sync
- Works in any browser, installable as PWA

**Current screens:**
1. Home — Soma Protocol, Sleep, Steps, Water, Fasting, Glucose, Weight
2. Protocols — Code 90, Code Hair, Code Glow, Code Youth, Code Physique
3. Food — Log meals, mineral tracker, 35-item Indian food database
4. Body — Body fat (Navy method), Reference physique, Progress photos
5. More — Herbal Drinks, Asanas, Pranayama, Analytics, Settings

---

## The Soma Engine (Core Unique Feature)

```javascript
calculate(battleIntensity, dawnClarity) {
  const hinge = battleIntensity * 0.6 + dawnClarity * 0.4;
  if (hinge > 0.75) → Amrita (Critical Restore)
  if (hinge > 0.45) → Yajna (Balanced Recovery)  
  else              → Tapas (Active Recovery)
}
```
This is the most unique feature. No other app has this. Protect and enhance it.

---

## Complete Requirements (30 Points)

### Design System
1. **Icons** — Apple-grade minimal aesthetic. Use Lucide consistently: size=20, strokeWidth=1.5. No decorative icons. Icons support text, never replace it.
2. **Typography** — Replace Geist with **Plus Jakarta Sans** for all UI text. Keep **Instrument Serif** for display/hero numbers. Keep **Geist Mono** for timers/numbers. Strict size scale: 10/12/13/15/17/22/28/36/48px.
3. **Colors** — Full dark mode refinement + complete light mode rebuild (was broken). See DESIGN.md for full palette.

### Photos & Camera
4. **Gallery + Camera everywhere** — both options available at every photo input point.
5. **Front + back camera** — selfie mode and rear camera mode both available. User chooses.

### Layout
6. **Structural revamp** — placement of all tools optimized. Horizontal scrollable for cards/quick stats. Protocols stay vertical.
7. **Horizontal scrollables** — use for: quick stats row, daily protocol strip, day tabs in gym tracker, photo timelines.

### Home Screen
8. **Steps** — prominent display with goal progress.
9. **Calories IN** — shown in red.
10. **Calories BURNT** (from steps/activity) — shown in green.
11. **Water** — shown in liters, added in 500ml increments (not glasses).
12. **Daily Protocol Strip** — horizontal scrollable timeline: Morning drink → Breakfast → Lunch → Evening drink → Post-dinner. Pulled from active protocol. Tap to mark done.

### Protocols
13. **Onboarding questionnaire** — 6 questions before starting any protocol: age/height/weight, fitness level, goal, health issues, time available, gym access. Protocol customizes to answers.
14. **Full timetable per protocol** — 4 tabs: Diet (meals + timing), Routine (habits), Asanas (poses + when), Herbs (drink + timing + why).
15. **Protocol progress tracking** — daily check-ins, streak counter, completion percentage.
16. **Nutrient tracking tied to protocol** — protein/vitamins/zinc/magnesium always visible vs protocol targets. Auto-filled from food + drinks logged.

### Activity & Gym
17. **Full activity tracking** — steps + all activities.
18. **Gym tracker** — Weekly split Mon–Sat: Chest+Tri / Back+Bi / Shoulders / Legs / Abs / Rest. User edits split.
19. **Editable exercises** — user customizes exercises per muscle group.
20. **Session timer** — start to finish, saves duration.
21. **Sets/reps/weight logging** per exercise.

### Body & Progress
22. **Front + back + gallery** for all progress photos.
23. **Reference celebrity photo + current user photo** — side-by-side comparison.
24. **AI body analysis** — differences identified, realistic timeline to reach reference physique. (Phase 1: calculated. Phase 2: real OpenAI Vision API.)

### Profile & Wearables
25. **Editable profile** — name, age, height, weight, goal weight, activity level, dietary preference.
26. **Apple Watch / iPhone Health** — Web HealthKit API (Safari iOS 16.4+) for real steps, HR, sleep, calories.
27. **Google Fit** — Web API for Android.
28. **Other devices** — Web Bluetooth API where supported. Boat/Noise = "Coming Soon" (honest).

### Data & Analytics
29. **Better data visualizations** — bar charts, area charts, radar charts. Daily/Weekly/Monthly toggle.
30. **Food scanning** — camera identifies food, auto-logs. (Phase 1: manual confirm. Phase 2: Google Vision API.)

### Planning
31. **Tomorrow checklist** — generated each evening: asanas, meals, gym session, herbs, all from active protocol.

### Social (Phase 2 — UI built now, backend later)
32. **Social Circles** — small group (2–20 people) accountability.
33. **Food sharing** — when logging meal, share to Circle: food name + calories + macros. NO photo. Honest data.
34. **Streak system** — consecutive day logging streak shown on profile + in Circle.

---

## Design System Decisions

### Typography
```
Display/Hero: Instrument Serif (keep)
UI/Body:      Plus Jakarta Sans (replace Geist)
Numbers:      Geist Mono (keep)

Google Fonts import:
https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&display=swap
```

### Icon Rules
- Library: Lucide React (keep, it's good)
- Size: always 20px for nav/UI, 16px for inline, 24px for feature icons
- strokeWidth: always 1.5
- Color: always from CSS variables, never hardcoded
- Rule: if an icon needs a label to be understood, the icon is wrong. Pick a better one.

### Color Palette

**Dark Mode (refined):**
```css
--bg:          #0A0A0A
--bg-card:     rgba(255,255,255,0.055)
--bg-card-2:   rgba(255,255,255,0.028)
--bg-strong:   rgba(255,255,255,0.09)
--border:      rgba(255,255,255,0.10)
--border-soft: rgba(255,255,255,0.055)
--text:        #F2F0ED
--text-dim:    rgba(242,240,237,0.55)
--text-faint:  rgba(242,240,237,0.30)
--gold:        #E8C97A
--gold-deep:   #B8932A
--glow-a:      rgba(200,155,80,0.15)
--glow-b:      rgba(120,80,160,0.10)
--green:       #4ADE80
--blue:        #60A5FA
--purple:      #A78BFA
--orange:      #FB923C
--red:         #F87171
```

**Light Mode (complete rebuild):**
```css
--bg:          #F7F4EF
--bg-card:     #FFFFFF
--bg-card-2:   rgba(255,255,255,0.70)
--bg-strong:   #FFFFFF
--border:      rgba(0,0,0,0.08)
--border-soft: rgba(0,0,0,0.05)
--text:        #1C1917
--text-dim:    #6B5E52
--text-faint:  #A8998E
--gold:        #92692A
--gold-deep:   #6B4C16
--glow-a:      rgba(146,105,42,0.08)
--glow-b:      rgba(120,80,160,0.05)
--green:       #16A34A
--blue:        #2563EB
--purple:      #7C3AED
--orange:      #EA580C
--red:         #DC2626

/* Light mode card shadow */
box-shadow: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)
```

---

## Architecture Decisions

### Phase 1 — Now (HTML + PWA)
- Single HTML file, React CDN, Babel, Lucide, Plus Jakarta Sans
- localStorage → IndexedDB (via idb-keyval CDN) for data safety
- PWA: add manifest.json + service worker for offline + install
- Open Food Facts API for food database (3.2M foods, free)
- Web HealthKit API for Apple Watch data (Safari iOS only)
- All social UI built but with mock data (no backend yet)

### Phase 2 — Backend (1-2 months)
- Supabase: user accounts, cross-device sync, social circles feed
- Google Vision API: real food scanning
- OpenAI Vision API: real body comparison analysis
- OpenAI Whisper API: voice food logging
- Push notifications via Web Push API

### Phase 3 — Scale
- React Native (same component logic)
- App Store + Play Store
- Subscription: Free / SVVA Pro ₹299/mo / Circle ₹99/user/mo
- B2B: SVVA for Gyms, Yoga Studios, Nutritionists

### Data Structure (localStorage keys)
```
svva_theme          → 'dark' | 'white'
svva_startDay       → ISO date string
svva_soma_battle    → 0.0–1.0
svva_soma_dawn      → 0.0–1.0
svva_sleep          → { bedtime, wake, quality, deep, rem, light, history[] }
svva_steps          → { count, date }
svva_water          → { liters, goal_liters }  ← changing from glasses to liters
svva_fasting        → { active, start }
svva_glucose        → { current, history[], meals[] }
svva_weight         → { current, target, start, history[] }
svva_measurements   → { height, waist, neck }
svva_reference      → { photo, targetBF, name }
svva_progress_photos → { body[], hair[], skin[] }
svva_food_{date}    → [] array of food entries
svva_drinks_logged  → [] array
svva_profile        → { name, age, height, weight, goalWeight, activityLevel, diet, goal }
svva_onboarded      → boolean
svva_gym_{date}     → { split, sessions[] }
svva_protocol_active → protocol id
svva_tasks_{id}_{phase} → [] done tasks
```

---

## Engagement Strategy

### Retention Mechanics
1. **Daily streak** — consecutive logging days. Shown on home screen. Lost if no log for 24h.
2. **Protocol milestones** — Day 7, Day 21, Day 42, Day 90 celebrations
3. **Layered reveal** — features unlock progressively. Day 1: basics. Day 4: gym. Day 8: social.
4. **Tomorrow checklist** — pulls user back every evening to plan next day
5. **Soma score** — personalized daily, makes every morning different

### Social Mechanics (Phase 2)
- Circles: 2–20 people. Invite via link.
- Log meal → option to share to Circle
- Shared: food name + macros (no photo — more honest)
- Streak shown: "🔥 Day 14" next to name
- Weekly summary: who hit protein, most consistent, group steps

### Notification Strategy (max 3/day)
- 5:45 AM: Morning ritual reminder + day number + streak
- 1:00 PM: Lunch log reminder (only if no lunch logged)
- 9:00 PM: Tomorrow checklist ready + streak at risk warning

---

## What Makes SVVA Good
1. Unique positioning — no competitor combines Vedic + modern science
2. Right market — India's wellness boom, ₹4.5L crore and growing
3. Soma Engine — genuinely unique daily personalization
4. Social model — smarter than competitors (data not photos)
5. 90-day programs — built-in daily return mechanic
6. Local-first data — privacy trust builder

## What Was Bad + How We Fixed It
1. ~~Does everything, masters nothing~~ → Layered reveal: show features progressively
2. ~~35-item food database~~ → Open Food Facts API: 3.2 million foods
3. ~~No backend, data lost if browser clears~~ → PWA + IndexedDB → Supabase Phase 2
4. ~~Fake AI features~~ → Real APIs: Google Vision, OpenAI Vision, Whisper
5. ~~No onboarding~~ → 6-screen 90-second setup flow
6. ~~Wearables are UI only~~ → Real Web HealthKit (Safari), Google Fit Web API
7. ~~Vedic terms alienate gym users~~ → Dual language mode: Modern / Vedic / Both
8. ~~No notifications~~ → PWA push notifications, max 3/day, user controlled

---

## Build Order (Phase 1)
1. Design system (fonts, colors, icons) — foundation
2. Onboarding flow — 6 screens
3. Home screen revamp (stats row, daily protocol strip, water in liters)
4. Gym tracker (weekly split, session timer, sets/reps)
5. Profile + wearables UI
6. Protocol questionnaire + full timetable (4 tabs)
7. Photo improvements (front/back/gallery everywhere)
8. Analytics upgrade (day/week/month, better charts)
9. Tomorrow checklist
10. Social Circle UI (mock data, ready for backend)

---

## Key Rules For All Development
- Never add a feature without its empty state
- Never use the word "AI" unless the feature is actually powered by an AI API
- Every screen needs a loading state consideration
- Mobile-first always — test at 375px width
- Max 3 notifications per day — respect the user
- Light mode must look as good as dark mode — test both always
- localStorage key prefix is always `svva_`
- No external analytics or tracking without user consent
- Offline first — app must work with zero internet
