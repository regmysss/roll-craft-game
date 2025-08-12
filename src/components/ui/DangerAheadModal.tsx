import { motion } from 'framer-motion';
import { parseNumber } from '../../utils/parseNumber';
import { GameContext } from '../../contexts/GameContext';
import { useContext } from 'react';

export default function DangerAheadModal() {
    const { rewardCount } = useContext(GameContext);

    return (
        <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <img
                src="logo.png"
                alt="Logo"
                className="absolute top-5 left-1/2 -translate-x-1/2"
            />
            <motion.div
                className="flex flex-col items-center justify-center text-center px-5 py-20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
                <div className='mb-11'>
                    <h2 className="text-2xl text-[#FFE6E6] font-bold text-shadow-[0_1px_9px_#FE2C55]">Danger ahead!</h2>
                    <p className="text-[14px] text-white/80">You’re on a Bomb Square! You hit a bomb and lose all rewards from this field...</p>
                </div>
                <div className="flex items-center justify-center mb-4">
                    <img
                        className="absolute object-center -z-10 opacity-30"
                        src="light.png" alt="Light"
                    />
                    <div
                        className="absolute size-46 bg-red-500 -z-20 blur-[100px] rounded-full"
                    ></div>
                    <img
                        className="size-24"
                        src="bomb.png"
                        alt="Bomb"
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
                <p className="text-[14px] text-white/80 mb-6">...or defuse it and save your run!</p>
                <div className="flex items-center gap-2 w-full">
                    <a
                        className="flex-1 flex items-center justify-center gap-1 bg-linear-to-b 
                        from-[#FF5858] to-[#993535] rounded-lg h-12"
                        href='.'
                    >
                        <img className="size-6" src="bomb.png" alt="Bomb" />
                        <span
                            className="text-lg font-extrabold text-white/80 text-shadow-[0_0_1px_rgba(0,0,0,0.2)]"
                        >

                            Take a hit
                        </span>
                    </a>
                    <button
                        className="flex-1 flex items-center justify-center gap- bg-linear-to-b from-[#AD69FF] to-[#6723CD] rounded-lg h-12"
                    >
                        <span
                            className="text-lg font-extrabold text-white/80 text-shadow-[0_0_1px_rgba(0,0,0,0.2)]"
                        >
                            Defuse for 49
                        </span>
                    </button>
                </div>
            </motion.div>
        </motion.div>
    )
}
