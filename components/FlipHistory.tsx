import { FlipResult } from '@/lib/types';

interface FlipHistoryProps {
  history: FlipResult[];
}

export default function FlipHistory({ history }: FlipHistoryProps) {
  if (history.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Flip History</h2>
        <p className="text-gray-500 text-center py-8">No flips yet. Click the button to start!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Flip History</h2>
      <div className="space-y-2 max-h-64 overflow-y-auto">
        {history.slice().reverse().map((flip) => (
          <div
            key={flip.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  flip.result === 'heads'
                    ? 'bg-yellow-400 text-yellow-900'
                    : 'bg-gray-400 text-gray-900'
                }`}
              >
                <span className="text-xs font-bold">
                  {flip.result === 'heads' ? 'H' : 'T'}
                </span>
              </div>
              <span className="font-medium capitalize text-gray-700">
                {flip.result}
              </span>
            </div>
            <span className="text-sm text-gray-500">
              {flip.timestamp.toLocaleTimeString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}