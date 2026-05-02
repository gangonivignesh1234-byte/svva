# SVVA — Full Strategic Plan
> Complete strategy, roadmap, engagement model, monetisation, and scale architecture.

---

## Why SVVA Is Good

1. **Unique positioning** — No competitor combines Ayurvedic protocols with modern fitness tracking. SVVA owns an unoccupied market space.
2. **Right market, right timing** — India's ₹4.5 lakh crore wellness market growing at 20% YoY. Young Indians (18–35) want gym culture AND Vedic roots simultaneously.
3. **Soma Engine is genuinely unique** — No other app gives a daily personalized recovery protocol based on stress + morning clarity. Users open it every morning for this alone.
4. **Social accountability model is smart** — "Share food data not photos" is more honest, more private, and more informative than Snapchat's photo model. Proven: social accountability increases habit adherence by 65%.
5. **Streak + Circle creates network effects** — Once friends are on it, leaving means losing streak AND accountability group. This is how WhatsApp and Duolingo created lock-in without being manipulative.
6. **90-day protocols = built-in retention** — Users don't finish and leave. They come back every single day for 90 days. That's a retention engine money can't buy.
7. **Local-first data** — "No accounts, no cloud, your data stays on your device" is a genuine trust advantage in an era of health data privacy concerns.

---

## Why SVVA Was Bad (Original) + The Fix

| Weakness | Root Cause | Fix |
|---|---|---|
| Does everything, masters nothing | No prioritization | Layered reveal — features unlock progressively |
| Food database: 35 items | Hard-coded | Open Food Facts API — 3.2M foods, free |
| No backend — data lost if browser clears | localStorage | PWA + IndexedDB → Supabase Phase 2 |
| Fake AI features | No API integration | Google Vision, OpenAI Vision, Whisper |
| No onboarding | Jumped straight to features | 6-screen 90-second setup flow |
| Wearables are UI only | No real API calls | Web HealthKit (Safari iOS), Google Fit Web API |
| Vedic terms alienate gym users | One language only | Dual mode: Modern / Vedic / Both |
| No notifications | No service worker | PWA push notifications, max 3/day |

---

## The Snapchat Streak Social Feature — Full Assessment

**Verdict: Build it. It's the right idea.**

Why it works:
- Strava's social feed drives users to open the app 35x/month vs 15x for solo apps
- Social accountability is the #1 proven driver of fitness adherence
- "No photo, just food data" is smarter than Snapchat — honest, privacy-safe, informative
- Creates network effects: the more friends join, the more valuable the app becomes
- This is the difference between a tool and a platform
- Vedic health is communal by nature — Satsang model. SVVA's community aligns with its philosophy.

How it works (full spec):
1. User creates a Circle or joins via invite link
2. When logging any meal → option appears: "Share to Circle"
3. Shared card shows: Food name + Calories + Protein + Iron (no photo, no location)
4. Circle feed is chronological: "Vikram logged Moong Dal Khichdi · 320 kcal · P:14g · 5 min ago"
5. Streak counter per user: 🔥 Day 14 (resets if no log for 24h)
6. Weekly Circle report: who was most consistent, who hit their protein target, total group steps
7. Future: group challenges ("7-day no sugar"), leaderboards, reactions to logs

---

## Engagement Strategy

### Core Retention Loops

**Daily Loop (opens app every day):**
Morning → Check Soma score + daily protocol strip
→ Log breakfast → See mineral tracker update
→ Gym tracker → Log session
→ Evening → Check Tomorrow Checklist + streak

**Weekly Loop (comes back every week):**
→ Sunday: weigh in, take progress photo, review weekly analytics
→ Protocol phase progress review
→ Circle weekly summary arrives

**90-Day Loop (stays for the journey):**
→ Phase unlocks (Foundation → Activation → Building → Peak)
→ Milestone celebrations at Day 7, 21, 42, 90
→ Results visible in photos, body fat %, protocol completion %

