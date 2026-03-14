import type { BingoSquareData } from '../types';

interface ScavengerHuntProps {
  cards: BingoSquareData[];
  onItemToggle: (id: number) => void;
  onReset: () => void;
  hasBingo: boolean;
  onDismiss: () => void;
}

export function ScavengerHunt({ cards, onItemToggle, onReset, hasBingo, onDismiss }: ScavengerHuntProps) {
  const total = cards.filter((card) => !card.isFreeSpace).length;
  const completed = cards.filter((card) => card.isMarked && !card.isFreeSpace).length;
  const progressPercent = Math.round((completed / total) * 100);

  return (
    <div className="min-h-full bg-black/10 p-4">
      <div className="mx-auto max-w-3xl rounded-2xl border border-cyan-400/40 bg-slate-900/60 p-4 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#c8ffe5]">Scavenger Hunt Mode</h2>
          <button
            onClick={onReset}
            className="rounded px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#8deac4] bg-cyan-500/20 hover:bg-cyan-500/30"
          >
            New Card Set
          </button>
        </div>

        <div className="mb-4 h-2 w-full rounded-full bg-cyan-500/20">
          <div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-teal-300" style={{ width: `${progressPercent}%` }} />
        </div>
        <p className="mb-4 text-sm text-[#b2fcd8]">Progress: {completed}/{total} checked ({progressPercent}%)</p>

        <ul className="grid grid-cols-1 gap-2 max-h-[60vh] overflow-y-auto">
          {cards.map((card) => (
            <li key={card.id} className="rounded-lg border border-cyan-500/20 bg-black/40 p-3">
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  checked={card.isMarked}
                  disabled={card.isFreeSpace}
                  onChange={() => onItemToggle(card.id)}
                  className="mt-1 h-4 w-4 accent-cyan-300"
                />
                <span className={`text-sm ${card.isFreeSpace ? 'text-cyan-300/70 italic' : 'text-[#e5ffe8]'}`}>
                  {card.text}
                  {card.isFreeSpace ? ' (FREE SPACE)' : ''}
                </span>
              </label>
            </li>
          ))}
        </ul>

        {hasBingo && (
          <div className="mt-4 rounded-lg border border-amber-300/40 bg-amber-500/20 p-3 text-center text-amber-100">
            🎉 Bingo achieved in scavenger list!
            <button
              onClick={onDismiss}
              className="ml-3 rounded bg-amber-200 px-2 py-1 text-xs font-bold text-slate-800"
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
