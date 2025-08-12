import { useContext, useRef } from "react";
import Header from "./components/layouts/Header";
import RewardCounter from "./components/ui/RewardCounter";
import GameGrid from "./components/ui/GameGrid";
import Title from "./components/ui/Title";
import Tips from "./components/ui/Tips";
import ClaimButton from "./components/ui/ClaimButton";
import DangerAheadModal from "./components/ui/DangerAheadModal";
import GameOverModal from "./components/ui/GameOverModal";
import WinGameModal from "./components/ui/WinGameModal";
import { GameContext } from "./contexts/GameContext";

function App() {
  const { isWinGame, isGameOver, isDangerAhead } = useContext(GameContext);
  const counterRef = useRef<HTMLImageElement>(null);

  return (
    <div className="flex flex-col min-h-screen bg-[#181A20] px-10 py-5 text-white">
      <Header />
      <main className="flex-1 flex flex-col justify-around max-w-[500px] w-full mx-auto gap-6">
        <Title />
        <RewardCounter ref={counterRef} />
        <GameGrid />
        <Tips />
        <ClaimButton />
        {isDangerAhead && <DangerAheadModal />}
        {isGameOver && <GameOverModal />}
        {isWinGame && <WinGameModal />}
      </main>
    </div>
  );
}

export default App;