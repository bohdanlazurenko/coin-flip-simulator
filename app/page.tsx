'use client';

import { useState, useEffect } from 'react';
import { FlipResult, Statistics } from '@/lib/types';
import Coin from '@/components/Coin';
import FlipHistory from '@/components/FlipHistory';
import StatisticsComponent from '@/components/Statistics';

export default function Home() {
  const [history, setHistory] = useState<FlipResult[]>([]);
  const [isFlipping, setIsFlipping] = useState(false);
  const [currentResult, setCurrentResult] = useState<'heads' | 'tails' | null>(null);
  const [stats, setStats] = useState<Statistics>({
    totalFlips: 0,
    headsCount: 0,
    tailsCount: 0,
    headsPercentage: 0,
    tailsPercentage: 0,
    currentStreak: {
      type: null,
      count: 0,
    },
    longestStreak: {
      type: 'heads',
      count: 0,
    },
  });

  const calculateStats = (flipHistory: FlipResult[]): Statistics => {
    const totalFlips = flipHistory.length;
    const headsCount = flipHistory.filter(f => f.result === 'heads').length;
    const tailsCount = flipHistory.filter(f => f.result === 'tails').length;
    
    const headsPercentage = totalFlips > 0 ? (headsCount / totalFlips) * 100 : 0;
    const tailsPercentage = totalFlips > 0 ? (tailsCount / totalFlips) * 100 : 0;

    // Calculate current streak
    let currentStreak = { type: null as 'heads' | 'tails' | null, count: 0 };
    if (totalFlips > 0) {
      const lastResult = flipHistory[flipHistory.length - 1].result;
      let streakCount = 0;
      for (let i = flipHistory.length - 1; i >= 0; i--) {
        if (flipHistory[i].result === lastResult) {
          streakCount++;
        } else {
          break;
        }
      }
      currentStreak = { type: lastResult, count: streakCount };
    }

    // Calculate longest streak
    let longestStreak = { type: 'heads' as 'heads' | 'tails', count: 0 };
    let tempStreak = { type: 'heads' as 'heads' | 'tails', count: 0 };
    
    for (let i = 0; i < flipHistory.length; i++) {
      if (i === 0 || flipHistory[i].result !== flipHistory[i - 1].result) {
        tempStreak = { type: flipHistory[i].result, count: 1 };
      } else {
        tempStreak.count++;
      }
      
      if (tempStreak.count > longestStreak.count) {
        longestStreak = { ...tempStreak };
      }
    }

    return {
      totalFlips,
      headsCount,
      tailsCount,
      headsPercentage,
      tailsPercentage,
      currentStreak,
      longestStreak,
    };
  };

  useEffect(() => {
    setStats(calculateStats(history));
  }, [history]);

  const flipCoin = () => {
    if (isFlipping) return;

    setIsFlipping(true);
    
    setTimeout(() => {
      const result: 'heads' | 'tails' = Math.random() < 0.5 ? 'heads' : 'tails';
      const newFlip: FlipResult = {
        id: Date.now().toString(),
        result,
        timestamp: new Date(),
      };
      
      setCurrentResult(result);
      setHistory(prev => [...prev, newFlip]);
      setIsFlipping(false);
    }, 1000);
  };

  const resetHistory = () => {
    setHistory([]);
    setCurrentResult(null);
    setStats({
      totalFlips: 0,
      headsCount: 0,
      tailsCount: 0,
      headsPercentage: 0,
      tailsPercentage: 0,
      currentStreak: {
        type: null,
        count: 0,
      },
      longestStreak: {
        type: 'heads',
        count: 0,
      },
    });
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Coin Flip Simulator</h1>
          <p className="text-gray-600">Test your luck with virtual coin flips</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Coin Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-8">
              <Coin result={currentResult} isFlipping={isFlipping} />
              
              <div className="mt-8 text-center">
                <button
                  onClick={flipCoin}
                  disabled={isFlipping}
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 transform hover:scale-105 active:scale-95"
                >
                  {isFlipping ? 'Flipping...' : 'Flip Coin'}
                </button>
                
                {history.length > 0 && (
                  <button
                    onClick={resetHistory}
                    className="ml-4 px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-colors duration-200 transform hover:scale-105 active:scale-95"
                  >
                    Reset
                  </button>
                )}
              </div>

              {currentResult && !isFlipping && (
                <div className="mt-6 text-center">
                  <p className="text-2xl font-bold text-gray-800">
                    Result: <span className={currentResult === 'heads' ? 'text-yellow-600' : 'text-gray-600'}>
                      {currentResult.toUpperCase()}
                    </span>
                  </p>
                </div>
              )}
            </div>

            <FlipHistory history={history} />
          </div>

          {/* Statistics Section */}
          <div className="lg:col-span-1">
            <StatisticsComponent stats={stats} />
          </div>
        </div>
      </div>
    </div>
  );
}