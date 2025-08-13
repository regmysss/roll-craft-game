import { animate, useMotionValue, useTransform, motion } from "framer-motion";
import { parseNumber } from "../../utils/parseNumber";
import { useEffect } from "react";

type CounterUpProps = {
    count: number;
    className: string;
};

export default function CounterUp({ count, className }: CounterUpProps) {
    const motionCount = useMotionValue(count);
    const roundedCount = useTransform(motionCount, (latest) => parseNumber(Math.floor(latest)));

    useEffect(() => {
        const controls = animate(motionCount, count, { duration: 0.5 });
        return controls.stop;
    }, [count, motionCount]);

    return (
        <motion.span
            className={className}
        >
            {roundedCount}
        </motion.span>
    )
}
