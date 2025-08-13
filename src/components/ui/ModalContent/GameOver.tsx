import { useContext } from "react";
import { GameContext } from "../../../contexts/GameContext";
import { parseNumber } from "../../../utils/parseNumber";
import { motion } from "framer-motion";

export default function GameOver() {
    const { rewardCount } = useContext(GameContext);

    return (
        <>
            <div className='mb-11'>
                <h2 className="text-2xl text-white font-bold text-shadow-[0_1px_9px_#fff]">Game over!</h2>
                <p className="text-[14px] text-white/80">You've reached<br />the end of this run...</p>
            </div>
            <div className="flex items-center justify-center mb-4">
                <img
                    className="absolute -z-10 opacity-30 w-[400px] h-[400px]"
                    src="light.png" alt="Light"
                />
                <div
                    className="absolute size-46 bg-white -z-20 blur-[100px] rounded-full"
                ></div>
                <img
                    className="size-24"
                    src="stop.png"
                    alt="Stop"
                />
            </div>
            <div className='grid mb-11'>
                <img
                    src="cash.png"
                    alt="Cash.png"
                    className="size-12"
                />
                <span
                    className="font-bold"
                >
                    {parseNumber(rewardCount)}
                </span>
            </div>
            <p className="text-[14px] text-white/80 mb-6">...claim and return to the main board</p>
            <motion.a
                className="rounded-lg w-full text-lg font-extrabold bg-linear-to-b max-w-[194px]
                            from-[#6DBF1D] to-[#498013] text-white py-3 border-t-1 border-white/50
                            text-shadow-[0_1px_1px_rgba(0,0,0,0.2)]"
                href='.'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
            >
                <span>Claim</span>
            </motion.a>
        </>
    )
}
