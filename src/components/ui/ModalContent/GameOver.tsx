import { useContext } from "react";
import { GameContext } from "../../../contexts/GameContext";
import { parseNumber } from "../../../utils/parseNumber";
import ModalButton from "./ModalButton";

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
            <ModalButton
                className="from-[#6DBF1D] to-[#498013]"
            >
                <span>Claim</span>
            </ModalButton>
        </>
    )
}
