import { AnimatePresence, motion } from 'framer-motion';
import React from 'react'
import { getCounterPos } from '../../utils/getCounterPosition';

type FlyingCashProps = {
    flyingCash: { id: number; startX: number; startY: number }[];
    counterRef: React.RefObject<HTMLImageElement | null>;
    setFlyingCash: React.Dispatch<React.SetStateAction<{ id: number; startX: number; startY: number }[]>>;
}

export default function FlyingCash({ flyingCash, counterRef, setFlyingCash }: FlyingCashProps) {
    return (
        <AnimatePresence>
            {flyingCash.map(({ id, startX, startY }) => {
                const { x: endX, y: endY } = getCounterPos(counterRef);

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
    )
}
