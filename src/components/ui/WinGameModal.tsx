import { motion } from 'framer-motion';
import { parseNumber } from '../../utils/parseNumber';
import { GameContext } from '../../contexts/GameContext';
import { useContext } from 'react';

export default function WinGameModal() {
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
                    <h2 className="text-2xl text-green-50 font-bold text-shadow-[0_1px_9px_#7bf1a8]">Win!</h2>
                    <p className="text-[14px] text-white/80">Congratulations! You won!</p>
                </div>
                <div className="flex items-center justify-center mb-4">
                    <img
                        className="absolute object-center -z-10 opacity-30"
                        src="light.png" alt="Light"
                    />
                    <div
                        className="absolute size-46 bg-green-300 -z-20 blur-[100px] rounded-full"
                    ></div>
                    <img
                        className="size-24"
                        src="cash.png"
                        alt="Cash"
                    />
                </div>
                <p
                    className="font-bold text-3xl"
                >
                    {parseNumber(rewardCount)}
                </p>
                <p className="text-[14px] text-white/80 mb-6">...claim and return to the main board</p>
                <div className="flex items-center gap-2 w-full">
                    <a
                        className="rounded-lg w-full text-lg font-extrabold bg-linear-to-b
                        from-[#6DBF1D] to-[#498013] text-white py-3 border-t-1 border-white/50
                        text-shadow-[0_1px_1px_rgba(0,0,0,0.2)]"
                        href='.'
                    >
                        <span>Claim</span>
                    </a>
                </div>
            </motion.div>
        </motion.div>
    )
}
