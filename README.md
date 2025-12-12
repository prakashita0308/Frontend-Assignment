# Quiz App — Next.js + TypeScript + Tailwind + Framer Motion

## Overview
This is a fully responsive Quiz Application built using Next.js, TypeScript, Tailwind CSS, and Framer Motion.  
The UI is designed to match the provided Figma prototype with pixel-perfect accuracy, including gradients, title box, mascot positioning, animations, and interactive quiz flow.

---

## Tech Stack Used
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hooks
- Vercel (optional deployment)

---

## Setup Instructions

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd quiz-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

### 4. Open in browser
```
http://localhost:3000
```

### 5. Build for production
```bash
npm run build
npm start
```

---

## Key Features

### Pixel-Perfect UI
- Full gradient background identical to Figma prototype
- Glass-style card frame using gradient borders and shadows
- Styled question cards and option blocks matching design specs

### Quiz Functionality
- Select and change answers
- Navigation between questions
- Auto-submit on last question
- Final results screen with score
- Restart button

### Animations
- Smooth fade/slide transitions via Framer Motion
- Hover lift animation on options
- Progress bar animation

### Mascot Interaction
- Mascot paw + speech bubble positioned exactly like Figma
- Only appears on question 1
- Layered properly with z-index

### Accessibility
- Keyboard-friendly
- ARIA roles and labels included

---

## Assumptions Made
- Number of questions is fixed and provided locally (`questions.ts`)
- Mascot appears only on the first question as shown in the prototype
- No backend storage required; quiz runs fully client-side
- Answers can be changed before submitting, but not after viewing results
- Layout values intentionally fixed for Figma accuracy

---

## Time Spent on the Assignment

| Task | Duration |
|------|----------|
| Project setup | 30 minutes |
| Quiz logic implementation | 1 hour |
| UI styling based on Figma | 2.5 hours |
| Gradient + border fine-tuning | 1 hour |
| Animations using Framer Motion | 30 minutes |
| Mascot + speech bubble placement | 45 minutes |
| Final testing & refinements | 45 minutes |
| **Total Time Spent** | **~7 hours** |

---

## Folder Structure
```
/app
  globals.css
  layout.tsx
  page.tsx
/components
  icons.tsx
  Mascot.tsx
  Quiz.tsx
  ResultScreen.tsx
/data
  questions.ts
/public/assets
  speech-bubble.png
  mascot.gif
```

---

