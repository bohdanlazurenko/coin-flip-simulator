import { Statistics } from '@/lib/types';

interface StatisticsProps {
  stats: Statistics;
}

export default function Statistics({ stats }: StatisticsProps) {
  if (stats.totalFlips === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Statistics</h2>
        <p className="text-gray-500 text-center py-8">Start flipping to see statistics!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Statistics</h2>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-4 bg-yellow-50 rounded-lg">
          <div className="text-3xl font-bold text-yellow-600">{stats.headsCount}</div>
          <div className="text-sm text-gray-600 mt-1">Heads</div>
          <div className="text-lg font-semibold text-yellow-700 mt-2">
            {stats.headsPercentage.toFixed(1)}%
          </div>
        </div>
        
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="text-3xl font-bold text-gray-600">{stats.tailsCount}</div>
          <div className="text-sm text-gray-600 mt-1">Tails</div>
          <div className="text-lg font-semibold text-gray-700 mt-2">
            {stats.tailsPercentage.toFixed(1)}%
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
          <span className="text-gray-700">Total Flips</span>
          <span className="font-bold text-blue-600">{stats.totalFlips}</span>
        </div>
        
        {stats.currentStreak.type && (
          <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
            <span className="text-gray-700">Current Streak</span>
            <span className="font-bold text-green-600">
              {stats.currentStreak.count} {stats.currentStreak.type}
            </span>
          </div>
        )}
        
        <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
          <span className="text-gray-700">Longest Streak</span>
          <span className="font-bold text-purple-600">
            {stats.longestStreak.count} {stats.longestStreak.type}
          </span>
        </div>
      </div>
    </div>
  );
}