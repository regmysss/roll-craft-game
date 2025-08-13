import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type GameItemProps = {
    type: string;
    handleFlip: (e: React.MouseEvent) => void;
    children: React.ReactElement;
    flippedCard: boolean;
    exploded: boolean;
}

function getNeonColor(type: string) {
    switch (type) {
        case "cash": return "#82E024";
        case "x2": return "#1652ca";
        case "zero": return "#FFD600";
        case "bomb": return "#E13030";
        case "stop": return "#fff";
        default: return "#fff";
    }
}

const cardFaceClasses = "absolute w-full h-full flex items-center justify-center bg-gradient-to-b from-white/10 to-white/5  backface-hidden backdrop-blur-lg rounded-xl font-extrabold";

export default function GameItem({ handleFlip, children, flippedCard, exploded, type }: GameItemProps) {
    const [highlighted, setHighlighted] = useState(true);

    useEffect(() => {
        if (flippedCard) {
            const removeTimer = setTimeout(() => setHighlighted(false), 1000);
            return () => {
                clearTimeout(removeTimer);
            };
        }
    }, [flippedCard]);

    const neonColor = getNeonColor(type);

    const randomX = Math.random() * 150 - 75;
    const randomY = Math.random() * 150 - 75;
    const randomRotate = Math.random() * 720 - 360;

    return (
        <motion.div
            className="aspect-square"
            style={{ perspective: "1000px" }}
            onClick={handleFlip}
            animate={exploded ? {
                x: randomX,
                y: randomY,
                rotate: randomRotate,
                opacity: 0,
                scale: 0.5
            } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div
                className={`relative w-full h-full rounded-xl shadow-[0_4px_8px_rgba(0,0,0,0.1)] cursor-pointer transform-3d
                transition-transform duration-500 ${flippedCard ? "rotate-y-180" : ""}`}
            >
                <div
                    className={`${cardFaceClasses} border-t border-white/20 hover:border-white/70 transition-colors duration-300 text-white/40 text-[40px]`}
                >
                    $
                </div>
                <motion.div
                    initial={{ border: `2px solid ${neonColor}`, boxShadow: `0 0 10px ${neonColor}` }}
                    animate={highlighted ? { border: `2px solid ${neonColor}`, boxShadow: `0 0 10px ${neonColor}` }
                        : { border: "none", boxShadow: "none" }}
                    transition={{ duration: 1 }}
                    className={`${cardFaceClasses} overflow-hidden bg-gradient-to-b from-white/10 to-white/5 text-white rotate-y-180`}
                >
                    {children}
                </motion.div>

            </div>
        </motion.div >
    );
}
