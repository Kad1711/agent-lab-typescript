import { Routes, Route, Navigate } from 'react-router-dom';
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

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <StartScreen
              onStart={startGame}
              theme={theme}
              setTheme={setTheme}
              mode={mode}
              setGameMode={setGameMode}
            />
          }
        />
        <Route
          path="/game"
          element={
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
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
