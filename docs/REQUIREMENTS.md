# SVVA — Complete Requirements
> Every single change requested across the full planning session. Word for word.

---

## Design & Visual

### REQ-001 — Icons
Icons currently look AI-generated. Replace with Apple-grade minimal aesthetic icons.
- Use Lucide React consistently
- size=20 for all UI icons, strokeWidth=1.5
- Consistent visual weight across all screens
- Icons must support text — never replace it at key touchpoints
- No decorative icons that add noise

### REQ-002 — Typography
Font should be better. Use a better font size. Better research on what top apps use.
- Replace Geist with **Plus Jakarta Sans** for all UI/body text
- Keep **Instrument Serif** for display headlines and hero numbers
- Keep **Geist Mono** for timers, numbers, mono data
- Strict sizing hierarchy: 10 / 12 / 13 / 15 / 17 / 22 / 28 / 36 / 48px
- No random font sizes outside this scale

### REQ-003 — Colors (Light Mode Fix)
When using light mode the colors haven't been looking good. Fix this completely.
- Complete light mode rebuild — warm parchment background #F7F4EF
- Cards: pure white #FFFFFF with proper box shadows
- Text: warm near-black #1C1917
- All accent colors (gold, green, blue, etc.) adjusted for light mode
- Dark mode refined but not broken — just polished
- Test both modes equally, both must look excellent

---

## Camera & Photos

### REQ-004 — Gallery + Camera Both Available
User must be able to add photos from gallery AND camera everywhere photos are used.
- Progress photos: gallery + camera
- Food photos: gallery + camera
- Reference physique: gallery + camera
- Current body photo: gallery + camera

### REQ-005 — Front & Back Camera
Give both options — gallery, camera (selfie/front), camera (back/rear).
- Front camera for: selfie body photos, skin photos, face tracking
- Back camera for: food photos, scenery, meal scans
- User explicitly chooses which mode on every camera trigger

---

## Layout & Structure

### REQ-006 — Full Structural Revamp
The placement of all tools should be revamped in a better way so the app looks optimized.
- Redesign layout of every screen
- Remove clutter, prioritize most-used features
- Better visual hierarchy throughout

### REQ-007 — Horizontal Scrollables (Selective)
Keep horizontal scrollable for things where it looks more aesthetic.
- Quick stats row on home (horizontal scroll)
- Daily protocol strip (horizontal scroll)
- Day tabs in gym tracker (horizontal scroll)
- Photo timelines in body screen (horizontal scroll)
- Protocols list stays VERTICAL — easier to read through
- Never force horizontal where vertical is more natural

---

## Home Screen

### REQ-008 — Steps Display
Show steps walked prominently on the home screen.
- Large number display
- Progress bar to daily goal
- Calories burnt from steps shown

### REQ-009 — Calories IN (Red)
Show number of calories the user has intaken in RED color.
- Pulled from daily food log
- Red color — clear visual indicator

### REQ-010 — Calories BURNT (Green)
Show calories burnt through steps/activity in GREEN color.
- Separate from calories in
- Green color — positive indicator
- Net balance shown (in - burnt)

### REQ-011 — Water in Liters (500ml increments)
Water tracker: show in liters, allow adding in 500ml increments.
- Replace "glasses" with liters
- Add 500ml at a time (0.5L per tap)
- Show as: 1.5L / 3.0L goal
- Visual fill indicator

### REQ-012 — Daily Protocol Strip (Home Screen)
On the main home page, give a daily protocol in a horizontal scrollable.
- Morning: herbal drink (Agni Water or protocol-specific)
- Breakfast: suggested meal (eggs, etc.)
- Lunch: suggestion
- Evening: herbal drink
- Post-dinner: suggestion/supplement
- Cards are tappable → mark as done
- Pulled dynamically from active protocol's timetable
- Green checkmark animation when marked done

---

## Protocols

### REQ-013 — Protocol Questionnaire (Onboarding)
Before user starts a protocol, take a basic questionnaire.
- 6 questions:
  1. Age, current height, current weight, target weight
  2. Current fitness level (sedentary / light / moderate / active)
  3. Primary goal (fat loss / muscle / hair / skin / anti-aging)
  4. Health issues / dietary restrictions
  5. Available time for exercise per day
  6. Gym access? (yes / no / home gym)
- Protocol adapts: calorie targets, exercise intensity, herb timing
- Saved to profile for future use

### REQ-014 — Full Protocol Timetable
Give a full timetable for each protocol — diet, routine, asanas, herbs.
- 4 tabs per protocol: Diet | Routine | Asanas | Herbs
- Diet: full day meal plan with timing (6AM, 8AM, 12PM, 3PM, 7PM, 9PM)
- Routine: wake time, daily habits, sleep time
- Asanas: which poses, morning vs evening, duration
- Herbs: which drink, exact timing, why (benefit)

### REQ-015 — Protocol Progress Tracking
Tracking should be done for the protocols that the user wants to do.
- Daily check-in: tap each task as completed
- Streak counter per protocol
- Overall completion percentage
- Visual progress through phases

