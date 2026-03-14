import { useBingoGame } from './hooks/useBingoGame';
import { StartScreen } from './components/StartScreen';
import { GameScreen } from './components/GameScreen';
import { BingoModal } from './components/BingoModal';
import { ScavengerHunt } from './components/ScavengerHunt';

function App() {
  const {
    gameState,
    board,
    winningSquareIds,
    showBingoModal,
    startGame,
    handleSquareClick,
    resetGame,
    dismissModal,
    theme,
    setTheme,
    mode,
    setGameMode,
  } = useBingoGame();

  if (gameState === 'start') {
    return (
      <StartScreen
        onStart={startGame}
        theme={theme}
        setTheme={setTheme}
        mode={mode}
        setGameMode={setGameMode}
      />
    );
  }

  return (
    <>
      {mode === 'scavenger' ? (
        <ScavengerHunt
          cards={board}
          onItemToggle={handleSquareClick}
          onReset={resetGame}
          hasBingo={gameState === 'bingo'}
          onDismiss={dismissModal}
        />
      ) : (
        <GameScreen
          board={board}
          winningSquareIds={winningSquareIds}
          hasBingo={gameState === 'bingo'}
          onSquareClick={handleSquareClick}
          onReset={resetGame}
        />
      )}
      {showBingoModal && <BingoModal onDismiss={dismissModal} />}
    </>
  );
}

export default App;
