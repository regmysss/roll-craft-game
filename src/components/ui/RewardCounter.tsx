import { animate, useMotionValue, useTransform, motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { parseNumber } from "../../utils/parseNumber";
import { GameContext } from "../../contexts/GameContext";

type RewardCounterProps = {
    ref: React.RefObject<HTMLImageElement | null>;
}

export default function RewardCounter({ ref }: RewardCounterProps) {
    const { rewardCount } = useContext(GameContext);
    const count = useMotionValue(rewardCount);
    const rounded = useTransform(count, (latest) => parseNumber(Math.floor(latest)));

    useEffect(() => {
        const controls = animate(count, rewardCount, { duration: 0.5 });
        return controls.stop;
    }, [rewardCount, count]);

    return (
        <div className="flex items-center justify-center gap-1">
            <img
                className="size-10"
                src="cash.png"
                alt="Cash"
                ref={ref}
            />
            <motion.span className="text-[32px] font-extrabold">{rounded}</motion.span>
        </div>
    )
}
