import { useState } from "react";
import { GameContext } from "../contexts/GameContext";

export default function GameProvider({ children }: { children: React.ReactNode }) {
    const [rewardCount, setRewardCount] = useState<number>(0);
    const [isWinGame, setIsWinGame] = useState<boolean>(false);
    const [isGameOver, setIsGameOver] = useState<boolean>(false);
    const [isDangerAhead, setIsDangerAhead] = useState<boolean>(false);
    const [tips, setTips] = useState({
        cash: {
            amount: 5,
            opened: 0
        },
        x2: {
            amount: 1,
            opened: 0
        },
        zero: {
            amount: 1,
            opened: 0
        },
        bomb: {
            amount: 1,
            opened: 0
        },
        stop: {
            amount: 1,
            opened: 0
        }
    });
    const [isOpenOne, setIsOpenOne] = useState<boolean>(false);

    return (
        <GameContext.Provider value={
            {
                isOpenOne,
                setIsOpenOne,
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
