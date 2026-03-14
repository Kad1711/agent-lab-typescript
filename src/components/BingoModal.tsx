interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,255,159,0.12),_rgba(0,0,0,0.78))] flex items-center justify-center p-4 z-50">
      <div className="relative rounded-3xl border border-cyan-400/30 bg-[#031e1b]/95 p-7 max-w-sm w-full text-center shadow-[0_0_40px_rgba(0,255,159,0.5)] animate-[pulse_0.8s_ease-in-out_1]">
        <div className="text-6xl mb-3 animate-[bounce_0.6s_ease-out]">🚀</div>
        <h2 className="text-4xl font-extrabold text-[#eaffc4] mb-2 tracking-tight">BINGO!</h2>
        <p className="text-[#bdfcc8] mb-5 text-sm font-medium">Line completed. Bridge built. Phishing chain disrupted.</p>

        <button
          onClick={onDismiss}
          className="w-full rounded-xl bg-gradient-to-r from-[#00ff9f] to-[#05c46b] text-black font-bold py-3 shadow-[0_10px_20px_rgba(0,255,159,0.45)] transition-transform duration-150 hover:-translate-y-0.5"
        >
          Continue Ops
        </button>
      </div>
    </div>
  );
}
