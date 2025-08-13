import { shuffleArray } from "../utils/shuffle";

const GAME_ITEMS = [
    {
        type: "cash",
        amount: 100,
        src: "cash.png",
    },
    {
        type: "cash",
        amount: 200,
        src: "cash.png",
    },
    {
        type: "cash",
        amount: 500,
        src: "cash.png",
    },
    {
        type: "cash",
        amount: 1000,
        src: "cash.png",
    },
    {
        type: "cash",
        amount: 10000,
        src: "cash.png",
    },
    {
        type: "bomb",
    },
    {
        type: "x2",
    },
    {
        type: "zero",
    },
    {
        type: "stop",
    }
];

export const shuffledGameItems = shuffleArray(GAME_ITEMS);