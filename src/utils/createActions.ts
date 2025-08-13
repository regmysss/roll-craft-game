import type { ActionParams, GameItemType } from "../types/types";
import { delay } from "./delay";

export const createActions = (
    animateCash: (startX: number, startY: number) => void,
    updateTips: (type: string) => void,
    setRewardCount: (count: number | ((prev: number) => number)) => void,
    setGameItems: (items: (prev: GameItemType[]) => GameItemType[]) => void,
    flipAll: () => void,
    setExploded: (value: boolean) => void,
    setIsDangerAhead: (value: boolean) => void,
    setIsGameOver: (value: boolean) => void
) => ({
    cash: ({ item, startX, startY }: ActionParams) => {
        delay(() => {
            animateCash(startX, startY);
            delay(() => setRewardCount(prev => prev + (item.amount ?? 0)), 500);
            updateTips("cash");
        }, 500);
    },

    x2: (_) => {
        setGameItems(prev =>
            prev.map(item =>
                item.type === "cash"
                    ? { ...item, amount: (item.amount ?? 0) * 2 }
                    : item
            )
        );
        setRewardCount(prev => prev * 2);
        updateTips("x2");
    },

    zero: (_) => {
        setRewardCount(0);
        updateTips("zero");
    },

    bomb: (_) => {
        flipAll();
        updateTips("bomb");
        delay(() => setExploded(true), 500);
        delay(() => setIsDangerAhead(true), 1000);
    },

    stop: (_) => {
        flipAll();
        updateTips("stop");
        delay(() => setIsGameOver(true), 1000);
    }
});