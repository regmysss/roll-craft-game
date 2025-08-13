import { useContext, useRef } from "react";
import ClaimButton from "../ui/ClaimButton";
import GameGrid from "../ui/GameGrid";
import Modal from "../ui/Modal";
import DangerAhead from "../ui/ModalContent/DangerAhead";
import GameOver from "../ui/ModalContent/GameOver";
import WinGame from "../ui/ModalContent/WinGame";
import RewardCounter from "../ui/RewardCounter";
import Tips from "../ui/Tips";
import Title from "../ui/Title";
import { GameContext } from "../../contexts/GameContext";

export default function MainSection() {
    const { isWinGame, isGameOver, isDangerAhead } = useContext(GameContext);
    const counterRef = useRef<HTMLImageElement>(null);

    return (
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
    )
}
