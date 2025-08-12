import { useContext } from "react";
import { tipsItems } from "../../constants/tipsItems";
import { GameContext } from "../../contexts/GameContext";

export default function Tips() {
    const { tips } = useContext(GameContext);

    return (
        <div className="flex items-center justify-between">
            {tipsItems.map((item) => (
                <div key={item.type} className="flex justify-center items-center gap-1">
                    <div className="flex items-center justify-center size-8">
                        <img src={item.src} alt={item.type} />
                    </div>
                    <span className="font-bold">{tips[item.type as keyof typeof tips]}</span>
                </div>
            ))}
        </div>
    )
}
