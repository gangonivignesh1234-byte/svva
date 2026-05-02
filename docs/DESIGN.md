# SVVA — Design System
> Every visual decision. Follow this precisely when building any screen.

---

## Typography

### Font Stack
```css
/* Google Fonts import — use this exact string */
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&display=swap');

/* Usage */
--font-display: 'Instrument Serif', serif;     /* Hero numbers, section titles */
--font-body:    'Plus Jakarta Sans', -apple-system, sans-serif; /* All UI text */
--font-mono:    'Geist Mono', monospace;        /* Timers, numeric data, codes */
```

### Why Plus Jakarta Sans?
- Used by top 2024–25 apps (Notion, Linear, many wellness apps)
- Superior optical sizing vs Geist
- Warm, modern, friendly — matches Vedic wellness aesthetic
- Excellent readability on mobile at all sizes
- Variable font: 300–700 weight range

### Size Scale (strict — no deviations)
```
10px — labels, tags, timestamps, units
12px — secondary text, descriptions, hints
13px — body text, list items, card content
15px — primary text, button labels, input text
17px — sub-headlines, card titles
22px — section headlines
28px — screen titles
36px — hero numbers (steps, calories)
48px — hero display (body fat %, large metrics)
```

### Weight Scale
```
300 — light accents only (very rare)
400 — body text, descriptions
500 — labels, navigation, secondary actions
600 — card titles, primary actions, key data
700 — hero numbers, screen titles (in Plus Jakarta Sans)
```

### Instrument Serif Usage
- Large hero numbers with serif treatment (Soma score, day counter)
- Section headers on home screen ("Good morning", "Code Library")
- Protocol names and phase names
- Never use for body text or UI labels

---

## Color System

### Dark Mode (default)
```css
:root, [data-theme="dark"] {
  /* Backgrounds */
  --bg:          #0A0A0A;        /* Page background */
  --bg-card:     rgba(255,255,255,0.055);  /* Card base */
  --bg-card-2:   rgba(255,255,255,0.028); /* Card inner */
  --bg-strong:   rgba(255,255,255,0.09);  /* Highlighted card */

  /* Borders */
  --border:      rgba(255,255,255,0.10);
  --border-soft: rgba(255,255,255,0.055);

  /* Text */
  --text:        #F2F0ED;                  /* Primary — warm white */
  --text-dim:    rgba(242,240,237,0.55);   /* Secondary */
  --text-faint:  rgba(242,240,237,0.30);   /* Tertiary, labels */

  /* Brand */
  --gold:        #E8C97A;    /* Primary brand, CTAs, active states */
  --gold-deep:   #B8932A;    /* Button hover, gradient end */
  --glow-a:      rgba(200,155,80,0.15);    /* Warm glow */
  --glow-b:      rgba(120,80,160,0.10);    /* Cool glow */

  /* Semantic */
  --green:       #4ADE80;    /* Success, calories burnt, completed */
  --blue:        #60A5FA;    /* Water, sleep, info */
  --purple:      #A78BFA;    /* REM sleep, recovery, Amrita */
  --orange:      #FB923C;    /* Steps, energy, active */
  --red:         #F87171;    /* Calories in, warning, iron */

  /* Other */
  --blur:        28px;
  --radius:      16px;        /* Reduced from 20px — more refined */
  --radius-sm:   10px;
  --radius-lg:   24px;
}
```