### Gamification Model
- 🔥 Streak counter (daily log = streak maintained)
- 🏆 Protocol completion badges (Day 21, Day 42, Day 90)
- 📊 Weekly scores (nutrition %, activity %, sleep quality)
- 🎯 Goal reached celebrations (reference physique match)
- 👥 Circle rankings (friendly, not competitive)

### Notification Strategy (Max 3/day)
```
5:45 AM  → "Day 14 🔥 Your Agni Water is waiting. Morning protocol ready."
1:00 PM  → "Log your lunch — your Iron is at 40% today." (only if not logged)
9:00 PM  → "Tomorrow's plan is ready. Don't break your 13-day streak."
```
User controls: can turn off any notification type. Never spam. Respect = retention.

### Layered Feature Reveal
```
Day 1–3:   Onboarding + Home + Daily Protocol Strip + Food Log
Day 4:     Gym Tracker unlocks → "New: Track your workouts"
Day 7:     Body Tracking + Progress Photos → "Week 1 complete. Take your first photo."
Day 8:     Analytics unlocks → "7 days of data. See your trends."
Day 14:    Social Circles → "Invite friends to your accountability circle."
Day 21:    Advanced Protocol features → "Phase 1 complete. Unlock Phase 2."
```

---

## Build Sequence (Phase 1 — Current Sprint)

Priority order — maximum impact first:

### 1. Design System Foundation
- Font: Plus Jakarta Sans (load from Google Fonts)
- Colors: New dark palette + complete light mode rebuild
- Icons: Audit every icon, fix consistency
- Grid: strict 8px spacing system

### 2. Onboarding Flow (6 screens)
```
Screen 1: Welcome to SVVA
Screen 2: What's your goal? (multi-select)
Screen 3: Your details (age, height, weight, target)
Screen 4: Fitness level
Screen 5: Dietary preference + health restrictions
Screen 6: Your protocol is ready (recommended protocol shown)
```
First impression = first retention decision.

### 3. Home Screen Revamp
- Top: greeting + day counter + active protocol badge
- Quick Stats Row (horizontal scroll): Steps | Cal IN (red) | Cal BURNT (green) | Water | Fasting
- Daily Protocol Strip (horizontal scroll): time-blocked cards morning to night
- Soma Card (keep, enhance)
- Below fold: Sleep + Glucose + Weight (collapsible)

### 4. Gym Tracker (New Feature)
- Weekly split Mon–Sat with day tab horizontal scroll
- Default split editable
- Per day: add exercises, sets × reps × weight
- Session timer start/stop
- Previous session shown for reference

### 5. Profile + Wearables UI
- Editable profile card
- Device connection cards (Apple Health, Google Fit, Bluetooth, Coming Soon)
- Real HealthKit call for Safari iOS

### 6. Protocol Questionnaire + Full Timetable
- 6-question flow before first protocol start
- 4-tab timetable per protocol: Diet | Routine | Asanas | Herbs

### 7. Photo Improvements
- Front/back/gallery everywhere
- Unified camera picker component used across all photo inputs

### 8. Analytics Upgrade
- Day/Week/Month toggle
- Better charts per metric
- Nutrient radar chart

### 9. Tomorrow Checklist
- Evening generation
- Morning check-off

### 10. Social Circle UI (Mock)
- Circle creation flow
- Feed UI with mock shared logs
- Streak display
- Ready to wire to Supabase in Phase 2

---

## Phase 2 — Backend (1–2 months after Phase 1)

**Supabase setup:**
- User auth (email + Google OAuth)
- Data sync: all localStorage data migrates to Supabase
- Social: circles table, shares table, streaks table
- Real-time feed (Supabase Realtime)
- Cost: Free tier handles 50,000 users

**Real AI integrations:**
- Food scanning: Google Vision API → Open Food Facts match
- Body comparison: OpenAI Vision API (GPT-4V)
- Voice logging: OpenAI Whisper API
- Cost at scale: ~₹2–5 per active user per month

