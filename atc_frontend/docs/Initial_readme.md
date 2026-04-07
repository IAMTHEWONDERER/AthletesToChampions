# Athletes *to* **Champions** — Frontend

> Mobile-first, bento-style React frontend powered by TailwindCSS v4 + Vite.

---

## 🧱 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18+ |
| Build Tool | Vite |
| Styling | TailwindCSS v4 (Vite plugin) |
| Motion | Framer Motion |
| Routing | React Router v7 |
| State | Zustand |
| Data Fetching | TanStack Query (React Query) |
| Forms | React Hook Form + Zod |
| Icons | Lucide React |
| Charts / Tracking | Recharts |

---

## 🚀 Getting Started

### 01 — Create Your Project

```bash
npm create vite@latest atc-frontend
cd atc-frontend
```

Choose **React** + **TypeScript** when prompted.

### 02 — Install TailwindCSS

```bash
npm install tailwindcss @tailwindcss/vite
```

### 03 — Configure the Vite Plugin

`vite.config.ts`

```ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

### 04 — Import TailwindCSS

`src/index.css`

```css
@import "tailwindcss";

@import url('https://fonts.googleapis.com/css2?family=Boldonse&family=Playwrite+IE:wght@100..400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@theme {
  --font-body: 'Poppins', sans-serif;
  --font-display: 'Boldonse', cursive;
  --font-accent: 'Playwrite IE', cursive;

  --color-atc-black: #000000;
  --color-atc-white: #FFFFFF;
  --color-atc-purple: #7B2FBE;
  --color-atc-yellow: #F5C518;
  --color-atc-red:    #E63946;
  --color-atc-green:  #2DC653;
  --color-atc-blue:   #1D7FE8;
}
```

### 05 — Start Dev Server

```bash
npm run dev
```

---

## 📱 Mobile-First Design Principles

AtC is designed **mobile-first**. Every component starts at the smallest screen and scales up.

```
Mobile  → sm  (640px)
Tablet  → md  (768px)
Desktop → lg  (1024px)
Wide    → xl  (1280px)
```

**In practice:**

```tsx
// ✅ Correct — mobile base, scale up
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

// ❌ Avoid — desktop base, scaling down
<div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
```

Key mobile-first rules followed across AtC:
- Touch targets are minimum `44x44px`
- Text is never smaller than `14px` on mobile
- Bento cards stack to full-width on small screens
- No horizontal scroll ever
- Tap/swipe interactions preferred over hover-only patterns

---

## 🧩 Bento Layout System

AtC uses a **bento grid** layout — asymmetric, card-based, visually dynamic.

```tsx
// Example Bento Grid
<div className="grid grid-cols-2 md:grid-cols-4 grid-rows-auto gap-3 p-4">

  {/* Large hero card - full width on mobile, spans 2 cols on desktop */}
  <div className="col-span-2 md:col-span-2 row-span-2 rounded-3xl bg-black text-white p-6">
    {/* Main stat or highlight */}
  </div>

  {/* Small accent card */}
  <div className="col-span-1 rounded-3xl border border-black p-4">
    {/* Quick stat */}
  </div>

  {/* Wide banner card */}
  <div className="col-span-2 md:col-span-4 rounded-3xl bg-atc-purple text-white p-5">
    {/* Banner */}
  </div>

</div>
```

### Bento Card Variants

| Variant | Background | Border | Usage |
|---------|-----------|--------|-------|
| Default | White | Black | Standard stat card |
| Dark | Black | None | Hero / featured card |
| Rainbow | Accent color | None | Banners, highlights |
| Ghost | Transparent | Black | Secondary info |

---

## 🎨 Button Components

### Primary Button

```tsx
<button className="
  font-display          // Boldonse
  px-6 py-3
  rounded-full          // pill shape
  bg-transparent
  border-2 border-black
  text-black
  hover:bg-atc-purple hover:border-atc-purple hover:text-white
  transition-all duration-300
">
  Get Started
</button>
```

### Secondary Button

```tsx
<button className="
  font-accent           // Playwrite IE
  px-6 py-3
  rounded-full
  bg-black
  border-2 border-white
  text-white
  hover:bg-atc-blue hover:border-atc-blue
  transition-all duration-300