### Light Mode (complete rebuild)
```css
[data-theme="light"] {
  /* Backgrounds */
  --bg:          #F7F4EF;     /* Warm parchment — NOT cold white */
  --bg-card:     #FFFFFF;     /* Pure white cards */
  --bg-card-2:   rgba(255,255,255,0.70);
  --bg-strong:   #FFFFFF;

  /* Borders */
  --border:      rgba(0,0,0,0.08);
  --border-soft: rgba(0,0,0,0.05);

  /* Text */
  --text:        #1C1917;     /* Warm near-black */
  --text-dim:    #6B5E52;     /* Warm medium grey */
  --text-faint:  #A8998E;     /* Warm light grey */

  /* Brand */
  --gold:        #92692A;     /* Deep warm gold for light bg */
  --gold-deep:   #6B4C16;
  --glow-a:      rgba(146,105,42,0.08);
  --glow-b:      rgba(120,80,160,0.05);

  /* Semantic — adjusted for light bg */
  --green:       #16A34A;
  --blue:        #2563EB;
  --purple:      #7C3AED;
  --orange:      #EA580C;
  --red:         #DC2626;
}

/* Light mode card shadow (critical — replaces glass blur) */
.glass, .glass-flat {
  box-shadow: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04);
}
```

---

## Icon System

### Library: Lucide React
Already installed. Don't change. The problem was usage, not the library.

### Usage Rules (strict)
```jsx
/* Standard UI icon */
<Icon name="House" size={20} strokeWidth={1.5} style={{ color: 'var(--text-dim)' }} />

/* Active state */
<Icon name="House" size={20} strokeWidth={2} style={{ color: 'var(--gold)' }} />

/* Feature icon (larger, on card) */
<Icon name="Activity" size={24} strokeWidth={1.5} style={{ color: 'var(--orange)' }} />

/* Inline with text */
<Icon name="Check" size={14} strokeWidth={2} />
```

### Size Guide
```
14px — inline with small text, checkbox marks
16px — inline with body text, table icons
20px — navigation bar, standard UI icons
24px — feature icons on cards, section headers
28px — large feature icons, empty states
32px — hero icons, onboarding screens
```

### strokeWidth Guide
```
1.5 — default for all icons
2.0 — active/selected state, emphasis
1.0 — very large icons (32px+) where 1.5 looks too heavy
```

### Icon Selection Principles
- **Navigation:** House, BookOpen, Utensils, Activity, LayoutGrid
- **Actions:** Plus, Trash2, Edit2, Check, X, ChevronRight, ChevronLeft
- **Metrics:** Footprints (steps), Flame (calories), Droplets (water), Moon (sleep)
- **Health:** Heart, Activity, Weight (scale), Dumbbell, Timer
- **Social:** Users, Share2, MessageCircle, Trophy
- Never use: abstract shapes, icons that need explanation, inconsistent styles

---

## Spacing System (8px grid)

```
4px  — micro gap (between icon and label)
8px  — small gap (between related elements)
12px — medium gap (between card sections)
16px — standard padding (card inner padding minimum)
20px — card padding (standard)
24px — section gap
32px — screen section gap
48px — major section gap
```

### Screen Padding
```
Horizontal page padding: 20px (both sides)
Safe area top: max(16px, env(safe-area-inset-top))
Safe area bottom: max(16px, env(safe-area-inset-bottom))
Nav bar height: 72px (taller than before — more breathing room)
```

---

## Component Specs

### Cards
```css
/* Glass card (dark mode) */
.glass {
  background: linear-gradient(160deg, var(--bg-strong), var(--bg-card-2));
  backdrop-filter: blur(28px) saturate(180%);
  border: 0.5px solid var(--border);
  border-radius: var(--radius);
  box-shadow: 0 4px 24px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.07);
}

/* Flat card */
.glass-flat {
  background: var(--bg-card);
  border: 0.5px solid var(--border-soft);
  border-radius: var(--radius);
}

/* Light mode override */
[data-theme="light"] .glass,
[data-theme="light"] .glass-flat {
  backdrop-filter: none;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04);
}
```

### Buttons
```css
/* Primary CTA */
background: linear-gradient(135deg, var(--gold), var(--gold-deep));
color: #1a0f00;
font-weight: 600;
font-size: 15px;
padding: 14px 24px;
border-radius: 14px;
border: none;

/* Secondary */
background: var(--bg-card);
border: 0.5px solid var(--border);
color: var(--text);
font-weight: 500;

/* Destructive */
background: rgba(248,113,113,0.12);
border: 0.5px solid rgba(248,113,113,0.3);
color: var(--red);
```

