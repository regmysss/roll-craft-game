import { useContext, useState } from "react";
import { shuffledGameItems } from "../../constants/gameItems";
import GameItem from "./GameItem";
import { GameContext } from "../../contexts/GameContext";
import CashCard from "./GameCards/CashCard";
import XTwoCard from "./GameCards/XTwoCard";
import BombCard from "./GameCards/BombCard";
import ZeroCard from "./GameCards/ZeroCard";
import StopCard from "./GameCards/StopCard";
import { delay } from "../../utils/delay";
import FlyingCash from "./FlyingCash";
import type { GameItemType } from "../../types/types";
import { createActions } from "../../utils/createActions";

type GameGridProps = {
    counterRef: React.RefObject<HTMLImageElement | null>;
}

export default function GameGrid({ counterRef }: GameGridProps) {
    const { setRewardCount, setIsDangerAhead, setIsGameOver, updateTips, isOpenOne, setIsOpenOne } = useContext(GameContext);
    const [flippedCards, setFlippedCards] = useState<boolean[]>(
        Array(shuffledGameItems.length).fill(false)
    );
    const [gameItems, setGameItems] = useState<GameItemType[]>(shuffledGameItems);
    const [flyingCash, setFlyingCash] = useState<{ id: number; startX: number; startY: number }[]>([]);
    const [exploded, setExploded] = useState<boolean>(false);

    const animateCash = (startX: number, startY: number) => {
        Array.from({ length: 5 })
            .forEach((_, i) => delay(() => setFlyingCash((prev) => [...prev, { id: Date.now() + i, startX, startY }]), i * 100));
    }

    const flipAll = () => setFlippedCards(Array(gameItems.length).fill(true));

    const ACTIONS = createActions(
        animateCash,
        updateTips,
        setRewardCount,
        setGameItems,
        flipAll,
        setExploded,
        setIsDangerAhead,
        setIsGameOver
    );

    const handleFlip = (index: number, event: React.MouseEvent) => {
        if (flippedCards[index]) return;

        const rect = (event.currentTarget as Element).getBoundingClientRect();
        const startX = rect.left + rect.width / 2;
        const startY = rect.top + rect.height / 2;

        const newFlipped = [...flippedCards];
        newFlipped[index] = true;
        setFlippedCards(newFlipped);

        const item = gameItems[index];
        if (!isOpenOne) setIsOpenOne(true);

        ACTIONS[item.type as keyof typeof ACTIONS]?.({ item, startX, startY });
    };

    return (
        <div className="grid grid-cols-3 gap-2">
            {gameItems.map((item, index) => (
                <GameItem
                    type={item.type}
                    key={index}
                    handleFlip={(e) => handleFlip(index, e)}
                    flippedCard={flippedCards[index]}
                    exploded={exploded}
                >
                    <>
                        {
                            item.type === "cash" &&
                            <CashCard
                                amount={item.amount || 0}
                            />
                        }
                        {
                            item.type === "x2" &&
                            <XTwoCard />
                        }
                        {
                            item.type === "bomb" && <BombCard />
                        }
                        {
                            item.type === "zero" && <ZeroCard />
                        }
                        {
                            item.type === "stop" && <StopCard />
                        }
                    </>
                </GameItem>
            ))}
            <FlyingCash
                flyingCash={flyingCash}
                counterRef={counterRef}
                setFlyingCash={setFlyingCash}
            />
        </div>
    )
}