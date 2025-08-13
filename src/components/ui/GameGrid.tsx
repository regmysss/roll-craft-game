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

type GameGridProps = {
    counterRef: React.RefObject<HTMLImageElement | null>;
}

export default function GameGrid({ counterRef }: GameGridProps) {
    const { setRewardCount, setIsDangerAhead, setIsGameOver, setTips, isOpenOne, setIsOpenOne } = useContext(GameContext);
    const [flippedCards, setFlippedCards] = useState<boolean[]>(
        Array(shuffledGameItems.length).fill(false)
    );
    const [flyingCash, setFlyingCash] = useState<{ id: number; startX: number; startY: number }[]>([]);
    const [exploded, setExploded] = useState<boolean>(false);

    const animateCash = (startX: number, startY: number) => {
        Array.from({ length: 5 })
            .forEach((_, i) => delay(() => setFlyingCash((prev) => [...prev, { id: Date.now() + i, startX, startY }]), i * 100));
    }


    const handleFlip = (index: number, event: React.MouseEvent<Element, MouseEvent>) => {
        if (flippedCards[index]) return;

        const rect = (event.currentTarget as Element).getBoundingClientRect();

        const startX = rect.left + rect.width / 2;
        const startY = rect.top + rect.height / 2;

        const newFlipped = [...flippedCards];
        newFlipped[index] = true;
        setFlippedCards(newFlipped);

        const item = shuffledGameItems[index];

        if (!isOpenOne) {
            setIsOpenOne(true);
        }

        switch (item.type) {
            case "cash":
                delay(() => {
                    animateCash(startX, startY);
                    delay(() => setRewardCount(prev => prev + (item.amount ?? 0)), 500);
                    setTips(prev => ({
                        ...prev,
                        cash: {
                            amount: prev.cash.amount - 1,
                            opened: prev.cash.opened + 1
                        }
                    }));
                }, 500);
                break;
            case "x2":
                setRewardCount(prev => prev * 2);
                setTips(prev => ({
                    ...prev,
                    x2: {
                        amount: prev.x2.amount - 1,
                        opened: prev.x2.opened + 1
                    }
                }));
                break;
            case "zero":
                setRewardCount(0);
                setTips(prev => ({
                    ...prev,
                    zero: {
                        amount: prev.zero.amount - 1,
                        opened: prev.zero.opened + 1
                    }
                }));
                break;
            case "bomb":
                setFlippedCards(Array(shuffledGameItems.length).fill(true));
                setTips(prev => ({
                    ...prev,
                    bomb: {
                        amount: prev.bomb.amount - 1,
                        opened: prev.bomb.opened + 1
                    }
                }));
                delay(() => setExploded(true), 500)
                delay(() => setIsDangerAhead(true), 1000);
                break;
            case "stop":
                setFlippedCards(Array(shuffledGameItems.length).fill(true));
                setTips(prev => ({
                    ...prev,
                    stop: {
                        amount: prev.stop.amount - 1,
                        opened: prev.stop.opened + 1
                    }
                }));
                delay(() => setIsGameOver(true), 1000);
                break;
            default:
                break;
        }
    };

    return (
        <div className="grid grid-cols-3 gap-2">
            {shuffledGameItems.map((item, index) => (
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