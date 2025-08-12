type GameItemProps = {
    handleFlip: (e: React.MouseEvent) => void;
    children: React.ReactElement;
    flippedCard: boolean;
}

export default function GameItem({ handleFlip, children, flippedCard }: GameItemProps) {
    return (
        <div
            className="aspect-square"
            style={{ perspective: "1000px" }}
            onClick={handleFlip}
        >
            <div
                className={`relative w-full h-full rounded-xl shadow-[0_4px_8px_rgba(0,0,0,0.1)] cursor-pointer border-t border-white/20 transition-transform duration-700 ${flippedCard ? "rotate-y-180" : ""}`}
                style={{ transformStyle: "preserve-3d" }}
            >
                <div
                    className="absolute w-full h-full flex items-center justify-center bg-gradient-to-b from-white/10 to-white/5 rounded-xl text-white text-[40px] font-extrabold"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    $
                </div>
                <div
                    className="absolute overflow-hidden w-full h-full flex items-center justify-center bg-gradient-to-b from-white/10 to-white/5 rounded-xl text-white font-extrabold rotate-y-180"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