**Push notifications:**
- Web Push API + service worker
- Notification preferences per user
- Smart timing (don't notify if already opened app)

---

## Phase 3 — Native App + Scale

**React Native conversion:**
- Same component logic, minimal rewrite
- Native HealthKit (better than web version)
- Native push notifications
- App Store + Play Store presence

**Monetisation:**
```
Free tier:
  - 1 active protocol
  - Basic food log (top 100 foods)
  - 7-day analytics
  - 1 Circle (up to 5 members)

SVVA Pro (₹299/month or ₹2499/year):
  - All 5 protocols simultaneously
  - Full Open Food Facts database (3.2M foods)
  - Food scanning (AI)
  - Unlimited analytics history
  - Wearable sync
  - Circles (unlimited, up to 20 members)
  - Body comparison AI
  - Tomorrow checklist

SVVA Circle (₹99/user/month, min 5 users):
  - Group plan for family/friends
  - Shared dashboard
  - Coach/admin view
  - Custom protocol creation
```

**Go-to-market:**
- Beta: 50 hand-picked users (friend network, fitness communities)
- Validation: watch usage data, fix what's confusing
- Launch: 500 users via Instagram/YouTube content creators in wellness space
- Growth: Circle referral program ("Invite 3 friends → 30 days Pro free")
- PR angle: "The first app that combines Vedic wisdom with modern science"

---

## Technical Architecture

### Frontend Stack
```
React 18 (CDN → bundle in Phase 2)
Babel Standalone (DEV only → Webpack/Vite in Phase 2)
Tailwind CSS (CDN → purged build in Phase 2)
Lucide React (CDN)
Plus Jakarta Sans + Instrument Serif + Geist Mono (Google Fonts)
```

### APIs (Phase 1)
```
Open Food Facts   → https://world.openfoodfacts.org/api/v2/search
                    No API key needed. 3.2M foods. Free.
Web HealthKit     → window.webkit.messageHandlers (Safari iOS 16.4+)
Google Fit        → https://www.googleapis.com/fitness/v1/ (needs OAuth)
```

### APIs (Phase 2)
```
Supabase          → https://supabase.com (free tier, self-hostable)
Google Vision     → https://vision.googleapis.com/v1/images:annotate
OpenAI Vision     → https://api.openai.com/v1/chat/completions (GPT-4V)
OpenAI Whisper    → https://api.openai.com/v1/audio/transcriptions
Web Push          → Supabase handles push notification delivery
```

### Data Safety
```
Phase 1: IndexedDB via idb-keyval (survives browser clears, unlike localStorage)
Phase 2: Supabase Postgres (encrypted, backed up, GDPR compliant)
Export: JSON export always available (user owns their data)
```

---

## Competitive Positioning

| Feature | SVVA | MyFitnessPal | Strava | Apple Health | Calm |
|---|---|---|---|---|---|
| Vedic protocols | ✅ | ❌ | ❌ | ❌ | ❌ |
| Food tracking | ✅ | ✅✅ | ❌ | Partial | ❌ |
| Gym tracking | ✅ | Partial | ❌ | Partial | ❌ |
| Sleep tracking | ✅ | ❌ | ❌ | ✅ | ✅ |
| Social accountability | ✅ | Limited | ✅✅ | ❌ | ❌ |
| Ayurvedic herbs/drinks | ✅ | ❌ | ❌ | ❌ | ❌ |
| Body fat tracking | ✅ | ✅ | ❌ | Partial | ❌ |
| Indian food database | ✅✅ | Partial | ❌ | ❌ | ❌ |
| Offline first | ✅ | ❌ | ❌ | ✅ | ❌ |
| Privacy (no accounts needed) | ✅ | ❌ | ❌ | ✅ | ❌ |

**SVVA's moat:** The combination of Vedic + Modern + Social + Indian-first. No single competitor can copy this without rebuilding from scratch. The Vedic authenticity is not a feature — it's the brand.
