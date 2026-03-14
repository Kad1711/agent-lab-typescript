import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-3 text-center border rounded-lg transition-all duration-150 select-none min-h-[72px] text-sm leading-snug font-semibold';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-amber-500/25 border-amber-300 text-amber-100 shadow-[0_0_10px_rgba(255,214,97,0.8)]'
      : 'bg-cyan-500/20 border-cyan-400 text-cyan-100 shadow-[0_0_6px_rgba(0,255,159,0.4)]'
    : 'bg-black/30 border-cyan-200/30 text-[#b5ffe6] hover:bg-cyan-500/20 active:scale-[0.98]';

  const freeSpaceClasses = square.isFreeSpace ? 'text-[#ffff99] underline' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="break-words">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-1 right-1 text-lg leading-none text-[#00ff9f]">✓</span>
      )}
    </button>
  );
}