### Input Fields
```css
background: var(--bg-card);
border: 0.5px solid var(--border);
border-radius: var(--radius-sm);
padding: 12px 14px;
font-size: 15px;
color: var(--text);
font-family: var(--font-body);

/* Focus */
border-color: var(--gold);
outline: none;
```

### Bottom Navigation
```css
height: 72px;
background: rgba(10,10,10,0.88);  /* dark */
backdrop-filter: blur(40px) saturate(180%);
border-top: 0.5px solid var(--border);
border-radius: 28px 28px 0 0;  /* rounded top */

/* Light mode */
background: rgba(247,244,239,0.92);
```

### Progress Bars
```css
/* Track */
height: 6px;
border-radius: 999px;
background: var(--border-soft);

/* Fill */
border-radius: 999px;
background: linear-gradient(90deg, {color}80, {color});
transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
```

### Chips / Pills
```css
padding: 6px 14px;
border-radius: 999px;
font-size: 12px;
font-weight: 500;

/* Active */
background: {color}20;
border: 0.5px solid {color}60;
color: {color};

/* Inactive */
background: var(--bg-card);
border: 0.5px solid var(--border-soft);
color: var(--text-dim);
```

---

## Animation Tokens

```css
@keyframes fadeUp {
  from { opacity:0; transform:translateY(12px); }
  to   { opacity:1; transform:translateY(0); }
}

@keyframes popIn {
  from { opacity:0; transform:scale(0.94) translateY(16px); }
  to   { opacity:1; transform:scale(1) translateY(0); }
}

@keyframes breathe {
  0%,100% { transform:scale(1); opacity:.75; }
  50%     { transform:scale(1.07); opacity:.45; }
}

@keyframes slideInRight {
  from { opacity:0; transform:translateX(16px); }
  to   { opacity:1; transform:translateX(0); }
}

@keyframes checkmark {
  from { transform:scale(0) rotate(-10deg); }
  to   { transform:scale(1) rotate(0deg); }
}

/* Duration tokens */
--duration-fast:   150ms
--duration-normal: 280ms
--duration-slow:   400ms
--ease-spring:     cubic-bezier(0.16, 1, 0.3, 1)
--ease-smooth:     cubic-bezier(0.4, 0, 0.2, 1)
```

---

## Screen-Specific Design Notes

### Home Screen
- Background: radial gradient glow (gold top-left, purple bottom-right) over --bg
- Quick stats row: 5 cards, horizontal scroll, each card ~120px wide, fixed height 96px
- Daily protocol strip: horizontal scroll, cards ~160px wide, 120px tall
- Greeting uses Instrument Serif 32px
- Day counter: Geist Mono for number, Instrument Serif for "/90"

### Protocol Cards
- Emoji in a colored rounded square (52×52px, radius 14px)
- Protocol name in Instrument Serif
- Phase pills in horizontal scroll at bottom of card
- Progress bar uses protocol's brand color

### Food Log
- Macro summary grid: 2×2, each cell has label (10px uppercase) + value (Instrument Serif 22px)
- Mineral bars: thin (4px height), color-coded
- Food entry row: emoji/photo left, name + time + macros right

### Gym Tracker
- Day tabs: horizontal scroll, Mon–Sat pills
- Active day: gold background
- Exercise row: name left, sets×reps right, expand for weight entry
- Timer: Geist Mono 48px, breathing animation when running

### Analytics
- Charts use thin strokes (2px), filled areas at 10% opacity
- Grid lines very subtle (3% opacity)
- Data labels in Geist Mono
- Toggle (Day/Week/Month): pill switcher, gold active state

---

## Accessibility Rules
- Minimum touch target: 44×44px (Apple HIG standard)
- Text contrast: minimum 4.5:1 for body text, 3:1 for large text
- Focus states: visible gold outline on keyboard navigation
- Never rely on color alone to convey meaning (always pair with text/icon)
- Font size minimum: 12px (never below this)
