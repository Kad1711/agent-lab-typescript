import { useNavigate } from 'react-router-dom';

interface StartScreenProps {
  onStart: () => void;
  theme: string;
  setTheme: (theme: string) => void;
  mode: 'bingo' | 'scavenger';
  setGameMode: (mode: 'bingo' | 'scavenger') => void;
}

const themes = [
  { value: 'default', label: 'Classic Mix' },
  { value: 'tech-life', label: 'Tech Life Bingo' },
  { value: 'team-bingo', label: 'Team Bingo' },
  { value: 'travel', label: 'Travel Adventure' },
];

export function StartScreen({ onStart, theme, setTheme, mode, setGameMode }: StartScreenProps) {
  const navigate = useNavigate();

  const handleLaunch = () => {
    onStart();
    navigate('/game');
  };

  return (
    <div className="min-h-full flex items-center justify-center p-6 bg-[radial-gradient(circle_at_50%_20%,_rgba(5,196,107,0.25),_transparent_45%),_radial-gradient(circle_at_80%_80%,_rgba(255,198,0,0.14),_transparent_45%)] backdrop-blur-sm">
      <div className="w-full max-w-xl rounded-2xl border border-cyan-600/30 bg-slate-900/60 shadow-[0_0_20px_rgba(0,255,159,0.35)] p-8">
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-black tracking-tight text-[#b0ffe0] drop-shadow-[0_2px_20px_rgba(0,255,159,0.65)]">Soc Ops</h1>
          <p className="mt-2 text-base text-[#8be2b5]">Interactive social bingo for teams and events.</p>
        </div>

        <div className="rounded-xl border border-cyan-500/30 bg-black/35 p-5 mb-6">
          <h2 className="font-semibold text-cyan-200 mb-2 text-lg">Game Mode</h2>
          <div className="grid grid-cols-2 gap-2 mb-3">
            {['bingo', 'scavenger'].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setGameMode(option as 'bingo' | 'scavenger')}
                className={`rounded-lg py-2 text-sm font-semibold transition ${
                  mode === option
                    ? 'bg-cyan-400 text-black ring-2 ring-cyan-200'
                    : 'bg-black/30 text-[#c7ffe1] hover:bg-cyan-500/30'
                }`}
              >
                {option === 'bingo' ? 'Bingo Board' : 'Scavenger Hunt'}
              </button>
            ))}
          </div>
          <p className="text-xs text-[#b1f5db]">Scavenger mode shows a checklist and progress meter.</p>
        </div>

        <div className="rounded-xl border border-cyan-500/30 bg-black/35 p-5 mb-6">
          <h2 className="font-semibold text-cyan-200 mb-2 text-lg">Quiz Theme</h2>
          <div className="grid grid-cols-2 gap-2">
            {themes.map((entry) => (
              <button
                key={entry.value}
                type="button"
                onClick={() => setTheme(entry.value)}
                className={`rounded-lg py-2 text-sm font-semibold transition ${
                  theme === entry.value
                    ? 'bg-cyan-400 text-black ring-2 ring-cyan-200'
                    : 'bg-black/30 text-[#c7ffe1] hover:bg-cyan-500/30'
                }`}
              >
                {entry.label}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-cyan-500/30 bg-black/35 p-5 mb-6">
          <h2 className="font-semibold text-cyan-200 mb-2 text-lg">How to play</h2>
          <ul className="text-left text-[#c8ffe5] text-sm space-y-2 leading-relaxed">
            <li>• Search for people or stories that match each mission question.</li>
            <li>• Tap a square to mark the target and gain momentum.</li>
            <li>• Complete 5 in a row to earn 🎉 BINGO 🎉 and unlock a celebration effect.</li>
          </ul>
        </div>

        <button
          onClick={handleLaunch}
          className="w-full rounded-lg bg-gradient-to-r from-[#00ffa1] to-[#04c97f] py-3 text-lg font-bold text-slate-900 shadow-[0_12px_25px_rgba(0,255,159,0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(0,255,159,0.65)]"
        >
          Launch Social Ops
        </button>
      </div>
    </div>
  );
}
