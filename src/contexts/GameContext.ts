import { createContext } from "react";

export const GameContext = createContext<{
    rewardCount: number;
    setRewardCount: React.Dispatch<React.SetStateAction<number>>;
    tips: {
        cash: {
            amount: number;
            opened: number;
        };
        x2: {
            amount: number;
            opened: number;
        };
        zero: {
            amount: number;
            opened: number;
        };
        bomb: {
            amount: number;
            opened: number;
        };
        stop: {
            amount: number;
            opened: number;
        };
    };
    updateTips: (type: string) => void;
    isOpenOne: boolean;
    setIsOpenOne: React.Dispatch<React.SetStateAction<boolean>>;
    isWinGame: boolean;
    setIsWinGame: React.Dispatch<React.SetStateAction<boolean>>;
    isGameOver: boolean;
    setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
    isDangerAhead: boolean;
    setIsDangerAhead: React.Dispatch<React.SetStateAction<boolean>>;
}>({
    tips: {
        cash: { amount: 5, opened: 0 },
        x2: { amount: 2, opened: 0 },
        zero: { amount: 1, opened: 0 },
        bomb: { amount: 1, opened: 0 },
        stop: { amount: 1, opened: 0 }
    },
    updateTips: () => { },
    isOpenOne: false,
    setIsOpenOne: () => { },
    rewardCount: 0,
    setRewardCount: () => { },
    isWinGame: false,
    setIsWinGame: () => { },
    isGameOver: false,
    setIsGameOver: () => { },
    isDangerAhead: false,
    setIsDangerAhead: () => { }
});