### REQ-016 — Nutrient Tracking Per Protocol
All nutrients required for the protocol should be tracked through food + drinks logged daily.
- Protein, vitamins, zinc, magnesium, iron, potassium always visible
- Target set by protocol (e.g., Code Hair needs more zinc/iron)
- Auto-filled from food log + drinks logged
- Warning if falling short of protocol requirements

---

## Activity & Gym

### REQ-017 — Full Activity Tracking
Track all activity — steps, active minutes, everything.
- Steps from device motion / wearable
- Active minutes
- Calories burnt from all activity

### REQ-018 — Gym Tracker (Weekly Split)
Give a gym feature with Monday–Saturday split.
- Default: Chest+Triceps / Back+Biceps / Shoulders / Legs / Abs / Rest
- User can rename each day
- User can swap which muscles go on which day

### REQ-019 — Editable Gym Variants
User can edit his gym variants.
- Add custom exercises per muscle group
- Remove or reorder exercises
- Save custom routines

### REQ-020 — Session Timer
Track timing from when gym started till how much was done.
- Start timer when session begins
- Live running timer visible during session
- Stop → auto-saves duration
- Shows: 45 min, 1h 10min, etc.

### REQ-021 — Sets/Reps Logging
Track every single thing in gym.
- Per exercise: sets × reps × weight
- Add/remove sets inline
- Notes field per exercise
- History: see what was done last session for same exercise

---

## Body & Progress Photos

### REQ-022 — Front/Back/Gallery for Progress Photos
Give both options — gallery, front camera, back camera for body/hair/skin photos.

### REQ-023 — Reference Physique + Current Photo
Add reference image of the body the user wants (celebrity, hero, anyone).
- Upload from gallery or capture from camera
- User adds their current body photo too
- Side-by-side comparison view

### REQ-024 — AI Body Analysis + Timeline
AI should analyze what differentiation is happening and how many days to get the same body.
- Phase 1: Calculated analysis using body fat % difference
- Phase 2: Real OpenAI Vision API for visual comparison
- Output: key differences identified, aggressive timeline, sustainable timeline
- Updated each time new photos added

---

## Profile & Wearables

### REQ-025 — Editable Profile
User can change his details at any time.
- Name, age, height, body weight
- Goal weight, activity level, dietary preference
- Primary goal (links to active protocol)

### REQ-026 — Apple Watch Connection
Connect Apple Watch — tracks steps, heart rate, everything.
- Web HealthKit API (works in Safari iOS 16.4+)
- Reads: steps, heart rate, sleep, active calories, resting HR
- Prominent, accessible — not buried in settings
- Real data, not simulated

### REQ-027 — Other Device Connections
Connect Boat watch, other devices that track steps, heart rate.
- Google Fit Web API (Android users)
- Web Bluetooth API (generic BLE devices, Chrome)
- Fitbit Web API
- Boat/Noise: "Coming Soon" — honest about what's not ready
- Each shown as connection card with live sync status

---

## Food & Scanning

### REQ-028 — Complete Food Scanning
Completely scanning the food the user logs in — every single thing tracked.
- Camera captures food
- Phase 1: Manual confirm from search results
- Phase 2: Google Vision API auto-identifies food
- All nutrients tracked: protein, carbs, fat, iron, zinc, magnesium, potassium, vitamins
- Open Food Facts API: 3.2 million foods (free, no rate limit)

---

## Analytics & Data Visualization

### REQ-029 — Better Data Visualizations + Daily/Weekly/Monthly
Show better data visualizations with daily, monthly, weekly tracking.
- Toggle: Day | Week | Month at top of analytics
- Steps: bar chart
- Sleep: area chart with phases
- Calories in vs out: dual bar (red vs green)
- Weight: smooth line with trend
- Water: progress ring
- Nutrients: radar chart
- Tap any data point to see detail

---

## Tomorrow Checklist

### REQ-030 — Tomorrow Checklist
Give a tomorrow checklist — things the user can do tomorrow to keep prepared.
- Generated each evening (visible after 8pm)
- Includes: asanas for tomorrow, food/meals to prep, gym session (muscle group + exercises), herbs to take (with timing), sleep target
- Based on active protocol's schedule
- User checks off items next morning as done

---

## Social Feature (Phase 2 — UI Now, Backend Later)

### REQ-031 — Social Circles (Snapchat Streak Model)
Like Snapchat streak — when users in a group share food logs, it creates accountability.
- User creates or joins a Circle (2–20 people)
- When logging a meal → option to Share to Circle
- What's shared: food name + calories + key macros (NO photo)
- Circle feed shows: "Arjun logged Dal Rice · 420 kcal · P:18g — 2 min ago"
- Streak counter on each person: 🔥 Day 14
- Weekly summary: who hit protein, most consistent member, group steps total
- Streak resets if no log for 24 hours (gentle, not punishing)

---

## General UX Rules (from discussions)

- Horizontal scroll for quick things (stats, strips, day tabs, timelines)
- Vertical scroll for content to read (protocols, food list, analytics)
- No onboarding wall — ease users in progressively
- Every feature needs an empty state (no blank screens)
- Mobile first — designed for 375px, perfect on 390px (iPhone 14)
- Offline first — everything works without internet
- Never use word "AI" unless powered by real AI API
- Max 3 push notifications per day
- Light mode must be as good as dark mode — always test both
