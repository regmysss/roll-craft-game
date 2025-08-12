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
                className={`relative w-full h-full rounded-xl shadow-[0_4px_8px_rgba(0,0,0,0.1)] cursor-pointer transform-3d
                transition-transform duration-500 ${flippedCard ? "rotate-y-180" : ""}`}
            >
                <div
                    className="absolute w-full h-full flex items-center justify-center bg-gradient-to-b from-white/10 to-white/5
                    border-t border-white/20 hover:border-white/70
                    transition-colors duration-300
                    backface-hidden backdrop-blur-lg
                    rounded-xl text-white text-[40px] font-extrabold"
                >
                    $
                </div>
                <div
                    className="absolute overflow-hidden w-full h-full flex items-center justify-center
                    border-t border-white/20 hover:border-white/70 transition-colors duration-300
                    backface-hidden backdrop-blur-lg
                    bg-gradient-to-b from-white/10 to-white/5 rounded-xl text-white font-extrabold rotate-y-180"
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
