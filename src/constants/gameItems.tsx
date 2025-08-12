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
        src: "bomb.png",
    },
    {
        type: "x2",
        src: "x2.png",
    },
    {
        type: "zero",
        src: "zero.png",
    },
    {
        type: "stop",
        src: "stop.png",
    }
];

export const shuffledGameItems = shuffleArray(GAME_ITEMS);