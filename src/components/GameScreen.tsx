import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="min-h-full flex flex-col bg-[radial-gradient(circle_at_30%_10%,_rgba(14,255,160,0.16),_transparent_45%),_linear-gradient(180deg,_rgba(1,15,13,0.95)_0%,_rgba(3,21,20,0.95)_35%,_rgba(1,15,13,1)_100%)]">
      <header className="flex items-center justify-between p-4 border-b border-cyan-500/30 backdrop-blur-sm bg-black/30">
        <button
          onClick={onReset}
          className="text-[#a2f9cb] text-sm font-medium rounded px-3 py-1.5 hover:bg-cyan-600/30 transition"
        >
          ← Reset
        </button>
        <h1 className="text-xl font-black tracking-wide text-[#c8ffee] drop-shadow-[0_1px_8px_rgba(0,255,145,0.9)]">Soc Ops Bingo</h1>
        <div className="w-16" />
      </header>

      <div className="p-4 text-center">
        <p className="text-sm text-[#a8e8c7]">Tap squares to mark and complete lines. Focus on social intuition and connection.</p>
      </div>

      {hasBingo && (
        <div className="mx-4 mb-3 rounded-lg border border-amber-300/40 bg-amber-800/20 text-amber-100 text-center py-2 font-bold text-sm shadow-[0_0_20px_rgba(255,214,97,0.45)]">
          🎉 BINGO! You skipped the competition. Great work.
        </div>
      )}

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-xl p-3 border border-cyan-500/30 rounded-2xl bg-black/20 shadow-[inset_0_0_50px_rgba(0,255,159,0.20)]">
          <BingoBoard
            board={board}
            winningSquareIds={winningSquareIds}
            onSquareClick={onSquareClick}
          />
        </div>
      </div>
    </div>
  );
}
