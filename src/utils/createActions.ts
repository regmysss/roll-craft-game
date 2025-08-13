import type { ActionParams, GameItemType } from "../types/types";
import { delay } from "./delay";

const DELAY_DEFAULT = 500;
const DELAY_GAME_OVER = 1000;

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
        updateTips("cash");
        delay(() => {
            animateCash(startX, startY);
            setRewardCount(prev => prev + (item.amount ?? 0));
        }, DELAY_DEFAULT);
    },

    x2: () => {
        updateTips("x2");
        delay(() => {
            setGameItems(prev =>
                prev.map(item =>
                    item.type === "cash"
                        ? { ...item, amount: (item.amount ?? 0) * 2 }
                        : item
                )
            );
            setRewardCount(prev => prev * 2);
        }, DELAY_DEFAULT);
    },

    zero: () => {
        updateTips("zero");
        delay(() => {
            setRewardCount(0)
        }, DELAY_DEFAULT);
    },

    bomb: () => {
        flipAll();
        updateTips("bomb");
        delay(() => setExploded(true), DELAY_DEFAULT);
        delay(() => setIsDangerAhead(true), DELAY_GAME_OVER);
    },

    stop: () => {
        flipAll();
        updateTips("stop");
        delay(() => setIsGameOver(true), DELAY_GAME_OVER);
    }
});