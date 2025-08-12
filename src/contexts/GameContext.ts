import { createContext } from "react";

export const GameContext = createContext<{
    rewardCount: number;
    setRewardCount: React.Dispatch<React.SetStateAction<number>>;
    tips: {
        cash: number;
        x2: number;
        zero: number;
        bomb: number;
        stop: number;
    };
    setTips: React.Dispatch<React.SetStateAction<{
        cash: number;
        x2: number;
        zero: number;
        bomb: number;
        stop: number;
    }>>;
    isWinGame: boolean;
    setIsWinGame: React.Dispatch<React.SetStateAction<boolean>>;
    isGameOver: boolean;
    setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
    isDangerAhead: boolean;
    setIsDangerAhead: React.Dispatch<React.SetStateAction<boolean>>;
}>({
    tips: {
        cash: 5,
        x2: 1,
        zero: 1,
        bomb: 1,
        stop: 1
    },
    setTips: () => { },
    rewardCount: 0,
    setRewardCount: () => { },
    isWinGame: false,
    setIsWinGame: () => { },
    isGameOver: false,
    setIsGameOver: () => { },
    isDangerAhead: false,
    setIsDangerAhead: () => { }
});