">
  Learn More
</button>
```

---

## 📦 Recommended Libraries

### ⚛️ Core React Libraries

| Library | Purpose | Install |
|---------|---------|---------|
| **React Router v7** | Client-side routing | `npm i react-router-dom` |
| **Zustand** | Lightweight global state | `npm i zustand` |
| **TanStack Query** | Server state, caching, fetching | `npm i @tanstack/react-query` |
| **React Hook Form** | Performant forms | `npm i react-hook-form` |
| **Zod** | Schema validation for forms | `npm i zod @hookform/resolvers` |
| **Axios** | HTTP client for FastAPI calls | `npm i axios` |
| **Lucide React** | Clean, consistent icon set | `npm i lucide-react` |
| **Recharts** | Charts for athlete tracking data | `npm i recharts` |
| **date-fns** | Date manipulation | `npm i date-fns` |
| **clsx + tailwind-merge** | Conditional class merging | `npm i clsx tailwind-merge` |

---

### 🎬 Motion & Animation Libraries

#### 1. **Framer Motion** ⭐ (Recommended)
The go-to animation library for React. Declarative, powerful, and pairs perfectly with bento layouts.

```bash
npm install framer-motion
```

```tsx
import { motion } from 'framer-motion'

// Bento card entrance animation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, ease: 'easeOut' }}
  whileHover={{ scale: 1.02 }}
  className="rounded-3xl border border-black p-6"
>
  {/* card content */}
</motion.div>
```

Best for: page transitions, card animations, gesture-based interactions, layout animations.

---

#### 2. **React Spring**
Physics-based animations. More natural, spring-feel motion — great for athletic/dynamic feel.

```bash
npm install @react-spring/web
```

Best for: number counters, stat animations, drag interactions, fluid transitions.

---

#### 3. **Auto Animate**
Zero-config animation. Just add one line and list items, card grids, and conditional renders animate automatically.

```bash
npm install @formkit/auto-animate
```

```tsx
import { useAutoAnimate } from '@formkit/auto-animate/react'

const [parent] = useAutoAnimate()
<ul ref={parent}>
  {items.map(item => <li key={item.id}>{item.name}</li>)}
</ul>
```

Best for: lists, filtered grids, dashboard updates — no config needed.

---

#### 4. **GSAP (GreenSock)**
Industry-standard animation engine. Most powerful option for complex sequences and scroll-driven animations.

```bash
npm install gsap
```

Best for: scroll animations, complex timelines, canvas-based effects.

---

#### 5. **Lottie React**
Renders After Effects animations as lightweight JSON. Great for loading states, empty states, and trophy/achievement animations.

```bash
npm install lottie-react
```

Best for: micro-animations, celebration effects, branded loading screens.

---

### 🏅 Recommended Animation Stack for AtC

```
Framer Motion     → Page transitions, bento card hover/enter effects
Auto Animate      → Dashboard list updates, live tracking feeds  
React Spring      → Stat counters, score animations
Lottie React      → Achievement unlocks, loading states
```

---

## 🗂️ Folder Structure

```
src/
├── assets/             # Fonts, images, icons
├── components/
│   ├── ui/             # Buttons, cards, badges, inputs
│   ├── bento/          # Bento grid layout components
│   ├── charts/         # Recharts wrappers
│   └── motion/         # Reusable Framer Motion wrappers
├── pages/              # Route-level page components
├── hooks/              # Custom React hooks
├── stores/             # Zustand state stores
├── lib/
│   ├── api.ts          # Axios instance + FastAPI endpoints
│   └── utils.ts        # clsx + tailwind-merge helpers
├── styles/
│   └── index.css       # Tailwind import + @theme tokens
└── main.tsx
```

---

## 🔗 Connecting to the FastAPI Backend

```ts
// src/lib/api.ts
import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
})
```

```ts
// .env
VITE_API_URL=http://localhost:8000
```

---

## 📌 Status

> 🛠️ **Active side project** — frontend in development.

---

*Built with passion. From Athletes — to Champions.*