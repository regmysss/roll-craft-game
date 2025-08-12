import { useState } from "react";
import { GameContext } from "../contexts/GameContext";

export default function GameProvider({ children }: { children: React.ReactNode }) {
    const [rewardCount, setRewardCount] = useState<number>(0);
    const [isWinGame, setIsWinGame] = useState<boolean>(false);
    const [isGameOver, setIsGameOver] = useState<boolean>(false);
    const [isDangerAhead, setIsDangerAhead] = useState<boolean>(false);
    const [tips, setTips] = useState({
        cash: 5,
        x2: 1,
        zero: 1,
        bomb: 1,
        stop: 1
    });

    return (
        <GameContext.Provider value={
            {
                tips,
                setTips,
                rewardCount,
                setRewardCount,
                isWinGame,
                setIsWinGame,
                isGameOver,
                setIsGameOver,
                isDangerAhead,
                setIsDangerAhead
            }
        }>
            {children}
        </GameContext.Provider>
    )
}
