import { useContext } from "react";
import { GameContext } from "../../../contexts/GameContext";
import { parseNumber } from "../../../utils/parseNumber";

export default function WinGame() {
    const { rewardCount, tips } = useContext(GameContext);

    return (
        <>
            <h2 className="text-2xl text-green-50 font-bold text-shadow-[0_1px_9px_#7bf1a8] mb-6">Results!</h2>
            <div className="flex items-center justify-center mb-4">
                <img
                    className="absolute -z-10 opacity-30 w-[400px] h-[400px]"
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
                className="font-bold text-3xl mb-6"
            >
                {parseNumber(rewardCount)}
            </p>
            <div className="flex flex-col items-center gap-3 bg-black/50 p-3 rounded-lg mb-6 w-full border border-white/40">
                <p className="font-bold text-white/80">You open</p>
                {
                    <div className="flex items-center justify-center gap-2">
                        {
                            Object.entries(tips).map(([type, { opened }]) => {
                                if (opened != 0)
                                    return (
                                        <div className="flex justify-center items-center gap-1" key={type}>
                                            <img src={`${type}.png`} alt={type} className="size-8 object-contain" />
                                            <span className="font-bold">{opened}</span>
                                        </div>
                                    );
                            })
                        }
                    </div>
                }
            </div>
            <p className="text-[14px] text-white/80 mb-6">...claim and return to the main board</p>
            <a
                className="rounded-lg w-full text-lg font-extrabold bg-linear-to-b max-w-[194px]
                        from-[#6DBF1D] to-[#498013] text-white py-3 border-t-1 border-white/50
                        text-shadow-[0_1px_1px_rgba(0,0,0,0.2)]"
                href='.'
            >
                <span>Claim</span>
            </a>
        </>
    )
}
