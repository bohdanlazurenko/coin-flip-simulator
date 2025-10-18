'use client';

interface CoinProps {
  result: 'heads' | 'tails' | null;
  isFlipping: boolean;
}

export default function Coin({ result, isFlipping }: CoinProps) {
  return (
    <div className="relative w-48 h-48 mx-auto">
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 preserve-3d ${
          isFlipping ? 'animate-flip' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipping ? '' : result === 'tails' ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Heads Side */}
        <div
          className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-2xl flex items-center justify-center border-4 border-yellow-700"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="text-center">
            <svg
              className="w-24 h-24 mx-auto mb-2 text-yellow-800"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
            </svg>
            <span className="text-2xl font-bold text-yellow-900">HEADS</span>
          </div>
        </div>

        {/* Tails Side */}
        <div
          className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-br from-gray-400 to-gray-600 shadow-2xl flex items-center justify-center border-4 border-gray-700"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="text-center">
            <svg
              className="w-24 h-24 mx-auto mb-2 text-gray-800"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1.81.45 1.61 1.67 1.61 1.16 0 1.6-.64 1.6-1.46 0-.84-.68-1.22-2.05-1.6-1.43-.4-3.01-1.03-3.01-3.07 0-1.61 1.19-2.73 2.9-3.05V5h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.63-1.63-1.63-1.01 0-1.46.54-1.46 1.34 0 .74.49 1.05 1.94 1.46 1.54.43 3.11 1.05 3.11 3.23 0 1.77-1.26 2.86-2.85 3.35z" />
            </svg>
            <span className="text-2xl font-bold text-gray-900">TAILS</span>
          </div>
        </div>
      </div>
    </div>
  );
}