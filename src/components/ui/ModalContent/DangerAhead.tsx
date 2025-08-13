import { useContext } from "react";
import { GameContext } from "../../../contexts/GameContext";
import { parseNumber } from "../../../utils/parseNumber";
import ModalButton from "./ModalButton";

export default function DangerAhead() {
    const { rewardCount } = useContext(GameContext);

    return (
        <>
            <div className='mb-11'>
                <h2 className="text-2xl text-[#FFE6E6] font-bold text-shadow-[0_1px_9px_#FE2C55]">Danger ahead!</h2>
                <p className="text-[14px] text-white/80">You’re on a Bomb Square! You hit a bomb and lose all rewards from this field...</p>
            </div>
            <div className="flex items-center justify-center mb-4">
                <img
                    className="absolute -z-10 opacity-30 w-[400px] h-[400px]"
                    src="light.png" alt="Light"
                />
                <div
                    className="absolute w-[220px] h-[120px] bg-[#E13030] -z-20 blur-[100px] rounded-full"
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
                <ModalButton
                    className="flex-1 gap-1 from-[#FF5858] to-[#993535] text-lg font-extrabold text-shadow-[0_0_1px_rgba(0,0,0,0.2)]"
                >
                    <img className="size-6" src="bomb.png" alt="Bomb" />
                    <span>

                        Take a hit
                    </span>
                </ModalButton>
                <ModalButton
                    className="flex-1 gap-1 from-[#AD69FF] to-[#6723CD] text-lg font-extrabold text-shadow-[0_0_1px_rgba(0,0,0,0.2)]"
                >
                    <span>
                        Defuse for
                    </span>
                    <img src="game-coin.png" alt="Game coin" className="size-6" />
                    <span>49</span>
                </ModalButton>
            </div>
        </>
    )
}
