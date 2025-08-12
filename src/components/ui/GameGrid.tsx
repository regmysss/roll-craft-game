import { useContext, useState } from "react";
import { shuffledGameItems } from "../../constants/gameItems";
import GameItem from "./GameItem";
import { GameContext } from "../../contexts/GameContext";
import CashCard from "./GameCards/CashCard";
import XTwoCard from "./GameCards/XTwoCard";
import BombCard from "./GameCards/BombCard";
import ZeroCard from "./GameCards/ZeroCard";
import StopCard from "./GameCards/StopCard";
import { AnimatePresence, motion } from "framer-motion";

type GameGridProps = {
    counterRef: React.RefObject<HTMLImageElement | null>;
}

export default function GameGrid({ counterRef }: GameGridProps) {
    const { setRewardCount, setIsDangerAhead, setIsGameOver, setTips } = useContext(GameContext);
    const [flippedCards, setFlippedCards] = useState<boolean[]>(
        Array(shuffledGameItems.length).fill(false)
    );
    const [flyingCash, setFlyingCash] = useState<{ id: number; startX: number; startY: number }[]>([]);

    const animateCash = (startX: number, startY: number) => {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                setFlyingCash((prev) => [...prev, { id: Date.now() + i, startX, startY }]);
            }, i * 100);
        }
    };

    const handleFlip = (index: number, event: React.MouseEvent<Element, MouseEvent>) => {
        if (flippedCards[index]) return;
        const rect = (event.currentTarget as Element).getBoundingClientRect();

        const startX = rect.left + rect.width / 2;
        const startY = rect.top + rect.height / 2;


        const newFlipped = [...flippedCards];
        newFlipped[index] = true;
        setFlippedCards(newFlipped);

        const item = shuffledGameItems[index];

        switch (item.type) {
            case "cash":
                setTimeout(() => {
                    animateCash(startX, startY);
                    setTimeout(() => {
                        setRewardCount(prev => prev + (item.amount ?? 0));
                    }, 500);
                    setTips(prev => ({
                        ...prev,
                        cash: prev.cash - 1
                    }));
                }, 500);
                break;
            case "x2":
                setRewardCount(prev => prev * 2);
                setTips(prev => ({
                    ...prev,
                    x2: prev.x2 - 1
                }));
                break;
            case "zero":
                setRewardCount(0);
                setTips(prev => ({
                    ...prev,
                    zero: prev.zero - 1
                }));
                break;
            case "bomb":
                setFlippedCards(Array(shuffledGameItems.length).fill(true));
                setTips(prev => ({
                    ...prev,
                    bomb: prev.bomb - 1
                }));
                setTimeout(() => {
                    setIsDangerAhead(true);
                }, 1000);
                break;
            case "stop":
                setFlippedCards(Array(shuffledGameItems.length).fill(true));
                setTips(prev => ({
                    ...prev,
                    stop: prev.stop - 1
                }));
                setTimeout(() => {
                    setIsGameOver(true);
                }, 1000);
                break;
            default:
                break;
        }
    };

    const getCounterPos = () => {
        if (!counterRef.current) return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const rect = counterRef.current.getBoundingClientRect();
        return {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
        };
    };

    return (
        <div className="grid grid-cols-3 gap-2">
            {shuffledGameItems.map((item, index) => (
                <GameItem
                    key={index}
                    handleFlip={(e) => handleFlip(index, e)}
                    flippedCard={flippedCards[index]}
                >
                    <>
                        {
                            item.type === "cash" &&
                            <CashCard
                                src={item.src}
                                type={item.type}
                                amount={item.amount || 0}
                            />
                        }
                        {
                            item.type === "x2" &&
                            <XTwoCard
                                src={item.src}
                                type={item.type}
                            />
                        }
                        {
                            item.type === "bomb" && <BombCard
                                src={item.src}
                                type={item.type}
                            />
                        }
                        {
                            item.type === "zero" && <ZeroCard
                                src={item.src}
                                type={item.type}
                            />
                        }
                        {
                            item.type === "stop" && <StopCard
                                src={item.src}
                                type={item.type}
                            />
                        }
                    </>
                </GameItem>
            ))}
            <AnimatePresence>
                {flyingCash.map(({ id, startX, startY }) => {
                    const { x: endX, y: endY } = getCounterPos();

                    return (
                        <motion.img
                            key={id}
                            src="cash.png"
                            initial={{
                                position: "fixed",
                                left: startX,
                                top: startY,
                                opacity: 1,
                            }}
                            animate={{
                                left: endX,
                                top: endY,
                                opacity: 0,
                            }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeIn" }}
                            className="pointer-events-none size-10 z-40"
                            onAnimationComplete={() => {
                                setFlyingCash((prev) => prev.filter((c) => c.id !== id));
                            }}
                        />
                    );
                })}
            </AnimatePresence>
        </div>
    )
}