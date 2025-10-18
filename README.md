# Coin Flip Simulator

A virtual coin flip simulator built with Next.js 14, TypeScript, and Tailwind CSS. Features animated coin flips, comprehensive statistics tracking, and flip history.

## Features

- 🪙 Animated 3D coin flip with realistic rotation
- 📊 Real-time statistics tracking (percentages, streaks)
- 📜 Complete flip history with timestamps
- 🎨 Beautiful, responsive UI with Tailwind CSS
- 🔄 Reset functionality to start fresh
- 📱 Mobile-friendly design

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Beautiful SVG icons

## Project Structure

```
coin-flip-simulator/
├── app/
│   ├── api/
│   │   └── ping/
│   │       └── route.ts      # Health check endpoint
│   ├── globals.css            # Global styles and Tailwind imports
│   ├── layout.tsx             # Root layout component
│   └── page.tsx               # Main page with coin flip logic
├── components/
│   ├── Coin.tsx               # Animated coin component
│   ├── FlipHistory.tsx        # History display component
│   └── Statistics.tsx         # Statistics display component
├── lib/
│   └── types.ts               # TypeScript type definitions
├── public/                    # Static assets
├── .gitignore                 # Git ignore rules
├── next.config.js             # Next.js configuration
├── package.json               # Dependencies and scripts
├── postcss.config.js          # PostCSS configuration
├── README.md                  # Project documentation
├── tailwind.config.ts         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## How It Works

1. **Coin Flip Logic**: Uses `Math.random()` to generate a 50/50 chance for heads or tails
2. **Animation**: CSS 3D transforms create a realistic coin flip animation
3. **Statistics**: Calculates percentages, current streaks, and longest streaks in real-time
4. **History**: Stores all flip results with unique IDs and timestamps
5. **State Management**: React hooks manage the application state locally

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
