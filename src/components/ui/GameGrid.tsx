import { useContext, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
import { shuffledGameItems } from "../../constants/gameItems";
import GameItem from "./GameItem";
import { GameContext } from "../../contexts/GameContext";
import CashCard from "./GameCards/CashCard";
import XTwoCard from "./GameCards/XTwoCard";
import BombCard from "./GameCards/BombCard";
import ZeroCard from "./GameCards/ZeroCard";
import StopCard from "./GameCards/StopCard";

// type GameGridProps = {
//     counterRef: React.RefObject<HTMLImageElement | null>;
// }

export default function GameGrid() {
    const { setRewardCount, setIsDangerAhead, setIsGameOver, setTips } = useContext(GameContext);
    const [flippedCards, setFlippedCards] = useState<boolean[]>(
        Array(shuffledGameItems.length).fill(false)
    );

    const handleFlip = (index: number) => {
        if (flippedCards[index]) return;

        const newFlipped = [...flippedCards];
        newFlipped[index] = true;
        setFlippedCards(newFlipped);

        const item = shuffledGameItems[index];

        switch (item.type) {
            case "cash":
                setTimeout(() => {
                    setRewardCount(prev => prev + (item.amount ?? 0));
                }, 800);
                setTips(prev => ({
                    ...prev,
                    cash: prev.cash - 1
                }));
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

    return (
        <div className="grid grid-cols-3 gap-2">
            {shuffledGameItems.map((item, index) => (
                <GameItem
                    key={index}
                    handleFlip={() => handleFlip(index)}
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
        </div>
    )
}

{/* <AnimatePresence>
                {flyingCash.map((coin) => {
                    const counterRect = counterRef.current?.getBoundingClientRect();
                    const endX = counterRect ? counterRect.left + counterRect.width / 2 : coin.startX;
                    const endY = counterRect ? counterRect.top + counterRect.height / 2 : coin.startY;

                    return (
                        <motion.img
                            key={coin.id}
                            src="cash.png"
                            alt="cash"
                            className="fixed size-8 pointer-events-none"
                            style={{
                                left: coin.startX,
                                top: coin.startY,
                                translateX: "-50%",
                                translateY: "-50%",
                            }}
                            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                            animate={{
                                x: endX - coin.startX,
                                y: endY - coin.startY,
                                opacity: 0,
                                scale: 0.5
                            }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            onAnimationComplete={() => {
                                setFlyingCash(prev => prev.filter(c => c.id !== coin.id));
                            }}
                        />
                    );
                })}
            </AnimatePresence> */}