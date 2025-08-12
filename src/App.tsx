import { useContext, useRef } from "react";
import Header from "./components/layouts/Header";
import RewardCounter from "./components/ui/RewardCounter";
import GameGrid from "./components/ui/GameGrid";
import Title from "./components/ui/Title";
import Tips from "./components/ui/Tips";
import ClaimButton from "./components/ui/ClaimButton";
import { GameContext } from "./contexts/GameContext";
import Modal from "./components/ui/Modal";
import DangerAhead from "./components/ui/ModalContent/DangerAhead";
import GameOver from "./components/ui/ModalContent/GameOver";
import WinGame from "./components/ui/ModalContent/WinGame";
import StarBackground from "./components/ui/StarBackground";

function App() {
  const { isWinGame, isGameOver, isDangerAhead } = useContext(GameContext);
  const counterRef = useRef<HTMLImageElement>(null);

  return (
    <div className="relative flex flex-col min-h-screen bg-[#181A20] px-10 py-5 text-white overflow-hidden">
      <StarBackground />
      <div className="flex flex-col flex-1 z-20">
        <Header />
        <main className="flex flex-col justify-around max-w-[400px] w-full flex-1 mx-auto gap-6">
          <Title />
          <RewardCounter ref={counterRef} />
          <GameGrid counterRef={counterRef} />
          <Tips />
          <ClaimButton />
          {
            isDangerAhead &&
            <Modal>
              <DangerAhead />
            </Modal>
          }
          {
            isGameOver &&
            <Modal>
              <GameOver />
            </Modal>
          }
          {
            isWinGame &&
            <Modal>
              <WinGame />
            </Modal>
          }
        </main>
      </div>
    </div>
  );
}

export default App;