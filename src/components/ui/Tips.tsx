import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";

export default function Tips() {
    const { tips } = useContext(GameContext);

    return (
        <div className="flex items-center justify-between">
            {
                Object.entries(tips).map(([type, { amount }]) =>
                (
                    <div key={type} className="flex justify-center items-center gap-1">
                        <div className="flex items-center justify-center size-8">
                            <img
                                src={`${type}.png`}
                                alt={type}
                                className="object-contain"
                            />
                        </div>
                        <span className="font-bold">{amount}</span>
                    </div>
                ))
            }
        </div>
    )
}
