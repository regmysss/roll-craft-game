import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import CounterUp from "./CounterUp";

type RewardCounterProps = {
    ref: React.RefObject<HTMLImageElement | null>;
}

export default function RewardCounter({ ref }: RewardCounterProps) {
    const { rewardCount } = useContext(GameContext);

    return (
        <div className="flex items-center justify-center gap-1">
            <img
                className="size-10"
                src="cash.png"
                alt="Cash"
                ref={ref}
            />
            <CounterUp
                count={rewardCount}
                className="text-[32px] font-extrabold"
            />
        </div>
    )
}
