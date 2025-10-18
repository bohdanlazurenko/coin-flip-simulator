export type FlipResult = {
  id: string;
  result: 'heads' | 'tails';
  timestamp: Date;
};

export type Statistics = {
  totalFlips: number;
  headsCount: number;
  tailsCount: number;
  headsPercentage: number;
  tailsPercentage: number;
  currentStreak: {
    type: 'heads' | 'tails' | null;
    count: number;
  };
  longestStreak: {
    type: 'heads' | 'tails';
    count: number;
  };
};